import "./App.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Grid from "./components/topmetrics/Grid.js";
import BelowMetrics from "./components/BelowMetrics.js";
import HowItWorks from "./components/HowItWorks.js";
import KeyFeatures from "./components/KeyFeatures.js";
import Usecase from "./components/usecase/Usecase.js";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Grid />
      <BelowMetrics />
      <HowItWorks />
      <KeyFeatures />
      <Usecase />
    </div>
  );
}

export default App;
