import ColorBends from "../sourceComponents/ColorBends";
export default function LevelSelectBackground() {
  return (
    <div className="background-container">
      <ColorBends
        colors={["#0004ff",]}
        rotation={0}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.1}
        transparent
        autoRotate={0}
      />
    </div>
  );
}