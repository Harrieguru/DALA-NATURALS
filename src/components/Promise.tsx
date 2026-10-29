import { promise } from "../data/content";
import Reveal from "./Reveal";

export default function PromiseSection() {
  return (
    <section className="promise" id="promise">
      <div className="narrow">
        <Reveal>
          <div className="eyebrow">Our Promise</div>
          <h2>{promise.heading}</h2>
          <p>{promise.text}</p>
        </Reveal>
        <Reveal delay={150}>
          <p className="sign">{promise.sign}</p>
        </Reveal>
      </div>
    </section>
  );
}
