import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/Menu";
import Locations from "./components/Locations";
import StorySection from "./components/Story";
import Testimonials from "./components/Testimonials";
import JoinSection from "./components/Franchise & Careers";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-pizza-warm">
      <Navbar />
      <Hero />
      <Locations />
      <MenuSection />
      <StorySection />
      <Testimonials />
      <JoinSection />
      <Footer />
    </div>
  );
}

export default App;