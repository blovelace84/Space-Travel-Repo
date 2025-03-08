import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Spacecrafts from "./pages/Spacecrafts";
import ParallaxSection from "./ParallaxSelection";

function App() {
  return (
   <Router>
    <div style={{ textAlign: "center", color: "white"}}>
      {/* navbar */}
      <nav style={{ padding: "20px", backgroundColor: "black"}}>
        <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none"}}>
          Home
        </Link>
        <Link to="/spacecrafts" style={{ margin: "10px", color: "white", textDecoration: "none"}}>
          Spacecrafts
        </Link>
      </nav>

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<ParallaxSection />} />
        <Route path="/spacecrafts" element={<Spacecrafts />} />
      </Routes>
    </div>
   </Router>
  );
}

export default App
