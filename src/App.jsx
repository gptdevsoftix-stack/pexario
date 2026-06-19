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

const contactMethods = [
  ["Email", "hellow@maaint.co", "mailto:hellow@maaint.co"],
  ["Website", "MAAINT.co", "https://maaint.co"],
  ["Response Time", "Within 1 business day", "#contact"],
];

const legalPages = {
  privacy: {
    title: "Privacy Policy",
    intro:
      'Maa International LLC ("MAA International," "Company," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit https://maaint.co and use our marketing, automation, SMS, advertising, and related services.',
    sections: [
      [
        "1. Introduction",
        'Maa International LLC ("MAA International," "Company," "we," "us," or "our") respects your privacy and is committed to protecting your personal information.\n\nThis Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit https://maaint.co (the "Website") and use our marketing, automation, SMS, advertising, and related services (the "Services").\n\nBy using our Website or Services, you agree to this Privacy Policy.',
      ],
      [
        "2. Information We Collect",
        "A. Information You Provide\n\nWe may collect:\n\n* Full name\n* Email address\n* Phone number\n* Business name\n* Billing information\n* Information submitted through forms\n* SMS opt-in records\n* Customer communications\n\nB. Automatically Collected Information\n\n* IP address\n* Browser type\n* Device information\n* Website activity and usage data\n* Cookies and tracking technologies",
      ],
      [
        "3. How We Use Your Information",
        "We use your information to:\n\n* Provide and deliver our Services\n* Send SMS and email communications (with consent)\n* Respond to inquiries\n* Process transactions\n* Improve our Website and Services\n* Maintain compliance records\n* Prevent fraud or abuse\n* Comply with legal obligations",
      ],
      [
        "4. SMS Communications & Mobile Data Policy",
        "If you provide your phone number and opt in to receive SMS communications:\n\n* You provide express written consent to receive recurring text messages from Maa International LLC.\n* Message frequency may vary.\n* Message and data rates may apply.\n* Consent is not a condition of purchase.\n* You may opt out at any time by replying STOP.\n* For assistance, reply HELP or contact hellow@maaint.co.\n\nMobile Information Sharing Statement\n\nWe do not sell, rent, share, or disclose mobile phone numbers or SMS opt-in data to third parties or affiliates for marketing or promotional purposes.\n\nMobile information is only shared with trusted service providers necessary to deliver SMS services, such as messaging platforms and carriers.",
      ],
      [
        "5. Cookies & Tracking",
        "We use cookies and similar technologies to:\n\n* Analyze website traffic\n* Improve user experience\n* Track marketing performance\n\nYou may disable cookies in your browser settings.",
      ],
      [
        "6. Data Retention",
        "We retain personal data only as long as necessary to:\n\n* Provide services\n* Maintain SMS consent records\n* Comply with legal requirements\n* Resolve disputes",
      ],
      [
        "7. Data Security",
        "We implement industry-standard administrative, technical, and physical safeguards to protect your data.\n\nHowever, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
      ],
      [
        "8. Your Rights (Including California Residents - CCPA)",
        "Depending on your location, you may have the right to:\n\n* Request access to your personal data\n* Request correction or deletion\n* Request disclosure of collected data categories\n* Withdraw consent\n\nWe do not sell personal data.\n\nTo exercise your rights, contact:\n\nEmail: hellow@maaint.co",
      ],
      [
        "9. Children's Privacy",
        "Our Services are intended for individuals 18 years of age or older.\n\nWe do not knowingly collect personal information from individuals under 18 years old.",
      ],
      [
        "10. International Users",
        "Our Services are operated in the United States. If you access the Website from outside the United States, you acknowledge and consent to the transfer, storage, and processing of your information in the United States.",
      ],
      [
        "11. Updates to This Policy",
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised Effective Date.\n\nYour continued use of the Website and Services after changes are posted constitutes your acceptance of the revised Policy.",
      ],
      [
        "12. Contact Information",
        "Maa International LLC\nUnited States\n\nEmail: hellow@maaint.co\nWebsite: https://maaint.co",
      ],
    ],
  },
  terms: {
    title: "Terms of Service",
    intro:
      "By accessing or using our Website or Services, you agree to be bound by these Terms of Service. If you do not agree to these Terms, please do not use our Website or Services.",
    sections: [
      [
        "1. Acceptance of Terms",
        "By accessing or using our Website or Services, you agree to be bound by these Terms of Service.\n\nIf you do not agree to these Terms, please do not use our Website or Services.",
      ],
      [
        "2. Description of Services",
        "Maa International LLC provides digital marketing, advertising, branding, website development, automation, SMS marketing, lead generation, consulting, and related business growth services.\n\nService details, pricing, timelines, and deliverables are outlined in client agreements, proposals, or invoices.",
      ],
      [
        "3. User Responsibilities",
        "You agree to:\n\n* Provide accurate and complete information\n* Use our Services in a lawful manner\n* Comply with TCPA, CTIA, CAN-SPAM, and all applicable federal, state, and local laws\n* Not misuse, interfere with, or disrupt our systems, networks, or Services\n* Maintain the confidentiality of any account credentials provided",
      ],
      [
        "SMS Terms & Conditions",
        "This section governs participation in Maa International LLC's SMS messaging program.",
      ],
      [
        "4. SMS Program Description",
        "Maa International LLC may send marketing and informational text messages, including but not limited to:\n\n* Promotional offers\n* Service announcements\n* Appointment reminders\n* Account notifications\n* Customer support communications\n* Project updates and business-related notifications\n\nMessage frequency may vary based on customer interaction and service requirements.",
      ],
      [
        "5. Opt-In Consent",
        "By submitting your phone number and selecting the consent checkbox on our Website, forms, landing pages, or other communication channels, you expressly agree to receive SMS messages from Maa International LLC.\n\nConsent is not a condition of purchase.\n\nWe maintain records of SMS consent as required by applicable laws and regulations.",
      ],
      [
        "6. Opt-Out Instructions",
        "You may opt out of SMS communications at any time by replying:\n\nSTOP - To unsubscribe\nHELP - For assistance\n\nAfter opting out, you may receive a final confirmation message, and no further SMS messages will be sent unless you provide new consent.",
      ],
      [
        "7. Message & Data Rates",
        "Message and data rates may apply depending on your mobile carrier and service plan.\n\nCustomers are responsible for any charges imposed by their wireless provider.",
      ],
      [
        "8. Carrier Liability Disclaimer",
        "Wireless carriers are not liable for delayed, failed, or undelivered messages.\n\nDelivery is subject to effective transmission by your mobile carrier and network availability.",
      ],
      [
        "9. Age Restriction",
        "You must be at least eighteen (18) years old to use our SMS services or engage our Services independently.",
      ],
      [
        "10. Payment Terms",
        "* Fees and payment schedules are outlined in client agreements, proposals, or invoices.\n* Late payments may result in suspension or termination of Services.\n* Fees are non-refundable unless otherwise specified in writing.\n* Clients remain responsible for all outstanding balances for services rendered.",
      ],
      [
        "11. Intellectual Property",
        "All Website content, branding, designs, graphics, systems, software, methodologies, and materials created by Maa International LLC remain the property of Maa International LLC unless otherwise agreed in writing.\n\nClients retain ownership of their pre-existing trademarks, logos, brand assets, and proprietary materials.",
      ],
      [
        "12. Disclaimer of Warranties",
        'All Services are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.\n\nMaa International LLC does not guarantee specific marketing performance, rankings, lead volume, revenue growth, or return on investment (ROI).',
      ],
      [
        "13. Limitation of Liability",
        "To the fullest extent permitted by law:\n\n* Maa International LLC shall not be liable for any indirect, incidental, consequential, special, or punitive damages.\n* Total liability arising from any claim shall not exceed the total amount paid by the client to Maa International LLC during the twelve (12) months preceding the claim.",
      ],
      [
        "14. Indemnification",
        "You agree to indemnify, defend, and hold harmless Maa International LLC, its officers, employees, contractors, and affiliates from any claims, damages, liabilities, losses, or expenses arising from:\n\n* Your misuse of SMS services\n* Violations of advertising, telemarketing, privacy, or consumer protection laws\n* Unauthorized messaging activities\n* Breach of these Terms",
      ],
      [
        "15. Termination",
        "Maa International LLC reserves the right to suspend or terminate Services immediately if:\n\n* You violate these Terms\n* Required payments become overdue\n* Fraudulent or unlawful activity is suspected\n* Termination is required by law or regulatory authorities",
      ],
      [
        "16. Governing Law",
        "These Terms shall be governed by and interpreted under the laws of the United States and the Commonwealth of Virginia, without regard to conflict of law principles.\n\nAny disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in Alexandria, Virginia.",
      ],
      [
        "17. Updates to Terms",
        "Maa International LLC may modify or update these Terms at any time.\n\nUpdated versions will be posted on this page with a revised effective date. Continued use of the Website or Services after updates constitutes acceptance of the revised Terms.",
      ],
      [
        "18. Contact Information",
        "Maa International LLC\nUnited States\n\nEmail: hellow@maaint.co\nWebsite: www.maaint.co",
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

function ContactPage({ onBack, onSubmit }) {
  return (
    <main className="contact-page">
      <section className="contact-page-hero">
        <div>
          <span className="eyebrow">CONTACT US</span>
          <h1>
            Let's Build Your Next <span>Growth Campaign</span>
          </h1>
          <p>
            Tell us about your goals, current marketing challenges, and the
            services you need. Our team will review your request and respond
            with clear next steps.
          </p>
        </div>
        <div className="contact-info-panel">
          {contactMethods.map(([label, value, href]) => (
            <a key={label} href={href}>
              <span>{label}</span>
              <strong>{value}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-page-body">
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <input name="name" required placeholder="Your name" />
            <input
              name="email"
              required
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="form-row">
            <input name="phone" placeholder="Phone number" />
            <input name="business" placeholder="Business name" />
          </div>
          <select name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <option>Brand Strategy</option>
            <option>Digital Advertising</option>
            <option>Creative Design</option>
            <option>Social Media Marketing</option>
            <option>Website & Landing Page Development</option>
            <option>Marketing Automation</option>
            <option>Full-Service Marketing</option>
          </select>
          <textarea
            name="message"
            required
            placeholder="Tell us about your project"
            rows="6"
          />
          <label className="sms-consent">
            <input type="checkbox" name="marketingSmsConsent" value="Yes" />
            By checking this box, you agree to receive recurring automated
            marketing and promotional text messages from Maa International LLC
            at the phone number provided. Message frequency varies (2-4 messages
            per month). Message and data rates may apply. Reply STOP to opt out.
            Reply HELP for help. Consent is not a condition of purchase.
          </label>
          <label className="sms-consent">
            <input type="checkbox" name="serviceSmsConsent" value="Yes" />
            By checking this box, you agree to receive non-marketing text
            messages from Maa International LLC related to account
            notifications, service updates, and appointment reminders. Message
            frequency varies (up to 2 messages per month). Message and data
            rates may apply. Reply STOP to opt out. Reply HELP for help.
          </label>
          <button className="button" type="submit">
            Send request <ArrowRight size={17} />
          </button>
        </form>

        <aside className="contact-aside">
          <span className="eyebrow dark">What happens next</span>
          <h2>Simple, clear, and fast.</h2>
          <ul>
            <li>
              <Check /> We review your goals and business needs.
            </li>
            <li>
              <Check /> We recommend the best marketing path.
            </li>
            <li>
              <Check /> You receive clear next steps and pricing guidance.
            </li>
          </ul>
          <button
            className="button button-light"
            type="button"
            onClick={onBack}
          >
            Back to Home <ArrowRight size={17} />
          </button>
        </aside>
      </section>
    </main>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [legalPage, setLegalPage] = useState(null);
  const [contactPageOpen, setContactPageOpen] = useState(false);

  function openHome() {
    setLegalPage(null);
    setContactPageOpen(false);
    setMenuOpen(false);
    window.requestAnimationFrame(() => {
      window.location.hash = "home";
    });
  }

  function openLegalPage(page) {
    setLegalPage(page);
    setContactPageOpen(false);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openContactPage() {
    setLegalPage(null);
    setContactPageOpen(true);
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
    const phone = formData.get("phone");
    const business = formData.get("business");
    const service = formData.get("service");
    const marketingSmsConsent = formData.get("marketingSmsConsent") || "No";
    const serviceSmsConsent = formData.get("serviceSmsConsent") || "No";
    const message = formData.get("message") || "No project details provided.";
    const subject = encodeURIComponent(
      "New consultation request from MAAINT.co",
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nBusiness: ${business || "Not provided"}\nService: ${service || "Not selected"}\nMarketing SMS Consent: ${marketingSmsConsent}\nService SMS Consent: ${serviceSmsConsent}\n\nProject details:\n${message}`,
    );

    window.location.href = `mailto:hellow@maaint.co?subject=${subject}&body=${body}`;
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
                setContactPageOpen(false);
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
        <button className="quote-button" onClick={openContactPage}>
          Contact Us <ArrowRight size={16} />
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

      {contactPageOpen ? (
        <ContactPage onBack={openHome} onSubmit={handleConsultationSubmit} />
      ) : legalPage ? (
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
                innovative advertising, branding, and digital marketing
                solutions. Whether you're launching a new brand, scaling an
                existing business, or entering a competitive market, our team
                creates advertising strategies designed to deliver real business
                results.
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
                creativity, market intelligence, and performance marketing to
                help brands thrive in a rapidly evolving digital landscape. We
                believe successful advertising goes beyond visibility. It
                requires strategy, compelling storytelling, audience
                understanding, and continuous optimization. Our team works
                closely with businesses to create campaigns that not only
                capture attention but also inspire action. From startups to
                established enterprises, we help brands build stronger market
                presence and sustainable growth.
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
              <Button onClick={openConsultationForm}>
                Start Your Campaign
              </Button>
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
                help your business attract customers, increase revenue, and
                build long-term market success. Let's create something
                remarkable together.
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
                <a href="mailto:hellow@maaint.co">hellow@maaint.co</a>
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
            <button type="button" onClick={openContactPage}>
              Contact Page
            </button>
            <a href="mailto:hellow@maaint.co">
              <Mail size={16} /> hellow@maaint.co
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
              <input name="phone" placeholder="Phone number" />
              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows="4"
              />
              <label className="sms-consent">
                <input type="checkbox" name="marketingSmsConsent" value="Yes" />
                By checking this box, you agree to receive recurring automated
                marketing and promotional text messages from Maa International
                LLC at the phone number provided. Message frequency varies (2-4
                messages per month). Message and data rates may apply. Reply
                STOP to opt out. Reply HELP for help. Consent is not a condition
                of purchase.
              </label>
              <label className="sms-consent">
                <input type="checkbox" name="serviceSmsConsent" value="Yes" />
                By checking this box, you agree to receive non-marketing text
                messages from Maa International LLC related to account
                notifications, service updates, and appointment reminders.
                Message frequency varies (up to 2 messages per month). Message
                and data rates may apply. Reply STOP to opt out. Reply HELP for
                help.
              </label>
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
