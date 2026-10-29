import { brand, products } from "../data/content";
import Reveal from "./Reveal";

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">{brand.motto.join(" · ")}</div>
            <h2>Our Products</h2>
            <p>Two everyday essentials, made with care.</p>
          </div>
        </Reveal>
        <div className="product-grid">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 140}>
              <article className="product">
                <div className={`photo ${product.accent}`}>
                  <img src={product.image} alt={product.alt} loading="lazy" />
                </div>
                <h3>{product.name}</h3>
                <div className="tag">{product.tag}</div>
                <p>{product.blurb}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
