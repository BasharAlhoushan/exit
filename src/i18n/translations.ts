import { useAppSelector } from "@/store";

export const translations = {
  ar: {
    dir: "rtl" as string,
    nav: {
      what: "ما هي غرفة الهروب؟",
      how: "كيف نلعب؟",
      experience: "التجربة",
      faq: "الأسئلة",
      book: "احجز الآن",
      langSwitch: "English",
    },
    hero: {
      badge: "60 دقيقة · مخرج واحد",
      titleA: "جونا لطيف..",
      titleB: "بس مخيف",
      subtitle: "استعد لمغامرة الهروب الحقيقية الوحيدة.",
      duration: "60 دقيقة",
      tail: "من الغموض والتحدي.",
      cta: "احجز الآن",
      explore: "اكتشف اللعبة",
      stats: [
        { v: "60", l: "دقيقة" },
        { v: "1", l: "غرفة سرية" },
        { v: "∞", l: "أدرينالين" },
      ],
    },
    faq: {
      eyebrow: "مش فاهم كيف اللعبة؟",
      title: "إليك كل التفاصيل",
      hint: "اضغط على البطاقة لتكتشف السر",
      items: [
        {
          title: "شو يعني Escape Room؟",
          body: "لعبة الهروب من الغرفة هي مغامرة تفاعلية حقيقية بتنحبس فيها انت وفريقك بغرفة مليانة ألغاز، أسرار، وقصص مرعبة. لازم تستخدم ذكاءك وحواسك عشان تكتشف المخفي وتفكّ الشيفرة.",
        },
        {
          title: "شو مطلوب مني أعمل؟",
          body: "هدفك بسيط بس صعب: عندك 60 دقيقة فقط لتحلّ كل الألغاز وتلاقي طريق الخروج. كل دقيقة بتمر بتزيد التوتر، وكل تفصيل في الغرفة ممكن يكون المفتاح.",
        },
        {
          title: "شو نربح بعد ما نحل اللغز؟",
          body: "بتربح أدرينالين، ضحك، صراخ، وذكريات ما رح تنساها. تجربة بتختبر شجاعتك، تعاونك مع فريقك، وقدرتك تفكر تحت الضغط — هاد هو الجائزة الحقيقية.",
        },
      ],
    },
    exp: {
      eyebrow: "التجربة",
      titleA: "التعاون انت",
      titleB: "و فريقك",
      titleC: "عشان تفك الرموز",
      body: "مش لعبة فردية. هي تجربة بتجمع الأصحاب، العيلة، وزملاء العمل في تحدي واحد. كل شخص بيشوف تفصيلة، كل عقل بيحل لغز.",
      tabs: [
        { label: "أصحاب", desc: "ضحك، صراخ، وتحدي بين الشلة." },
        { label: "عيلة", desc: "مغامرة بتقرّب الكل تحت الضغط." },
        { label: "فريق العمل", desc: "Team building حقيقي مش اجتماع ممل." },
        { label: "مغامرون", desc: "تحدي حقيقي لعشاق الغموض والإثارة." },
      ],
      now: "الآن",
    },
    gallery: {
      eyebrow: "عناصر اللعبة",
      titleA: "عناصر",
      titleB: "الغموض",
      hint: "كل تفصيلة هنا تحكي حكاية. مرّر فوقها لتشوف.",
      items: [
        { title: "المدير", sub: "هيك بنرحب فيك" },
        { title: "المفتاح", sub: "اللي بدك إياه" },
        { title: "11:55", sub: "الوقت بيركض" },
        { title: "الغرفة", sub: "غرفتك السرية" },
      ],
    },
    cta: {
      pre: "هل",
      mid: "تجرؤ",
      post: "؟",
      sub: "الباب مفتوح. الساعة بتعد. القرار قرارك.",
      btn: "احجز مغامرتك الآن",
    },
    footer: {
      desc: "تجربة الهروب الحقيقية الوحيدة. غرفة واحدة. ساعة واحدة. قرار واحد.",
      contact: "تواصل معنا",
      follow: "تابعنا",
      city: "رام الله",
    },
  },
  en: {
    dir: "ltr" as string,
    nav: {
      what: "What's Escape Room?",
      how: "How to Play?",
      experience: "The Experience",
      faq: "FAQ",
      book: "Book Now",
      langSwitch: "عربي",
    },
    hero: {
      badge: "60 MINUTES · 1 EXIT",
      titleA: "Our vibe is friendly...",
      titleB: "but scary",
      subtitle: "Get ready for the only real escape room adventure.",
      duration: "60 minutes",
      tail: "of mystery and challenge.",
      cta: "Book Now",
      explore: "Discover the game",
      stats: [
        { v: "60", l: "Minutes" },
        { v: "1", l: "Secret Room" },
        { v: "∞", l: "Adrenaline" },
      ],
    },
    faq: {
      eyebrow: "Don't get the game?",
      title: "Here's everything you need to know",
      hint: "Click a card to reveal the secret",
      items: [
        {
          title: "What is an Escape Room?",
          body: "An escape room is a real, interactive adventure where you and your team are locked inside a room full of puzzles, secrets, and chilling stories. Use your wits and your senses to uncover what's hidden and crack the code.",
        },
        {
          title: "What am I supposed to do?",
          body: "Your goal is simple but hard: you have only 60 minutes to solve all the puzzles and find the way out. Every minute that passes raises the tension, and every detail in the room could be the key.",
        },
        {
          title: "What do we win when we solve it?",
          body: "You win adrenaline, laughter, screams, and memories you'll never forget. A real test of your courage, teamwork, and ability to think under pressure — that's the true prize.",
        },
      ],
    },
    exp: {
      eyebrow: "THE EXPERIENCE",
      titleA: "Teamwork",
      titleB: "with your crew",
      titleC: "to crack the codes",
      body: "It's not a solo game. It's an experience that brings friends, family, and colleagues together in one challenge. Each person sees a detail, each mind solves a clue.",
      tabs: [
        { label: "Friends", desc: "Laughs, screams, and rivalry between the crew." },
        { label: "Family", desc: "An adventure that pulls everyone together under pressure." },
        { label: "Coworkers", desc: "Real team building — not a boring meeting." },
        { label: "Adventurers", desc: "A real challenge for lovers of mystery and thrill." },
      ],
      now: "Now Playing",
    },
    gallery: {
      eyebrow: "KEY ELEMENTS",
      titleA: "Elements of",
      titleB: "Mystery",
      hint: "Every detail tells a story. Hover to see.",
      items: [
        { title: "The Manager", sub: "This is how we welcome you" },
        { title: "Vintage Key", sub: "The one you'll need" },
        { title: "11:55", sub: "Time is running" },
        { title: "The Room", sub: "Your secret chamber" },
      ],
    },
    cta: {
      pre: "Do you",
      mid: "dare",
      post: "?",
      sub: "The door is open. The clock is ticking. The choice is yours.",
      btn: "Book your adventure now",
    },
    footer: {
      desc: "The only real escape room experience. One room. One hour. One choice.",
      contact: "Contact us",
      follow: "Follow",
      city: "Ramallah",
    },
  },
};

export type Dict = (typeof translations)["ar"];

export function useT() {
  const lang = useAppSelector((s) => s.ui.lang);
  const t = translations[lang] as Dict;
  return { t, lang, dir: (lang === "ar" ? "rtl" : "ltr") as "rtl" | "ltr" };
}
