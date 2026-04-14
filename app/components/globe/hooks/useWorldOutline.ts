import { useState, useEffect } from "react";
import * as THREE from "three";

// ─── Minimal TopoJSON types (no external package needed) ─────────────────────
type ArcRef = number; // negative = reversed arc

interface TopoPolygon {
  type: "Polygon";
  arcs: ArcRef[][];
}
interface TopoMultiPolygon {
  type: "MultiPolygon";
  arcs: ArcRef[][][];
}
interface TopoGeomCollection {
  type: "GeometryCollection";
  geometries: Array<TopoPolygon | TopoMultiPolygon>;
}
type LandObject = TopoPolygon | TopoMultiPolygon | TopoGeomCollection;

interface WorldTopology {
  type: "Topology";
  arcs: [number, number][][];
  transform?: { scale: [number, number]; translate: [number, number] };
  objects: { land: LandObject };
}

// ─── Projection: geographic lon/lat → Three.js cartesian ─────────────────────
function ll2xyz(lat: number, lon: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

// ─── Convert decoded TopoJSON → BufferGeometry (LineSegments) ────────────────
function buildGeometry(data: WorldTopology, r: number): THREE.BufferGeometry {
  const { arcs: rawArcs, transform, objects } = data;
  const sc = transform?.scale ?? ([1, 1] as [number, number]);
  const tr = transform?.translate ?? ([0, 0] as [number, number]);

  // Delta-decode arcs → absolute lon/lat coordinates
  const arcs: [number, number][][] = rawArcs.map((arc) => {
    let cx = 0,
      cy = 0;
    return arc.map(([dx, dy]) => {
      cx += dx;
      cy += dy;
      return [cx * sc[0] + tr[0], cy * sc[1] + tr[1]] as [number, number];
    });
  });

  // Resolve arc reference (negative = reversed)
  const resolve = (ref: ArcRef): [number, number][] =>
    ref < 0 ? [...arcs[~ref]].reverse() : arcs[ref];

  const positions: number[] = [];

  // Emit a single closed ring as line segments
  const emitRing = (refs: ArcRef[]) => {
    const coords: [number, number][] = [];
    for (const ref of refs) {
      const seg = resolve(ref);
      // Each consecutive arc shares its last/first point — deduplicate
      coords.push(...seg.slice(0, seg.length - 1));
    }
    for (let i = 0; i < coords.length; i++) {
      const [lon1, lat1] = coords[i];
      const [lon2, lat2] = coords[(i + 1) % coords.length];
      const v1 = ll2xyz(lat1, lon1, r);
      const v2 = ll2xyz(lat2, lon2, r);
      positions.push(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
    }
  };

  const processPolygon = (g: TopoPolygon) => {
    if (g.arcs[0]) emitRing(g.arcs[0]); // outer ring only (skip holes)
  };
  const processMultiPolygon = (g: TopoMultiPolygon) => {
    for (const poly of g.arcs) if (poly[0]) emitRing(poly[0]);
  };

  const land = objects.land;
  if (land.type === "Polygon") processPolygon(land);
  else if (land.type === "MultiPolygon") processMultiPolygon(land);
  else {
    for (const g of land.geometries) {
      if (g.type === "Polygon") processPolygon(g);
      else processMultiPolygon(g);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(positions), 3)
  );
  return geo;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
// Fetches world-atlas land-110m topology and returns a ready-to-use
// LineSegments geometry projected onto a sphere of the given radius.
// Returns null until the fetch completes (progressive enhancement).
export function useWorldOutline(radius = 2.82): THREE.BufferGeometry | null {
  const [geo, setGeo] = useState<THREE.BufferGeometry | null>(null);

  useEffect(() => {
    let active = true;

    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: WorldTopology) => {
        if (active) setGeo(buildGeometry(data, radius));
      })
      .catch(() => {
        // Globe still renders without continent lines if fetch fails
      });

    return () => {
      active = false;
    };
  }, [radius]);

  return geo;
}
