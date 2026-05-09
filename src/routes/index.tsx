import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Key,
  Clock,
  Skull,
  Users,
  HelpCircle,
  ChevronDown,
  Volume2,
  VolumeX,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Sparkles,
  Languages,
} from "lucide-react";

function Tiktok({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={className}>
      <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.33V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/>
    </svg>
  );
}
import {
  useAppDispatch,
  useAppSelector,
  toggleFaq,
  setExperience,
  toggleSound,
  toggleLang,
} from "@/store";
import { useT } from "@/i18n/translations";
import heroBg from "@/assets/hero-bg.jpg";
import clockImg from "@/assets/clock.png";
import keyImg from "@/assets/key.png";
import clownImg from "@/assets/clown.jpg";
import teamImg from "@/assets/team.jpg";
import logoImg from "@/assets/b4b05067c10fa810f472a74f0226d673.png";
import img1 from "@/assets/images.jpg";
import img2 from "@/assets/IMG_1527.jpeg";
import img3 from "@/assets/614G02xYDYL._AC_UF1000,1000_QL80_.jpg";
import img4 from "@/assets/9-4.jpg";

const EXP_IMAGES = [img1, img2, img3, img4];

export const Route = createFileRoute("/")({
  component: Index,
});

const EXP_COLORS = [
  "from-fuchsia-500 to-purple-700",
  "from-amber-500 to-rose-700",
  "from-emerald-500 to-teal-800",
];

function Index() {
  const { dir, lang } = useT();

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [dir, lang]);

  return (
    <main
      dir={dir}
      key={lang}
      className={`min-h-screen bg-background text-foreground ${lang === "ar" ? "font-body tracking-normal" : "font-body tracking-tight"
        }`}
      style={{ fontFamily: lang === "ar" ? "'Tajawal', system-ui, sans-serif" : "'Inter', 'Tajawal', system-ui, sans-serif" }}
    >
      <Hero />
      <SocialBar />
      <FaqSection />
      <ExperienceSection />
      <GallerySection />
      <SocialSection />
      <FinalCta />
      <Footer />
    </main>
  );
}

function SocialBar() {
  const { lang } = useT();
  const isAr = lang === "ar";
  return (
    <div className="border-y border-border bg-card/20 py-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap justify-center gap-12 items-center">
        <a href="https://www.instagram.com/exit_escaperoom?igsh=MXVrM3dqeTdrbG5sYw==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon transition flex items-center gap-3 text-xl font-bold">
          <Instagram className="h-8 w-8 text-neon" /> Instagram
        </a>
        <a href="https://www.facebook.com/share/1BJiCsb6ic/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon transition flex items-center gap-3 text-xl font-bold">
          <Facebook className="h-8 w-8 text-neon" /> Facebook
        </a>
        <a href="https://www.tiktok.com/@exit_escaperoom?_r=1&_t=ZN-96A93N8uhok" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon transition flex items-center gap-3 text-xl font-bold">
          <Tiktok className="h-8 w-8 text-neon" /> TikTok
        </a>
        <a href="tel:00972593333369" className="text-muted-foreground hover:text-neon transition flex items-center gap-3 text-xl font-bold">
          <Phone className="h-8 w-8 text-neon" /> 00972593333369
        </a>
        <a href="https://maps.app.goo.gl/HK9DJW4PynhfSE1u5?g_st=ac" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon transition flex items-center gap-3 text-xl font-bold">
          <MapPin className="h-8 w-8 text-neon" /> {isAr ? "الموقع" : "Location"}
        </a>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="absolute inset-0 rounded-md bg-neon blur-md opacity-40" />
        <img
          src={logoImg}
          alt="Exit Escape Room"
          className="relative h-12 w-auto object-contain"
        />
      </div>
    </div>
  );
}

function LangButton() {
  const dispatch = useAppDispatch();
  const { t } = useT();
  return (
    <button
      onClick={() => dispatch(toggleLang())}
      className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs font-bold text-muted-foreground transition hover:border-neon hover:text-neon"
    >
      <Languages className="h-3.5 w-3.5" />
      {t.nav.langSwitch}
    </button>
  );
}

function Hero() {
  const dispatch = useAppDispatch();
  const soundOn = useAppSelector((s) => s.ui.soundOn);
  const { t, lang } = useT();
  const isAr = lang === "ar";
  const NAV = [
    { id: "what", label: t.nav.what },
    { id: "how", label: t.nav.how },
    { id: "experience", label: t.nav.experience },
    { id: "faq", label: t.nav.faq },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-70" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 animate-fog opacity-40 mix-blend-screen"
          style={{ background: "radial-gradient(circle at 30% 60%, oklch(0.85 0.27 145 / 0.15), transparent 50%)" }} />
        <div className="absolute inset-0 animate-fog opacity-30 mix-blend-screen" style={{
          animationDuration: "45s",
          background: "radial-gradient(circle at 70% 40%, oklch(0.6 0.25 300 / 0.25), transparent 55%)"
        }} />
        <div className="absolute inset-0 vignette" />
      </div>

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm text-muted-foreground transition hover:text-neon">
              {n.label}
            </a>
          ))}
          <button onClick={() => dispatch(toggleSound())} aria-label="toggle sound"
            className="text-muted-foreground hover:text-neon transition">
            {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>
          <LangButton />
          <a href="#book"
            className="relative inline-flex items-center gap-2 rounded-md border border-neon bg-neon/10 px-5 py-2 text-sm font-bold text-neon transition hover:bg-neon hover:text-neon-foreground"
            style={{ boxShadow: "var(--shadow-neon)" }}>
            <Sparkles className="h-4 w-4" /> {t.nav.book}
          </a>
        </nav>
        <div className="md:hidden"><LangButton /></div>
      </header>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-12 pb-32 lg:grid-cols-12">
        <div className={`relative order-2 ${isAr ? "lg:order-2" : "lg:order-1"} lg:col-span-5`}>
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}
            className="relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rounded-full bg-neon/30 blur-3xl animate-heartbeat" />
            <img src={clockImg} alt="vintage clock" className="relative animate-tick drop-shadow-2xl" width={500} height={500} loading="lazy" />
            <motion.img src={keyImg} alt="brass key"
              className="absolute -bottom-6 -left-6 w-40 rotate-[-25deg] drop-shadow-[0_0_25px_rgba(180,255,80,0.5)]"
              animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} loading="lazy" />
          </motion.div>
        </div>

        <div className={`order-1 ${isAr ? "lg:order-1" : "lg:order-2"} lg:col-span-7 ${isAr ? "text-right" : "text-left"}`}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/5 px-4 py-1.5 text-xs tracking-widest text-neon">
            <span className="h-2 w-2 rounded-full bg-neon animate-pulse" />
            {t.hero.badge}
          </motion.div>

          <h1 className={`mt-6 font-display font-black leading-[1.05] ${isAr ? "text-5xl sm:text-6xl lg:text-8xl" : "text-5xl sm:text-6xl lg:text-7xl"}`}>
            <motion.span initial={{ opacity: 0, x: isAr ? 50 : -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}
              className="block text-foreground">
              {t.hero.titleA}
            </motion.span>
            <motion.span initial={{ opacity: 0, x: isAr ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }}
              className="block text-neon animate-flicker">
              {t.hero.titleB}
            </motion.span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            {t.hero.subtitle}
            <br />
            <span className="text-foreground">{t.hero.duration}</span> {t.hero.tail}
          </p>

          <div className={`mt-10 flex flex-wrap items-center gap-4 ${isAr ? "justify-start" : "justify-start"}`}>
            <a href="#book"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-md bg-neon px-8 py-4 font-bold text-neon-foreground transition hover:scale-105"
              style={{ boxShadow: "var(--shadow-neon)" }}>
              <Key className="h-5 w-5" />
              {t.hero.cta}
            </a>
            <a href="#what" className="inline-flex items-center gap-2 px-4 py-4 text-sm text-muted-foreground hover:text-foreground">
              {t.hero.explore} <ChevronDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6">
            {t.hero.stats.map((s, i) => (
              <div key={i}>
                <div className="font-display text-3xl font-black text-neon">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((s) => s.ui.openFaq);
  const { t, dir } = useT();

  return (
    <section id="what" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full border border-neon/40 bg-neon/5"
            style={{ boxShadow: "var(--shadow-glow)" }}>
            <HelpCircle className="h-10 w-10 text-neon animate-pulse" />
          </div>
          <h2 className="mt-6 font-display text-4xl font-black sm:text-5xl">
            {t.faq.eyebrow}
            <br />
            <span className="text-neon">{t.faq.title}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t.faq.hint}</p>
        </div>

        <div id="how" className="mt-16 space-y-4">
          {t.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={i} layout onClick={() => dispatch(toggleFaq(i))}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border bg-card p-6 transition-all ${isOpen ? "border-neon" : "border-border hover:border-neon/50"
                  }`}
                style={isOpen ? { boxShadow: "var(--shadow-glow)" } : undefined}>
                {isOpen && <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neon/10 via-transparent to-neon/5" />}
                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className={`font-display text-2xl font-black ${isOpen ? "text-neon" : "text-muted-foreground"}`}>
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{f.title}</h3>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className={`h-6 w-6 ${isOpen ? "text-neon" : "text-muted-foreground"}`} />
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="relative overflow-hidden">
                      <p className={`mt-5 text-lg leading-relaxed text-muted-foreground ${dir === "rtl" ? "pe-12" : "pe-12"}`}>
                        {f.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const dispatch = useAppDispatch();
  const idx = useAppSelector((s) => s.ui.experienceIndex);
  const { t, lang } = useT();
  const isAr = lang === "ar";

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(setExperience((idx + 1) % t.exp.tabs.length));
    }, 4000);
    return () => clearInterval(id);
  }, [idx, dispatch, t.exp.tabs.length]);

  return (
    <section id="experience" className="relative border-y border-border bg-card/40 py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div className={isAr ? "text-right" : "text-left"}>
          <div className="inline-flex items-center gap-2 text-xs tracking-widest text-neon">
            <Users className="h-4 w-4" /> {t.exp.eyebrow}
          </div>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-6xl">
            {t.exp.titleA}
            <br />
            <span className="text-neon">{t.exp.titleB}</span>
            <br />
            {t.exp.titleC}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{t.exp.body}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {t.exp.tabs.map((e, i) => (
              <button key={i} onClick={() => dispatch(setExperience(i))}
                className={`rounded-full border px-5 py-2 text-sm font-bold transition ${i === idx ? "border-neon bg-neon text-neon-foreground" : "border-border text-muted-foreground hover:text-foreground"
                  }`}>
                {e.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.p key={idx + lang} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }} className="mt-6 text-xl text-foreground">
              {t.exp.tabs[idx].desc}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 1 }} className="absolute inset-0">
              <img src={EXP_IMAGES[idx]} alt={t.exp.tabs[idx].label} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-neon">{t.exp.now}</div>
              <div className="font-display text-3xl font-black">{t.exp.tabs[idx].label}</div>
            </div>
            <div className="flex gap-1">
              {t.exp.tabs.map((_, i) => (
                <span key={i} className={`h-1 w-8 rounded-full ${i === idx ? "bg-neon" : "bg-muted"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const { t } = useT();
  const imgs = [clownImg, keyImg, clockImg, heroBg];
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs tracking-widest text-neon">{t.gallery.eyebrow}</div>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
              {t.gallery.titleA} <span className="text-neon">{t.gallery.titleB}</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">{t.gallery.hint}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {t.gallery.items.map((g, i) => (
            <motion.div key={i} whileHover={{ y: -8 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card">
              <img src={imgs[i]} alt={g.title} loading="lazy"
                className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at center, oklch(0.85 0.27 145 / 0.25), transparent 70%)" }} />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-display text-xl font-bold text-neon">{g.title}</div>
                <div className="text-xs text-muted-foreground">{g.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  const { t, lang } = useT();
  const isAr = lang === "ar";

  const posts = [
    { id: 1, platform: "instagram", user: "@exit.escape", content: "أقوى تجربة هروب! حليتوا اللغز؟", image: img1, likes: "1.2k" },
    { id: 2, platform: "facebook", user: "Exit Escape Room", content: "مين بيقدر يهرب في أقل من 60 دقيقة؟ منشن فريقك.", image: img2, likes: "850" },
    { id: 3, platform: "instagram", user: "@horror_fan", content: "الأجواء خرافية والرعب حقيقي! انصح بالزيارة.", image: img3, likes: "450" },
    { id: 4, platform: "facebook", user: "أحمد علي", content: "تجربة رهيبة، الألغاز ذكية جداً والقصة مشوقة.", image: img4, likes: "300" },
  ];

  // Duplicate posts for infinite scroll
  const duplicatedPosts = [...posts, ...posts];

  return (
    <section className="relative py-32 overflow-hidden border-y border-border bg-card/20">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-xs tracking-widest text-neon uppercase">
            {isAr ? "مجتمعنا" : "Our Community"}
          </div>
          <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
            {isAr ? "شاركنا" : "Share Your"}{" "}
            <span className="text-neon">{isAr ? "رعبك" : "Fear"}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            {isAr ? "تفاعل معنا على وسائل التواصل الاجتماعي" : "Interact with us on social media"}
          </p>
        </div>

        {/* Desktop View: Dual Column Vertical Marquee */}
        <div className="hidden md:grid grid-cols-2 gap-8 h-[600px] overflow-hidden relative">
          {/* Top and Bottom Masks */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-20" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-20" />

          {/* Left Column (Scrolling Up) */}
          <div className="flex flex-col gap-6 animate-marquee-up hover:[animation-play-state:paused]">
            {duplicatedPosts.map((post, index) => (
              <div key={`left-${post.id}-${index}`} className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-neon transition-colors duration-300 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-neon/10 flex items-center justify-center text-neon text-xs font-bold">
                      {post.user.substring(0, 2)}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{post.user}</div>
                      <div className="text-xs text-muted-foreground">{post.platform}</div>
                    </div>
                  </div>
                  {post.platform === "instagram" ? (
                    <Instagram className="h-4 w-4 text-neon" />
                  ) : (
                    <Facebook className="h-4 w-4 text-neon" />
                  )}
                </div>
                <img src={post.image} alt="post" className="w-full h-40 object-cover rounded-lg" />
                <p className={`text-sm leading-relaxed ${isAr ? "text-right" : "text-left"}`}>
                  {post.content}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
                  <span>❤️ {post.likes}</span>
                  <span>💬 Reply</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Scrolling Down) */}
          <div className="flex flex-col gap-6 animate-marquee-down hover:[animation-play-state:paused]">
            {duplicatedPosts.map((post, index) => (
              <div key={`right-${post.id}-${index}`} className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-neon transition-colors duration-300 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-neon/10 flex items-center justify-center text-neon text-xs font-bold">
                      {post.user.substring(0, 2)}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{post.user}</div>
                      <div className="text-xs text-muted-foreground">{post.platform}</div>
                    </div>
                  </div>
                  {post.platform === "instagram" ? (
                    <Instagram className="h-4 w-4 text-neon" />
                  ) : (
                    <Facebook className="h-4 w-4 text-neon" />
                  )}
                </div>
                <img src={post.image} alt="post" className="w-full h-40 object-cover rounded-lg" />
                <p className={`text-sm leading-relaxed ${isAr ? "text-right" : "text-left"}`}>
                  {post.content}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
                  <span>❤️ {post.likes}</span>
                  <span>💬 Reply</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: Single Horizontal Scrolling Row */}
        <div className="md:hidden flex overflow-x-auto gap-6 pb-6 snap-x">
          {posts.map((post) => (
            <div key={`mobile-${post.id}`} className="min-w-[280px] bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 snap-center flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-neon/10 flex items-center justify-center text-neon text-xs font-bold">
                    {post.user.substring(0, 2)}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{post.user}</div>
                    <div className="text-xs text-muted-foreground">{post.platform}</div>
                  </div>
                </div>
                {post.platform === "instagram" ? (
                  <Instagram className="h-4 w-4 text-neon" />
                ) : (
                  <Facebook className="h-4 w-4 text-neon" />
                )}
              </div>
              <img src={post.image} alt="post" className="w-full h-40 object-cover rounded-lg" />
              <p className={`text-sm leading-relaxed ${isAr ? "text-right" : "text-left"}`}>
                {post.content}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
                <span>❤️ {post.likes}</span>
                <span>💬 Reply</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const { t } = useT();
  return (
    <section id="book" className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/20 blur-[120px] animate-heartbeat" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Clock className="mx-auto h-12 w-12 text-neon animate-tick" />
        <h2 className="mt-6 font-display text-5xl font-black leading-tight sm:text-7xl">
          {t.cta.pre} <span className="text-neon animate-flicker">{t.cta.mid}</span>{t.cta.post}
        </h2>
        <p className="mt-6 text-xl text-muted-foreground">{t.cta.sub}</p>
        <a href="#"
          className="mt-12 inline-flex items-center gap-3 rounded-md bg-neon px-12 py-6 font-display text-2xl font-black text-neon-foreground transition hover:scale-105"
          style={{ boxShadow: "var(--shadow-neon)" }}>
          <Key className="h-7 w-7" />
          {t.cta.btn}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">{t.footer.desc}</p>
        </div>
        <div>
          <h4 className="font-display font-bold text-neon">{t.footer.contact}</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <a href="https://maps.app.goo.gl/HK9DJW4PynhfSE1u5?g_st=ac" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-neon transition">
                <MapPin className="h-4 w-4 text-neon" /> {t.footer.city}
              </a>
            </li>
            <li className="flex items-center gap-2" dir="ltr">
              <a href="tel:00972593333369" className="hover:text-neon transition flex items-center gap-2">
                <Phone className="h-4 w-4 text-neon" /> 00972593333369
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-neon">{t.footer.follow}</h4>
          <div className="mt-4 flex gap-3">
            <a href="https://www.instagram.com/exit_escaperoom?igsh=MXVrM3dqeTdrbG5sYw==" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-md border border-border hover:border-neon hover:text-neon transition"><Instagram className="h-6 w-6" /></a>
            <a href="https://www.facebook.com/share/1BJiCsb6ic/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-md border border-border hover:border-neon hover:text-neon transition"><Facebook className="h-6 w-6" /></a>
            <a href="https://www.tiktok.com/@exit_escaperoom?_r=1&_t=ZN-96A93N8uhok" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-md border border-border hover:border-neon hover:text-neon transition"><Tiktok className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Exit Escape Room
      </div>
    </footer>
  );
}
