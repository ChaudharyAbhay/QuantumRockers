"use client";

import { useEffect, useRef, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const features = [
  {
    title: "Quantum Speed",
    desc: "Experience next-level processing power with quantum acceleration.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="url(#speed)"/><path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><radialGradient id="speed" cx="0.5" cy="0.5" r="0.7"><stop stopColor="#a78bfa"/><stop offset="1" stopColor="#6366f1"/></radialGradient></defs></svg>
    ),
  },
  {
    title: "AI Integration",
    desc: "Seamlessly integrate AI workloads for smarter computing.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" fill="url(#ai)"/><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><radialGradient id="ai" cx="0.5" cy="0.5" r="0.7"><stop stopColor="#818cf8"/><stop offset="1" stopColor="#a78bfa"/></radialGradient></defs></svg>
    ),
  },
  {
    title: "Energy Efficient",
    desc: "Optimized for ultra-low power consumption and sustainability.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="8" fill="url(#energy)"/><path d="M12 7v5l2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><radialGradient id="energy" cx="0.5" cy="0.5" r="0.7"><stop stopColor="#6ee7b7"/><stop offset="1" stopColor="#818cf8"/></radialGradient></defs></svg>
    ),
  },
];

export default function Home() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 40) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (layer1Ref.current) layer1Ref.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      if (layer2Ref.current) layer2Ref.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      if (layer3Ref.current) layer3Ref.current.style.transform = `translateY(${scrollY * 0.5}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-center bg-black text-white relative overflow-x-hidden">
      {/* Modern Premium Navbar */}
      <div className={`fixed top-0 left-0 w-full z-30 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="mx-auto max-w-6xl flex items-center justify-between h-16 px-4 md:px-8 mt-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          {/* Home Icon Button */}
          <Link href="#" className="flex items-center gap-2 text-white font-semibold text-lg hover:text-purple-400 transition-colors px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M3 12L12 4l9 8" stroke="#a78bfa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 10v10h14V10" stroke="#a78bfa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          {/* Centered Nav Links */}
          <div className="hidden md:flex gap-8">
            <Link href="#features" className="text-white/90 font-medium text-base hover:text-purple-400 transition-colors px-2 py-1 rounded-lg">Features</Link>
            <Link href="#customers" className="text-white/90 font-medium text-base hover:text-purple-400 transition-colors px-2 py-1 rounded-lg">Customers</Link>
            <Link href="#about" className="text-white/90 font-medium text-base hover:text-purple-400 transition-colors px-2 py-1 rounded-lg">About</Link>
            <Link href="#contact" className="text-white/90 font-medium text-base hover:text-purple-400 transition-colors px-2 py-1 rounded-lg">Contact</Link>
          </div>
          {/* Sign Up Button */}
          <Button as={Link} color="primary" href="#signup" variant="shadow" className="font-bold shadow-md shadow-purple-500/20 text-base px-6 py-2 rounded-xl transform transition-transform duration-200 hover:scale-105">
            Sign Up
          </Button>
        </nav>
      </div>
      {/* Hero Section with Parallax (First Page) */}
      <section className="relative flex flex-col items-center justify-center h-screen w-full z-10 overflow-visible">
        {/* Parallax Layer 1: Blurred Gradient */}
        <div
          ref={layer1Ref}
          className="pointer-events-none absolute inset-0 z-0 transition-transform duration-300"
          style={{ willChange: "transform" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-900/80 via-black/90 to-blue-900/80 opacity-90 blur-2xl"></div>
        </div>
        {/* Parallax Layer 2: Image */}
        <div
          ref={layer2Ref}
          className="pointer-events-none absolute inset-0 z-0 transition-transform duration-300"
          style={{ willChange: "transform" }}
        >
          <img
            src="/parallax-bg.jpg"
            alt="Parallax Background"
            className="w-full h-full object-cover opacity-60 select-none pointer-events-none"
            draggable={false}
          />
        </div>
        {/* Parallax Layer 3: SVG Ellipses */}
        <div
          ref={layer3Ref}
          className="pointer-events-none absolute inset-0 z-0 transition-transform duration-300"
          style={{ willChange: "transform" }}
        >
          <svg className="absolute left-1/2 top-1/3 -translate-x-1/2 -z-10 opacity-60 animate-pulse" width="1200" height="500" viewBox="0 0 1200 500" fill="none">
            <ellipse cx="600" cy="250" rx="420" ry="140" fill="url(#paint0_radial)"/>
            <ellipse cx="600" cy="250" rx="320" ry="90" fill="url(#paint1_radial)"/>
            <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(600 250) scale(420 140)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a78bfa"/>
                <stop offset="1" stopColor="#6366f1" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="translate(600 250) scale(320 90)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#818cf8"/>
                <stop offset="1" stopColor="#a78bfa" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
        {/* QPU Hero Content */}
        <div className="relative flex flex-col items-center justify-center h-full w-full z-10">
          <h1
            className="text-[14vw] leading-none font-extrabold text-white select-none neon-glow"
            style={{
              fontFamily: 'var(--font-orbitron), sans-serif',
              letterSpacing: '0.04em',
              position: 'relative',
              cursor: 'pointer',
            }}
          >
          QPU
        </h1>
          <p className="text-2xl md:text-4xl mt-8 text-white/80 font-medium select-none" style={{ fontFamily: 'var(--font-orbitron), sans-serif', letterSpacing: '0.04em' }}>
          The next GEN processors
        </p>
          <div className="mt-16 animate-bounce-slow">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </section>
      {/* Features Section (Second Page) */}
      <section id="features" className="relative w-full z-10 bg-gradient-to-br from-black/90 via-purple-950/80 to-blue-950/90 py-28 flex flex-col items-center overflow-x-hidden">
        <svg className="absolute -top-24 left-1/2 -translate-x-1/2 opacity-30 blur-2xl" width="900" height="200" viewBox="0 0 900 200" fill="none"><ellipse cx="450" cy="100" rx="350" ry="80" fill="url(#paint1_radial)"/><defs><radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="translate(450 100) scale(350 80)" gradientUnits="userSpaceOnUse"><stop stopColor="#818cf8"/><stop offset="1" stopColor="#a78bfa" stopOpacity="0"/></radialGradient></defs></svg>
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-200 mb-14 drop-shadow-glow">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full px-4">
          {features.map((f, i) => (
            <div key={f.title} className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-purple-700/40 hover:border-purple-400 hover:shadow-purple-500/30 transition-all duration-300 flex flex-col items-center group overflow-hidden">
              <div className="mb-6 group-hover:scale-110 transition-transform drop-shadow-glow">{f.icon}</div>
              <h3 className="text-2xl font-bold text-purple-100 mb-2 drop-shadow-glow">{f.title}</h3>
              <p className="text-gray-200 text-center text-lg font-medium mb-2">{f.desc}</p>
              <div className="absolute -inset-1 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-400/20 via-blue-400/10 to-purple-300/20 blur-xl"></div>
            </div>
          ))}
        </div>
      </section>
      {/* Customer Section */}
      <section id="customers" className="relative w-full z-10 bg-gradient-to-br from-black/90 via-purple-950/80 to-blue-950/90 py-24 flex flex-col items-center border-t border-purple-900 overflow-x-hidden">
        <h2 className="text-4xl font-bold text-purple-200 mb-12 drop-shadow-glow">Our Customers</h2>
        <div className="relative w-full max-w-6xl overflow-x-hidden">
          <div className="flex gap-16 md:gap-24 animate-marquee whitespace-nowrap">
            {['Apple', 'AWS', 'Google', 'IBM', 'Intel', 'Meta', 'Microsoft', 'Nvidia', 'Samsung'].map((company, idx) => (
              <div key={company} className="flex flex-col items-center inline-block">
                <span className="text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-purple-100 glow-company-name select-none" style={{fontFamily: 'var(--font-orbitron), sans-serif'}}>
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="relative w-full z-10 bg-gradient-to-br from-black/90 via-blue-950/80 to-purple-950/90 py-28 flex flex-col items-center border-t border-purple-900 overflow-x-hidden">
        <h2 className="text-4xl font-bold text-blue-200 mb-10 drop-shadow-glow">About Us</h2>
        <div className="max-w-3xl w-full bg-white/5 border border-purple-400/20 rounded-2xl shadow-xl p-8 md:p-12 text-center text-lg md:text-2xl text-white/90 backdrop-blur-md mb-12">
          <p>
            <span className="font-bold text-purple-200">Quantum Rockers</span> is pioneering the next generation of quantum processing technology. Our mission is to revolutionize computing with ultra-fast, energy-efficient, and AI-integrated quantum processors. Trusted by industry leaders, we are committed to pushing the boundaries of innovation and making quantum power accessible to all.
          </p>
        </div>
        {/* Before/After Image Comparison Slider */}
        <BeforeAfterSlider />
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="relative w-full z-10 bg-gradient-to-br from-black/90 via-purple-950/80 to-blue-950/90 py-32 flex flex-col items-center border-t border-purple-900 overflow-x-hidden">
        <h2 className="text-5xl font-bold text-purple-200 mb-14 drop-shadow-glow">Testimonials</h2>
        <TestimonialsCurtain />
      </section>
      {/* Contact Section */}
      <section id="contact" className="relative w-full z-10 bg-gradient-to-br from-black/90 via-blue-950/80 to-purple-950/90 py-32 flex flex-col items-center border-t border-purple-900 overflow-x-hidden">
        <h2 className="text-5xl font-bold text-blue-200 mb-14 drop-shadow-glow">Contact Us</h2>
        <div className="relative w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Glassmorphic Card with Info */}
          <div className="relative bg-white/10 border border-purple-400/30 rounded-3xl shadow-2xl p-10 w-full md:w-1/2 text-white/90 text-lg flex flex-col items-start backdrop-blur-md animate-contact-float overflow-hidden">
            {/* Animated Gradient Border */}
            <div className="absolute -inset-1 rounded-3xl pointer-events-none animate-contact-border z-0" style={{background: 'linear-gradient(120deg, #a78bfa88, #6366f1aa, #818cf8aa, #a78bfa88)'}}></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-purple-700 shadow-lg animate-contact-icon">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#fff"/></svg>
                </span>
                <div>
                  <div className="text-xl font-bold text-purple-200">Abhay Singh</div>
                  <div className="text-sm text-white/70">CEO</div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-purple-700 shadow-md animate-contact-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2z" fill="#fff"/></svg>
                </span>
                <a href="mailto:abhay2gaurav@gmail.com" className="text-base text-blue-200 hover:underline transition-colors">abhay2gaurav@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-purple-700 shadow-md animate-contact-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5H6.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" fill="#fff"/></svg>
                </span>
                <a href="tel:9315712697" className="text-base text-blue-200 hover:underline transition-colors">9315712697</a>
              </div>
            </div>
          </div>
          {/* Modern Contact Form (disabled for demo) */}
          <form className="relative bg-white/10 border border-purple-400/30 rounded-3xl shadow-2xl p-10 w-full md:w-1/2 flex flex-col gap-6 backdrop-blur-md animate-contact-float overflow-hidden">
            <div className="absolute -inset-1 rounded-3xl pointer-events-none animate-contact-border z-0" style={{background: 'linear-gradient(120deg, #a78bfa88, #6366f1aa, #818cf8aa, #a78bfa88)'}}></div>
            <div className="relative z-10">
              <div className="mb-4">
                <label className="block text-purple-200 font-semibold mb-2" htmlFor="name">Your Name</label>
                <input id="name" type="text" className="w-full rounded-xl px-4 py-3 bg-black/40 border border-purple-400/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" placeholder="Enter your name" disabled />
              </div>
              <div className="mb-4">
                <label className="block text-purple-200 font-semibold mb-2" htmlFor="email">Your Email</label>
                <input id="email" type="email" className="w-full rounded-xl px-4 py-3 bg-black/40 border border-purple-400/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" placeholder="Enter your email" disabled />
              </div>
              <div className="mb-4">
                <label className="block text-purple-200 font-semibold mb-2" htmlFor="message">Message</label>
                <textarea id="message" className="w-full rounded-xl px-4 py-3 bg-black/40 border border-purple-400/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none" rows={4} placeholder="Type your message..." disabled />
              </div>
              <button type="submit" className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-700 text-white font-bold text-lg shadow-lg opacity-60 cursor-not-allowed" disabled>Send Message</button>
            </div>
          </form>
        </div>
        {/* Floating icons for extra beauty */}
        <span className="absolute left-12 top-16 animate-contact-float2 text-purple-400/60 text-5xl select-none pointer-events-none">✉️</span>
        <span className="absolute right-16 bottom-20 animate-contact-float2 text-blue-400/60 text-4xl select-none pointer-events-none">📞</span>
        <span className="absolute right-32 top-10 animate-contact-float2 text-purple-200/50 text-6xl select-none pointer-events-none">💬</span>
        <span className="absolute left-24 bottom-10 animate-contact-float2 text-blue-200/50 text-4xl select-none pointer-events-none">📧</span>
      </section>

      <style jsx global>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 16px #a78bfa) drop-shadow(0 0 32px #a78bfa44);
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 16px #a78bfa, 0 0 32px #a78bfa44; }
          50% { text-shadow: 0 0 32px #a78bfa, 0 0 64px #a78bfa88; }
        }
        .animate-glow {
          animation: glow 2.5s infinite alternate;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 4s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(18px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
        .neon-glow {
          text-shadow:
            0 0 24px #a78bfa,
            0 0 48px #6366f1,
            0 0 80px #818cf8;
          animation: neon-pulse 2.5s ease-in-out infinite alternate;
        }
        .drop-shadow-navbar-glow {
          text-shadow: 0 0 12px #a78bfa, 0 0 24px #6366f1;
        }
        @keyframes neon-pulse {
          0% {
            text-shadow:
              0 0 24px #a78bfa,
              0 0 48px #6366f1,
              0 0 80px #818cf8;
          }
          50% {
            text-shadow:
              0 0 40px #6366f1,
              0 0 80px #a78bfa,
              0 0 120px #818cf8;
          }
          100% {
            text-shadow:
              0 0 24px #a78bfa,
              0 0 48px #6366f1,
              0 0 80px #818cf8;
          }
        }
        .animate-navbar-glow {
          animation: neon-pulse 3s infinite alternate;
        }
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.7) translateY(40px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-pop-in {
          animation: pop-in 0.4s cubic-bezier(0.4, 0.2, 0.2, 1.1);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
        .glow-company-name {
          text-shadow: 0 0 12px #a78bfa88, 0 0 24px #6366f144;
          letter-spacing: 0.18em;
        }
        @keyframes contact-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.04); }
        }
        .animate-contact-float {
          animation: contact-float 4s ease-in-out infinite;
        }
        @keyframes contact-float2 {
          0%, 100% { transform: translateY(0) scale(1) rotate(-6deg); }
          50% { transform: translateY(-18px) scale(1.08) rotate(6deg); }
        }
        .animate-contact-float2 {
          animation: contact-float2 6s ease-in-out infinite;
        }
        @keyframes contact-border {
          0% { filter: blur(8px) brightness(1.1); opacity: 0.7; }
          50% { filter: blur(12px) brightness(1.3); opacity: 1; }
          100% { filter: blur(8px) brightness(1.1); opacity: 0.7; }
        }
        .animate-contact-border {
          animation: contact-border 5s ease-in-out infinite;
        }
        .animate-contact-icon {
          animation: contact-float 3.2s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}

function BeforeAfterSlider() {
  const [pos, setPos] = useState(50); // percent
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x: number;
    if ('touches' in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ('clientX' in e) {
      x = e.clientX - rect.left;
    } else {
      x = 0;
    }
    x = Math.max(0, Math.min(x, rect.width));
    setPos((x / rect.width) * 100);
  };

  useEffect(() => {
    const stopDrag = () => (dragging.current = false);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);
    return () => {
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden border border-purple-400/30 shadow-lg select-none bg-black" ref={containerRef}
        onMouseMove={e => { if (dragging.current) handleDrag(e); }}
        onTouchMove={e => { if (dragging.current) handleDrag(e); }}
        onMouseLeave={() => (dragging.current = false)}
      >
        {/* After (Quantum) */}
        <img src="/after.jpg" alt="Quantum Processor" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        {/* Before (Normal) */}
        <img src="/before.jpg" alt="Normal Processor" className="absolute inset-0 w-full h-full object-cover" style={{clipPath: `inset(0 ${100-pos}% 0 0)`}} draggable={false} />
        {/* Labels */}
        <span className="absolute left-4 top-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm font-bold tracking-wide">Normal Processor</span>
        <span className="absolute right-4 top-4 bg-purple-900/70 text-purple-100 px-3 py-1 rounded-lg text-sm font-bold tracking-wide">Quantum Processor</span>
        {/* Handle */}
        <div
          className="absolute top-0 left-0 h-full flex items-center"
          style={{ left: `calc(${pos}% - 18px)` }}
        >
          <div
            className="w-9 h-9 bg-gradient-to-br from-purple-400 via-blue-400 to-purple-700 border-4 border-white rounded-full shadow-lg cursor-ew-resize flex items-center justify-center z-10 transition-transform active:scale-110"
            onMouseDown={e => { dragging.current = true; e.preventDefault(); }}
            onTouchStart={e => { dragging.current = true; e.preventDefault(); }}
            onMouseMove={e => { if (dragging.current) handleDrag(e); }}
            onTouchMove={e => { if (dragging.current) handleDrag(e); }}
            onMouseUp={() => (dragging.current = false)}
            onTouchEnd={() => (dragging.current = false)}
            style={{ touchAction: 'none' }}
            tabIndex={0}
            aria-label="Drag to compare"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M6 9h6M9 6v6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsCurtain() {
  const [open, setOpen] = useState(false);
  const [settle, setSettle] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setTimeout(() => setOpen(true), 600);
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // After cards fly out, settle them into a row and envelope to bottom
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setSettle(true), 2200);
      return () => clearTimeout(t);
    } else {
      setSettle(false);
    }
  }, [open]);

  return (
    <div ref={sectionRef} className="relative w-full max-w-5xl mx-auto min-h-[420px] flex flex-col items-center justify-center">
      {/* Envelope Illustration, settles to bottom */}
      <div className={`absolute left-1/2 ${settle ? 'bottom-0 translate-y-1/2 opacity-100' : 'top-1/2 -translate-y-1/2 opacity-90'} -translate-x-1/2 transition-all duration-[1400ms] ease-[cubic-bezier(.77,0,.18,1.01)] z-10`} style={{height: 180}}>
        <svg width="260" height="180" viewBox="0 0 260 180" style={{filter: 'drop-shadow(0 8px 32px #0008)'}}>
          <rect x="20" y="60" width="220" height="100" rx="18" fill="#181828" stroke="#a78bfa" strokeWidth="3"/>
          <polygon points="20,60 130,20 240,60" fill="#312e81" stroke="#a78bfa" strokeWidth="3"/>
          <text x="130" y="120" textAnchor="middle" fontSize="32" fill="#a78bfa" fontWeight="bold" fontFamily="var(--font-orbitron), Arial, sans-serif">Testimonials</text>
        </svg>
      </div>
      {/* Flying/Settling Cards Animation */}
      <div className={`absolute left-1/2 w-full flex ${settle ? 'flex-row justify-center items-end gap-8' : 'flex-col items-center'} pointer-events-none`} style={{top: settle ? 'auto' : 60, bottom: settle ? 120 : 'auto', transform: 'translateX(-50%)', minHeight: 180}}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`bg-white/10 border border-purple-400/20 rounded-3xl shadow-2xl p-10 w-96 text-white/90 text-xl md:text-2xl flex flex-col items-center backdrop-blur-md absolute transition-all duration-[1200ms] ease-[cubic-bezier(.77,0,.18,1.01)] ${open ? 'fly-card' : 'opacity-0 translate-y-0 scale-90'} ${settle ? 'static opacity-100 scale-100' : ''}`}
            style={settle ? {
              position: 'static',
              opacity: 1,
              transform: 'scale(1) translateY(0) rotate(0deg)',
              transitionDelay: `${i * 0.18 + 0.3}s`,
              zIndex: 20 + i,
            } : {
              zIndex: 20 + i,
              top: open ? `${-180 - i * 40}px` : '0px',
              left: open ? `calc(-50% + ${(i - 1) * 220}px)` : '0px',
              opacity: open ? 1 : 0,
              transform: open
                ? `translateY(0) scale(1) rotate(${i === 1 ? 2 : i === 2 ? -2 : 0}deg)`
                : 'translateY(0) scale(0.9) rotate(0deg)',
              transitionDelay: open ? `${i * 0.32 + 0.3}s` : '0s',
            }}
          >
            <span className="text-5xl mb-4">{t.emoji}</span>
            <p className="mb-4 leading-relaxed">{t.text}</p>
            <span className="mt-2 text-purple-200 font-bold text-lg">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const testimonials = [
  {
    emoji: '🚀',
    text: 'Quantum Rockers made our computations 10x faster! Truly next-gen.',
    name: 'Alice, Google',
  },
  {
    emoji: '🤖',
    text: 'AI workloads run smoother than ever. Highly recommended!',
    name: 'Bob, Meta',
  },
  {
    emoji: '💡',
    text: 'The energy efficiency is mind-blowing. Our costs dropped dramatically.',
    name: 'Carol, AWS',
  },
];
