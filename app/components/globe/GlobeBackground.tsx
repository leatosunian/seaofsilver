"use client";

import dynamic from "next/dynamic";

// GlobeScene imports Three.js — load only on the client, never SSR
const GlobeScene = dynamic(() => import("./GlobeScene"), { ssr: false });

export function GlobeBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <GlobeScene />
    </div>
  );
}
