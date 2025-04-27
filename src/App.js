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
import FreqAskedQues from "./components/FreqAskedQues.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="md:mx-16 max-md:mx-4">
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
      <FreqAskedQues />
      <Footer />
    </div>
  );
}

export default App;
