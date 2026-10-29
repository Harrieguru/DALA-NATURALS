import { useEffect, useId, useRef, useState } from "react";
import { contact, waLink } from "../data/content";
import { ThemedImg } from "./ThemedImg";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * Floating "contact us" button. Opens a small chat card with quick replies
 * and a message box; every action opens WhatsApp with the text pre-filled.
 */
export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);
  const [text, setText] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const toggle = () => {
    setOpen((v) => !v);
    setSeen(true);
  };

  const message = text.trim() || contact.defaultMessage;

  return (
    <div className={`wa ${open ? "open" : ""}`} ref={rootRef}>
      <div
        className="wa-panel"
        id={panelId}
        role="dialog"
        aria-label={contact.title}
        aria-hidden={!open}
      >
        <div className="wa-head">
          <ThemedImg name="mark" alt="" className="wa-logo" />
          <div>
            <strong>{contact.title}</strong>
            <span>
              <i aria-hidden="true" />
              {contact.status}
            </span>
          </div>
          <button
            type="button"
            className="wa-close"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="wa-body">
          <p className="wa-bubble">{contact.greeting}</p>

          <div className="wa-chips">
            {contact.quickReplies.map((reply) => (
              <a
                key={reply.label}
                className="wa-chip"
                href={waLink(reply.message)}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
              >
                {reply.label}
              </a>
            ))}
          </div>
        </div>

        <div className="wa-compose">
          <label className="sr-only" htmlFor={`${panelId}-msg`}>
            Your message
          </label>
          <textarea
            id={`${panelId}-msg`}
            ref={inputRef}
            rows={2}
            value={text}
            maxLength={500}
            placeholder="Or type your own message…"
            onChange={(e) => setText(e.target.value)}
            tabIndex={open ? 0 : -1}
          />
          <a
            className="wa-send"
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send on WhatsApp"
            tabIndex={open ? 0 : -1}
          >
            <WhatsAppIcon size={18} />
            Send
          </a>
        </div>
      </div>

      {!seen && (
        <>
          <span className="wa-ring" aria-hidden="true" />
          <span className="wa-ring" aria-hidden="true" />
        </>
      )}

      <button
        type="button"
        className="wa-fab"
        onClick={toggle}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <WhatsAppIcon className="wa-ico wa-ico-chat" size={30} />
        <svg
          className="wa-ico wa-ico-x"
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
        {!seen && <span className="wa-dot" aria-hidden="true" />}
      </button>
    </div>
  );
}
