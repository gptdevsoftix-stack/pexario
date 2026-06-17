import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronUp,
  Clock3,
  Facebook,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  MessagesSquare,
  Menu,
  Palette,
  Quote,
  Rocket,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  TrendingUp,
  X,
} from "lucide-react";
import modernAdvertisingStudioLogo from "./assets/modern-advertising-studio-logo.png";

const assets = {
  logo: modernAdvertisingStudioLogo,
  footerLogo: modernAdvertisingStudioLogo,
  hero: "https://pexario.com/wp-content/uploads/2026/04/pexerio-bg-pic.webp",
  start: "https://pexario.com/wp-content/uploads/2023/01/How-to-Start.webp",
  vision: "https://pexario.com/wp-content/uploads/2023/01/image-3a.webp",
  growth: "https://pexario.com/wp-content/uploads/2023/12/growth-step.webp",
};

const nav = [
  ["Home", "home"],
  ["Services", "services"],
  ["About Us", "about"],
  ["Plans", "plans"],
];

const legalPages = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains how MAAINT.co collects, uses, and protects information shared with us through our website, consultation forms, and client communications.",
    sections: [
      [
        "Information We Collect",
        "We may collect your name, email address, project details, business information, and any message you choose to send through our forms or direct email.",
      ],
      [
        "How We Use Information",
        "We use your information to respond to inquiries, provide consultations, prepare proposals, deliver marketing services, improve our website, and communicate about relevant services.",
      ],
      [
        "Marketing And Analytics",
        "We may review website usage and campaign performance data to improve user experience and service quality. We do not sell personal information.",
      ],
      [
        "Information Sharing",
        "We only share information with trusted service providers when needed to operate our website, respond to requests, or deliver agreed services. We may also disclose information if required by law.",
      ],
      [
        "Data Security",
        "We use reasonable administrative and technical safeguards to protect information, but no online transmission or storage method can be guaranteed to be completely secure.",
      ],
      [
        "Your Choices",
        "You may contact us to request access, correction, or deletion of your personal information where applicable.",
      ],
      [
        "Contact",
        "For privacy questions, contact us at hello@maaint.co.",
      ],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro:
      "These Terms & Conditions outline the rules for using MAAINT.co and engaging with MAAINT for advertising, creative, and marketing services.",
    sections: [
      [
        "Use Of Website",
        "By using this website, you agree to use it lawfully and not attempt to disrupt, copy, misuse, or interfere with its content, forms, or functionality.",
      ],
      [
        "Service Information",
        "Website content, pricing, packages, and service descriptions are provided for general information and may change based on project scope, market requirements, and client needs.",
      ],
      [
        "Proposals And Payments",
        "Final deliverables, timelines, fees, payment terms, and responsibilities are confirmed in a separate proposal, invoice, agreement, or written communication.",
      ],
      [
        "Client Responsibilities",
        "Clients are responsible for providing accurate information, timely feedback, brand assets, approvals, and any permissions needed to complete marketing work.",
      ],
      [
        "Intellectual Property",
        "MAAINT retains ownership of its pre-existing methods, templates, processes, and internal materials. Client deliverable ownership is defined by the approved project agreement.",
      ],
      [
        "No Guaranteed Results",
        "We work to improve marketing performance, but advertising results can vary based on budget, audience, competition, platform changes, offer quality, and market conditions.",
      ],
      [
        "Limitation Of Liability",
        "To the fullest extent permitted by law, MAAINT is not liable for indirect, incidental, or consequential damages related to website use or services.",
      ],
      [
        "Contact",
        "For questions about these terms, contact us at hello@maaint.co.",
      ],
    ],
  },
};

const features = [
  {
    icon: ShieldCheck,
    title: "Brand Strategy & Positioning",
    text: "Build a powerful foundation for long-term success. We develop clear brand identities, messaging frameworks, and positioning strategies that help businesses stand apart from competitors.",
  },
  {
    icon: Rocket,
    title: "Digital Advertising",
    text: "Reach your ideal audience through targeted campaigns across Google, Meta, YouTube, LinkedIn, and emerging advertising platforms.",
  },
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    text: "Transform your social channels into growth engines with engaging content, community management, and strategic advertising campaigns.",
  },
  {
    icon: SlidersHorizontal,
    title: "Creative Design & Visual Branding",
    text: "From logos and brand systems to campaign creatives and promotional assets, we create visuals that strengthen recognition and trust.",
  },
  {
    icon: Palette,
    title: "Content Production",
    text: "Our creative team develops high-impact content including videos, graphics, ad creatives, website content, and marketing materials that engage audiences and drive conversions.",
  },
  {
    icon: MessagesSquare,
    title: "Website & Landing Page Development",
    text: "Modern, responsive, and conversion-focused websites designed to support your advertising campaigns and maximize customer acquisition.",
  },
  {
    icon: Quote,
    title: "Search Engine Marketing",
    text: "Generate qualified traffic through paid search campaigns and strategic optimization that increase visibility and deliver measurable returns.",
  },
  {
    icon: Target,
    title: "Marketing Automation",
    text: "Streamline customer journeys with intelligent automation systems that nurture leads and improve conversion rates.",
  },
];

const plans = [
  {
    name: "Starter Marketing",
    price: "299",
    benefits: [
      "Brand strategy consultation",
      "Social media content planning",
      "Basic campaign creative direction",
      "Monthly performance summary",
      "Email support",
    ],
  },
  {
    name: "Growth Campaign",
    price: "699",
    featured: true,
    benefits: [
      "Digital advertising management",
      "Creative design and ad assets",
      "Social media campaign support",
      "Landing page recommendations",
      "Bi-weekly performance updates",
    ],
  },
  {
    name: "Full-Service Marketing",
    price: "1499",
    benefits: [
      "Brand strategy and positioning",
      "Digital ads, content, and creative design",
      "Social media and growth marketing",
      "Website and landing page support",
      "Priority strategy and reporting",
    ],
  },
];

const impactStats = [
  ["300+", "Projects Delivered"],
  ["150+", "Brands Supported"],
  ["10+", "Industries Served"],
];

const processSteps = [
  [
    "Discover",
    "We analyze your industry, audience, competition, and growth opportunities.",
  ],
  [
    "Strategize",
    "Our team develops a customized roadmap aligned with your business goals.",
  ],
  [
    "Create",
    "We design compelling campaigns, content, and brand assets that capture attention.",
  ],
  [
    "Launch",
    "Campaigns are deployed across carefully selected channels for maximum impact.",
  ],
  [
    "Optimize",
    "Continuous testing and performance monitoring help improve return on investment.",
  ],
  [
    "Scale",
    "Successful campaigns are expanded to unlock new growth opportunities.",
  ],
];

const whyPoints = [
  [
    Lightbulb,
    "Strategic Thinking",
    "Every campaign begins with research, audience insights, and data-backed planning.",
  ],
  [
    Palette,
    "Creative Excellence",
    "We blend innovation and design to create memorable advertising experiences.",
  ],
  [
    MessagesSquare,
    "Transparent Communication",
    "Clear reporting and regular performance updates keep you informed at every stage.",
  ],
  [
    TrendingUp,
    "Performance-Focused Execution",
    "We focus on meaningful business outcomes including leads, sales, customer acquisition, and brand growth.",
  ],
  [
    SlidersHorizontal,
    "Adaptable Solutions",
    "Every business is different. Our strategies are customized to align with your objectives and market conditions.",
  ],
];

const testimonials = [
  [
    "MAAINT transformed our advertising strategy and helped us generate consistent, high-quality leads.",
    "Business Owner",
  ],
  [
    "The team's creativity and professionalism exceeded our expectations from day one.",
    "Marketing Director",
  ],
  [
    "Their strategic approach helped us strengthen our brand and increase customer engagement.",
    "Startup Founder",
  ],
];

function Button({ children, light = false, onClick }) {
  return (
    <button
      className={`button ${light ? "button-light" : ""}`}
      type="button"
      onClick={onClick}
    >
      {children}
      <ArrowRight size={17} />
    </button>
  );
}

function LegalPage({ page, onBack }) {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <span className="eyebrow">MAAINT.co</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <small>{page.updated}</small>
      </section>
      <section className="legal-content">
        {page.sections.map(([title, text]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
        <p className="legal-note">
          This page is provided for general business transparency and should be
          reviewed by qualified legal counsel for your specific jurisdiction and
          operating requirements.
        </p>
        <button className="button" type="button" onClick={onBack}>
          Back to Home <ArrowRight size={17} />
        </button>
      </section>
    </main>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [legalPage, setLegalPage] = useState(null);

  function openHome() {
    setLegalPage(null);
    setMenuOpen(false);
    window.requestAnimationFrame(() => {
      window.location.hash = "home";
    });
  }

  function openLegalPage(page) {
    setLegalPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openConsultationForm() {
    setQuoteOpen(true);
  }

  function handleConsultationSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message") || "No project details provided.";
    const subject = encodeURIComponent("New consultation request from MAAINT.co");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`
    );

    window.location.href = `mailto:hello@maaint.co?subject=${subject}&body=${body}`;
    setQuoteOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <a href="#home" className="logo" onClick={openHome}>
          <img
            src={assets.logo}
            alt="MAAINT Modern Advertising Agency"
            width="499"
            height="117"
          />
        </a>
        <nav className={menuOpen ? "open" : ""}>
          {nav.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => {
                setLegalPage(null);
                setMenuOpen(false);
              }}
            >
              {label}
            </a>
          ))}
          <button type="button" onClick={() => openLegalPage("privacy")}>
            Privacy Policy
          </button>
          <button type="button" onClick={() => openLegalPage("terms")}>
            Terms
          </button>
        </nav>
        <button className="quote-button" onClick={openConsultationForm}>
          Get quote <ArrowRight size={16} />
        </button>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {legalPage ? (
        <LegalPage page={legalPages[legalPage]} onBack={openHome} />
      ) : (
      <main>
        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="hero-content">
            <span className="eyebrow">
              Creative Campaigns. Smarter Strategy. Measurable Growth.
            </span>
            <h1>
              Advertising That <span>Moves Brands Forward</span>
            </h1>
            <p>
              At MAAINT, we help ambitious businesses attract attention, build
              meaningful customer relationships, and accelerate growth through
              innovative advertising, branding, and digital marketing solutions.
              Whether you're launching a new brand, scaling an existing
              business, or entering a competitive market, our team creates
              advertising strategies designed to deliver real business results.
            </p>
            <Button onClick={openConsultationForm}>
              Let's Build Your Next Growth Campaign
            </Button>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <img
              src={assets.hero}
              alt="MAAINT advertising strategy illustration"
              fetchPriority="high"
            />
            <div className="float-card card-one">
              <Target size={22} />
              <strong>Smart strategy</strong>
              <span>Built for growth</span>
            </div>
            <div className="float-card card-two">
              <ShieldCheck size={22} />
              <strong>Secure systems</strong>
              <span>Always protected</span>
            </div>
          </div>
        </section>

        <section className="section split" id="about">
          <div className="image-stage">
            <div className="dots" />
            <img
              src={assets.start}
              alt="MAAINT agency planning"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="section-copy">
            <span className="eyebrow dark">ABOUT US</span>
            <h2>
              The Modern Advertising Agency{" "}
              <span>Built for Today's Brands</span>
            </h2>
            <p>
              MAAINT is a forward-thinking advertising agency that combines
              creativity, market intelligence, and performance marketing to help
              brands thrive in a rapidly evolving digital landscape. We believe
              successful advertising goes beyond visibility. It requires
              strategy, compelling storytelling, audience understanding, and
              continuous optimization. Our team works closely with businesses to
              create campaigns that not only capture attention but also inspire
              action. From startups to established enterprises, we help brands
              build stronger market presence and sustainable growth.
            </p>
            <Button onClick={openConsultationForm}>About us</Button>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <span className="eyebrow dark">OUR SERVICES</span>
            <h2>
              Comprehensive Advertising Solutions
              <span> Under One Roof</span>
            </h2>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }, index) => (
              <article className="feature-card" key={title}>
                <div className="feature-number">0{index + 1}</div>
                <div className="icon-box">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    openConsultationForm();
                  }}
                >
                  Learn more <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="impact">
          <div className="impact-image">
            <img
              src={assets.vision}
              alt="Advertising campaign impact"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="impact-content">
            <span className="eyebrow">
              Helping Brands Create Meaningful Impact
            </span>
            <h2>Millions of Consumer Impressions Generated</h2>

            <div className="stats">
              {impactStats.map(([number, label]) => (
                <div className="stat" key={label}>
                  <strong>
                    {number}
                    <span>+</span>
                  </strong>
                  <small>{label}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing" id="plans">
          <div className="section-heading">
            <span className="eyebrow dark">Choose Your</span>
            <h2>
              Marketing <span>Pricing Plans</span>
            </h2>
            <p>
              Flexible packages for brand strategy, digital advertising,
              creative design, social media, content production, and growth
              marketing.
            </p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={`price-card ${plan.featured ? "featured" : ""}`}
                key={plan.name}
              >
                {plan.featured && <div className="popular">Most popular</div>}
                <h3>{plan.name}</h3>
                <div className="price-label">Starting from</div>
                <div className="price">
                  <sup>$</sup>
                  {plan.price}
                  <small>/ month</small>
                </div>
                <ul>
                  {plan.benefits.map((benefit) => (
                    <li key={benefit}>
                      <Check size={17} />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button light={!plan.featured} onClick={openConsultationForm}>
                  Get Started
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section className="next-step process-section">
          <div className="next-copy">
            <span className="eyebrow">OUR PROCESS</span>
            <h2>
              How We <span>Deliver Results</span>
            </h2>
            <p>
              A focused workflow that turns insight into creative campaigns,
              launches with confidence, and keeps improving after go-live.
            </p>
            <div className="process-grid">
              {processSteps.map(([title, text], index) => (
                <article className="process-step" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <Button onClick={openConsultationForm}>Start Your Campaign</Button>
          </div>
        </section>

        <section className="why section">
          <div className="why-image">
            <img
              src={assets.growth}
              alt="Growth marketing results"
              loading="lazy"
              decoding="async"
            />
            <div className="quote-bubble">
              <Quote />
              <strong>Trusted Us for A Long Time!</strong>
            </div>
          </div>
          <div className="section-copy">
            <span className="eyebrow dark">WHY CHOOSE MAAINT</span>
            <h2>
              Built for Growth. <span>Driven by Results.</span>
            </h2>
            <div className="why-points">
              {whyPoints.map(([Icon, title, text]) => (
                <div className="why-point" key={title}>
                  <div>
                    <Icon />
                  </div>
                  <span>
                    <strong>{title}</strong>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials section">
          <div className="section-heading">
            <span className="eyebrow dark">TESTIMONIALS</span>
            <h2>
              What Our <span>Clients Say</span>
            </h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map(([quote, author]) => (
              <article className="testimonial-card" key={author}>
                <Quote />
                <p>{quote}</p>
                <strong>{author}</strong>
              </article>
            ))}
          </div>
        </section>
        <section className="contact-cta" id="contact">
          <div className="cta-copy">
            <span className="eyebrow">Talk with our experts</span>
            <h2>Ready to Elevate Your Brand?</h2>
            <p>
              Partner with MAAINT and discover how strategic advertising can
              help your business attract customers, increase revenue, and build
              long-term market success. Let's create something remarkable
              together.
            </p>
            <div className="cta-highlights">
              <span>
                <Target />
                Campaign strategy
              </span>
              <span>
                <TrendingUp />
                Growth planning
              </span>
              <span>
                <MessagesSquare />
                Clear next steps
              </span>
            </div>
            <div className="cta-actions">
              <button className="button" onClick={openConsultationForm}>
                Book Your Free Consultation Today
                <ArrowRight size={17} />
              </button>
              <a href="mailto:hello@maaint.co">hello@maaint.co</a>
            </div>
          </div>
          <div className="cta-panel">
            <span>Free Consultation</span>
            <strong>30 min</strong>
            <p>
              Review your brand goals, current marketing gaps, and the fastest
              path to better results.
            </p>
          </div>
        </section>
      </main>
      )}

      <footer>
        <div className="footer-main">
          <div>
            <img
              className="footer-logo"
              src={assets.footerLogo}
              alt="MAAINT Modern Advertising Agency"
              width="499"
              height="117"
              loading="lazy"
              decoding="async"
            />
            <p className="footer-tagline">
              Modern Advertising. Intelligent Strategy. Lasting Impact.
            </p>
            <p className="footer-services">
              Brand Strategy &bull; Digital Advertising &bull; Creative Design
              &bull; Social Media &bull; Content Production &bull; Growth
              Marketing
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:hello@maaint.co">
              <Mail size={16} /> hello@maaint.co
            </a>
            <a href="https://maaint.co">
              <ArrowRight size={16} /> MAAINT.co
            </a>
          </div>
          <div>
            <h4>Legal</h4>
            <button type="button" onClick={() => openLegalPage("privacy")}>
              Privacy Policy
            </button>
            <button type="button" onClick={() => openLegalPage("terms")}>
              Terms & Conditions
            </button>
          </div>
          <div>
            <h4>Follow us</h4>
            <div className="socials">
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          Copyright &copy; Reserved by Maainternational LLC.
        </div>
      </footer>

      <a className="scroll-top" href="#home">
        <ChevronUp />
      </a>

      {quoteOpen && (
        <div className="modal-backdrop" onClick={() => setQuoteOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setQuoteOpen(false)}>
              <X />
            </button>
            <span className="eyebrow dark">Let's talk</span>
            <h2>Get Free Consultation!</h2>
            <p>
              We are ready to answer right now! Sign up for a free consultation.
            </p>
            <form onSubmit={handleConsultationSubmit}>
              <input name="name" required placeholder="Your name" />
              <input
                name="email"
                required
                type="email"
                placeholder="Email address"
              />
              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows="4"
              />
              <button className="button">
                Send request <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
