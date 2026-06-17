import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronUp,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Quote,
  Rocket,
  ShieldCheck,
  Target,
  X,
} from 'lucide-react'
import modernAdvertisingStudioLogo from './assets/modern-advertising-studio-logo.png'

const assets = {
  logo: modernAdvertisingStudioLogo,
  footerLogo: modernAdvertisingStudioLogo,
  hero: 'https://pexario.com/wp-content/uploads/2026/04/pexerio-bg-pic.webp',
  start: 'https://pexario.com/wp-content/uploads/2023/01/How-to-Start.webp',
  vision: 'https://pexario.com/wp-content/uploads/2023/01/image-3a.webp',
  growth: 'https://pexario.com/wp-content/uploads/2023/12/growth-step.webp',
}

const nav = [
  ['Home', 'home'],
  ['Services', 'services'],
  ['About Us', 'about'],
  ['Plans', 'plans'],
]

const features = [
  {
    icon: ShieldCheck,
    title: 'Cooperation with you',
    text: 'We take the time to understand your unique needs and goals, working side-by-side to craft solutions that empower your success.',
  },
  {
    icon: Rocket,
    title: 'Growing your business',
    text: 'From streamlined processes to optimized IT, we unlock the potential of your business, driving efficiency and propelling you forward.',
  },
  {
    icon: Clock3,
    title: 'Save your time',
    text: 'We free you from day-to-day IT burdens, allowing you to focus on what matters most - achieving your strategic goals.',
  },
]

const plans = [
  {
    name: 'Monthly Subscription',
    price: '100',
    benefits: ['Free Consultation', 'Content Quality and Business Suggestion', 'Single Payment Solution', '24 Hours Customer Service', 'Email Support'],
  },
  {
    name: 'Quarterly Subscription',
    price: '250',
    featured: true,
    benefits: ['Free Consultation', 'Individual Assistance for Business Suggestion', 'Multiple Payment Solutions', '24 Hours Customer Service', 'Full Support'],
  },
  {
    name: 'Yearly Subscription',
    price: '500',
    benefits: ['Free Consultation', 'Real Time Assistance for Business Suggestion', 'Multiple Payment Solutions', '24 Hours Customer Service', 'Full Support'],
  },
]

const partners = ['microsoft', 'figma', 'PINTEREST', 'sketch', 'slack']

function Button({ children, light = false, href = '#contact' }) {
  return <a className={`button ${light ? 'button-light' : ''}`} href={href}>{children}<ArrowRight size={17} /></a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <a href="#home" className="logo"><img src={assets.logo} alt="Modern Advertising Agency" /></a>
        <nav className={menuOpen ? 'open' : ''}>
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <button className="quote-button" onClick={() => setQuoteOpen(true)}>Get quote <ArrowRight size={16} /></button>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="hero-content">
            <span className="eyebrow">Trusted partner for Fortune 500s and growing businesses alike</span>
            <h1>Achieve Strategic Goals with <span>Expert IT Consulting</span></h1>
            <p>Whether you’re navigating complex legacy systems, seeking to adopt new technologies, or building a secure and scalable IT foundation, we’re your trusted partner every step of the way.</p>
            <Button href="#about">Learn more</Button>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <img src={assets.hero} alt="Pexario technology illustration" />
            <div className="float-card card-one"><Target size={22} /><strong>Smart strategy</strong><span>Built for growth</span></div>
            <div className="float-card card-two"><ShieldCheck size={22} /><strong>Secure systems</strong><span>Always protected</span></div>
          </div>
        </section>

        <section className="section split" id="about">
          <div className="image-stage">
            <div className="dots" />
            <img src={assets.start} alt="How to start" />
          </div>
          <div className="section-copy">
            <span className="eyebrow dark">How to Start</span>
            <h2>You Can Entrust Your <span>Business to Us</span></h2>
            <p>Our data-driven approach and proven methodologies unlock the true potential of your technology, boosting efficiency, productivity, and bottom line results. Witness the power of IT when it's not just maintained, but optimized for growth.</p>
            <ul className="check-list">
              <li><Check /> Get a Custom Quote</li>
              <li><Check /> Explore Our Services</li>
              <li><Check /> Contact Us Today</li>
            </ul>
            <Button href="#contact">About us</Button>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <span className="eyebrow dark">How We Help</span>
            <h2>Technology that moves your <span>business forward</span></h2>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }, index) => (
              <article className="feature-card" key={title}>
                <div className="feature-number">0{index + 1}</div>
                <div className="icon-box"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact">Learn more <ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="impact">
          <div className="impact-image"><img src={assets.vision} alt="Business technology impact" /></div>
          <div className="impact-content">
            <span className="eyebrow">From Vision to Impact:</span>
            <h2>What Our Clients Achieve with Our IT Expertise</h2>
            <p>At Pexario, we don't just offer IT solutions, we partner with businesses to unlock their full potential.</p>
            <div className="stats">
              {[['2012', 'Founding year'], ['2000', 'Happy customers'], ['190', 'Companies work with us'], ['750', 'Projects completed']].map(([number, label]) => (
                <div className="stat" key={label}><strong>{number}<span>+</span></strong><small>{label}</small></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing" id="plans">
          <div className="section-heading">
            <span className="eyebrow dark">Choose Your</span>
            <h2>Pricing <span>Plan</span></h2>
            <p>Flexible expert support designed around the pace and goals of your business.</p>
          </div>
          <div className="pricing-grid">
            {plans.map(plan => (
              <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                {plan.featured && <div className="popular">Most popular</div>}
                <h3>{plan.name}</h3>
                <div className="price"><sup>$</sup>{plan.price}<small>/ plan</small></div>
                <ul>{plan.benefits.map(benefit => <li key={benefit}><Check size={17} />{benefit}</li>)}</ul>
                <Button light={!plan.featured}>Order Now</Button>
              </article>
            ))}
          </div>
        </section>

        <section className="next-step">
          <div className="next-copy">
            <span className="eyebrow">Make your next move</span>
            <h2>Ready to Take the Next Step?</h2>
            <p>Technology holds incredible power to transform businesses, but navigating the ever-evolving IT landscape can be daunting. That’s where we come in. We’re your trusted IT guides, ready to partner with you on your journey to success.</p>
            <Button href="#contact">Learn more</Button>
          </div>
          <img src={assets.growth} alt="Growth step" />
        </section>

        <section className="why section">
          <div className="why-image"><img src={assets.growth} alt="Growing business" /><div className="quote-bubble"><Quote /><strong>Trusted Us for A Long Time!</strong></div></div>
          <div className="section-copy">
            <span className="eyebrow dark">Why Choose Us?</span>
            <h2>A dedicated partner <span>invested in your success</span></h2>
            <p>We believe in building long-term, collaborative relationships with our clients. You don’t just hire us, you gain a dedicated partner invested in your success.</p>
            <div className="mini-feature"><div><Target /></div><span><strong>Collaborative Partnership:</strong> We listen, understand your vision, and work hand-in-hand to craft solutions perfectly aligned with your aspirations.</span></div>
          </div>
        </section>

        <section className="partner-strip">
          {partners.map(name => <span key={name}>{name}</span>)}
        </section>

        <section className="contact-cta" id="contact">
          <div>
            <span className="eyebrow">Talk with our experts</span>
            <h2>Get Answers to All Your Questions You Might Have</h2>
            <p>Stop pondering, start exploring - your answers are closer than you think.</p>
          </div>
          <button className="button" onClick={() => setQuoteOpen(true)}>Get quote <ArrowRight size={17} /></button>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div><img className="footer-logo" src={assets.footerLogo} alt="Modern Advertising Agency" /><p>Transforming complex technology into clear business advantage.</p></div>
          <div><h4>Contact</h4><a href="tel:18009820680"><Phone size={16} /> 1 800 982 0680</a><a href="mailto:care@pexario.com"><Mail size={16} /> care@pexario.com</a></div>
          <div><h4>Quick links</h4>{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
          <div><h4>Follow us</h4><div className="socials"><a href="#"><Facebook /></a><a href="#"><Instagram /></a><a href="#"><Linkedin /></a></div></div>
        </div>
        <div className="footer-bottom">Copyright © 2025, pexario.com All Rights Reserved.</div>
      </footer>

      <a className="scroll-top" href="#home"><ChevronUp /></a>

      {quoteOpen && <div className="modal-backdrop" onClick={() => setQuoteOpen(false)}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setQuoteOpen(false)}><X /></button>
          <span className="eyebrow dark">Let's talk</span>
          <h2>Get Free Consultation!</h2>
          <p>We are ready to answer right now! Sign up for a free consultation.</p>
          <form onSubmit={e => { e.preventDefault(); setQuoteOpen(false) }}>
            <input required placeholder="Your name" />
            <input required type="email" placeholder="Email address" />
            <textarea placeholder="Tell us about your project" rows="4" />
            <button className="button">Send request <ArrowRight size={17} /></button>
          </form>
        </div>
      </div>}
    </>
  )
}

export default App
