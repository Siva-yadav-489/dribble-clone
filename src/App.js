import "./App.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Grid from "./components/topmetrics/Grid.js";
import BelowMetrics from "./components/BelowMetrics.js";
import HowItWorks from "./components/HowItWorks.js";
import KeyFeatures from "./components/KeyFeatures.js";
import Usecase from "./components/usecase/Usecase.js";
import RealStories from "./components/RealStories.js";
import Testimonial from "./components/Testimonial.js";
import PricingPlan from "./components/PricingPlan.js";

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
      <RealStories />
      <Testimonial />
      <PricingPlan />
    </div>
  );
}

export default App;
