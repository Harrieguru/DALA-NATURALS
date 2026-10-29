import { values } from "../data/content";
import Reveal from "./Reveal";

export default function Values() {
  return (
    <section id="values">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">Our Values</div>
            <h2>What we stand on</h2>
          </div>
        </Reveal>
        <div className="values-list">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={(i % 3) * 100}>
              <div className="value">
                <div className="num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{value.title}</h3>
                <p>{value.short}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
