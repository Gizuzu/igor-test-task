const Nonagon = ({ size = 100, stroke = "black" }) => {
  const center = size / 2;
  const radius = size * 0.4;
  const points = [];

  // Генерация точек для девятиугольника
  for (let i = 0; i < 9; i++) {
    const angle = (i * 2 * Math.PI) / 9 - Math.PI / 2;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    points.push(`${x},${y}`);
  }

  return (
    <svg width={size} height={size}>
      <polygon
        points={points.join(" ")}
        fill="#FFD700" // Желтый цвет
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
};

function GirlsOnly() {
  return (
    <>
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 236 238"
      >
        <title>Vector Smart Object</title>
        <g id="Isolation Mode">
          <path
            id="&lt;Path&gt;"
            fill="inherit"
            d="m232.6 152.6l-35.2 22.9-12.3 40.2-41.7-5.1-35.2 22.9-28.7-30.7-41.7-5.1-2.2-42-28.7-30.7 25.3-33.6-2.2-41.9 40.9-9.5 25.3-33.6 37.4 19.1 41-9.5 16.4 38.7 37.5 19.1-12.3 40.1z"
          />
        </g>
      </svg>
    </>
  );
}

export default GirlsOnly;
