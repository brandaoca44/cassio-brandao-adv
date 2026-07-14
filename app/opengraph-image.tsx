import { ImageResponse } from "next/og";

export const alt =
  "Cássio Brandão Advocacia e Consultoria Jurídica";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #ffffff 0%, #f5f3ef 58%, #e7e2d8 100%)",
          color: "#292929",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            border: "2px solid rgba(183, 139, 61, 0.16)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: -60,
            right: -20,
            width: 330,
            height: 330,
            borderRadius: "50%",
            border: "2px solid rgba(183, 139, 61, 0.12)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "64%",
            height: "100%",
            padding: "72px 72px 72px 86px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 34,
              fontSize: 21,
              letterSpacing: 4,
              color: "#9a732f",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 56,
                height: 2,
                marginRight: 18,
                background: "#b78b3d",
              }}
            />

            Advocacia & Consultoria Jurídica
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Georgia",
              fontSize: 72,
              lineHeight: 1.03,
              letterSpacing: -2,
            }}
          >
            <span>Segurança jurídica</span>
            <span>para decisões que</span>
            <span
              style={{
                marginTop: 7,
                color: "#b78b3d",
                fontStyle: "italic",
              }}
            >
              realmente importam.
            </span>
          </div>

          <div
            style={{
              width: 90,
              height: 2,
              marginTop: 38,
              background: "#b78b3d",
            }}
          />

          <div
            style={{
              marginTop: 32,
              fontSize: 25,
              color: "#606060",
            }}
          >
            Cássio Brandão · OAB/BA 85.055
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            width: "36%",
            height: "100%",
          }}
        >
          <img
            src="http://localhost:3000/images/cassio-brandao.jpeg"
            alt=""
            width="432"
            height="630"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(22,22,22,0.42), transparent 48%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              right: 30,
              bottom: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 92,
              height: 92,
              borderRadius: 24,
              border: "2px solid rgba(209,173,106,0.9)",
              background: "rgba(22,22,22,0.74)",
              color: "#d1ad6a",
              fontFamily: "Georgia",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            CB
          </div>
        </div>
      </div>
    ),
    size,
  );
}