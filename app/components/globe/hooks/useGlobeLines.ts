import { useMemo } from "react";
import * as THREE from "three";
import type { GlobeNode } from "./useGlobeNodes";

export interface GlobeLine {
  start: THREE.Vector3;
  end: THREE.Vector3;
  hasPacket: boolean;
}

export function useGlobeLines(
  nodes: GlobeNode[],
  maxDistance = 1.4,
  packetCount = 8
): GlobeLine[] {
  return useMemo(() => {
    const lines: GlobeLine[] = [];
    let packetAssigned = 0;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].position.distanceTo(nodes[j].position) < maxDistance) {
          lines.push({
            start: nodes[i].position,
            end: nodes[j].position,
            hasPacket: packetAssigned < packetCount
              ? (packetAssigned++, true)
              : false,
          });
        }
      }
    }

    return lines;
  }, [nodes, maxDistance, packetCount]);
}
