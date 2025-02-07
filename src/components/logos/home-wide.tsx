import { useEffect } from "react";

export function HomeWideLogo() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/logo_init.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        id="animation_container"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.00)",
          width: "1014px",
          height: "262px",
        }}
      >
        <canvas
          id="canvas"
          width="1014"
          height="262"
          style={{
            position: "absolute",
            display: "block",
            backgroundColor: "rgba(255, 255, 255, 0.00)",
          }}
        ></canvas>
        <div
          id="dom_overlay_container"
          style={{
            pointerEvents: "none",
            overflow: "hidden",
            width: "1014px",
            height: "262px",
            position: "absolute",
            left: "0px",
            top: "0px",
            display: "block",
          }}
        ></div>
      </div>
    </>
  );
}
