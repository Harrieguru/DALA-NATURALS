import { img } from "../data/content";

interface ThemedImgProps {
  /** "logo" or "mark" — the dark-mode variant is `${name}-light.png`. */
  name: "logo" | "mark";
  alt: string;
  className?: string;
}

/**
 * Renders both the standard and the light-on-dark artwork; CSS shows the
 * right one for the active theme, so there is no flash when the theme changes.
 */
export function ThemedImg({ name, alt, className = "" }: ThemedImgProps) {
  return (
    <>
      <img className={`only-light ${className}`.trim()} src={img(`${name}.png`)} alt={alt} />
      <img className={`only-dark ${className}`.trim()} src={img(`${name}-light.png`)} alt="" aria-hidden="true" />
    </>
  );
}
