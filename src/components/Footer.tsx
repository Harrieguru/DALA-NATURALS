import { brand, contact, waLink } from "../data/content";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="motto">
          {brand.motto.map((word, i) => (
            <span key={word}>
              {i > 0 && <span className="dot">·</span>}
              {word}
            </span>
          ))}
        </div>
        <div className="rule">
          <i />
        </div>
        <div className="name">{brand.name.toUpperCase()}</div>
        <a className="footer-wa" href={waLink()} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={18} />
          Chat on WhatsApp · {contact.displayPhone}
        </a>
        <small>
          © {new Date().getFullYear()} {brand.name}. {brand.tagline}
        </small>
      </div>
    </footer>
  );
}
