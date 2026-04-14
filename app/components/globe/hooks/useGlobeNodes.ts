import { useMemo } from "react";
import * as THREE from "three";

export interface GlobeNode {
  id: number;
  position: THREE.Vector3;
  hasPulse: boolean;
  pulseFrequency: number;
  pulsePhase: number;
}

export function useGlobeNodes(count = 70, radius = 2.8): GlobeNode[] {
  return useMemo(() => {
    // Seeded PRNG for deterministic layout across renders
    let seed = 12345;
    const rand = (): number => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };

    return Array.from({ length: count }, (_, i) => {
      // Spherical → Cartesian (uniform distribution via rejection-free method)
      const phi = Math.acos(2 * rand() - 1);
      const theta = 2 * Math.PI * rand();
      const sinPhi = Math.sin(phi);

      return {
        id: i,
        position: new THREE.Vector3(
          radius * sinPhi * Math.cos(theta),
          radius * sinPhi * Math.sin(theta),
          radius * Math.cos(phi)
        ),
        hasPulse: i < Math.floor(count * 0.2),
        pulseFrequency: 0.5 + rand() * 2,
        pulsePhase: rand() * Math.PI * 2,
      };
    });
  }, [count, radius]);
}
