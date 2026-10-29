import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Nav from "./components/Nav";
import Products from "./components/Products";
import PromiseSection from "./components/Promise";
import ScrollProgress from "./components/ScrollProgress";
import Values from "./components/Values";
import VisionMission from "./components/VisionMission";
import WhatsAppWidget from "./components/WhatsAppWidget";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <VisionMission />
        <Products />
        <Values />
        <PromiseSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
