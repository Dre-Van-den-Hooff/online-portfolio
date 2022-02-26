import "./css/App.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <Parallax pages={4} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} speed={2.5} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Intro />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: "#48d1cc" }} />

      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <About />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        <Experience />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={2} style={{ backgroundColor: "#48d1cc" }} />

      <ParallaxLayer
        offset={3}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        <Skills/>

      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
