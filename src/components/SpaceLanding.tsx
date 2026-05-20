import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { FadingVideo } from "@/components/FadingVideo";
import { BlurText } from "@/components/BlurText";
import {
  ArrowUpRight,
  Play,
  ClockIcon,
  GlobeIcon,
  MaterialIcon,
  ICON_IMAGE,
  ICON_MOVIE,
  ICON_BULB,
} from "@/components/Icons";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";
const CAP_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4";
const EARTH_CUPOLA_VIDEO =
  "https://dlmultimedia.esa.int/download/public/videos/2025/07/020/2507_020_AR_EN.mp4";
const MOON_TIMELAPSE_VIDEO =
  "https://dlmultimedia.esa.int/download/public/videos/2025/07/041/2507_041_AR_EN.mp4";
const READY_LIFTOFF_VIDEO =
  "https://dlmultimedia.esa.int/download/public/videos/2025/06/003/2506_003_AR_EN.mp4";
const IGNIS_BEGINNING_VIDEO =
  "https://dlmultimedia.esa.int/download/public/videos/2025/06/038/2506_038_AR_EN.mp4";

const fadeBlur = {
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Voyages", href: "#voyages" },
  { label: "Innovation", href: "#innovation" },
  { label: "Contact", href: "#contact" },
];

const vesselStats = [
  { value: "7", label: "deep-space routes prepared" },
  { value: "42K", label: "hours of autonomous simulation" },
  { value: "0.8g", label: "adaptive cabin comfort target" },
];

const services = [
  {
    title: "Private Orbital Flights",
    body: "Three-day missions above the atmosphere with medical screening, flight training, and panoramic cabin time.",
    tags: ["Low Orbit", "Crew Care", "Observation"],
    iconPath: ICON_IMAGE,
  },
  {
    title: "Lunar Transfer Programs",
    body: "Extended itineraries around the Moon using radiation-aware routing, real-time mission support, and calm cabin pacing.",
    tags: ["Lunar Arc", "Navigation", "Suit Prep"],
    iconPath: ICON_MOVIE,
  },
  {
    title: "Research Payload Launch",
    body: "Dedicated transport for microgravity labs, optical instruments, and climate sensing hardware with live telemetry.",
    tags: ["Payload", "Telemetry", "Precision"],
    iconPath: ICON_BULB,
  },
];

const voyages = [
  {
    name: "Aurora Belt",
    duration: "72 Hours",
    route: "Low Earth orbit",
    copy: "A close pass over polar light fields, oceans, and night-side city constellations.",
  },
  {
    name: "Selene Arc",
    duration: "9 Days",
    route: "Lunar flyby",
    copy: "A quiet elliptical path around the Moon with Earthrise windows built into the schedule.",
  },
  {
    name: "Ares Prelude",
    duration: "2026 Cohort",
    route: "Mars transfer prep",
    copy: "Crewed training, habitat rehearsals, and long-range systems validation for the red horizon.",
  },
];

const innovations = [
  "Radiation-mapped flight paths",
  "Autonomous docking intelligence",
  "Low-noise life support systems",
  "Panoramic pressure cabin design",
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(12px)", opacity: 0, y: 34 }}
      animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionBackdrop({ src, reverse = false }: { src: string; reverse?: boolean }) {
  return (
    <>
      <div
        className={[
          "absolute inset-0 z-0",
          reverse
            ? "bg-[linear-gradient(235deg,#020202_0%,#111827_48%,#050505_100%)]"
            : "bg-[linear-gradient(125deg,#050505_0%,#111827_46%,#020202_100%)]",
        ].join(" ")}
      />
      <FadingVideo
        src={src}
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-45 saturate-[0.85]"
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.28)_45%,rgba(0,0,0,0.82)_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_34%,rgba(0,0,0,0)_68%)]" />
    </>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 flex items-start md:items-center justify-between gap-3">
      <a
        href="#home"
        aria-label="Aeon home"
        className="liquid-glass w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
      >
        <span className="font-heading italic text-white text-2xl leading-none">a</span>
      </a>
      <div className="liquid-glass rounded-[1.5rem] md:rounded-full px-1.5 py-1.5 flex flex-wrap justify-center items-center gap-1 max-w-[calc(100vw-7rem)] md:max-w-none">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-full px-3 py-2 text-xs sm:text-sm font-medium text-white/80 font-body transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_24px_rgba(255,255,255,0.18)]"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-0 md:ml-1 inline-flex items-center gap-1 bg-white text-black rounded-full px-4 py-2 text-xs sm:text-sm font-medium font-body whitespace-nowrap transition-transform duration-300 hover:scale-[1.03]"
        >
          Claim a Spot <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="hidden md:block w-12 h-12 invisible" />
    </nav>
  );
}

function StatCard({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="liquid-glass p-5 w-full sm:w-[220px] rounded-[1.25rem] flex flex-col justify-between"
    >
      <div>{icon}</div>
      <div className="mt-8">
        <div className="font-heading italic text-white text-4xl tracking-[-1px] leading-none">
          {value}
        </div>
        <div className="text-xs text-white font-body font-light mt-2">{label}</div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(125deg,#050505_0%,#101827_45%,#020202_100%)]" />
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute left-1/2 top-0 z-[1] -translate-x-1/2 object-cover object-top"
        style={{ width: "120%", height: "120%" }}
      />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.04)_46%,rgba(0,0,0,0.52)_100%)]" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
          <motion.div
            {...fadeBlur}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="liquid-glass rounded-full inline-flex items-center gap-2 pl-1 pr-3 py-1"
          >
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
              New
            </span>
            <span className="text-sm text-white/90 font-body">
              Maiden Crewed Voyage to Mars Arrives 2026
            </span>
          </motion.div>

          <div className="mt-8">
            <BlurText
              text="Venture Past Our Sky Across the Universe"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl tracking-[-4px]"
            />
          </div>

          <motion.p
            {...fadeBlur}
            transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
          >
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough
            engineering bring deep-space exploration within reach—secure and extraordinary.
          </motion.p>

          <motion.div
            {...fadeBlur}
            transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6"
          >
            <a
              href="#contact"
              className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white inline-flex items-center gap-2 font-body transition-transform duration-300 hover:scale-[1.03]"
            >
              Start Your Voyage <ArrowUpRight className="h-5 w-5" />
            </a>
            <a
              href="#voyages"
              className="text-white inline-flex items-center gap-2 text-sm font-body transition-all duration-300 hover:text-white/70"
            >
              View Liftoff <Play className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            {...fadeBlur}
            transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch gap-4 mt-8 w-full max-w-[460px] sm:max-w-none sm:w-auto"
          >
            <StatCard icon={<ClockIcon />} value="34.5 Min" label="First ascent to orbit" />
            <StatCard icon={<GlobeIcon />} value="2.8B+" label="Kilometers mapped for crews" />
          </motion.div>
        </div>

        <motion.div
          {...fadeBlur}
          transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 pb-8 px-4"
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Collaborating with top aerospace pioneers globally
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {["Aeon", "Vela", "Apex", "Orbit", "Zeno"].map((n) => (
              <span
                key={n}
                className="font-heading italic text-white text-2xl md:text-3xl tracking-tight"
              >
                {n}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-4xl"}>
      <div className="text-sm font-body text-white/80 mb-6">// {eyebrow}</div>
      <h2 className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light leading-snug max-w-2xl">
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}

function CapCard({
  iconPath,
  tags,
  title,
  body,
}: {
  iconPath: string;
  tags: string[];
  title: string;
  body: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="liquid-glass w-11 h-11 rounded-[0.75rem] flex items-center justify-center">
          <MaterialIcon d={iconPath} />
        </div>
        <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
          {tags.map((t) => (
            <span
              key={t}
              className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1" />
      <div className="mt-6">
        <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
          {title}
        </h3>
        <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
          {body}
        </p>
      </div>
    </motion.div>
  );
}

function Capabilities() {
  return (
    <section id="services" className="relative min-h-screen w-full overflow-hidden bg-black">
      <FadingVideo src={CAP_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        <div className="mb-auto">
          <SectionHeader
            eyebrow="Services"
            title={"Voyage design\nfor new worlds"}
            copy="From first orbital flights to lunar transfer planning, each mission is shaped around crew readiness, measured risk, and cinematic access to the cosmos."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <CapCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-black px-8 py-24 md:px-16 lg:px-20"
    >
      <SectionBackdrop src={EARTH_CUPOLA_VIDEO} reverse />
      <div className="absolute inset-x-0 top-0 z-0 h-px bg-white/10" />
      <div className="relative z-10 grid min-h-[calc(100vh-12rem)] grid-cols-1 items-end gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <SectionHeader
          eyebrow="About Aeon"
          title={"Built for the\nquiet edge"}
          copy="Aeon is a private deep-space exploration house pairing aerospace engineering, astronaut-grade training, and hospitality calm. The experience is designed for people who want the universe to feel close without losing the precision it deserves."
        />
        <Reveal delay={0.12} className="liquid-glass rounded-[1.5rem] p-6 md:p-8">
          <p className="font-heading italic text-white text-4xl md:text-5xl leading-[0.9] tracking-[-1px]">
            Every route begins as a simulation, becomes a rehearsal, and only then becomes a launch.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {vesselStats.map((stat) => (
              <div key={stat.label} className="liquid-glass rounded-[1rem] p-4">
                <div className="font-heading italic text-white text-4xl leading-none">
                  {stat.value}
                </div>
                <div className="mt-3 text-xs text-white/75 font-body leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Voyages() {
  return (
    <section
      id="voyages"
      className="relative min-h-screen overflow-hidden bg-black px-8 py-24 md:px-16 lg:px-20"
    >
      <SectionBackdrop src={MOON_TIMELAPSE_VIDEO} />
      <div className="relative z-10">
        <SectionHeader
          eyebrow="Voyages"
          title={"Routes with\nroom to wonder"}
          copy="Choose the horizon that fits your readiness. Every itinerary includes medical review, ascent coaching, live mission control, and post-flight integration."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {voyages.map((voyage, index) => (
            <Reveal key={voyage.name} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group liquid-glass flex min-h-[320px] flex-col rounded-[1.25rem] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/80 font-body">
                    {voyage.duration}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                </div>
                <div className="flex-1" />
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-body">
                  {voyage.route}
                </p>
                <h3 className="mt-3 font-heading italic text-white text-4xl leading-none tracking-[-1px] md:text-5xl">
                  {voyage.name}
                </h3>
                <p className="mt-4 text-sm font-body font-light leading-snug text-white/78">
                  {voyage.copy}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Innovation() {
  return (
    <section
      id="innovation"
      className="relative overflow-hidden bg-black px-8 md:px-16 lg:px-20 py-24"
    >
      <SectionBackdrop src={READY_LIFTOFF_VIDEO} />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] gap-10 lg:gap-16 items-center">
        <Reveal className="liquid-glass rounded-[2rem] min-h-[460px] p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="liquid-glass rounded-full px-3 py-1 text-xs text-white/80 font-body">
              Live systems
            </span>
            <span className="font-heading italic text-white text-3xl">a/26</span>
          </div>
          <div className="relative mx-auto my-10 h-56 w-56 rounded-full border border-white/20">
            <motion.div
              className="absolute inset-8 rounded-full border border-white/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.75)]"
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-white/80"
              animate={{ rotate: 360 }}
              style={{ transformOrigin: "0 104px" }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <p className="text-sm text-white/75 font-body font-light leading-snug max-w-sm">
            Aeon vessels read solar weather, cabin comfort, orbital drift, and crew rhythm in a
            single mission model.
          </p>
        </Reveal>
        <div>
          <SectionHeader
            eyebrow="Innovation"
            title={"Engineering\nthat disappears"}
            copy="The technology is felt as calm: quieter cabins, cleaner route decisions, and guidance systems that keep crews focused on the view."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {innovations.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="liquid-glass rounded-full px-5 py-4 text-sm text-white/85 font-body transition-all duration-300 hover:bg-white hover:text-black">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-black px-8 py-24 md:px-16 lg:px-20"
    >
      <SectionBackdrop src={IGNIS_BEGINNING_VIDEO} reverse />
      <div className="liquid-glass-strong relative z-10 overflow-hidden rounded-[2rem] p-6 md:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-10 items-end">
          <div>
            <div className="text-sm font-body text-white/80 mb-6">// Contact</div>
            <h2 className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
              Reserve the
              <br />
              next horizon
            </h2>
          </div>
          <div>
            <p className="text-sm md:text-base text-white/78 font-body font-light leading-snug">
              Tell Aeon mission design where you want to begin. A flight concierge will respond with
              screening steps, training windows, and available launch cohorts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <a
                href="mailto:crew@aeon.space"
                className="bg-white text-black rounded-full px-5 py-3 text-sm font-medium font-body inline-flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-[1.02]"
              >
                crew@aeon.space <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+18002663667"
                className="liquid-glass rounded-full px-5 py-3 text-sm font-medium text-white font-body inline-flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
              >
                +1 800 AEON ORBIT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SpaceLanding() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Capabilities />
      <Voyages />
      <Innovation />
      <Contact />
    </main>
  );
}
