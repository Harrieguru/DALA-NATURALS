export interface Product {
  name: string;
  tag: string;
  blurb: string;
  image: string;
  alt: string;
  accent: "gold" | "terracotta";
}

export interface Value {
  title: string;
  /** One-line version shown on the page. */
  short: string;
  /** Original wording, kept for reference. */
  text: string;
}

export interface Pillar {
  title: string;
  text: string;
}

export interface NavLink {
  label: string;
  href: string;
}

/** Images live in /public/images and are referenced by file name. */
export const img = (file: string): string =>
  `${import.meta.env.BASE_URL}images/${file}`;

export const brand = {
  name: "DALA NATURALS",
  tagline: "Rooted in Our Land. Made for Generations.",
  subtitle: "Pure Kenyan honey and sunflower oil, from our land to your table.",
  motto: ["Pure", "Natural", "Kenyan"],
};

// remember to replace phone with real number
export const PLACEHOLDER_PHONE = "254700000000";

export const contact = {
  phone: PLACEHOLDER_PHONE,
  displayPhone: "+254 700 000 000",
  title: "Chat with Dala Naturals",
  status: "Typically replies within a day",
  greeting: "Karibu! How can we help you today?",
  defaultMessage: "Hello Dala Naturals, I'd like to know more.",
  quickReplies: [
    {
      label: "Order honey (Asali)",
      message: "Hello Dala Naturals, I'd like to order Asali pure honey.",
    },
    {
      label: "Order sunflower oil (Alizeti)",
      message:
        "Hello Dala Naturals, I'd like to order Alizeti sunflower cooking oil.",
    },
    {
      label: "Bulk or wholesale",
      message: "Hello Dala Naturals, I'm interested in buying in bulk.",
    },
    {
      label: "Something else",
      message: "Hello Dala Naturals, I have a question.",
    },
  ],
};

/** Builds a click-to-chat link that opens WhatsApp with the message ready to send. */
export const waLink = (message: string = contact.defaultMessage): string =>
  `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;

if (import.meta.env.DEV && contact.phone === PLACEHOLDER_PHONE) {
  console.warn(
    "[Dala] WhatsApp number is still the placeholder — edit `contact.phone` in src/data/content.ts.",
  );
}

export const navLinks: NavLink[] = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Products", href: "#products" },
  { label: "Values", href: "#values" },
  { label: "Promise", href: "#promise" },
];

export const manifesto = {
  heading: "Growing from our own soil.",
  lead: "Some of the greatest opportunities for the future are already growing in our own soil.",
  pillars: [
    {
      title: "Rooted",
      text: "Built on Kenyan land and the knowledge of the communities who work it.",
    },
    {
      title: "Made well",
      text: "From honey to sunflower oil, every product should reflect the quality of our land and the care behind it.",
    },
    {
      title: "Built to last",
      text: "Trust earned through consistency, so local produce can compete far beyond our borders.",
    },
  ] as Pillar[],
  closing: "Born of the land. Built with purpose. Growing for generations.",
  /** The complete manifesto, revealed by "Read the full manifesto". */
  full: [
    "We believe that some of the greatest opportunities for the future are already growing in our own soil.",
    "Across Kenya, generations of farmers have cultivated the land, harvested its gifts, and sustained their communities through the products it provides. Yet the potential of our agricultural heritage extends far beyond the farm. It lives in what we choose to build from it.",
    "Dala Naturals exists to honour that potential.",
    "Rooted in Kenyan land and inspired by the knowledge of our communities, we are building a brand that brings together the richness of nature, the integrity of local production, and a commitment to doing things well.",
    "From the golden sweetness of honey to the everyday nourishment of sunflower oil, our products begin with a simple belief: what we produce should reflect the quality of our land and the care of the people behind it.",
    "But our ambition goes beyond what is inside the jar or bottle.",
    "We envision a future where Kenyan agricultural products are recognised for their quality, trusted in households, and competitive in markets far beyond our borders. A future where local production creates greater value, where farmers and communities participate in the opportunities agriculture creates, and where homegrown brands are built to last.",
    "We believe in growing deliberately. In earning trust through consistency. In investing in our roots while embracing better methods, thoughtful design, and the possibilities of modern enterprise.",
    "We are not here simply to sell natural products. We are here to build something enduring: a business that begins with the land, creates value through what it produces, and contributes to a stronger agricultural future for generations to come.",
    "This is Dala Naturals. Born of the land. Built with purpose. Growing for generations.",
  ],
};

export const vision = {
  label: "Our Vision",
  heading: "Where we are going",
  text: "To build a trusted Kenyan agricultural brand that transforms the value of local produce into quality products for households across Kenya and, eventually, international markets.",
};

export const mission = {
  label: "Our Mission",
  heading: "How we get there",
  text: "To produce and deliver quality natural products through responsible sourcing, thoughtful processing, reliable standards, and a commitment to creating lasting value for our customers and the communities connected to our work.",
};

export const products: Product[] = [
  {
    name: "Asali",
    tag: "Pure Honey · 250 g",
    blurb: "The golden sweetness of the land, in a jar.",
    image: img("honey.png"),
    alt: "Asali — Dala Naturals pure honey, 250 g jar",
    accent: "gold",
  },
  {
    name: "Alizeti",
    tag: "Pure Sunflower Cooking Oil · 1 L",
    blurb: "Everyday nourishment for the Kenyan kitchen.",
    image: img("oil.png"),
    alt: "Alizeti — Dala Naturals pure sunflower cooking oil, 1 litre bottle",
    accent: "terracotta",
  },
];

export const values: Value[] = [
  {
    title: "Integrity",
    short: "Trust earned through honesty, consistency and accountability.",
    text: "We believe trust is earned through honesty, consistency, and accountability in everything we do.",
  },
  {
    title: "Quality",
    short: "High standards, from sourcing to the customer experience.",
    text: "We strive to deliver products that meet high standards, from sourcing and processing to packaging and the customer experience.",
  },
  {
    title: "Our Roots",
    short: "Honouring the land, knowledge and communities behind our work.",
    text: "We honour the land, agricultural knowledge, and communities that make our work possible.",
  },
  {
    title: "Enterprise",
    short: "Local resources as the foundation of sustainable business.",
    text: "We believe local resources can become the foundation of ambitious, sustainable businesses that create meaningful economic value.",
  },
  {
    title: "Generational Thinking",
    short: "Deliberate decisions that let people and business grow.",
    text: "We are building for the long term, making deliberate decisions that allow the business and the people connected to it to grow.",
  },
];

export const promise = {
  heading: "Grounded. Intentional. Ambitious.",
  text: "To remain grounded in where we come from, intentional about what we create, and ambitious about what we can build.",
  sign: "Rooted in our land. Made for generations.",
};
