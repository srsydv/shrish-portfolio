import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05060a",
          padding: "64px",
          color: "#e8edf7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#8b93a7",
          }}
        >
          <span>PROTOCOL ENGINEER</span>
          <span>0xSK</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.9 }}>
            SHRISH
          </div>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.9, color: "#3cefff" }}>
            KUMAR
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#8b93a7", maxWidth: 760 }}>
            Backend & Blockchain Developer — DeFi vaults, RWA rails, production Web3.
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 18, color: "#9b7dff" }}>
          <span>Solidity</span>
          <span>Ethereum</span>
          <span>Node.js</span>
          <span>Hardhat</span>
          <span>Foundry</span>
        </div>
      </div>
    ),
    size,
  );
}
