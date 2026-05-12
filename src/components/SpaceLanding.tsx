import { motion } from "framer-motion";
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

const fadeBlur = {
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
};

function Navbar() {
  const links = ["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"];
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 flex items-center justify-between">
      <div className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center">
        <span className="font-heading italic text-white text-2xl leading-none">a</span>
      </div>
      <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
        {links.map((l) => (
          <a key={l} href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body">
            {l}
          </a>
        ))}
        <button className="ml-1 inline-flex items-center gap-1 bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body whitespace-nowrap">
          Claim a Spot <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <div className="w-12 h-12 invisible" />
    </nav>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col justify-between">
      <div>{icon}</div>
      <div className="mt-8">
        <div className="font-heading italic text-white text-4xl tracking-[-1px] leading-none">{value}</div>
        <div className="text-xs text-white font-body font-light mt-2">{label}</div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
          <motion.div
            {...fadeBlur}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="liquid-glass rounded-full inline-flex items-center gap-2 pl-1 pr-3 py-1"
          >
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">New</span>
            <span className="text-sm text-white/90 font-body">Maiden Crewed Voyage to Mars Arrives 2026</span>
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
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
          </motion.p>

          <motion.div
            {...fadeBlur}
            transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
            className="flex items-center gap-6 mt-6"
          >
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white inline-flex items-center gap-2 font-body">
              Start Your Voyage <ArrowUpRight className="h-5 w-5" />
            </button>
            <button className="text-white inline-flex items-center gap-2 text-sm font-body">
              View Liftoff <Play className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            {...fadeBlur}
            transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
            className="flex items-stretch gap-4 mt-8"
          >
            <StatCard icon={<ClockIcon />} value="34.5 Min" label="Average Videos Watch Time" />
            <StatCard icon={<GlobeIcon />} value="2.8B+" label="Users Across the Globe" />
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
              <span key={n} className="font-heading italic text-white text-2xl md:text-3xl tracking-tight">
                {n}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
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
    <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
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
    </div>
  );
}

function Capabilities() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <FadingVideo src={CAP_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        <div className="mb-auto">
          <div className="text-sm font-body text-white/80 mb-6">// Capabilities</div>
          <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Production
            <br />
            evolved
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <CapCard
            iconPath={ICON_IMAGE}
            tags={["Natural Context", "Photo Realism", "Infinite Settings", "Eco-Vibe"]}
            title="AI Scenery"
            body="AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests."
          />
          <CapCard
            iconPath={ICON_MOVIE}
            tags={["Scale Fast", "Visual Consistency", "Time Saver", "Ready to Post"]}
            title="Batch Production"
            body="Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching."
          />
          <CapCard
            iconPath={ICON_BULB}
            tags={["Ray Tracing", "Physical Shadows", "Studio Quality", "Sunlight Sync"]}
            title="Smart Lighting"
            body="Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight."
          />
        </div>
      </div>
    </section>
  );
}

export function SpaceLanding() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Capabilities />
    </main>
  );
}
