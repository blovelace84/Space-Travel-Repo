import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Spacecrafts = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "black", color: "white", textAlign: "center" }}>
      <h1>Spacecrafts</h1>
      <p>Customize and explore different spaceships!</p>

      {/* 3D Model Viewer */}
      <Canvas style={{ height: "500px" }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* Future: Add 3D spaceship models here */}
      </Canvas>
    </div>
  );
};

export default Spacecrafts;
