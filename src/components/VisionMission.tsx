import { mission, vision } from "../data/content";
import Reveal from "./Reveal";

export default function VisionMission() {
  return (
    <section id="vision">
      <div className="wrap">
        <div className="vm">
          {[vision, mission].map((item, i) => (
            <Reveal key={item.label} delay={i * 130}>
              <div className="vm-item">
                <div className="eyebrow">{item.label}</div>
                <h2>{item.heading}</h2>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
