import { Parallax } from "react-parallax";
import spaceBackground from "./assets/Space.jpg"; // Ensure this path is correct

const ParallaxSection = () => {
    return(
        <Parallax bgImage={spaceBackground} strength={500}>
            <div 
            style={{
            height: "500px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            color: "white"}}
            >
                <h1>Explore the Universe</h1>
            </div>
        </Parallax>
    );
};

export default ParallaxSection;