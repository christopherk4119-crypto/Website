import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: Moving & Delivery in Calgary`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "70px", background: "linear-gradient(135deg,#0B1220 0%,#131C2E 100%)", color: "white", position: "relative",
        }}
      >
        <div style={{ position: "absolute", right: -60, top: 40, width: 700, height: 4, background: "#D4A63A", transform: "rotate(-32deg)" }} />
        <div style={{ position: "absolute", right: -60, top: 80, width: 700, height: 2, background: "#F2C94C", transform: "rotate(-32deg)" }} />
        <div style={{ fontSize: 30, color: "#F2C94C", letterSpacing: 6 }}>PROFESSIONAL. RELIABLE. ON-TIME.</div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 16, lineHeight: 1.05 }}>DIAMOND DELIVERY SERVICE</div>
        <div style={{ fontSize: 44, marginTop: 20 }}>{"Moving & Delivery in Calgary"}</div>
        <div style={{ display: "flex", marginTop: 40, gap: 24, alignItems: "center" }}>
          <div style={{ background: "#F2C94C", color: "#0B1220", fontSize: 40, fontWeight: 800, padding: "14px 28px", borderRadius: 14 }}>
            {`Call ${site.phone.display}`}
          </div>
          <div style={{ fontSize: 34, color: "#F2C94C" }}>{`Starting at ${site.startingPrice}*`}</div>
        </div>
      </div>
    ),
    size
  );
}
