import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background:
            "linear-gradient(135deg, #f378a2 0%, #ffa35a 55%, #2b92a2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#111b30",
          fontWeight: 700,
          borderRadius: "20%",
          letterSpacing: "0.08em",
        }}
      >
        AB
      </div>
    ),
    {
      ...size,
    }
  );
}
