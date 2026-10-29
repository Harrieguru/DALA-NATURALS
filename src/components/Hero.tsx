import { brand } from "../data/content";
import { ThemedImg } from "./ThemedImg";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-logo">
          <ThemedImg name="logo" alt="Dala Naturals logo" />
        </div>
        <h1 className="hero-rise" style={{ animationDelay: "380ms" }}>{brand.tagline}</h1>
        <p className="sub hero-rise" style={{ animationDelay: "520ms" }}>{brand.subtitle}</p>
        <a className="btn hero-rise" style={{ animationDelay: "660ms" }} href="#products">
          Our Products
        </a>
      </div>
    </header>
  );
}
