import { useEffect } from "react";

export function HomeSquareLogo() {
  useEffect(() => {
    const generalScript = document.createElement("script");
    generalScript.src = "/logo_square.js";
    document.body.appendChild(generalScript);

    const script = document.createElement("script");
    script.src = "/logo_square_init.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(generalScript);
    };
  }, []);

  return (
    <>
      <div
        id="animation_container"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.00)",
          width: "572px",
          height: "503px",
        }}
      >
        <canvas
          id="canvas"
          width="572px"
          height="503px"
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
            width: "572px",
            height: "503px",
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
