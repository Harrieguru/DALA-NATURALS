import { useId, useState } from "react";
import { manifesto } from "../data/content";
import Reveal from "./Reveal";

export default function Manifesto() {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <section className="manifesto" id="manifesto">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">Our Manifesto</div>
          <h2>{manifesto.heading}</h2>
          <p className="lead">{manifesto.lead}</p>
        </Reveal>

        <div className="pillars">
          {manifesto.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 110}>
              <div className="pillar">
                <span className="pillar-mark" aria-hidden="true" />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="closing">{manifesto.closing}</p>

          <div className={`full ${expanded ? "open" : ""}`} id={panelId}>
            <div className="full-inner">
              <div className="full-text">
                {manifesto.full.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="link-btn"
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less" : "Read the full manifesto"}
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
