'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {
  ar: {
    dir: 'rtl',
    nav: {
      what: 'ما هي غرفة الهروب؟',
      community: 'مجتمعنا',
      experience: 'التجربة',
      faq: 'الغرف',
      book: 'احجز الآن',
      langSwitch: 'English',
    },
    hero: {
      badge: '60 دقيقة · مخرج واحد',
      titleA: 'جونا لطيف..',
      titleB: 'بس مخيف',
      subtitle: 'استعد لمغامرة الهروب الحقيقية الوحيدة.',
      duration: '60 دقيقة',
      tail: 'من الغموض والتحدي.',
      cta: 'احجز الآن',
      explore: 'اكتشف اللعبة',
      canYouEscape: 'بتقدر تهرب في 60 دقيقة؟',
      stats: [
        { v: '60', l: 'دقيقة' },
        { v: '3', l: 'غرف هروب' },
        { v: '∞', l: 'أدرينالين' },
      ],
    },
    socialbar: { location: 'الموقع' },
    faq: {
      eyebrow: 'مش فاهم كيف اللعبة؟',
      title: 'إليك كل التفاصيل',
      hint: 'اضغط على البطاقة لتكتشف السر',
      items: [
        {
          title: 'شو يعني Escape Room؟',
          body: 'لعبة الهروب من الغرفة هي مغامرة تفاعلية حقيقية بتنحبس فيها انت وفريقك بغرفة مليانة ألغاز، أسرار، وقصص مرعبة. لازم تستخدم ذكاءك وحواسك عشان تكتشف المخفي وتفك الشيفرة.',
        },
        {
          title: 'شو مطلوب مني أعمل؟',
          body: 'هدفك بسيط بس صعب: عندك 60 دقيقة فقط لتحلّ كل الألغاز وتلاقي طريق الخروج. كل دقيقة بتمر بتزيد التوتر، وكل تفصيل في الغرفة ممكن يكون المفتاح.',
        },
        {
          title: 'شو بنكسب من التجربه؟',
          body: 'بتربح أدرينالين، ضحك، صراخ، وذكريات ما رح تنساها. تجربة بتختبر شجاعتك، تعاونك مع فريقك، وقدرتك تفكر تحت الضغط — هاي هي الجائزة الحقيقية.',
        },
      ],
    },
    exp: {
      eyebrow: 'التجربة',
      titleA: 'تعاون انت',
      titleB: 'و فريقك',
      titleC: 'عشان تفك الرموز',
      body: 'مش لعبة فردية. هي تجربة بتجمع الأصحاب، العيلة، وزملاء العمل في تحدي واحد. كل شخص بيشوف تفصيلة، كل عقل بيحل لغز.',
      tabs: [
        { label: 'أصحاب', desc: 'ضحك، صراخ، وتحدي بين الشلة.' },
        { label: 'عيلة', desc: 'مغامرة بتقرّب الكل تحت الضغط.' },
        { label: 'الشركات', desc: 'بناء الفريق والتحدي بين الزملاء.' },
        { label: 'مغامرون', desc: 'تحدي حقيقي لعشاق الغموض والإثارة.' },
      ],
      now: 'الآن',
    },
    gallery: {
      eyebrow: 'اختر مغامرتك',
      titleA: 'الغرف',
      titleB: 'الموجودة',
      hint: 'كل غرفة عالم مليان أسرار.',
      items: [
        { title: 'Saw', sub: 'هل تقدر تهرب؟' },
        { title: 'Carnevale', sub: 'الغموض بانتظارك' },
        { title: 'HOSTAGE II', sub: 'الوقت عم يخلص' },
      ],
    },
    social: {
      eyebrow: 'مجتمعنا',
      titleA: 'شاركنا ',
      titleB: 'رعبك',
      subtitle: 'تفاعل معنا على وسائل التواصل الاجتماعي',
      rateBtn: 'قيّمنا على جوجل',
    },
    cta: {
      pre: 'هل ',
      mid: 'تجرؤ',
      post: '؟',
      sub: 'تجربة هروب حقيقية، غرف مختلفة، ساعة واحدة، قرار مشترك',
      btn: 'احجز مغامرتك الآن',
    },
    footer: {
      desc: 'تجربة الهروب الحقيقية الوحيدة. غرفة واحدة. ساعة واحدة. قرار واحد.',
      contact: 'تواصل معنا',
      follow: 'تابعنا',
      city: 'نابلس',
    },
  },
  en: {
    dir: 'ltr',
    nav: {
      what: "What's Escape Room?",
      community: 'Our Community',
      experience: 'The Experience',
      faq: 'Rooms',
      book: 'Book Now',
      langSwitch: 'عربي',
    },
    hero: {
      badge: '60 MINUTES · 1 EXIT',
      titleA: 'Our vibe is friendly...',
      titleB: 'but scary',
      subtitle: 'Get ready for the only real escape room adventure.',
      duration: '60 minutes',
      tail: 'of mystery and challenge.',
      cta: 'Book Now',
      explore: 'Discover the game',
      canYouEscape: 'Can you escape in 60 minutes?',
      stats: [
        { v: '60', l: 'Minutes' },
        { v: '3', l: 'Escape Rooms' },
        { v: '∞', l: 'Adrenaline' },
      ],
    },
    socialbar: { location: 'Location' },
    faq: {
      eyebrow: "Don't get the game?",
      title: "Here's everything you need to know",
      hint: 'Click a card to reveal the secret',
      items: [
        {
          title: 'What is an Escape Room?',
          body: "An escape room is a real, interactive adventure where you and your team are locked inside a room full of puzzles, secrets, and chilling stories. Use your wits and your senses to uncover what's hidden and crack the code.",
        },
        {
          title: 'What am I supposed to do?',
          body: 'Your goal is simple but hard: you have only 60 minutes to solve all the puzzles and find the way out. Every minute that passes raises the tension, and every detail in the room could be the key.',
        },
        {
          title: 'What do we win when we solve it?',
          body: "You win adrenaline, laughter, screams, and memories you'll never forget. A real test of your courage, teamwork, and ability to think under pressure — that's the true prize.",
        },
      ],
    },
    exp: {
      eyebrow: 'THE EXPERIENCE',
      titleA: 'Teamwork',
      titleB: 'with your crew',
      titleC: 'to crack the codes',
      body: "It's not a solo game. It's an experience that brings friends, family, and colleagues together in one challenge. Each person sees a detail, each mind solves a clue.",
      tabs: [
        { label: 'Friends', desc: 'Laughs, screams, and rivalry between the crew.' },
        { label: 'Family', desc: 'An adventure that pulls everyone together under pressure.' },
        { label: 'Corporate', desc: 'Team building and challenge between colleagues.' },
        { label: 'Adventurers', desc: 'A real challenge for lovers of mystery and thrill.' },
      ],
      now: 'Now Playing',
    },
    gallery: {
      eyebrow: 'CHOOSE YOUR ADVENTURE',
      titleA: 'Available',
      titleB: 'Rooms',
      hint: 'Every room is a world full of secrets.',
      items: [
        { title: 'Saw', sub: 'Can you escape?' },
        { title: 'Carnevale', sub: 'Mystery awaits you' },
        { title: 'HOSTAGE II', sub: 'Time is running out' },
      ],
    },
    social: {
      eyebrow: 'Our Community',
      titleA: 'Share Your ',
      titleB: 'Fear',
      subtitle: 'Interact with us on social media',
      rateBtn: 'Rate us on Google',
    },
    cta: {
      pre: 'Do you ',
      mid: 'dare',
      post: '?',
      sub: 'Real escape experience, different rooms, one hour, shared decision',
      btn: 'Book your adventure now',
    },
    footer: {
      desc: 'The only real escape room experience. One room. One hour. One choice.',
      contact: 'Contact us',
      follow: 'Follow',
      city: 'Nablus',
    },
  },
};

/* ============================================================
   STATE
   ============================================================ */
const state = {
  lang: 'ar',
  openFaq: 0,
  expIdx: 0,
  soundOn: false,
};

/* ============================================================
   ASSETS
   ============================================================ */
const EXP_IMAGES = [
  'assets/exp-2.jpeg',
  'assets/family.jpeg',
  ['assets/co1.jpeg', 'assets/co2.jpeg', 'assets/co3.jpeg'],
  'assets/exp-4.jpeg',
];

const GALLERY_IMAGES = [
  'assets/screenshot-2026-05-11-110423.png',
  'assets/whatsapp-image-2026-05-09-at-7-20-09-pm.jpeg',
  'assets/gallery-3.jpeg',
  'assets/hero-bg.jpg',
];

const POSTS = [
  {
    id: 1,
    platform: 'instagram',
    user: '@exit.escape',
    content_ar: 'أقوى تجربة هروب! حليتوا اللغز؟',
    content_en: 'Best escape experience ever! Did you solve the puzzle?',
    image: 'assets/social-1.png',
    likes: '1.2k',
  },
  {
    id: 2,
    platform: 'facebook',
    user: 'Exit Escape Room',
    content_ar: 'مين بيقدر يهرب في أقل من 60 دقيقة؟ منشن فريقك.',
    content_en: 'Who can escape in under 60 minutes? Tag your team.',
    image: 'assets/social-2.png',
    likes: '850',
  },
  {
    id: 3,
    platform: 'instagram',
    user: '@horror_fan',
    content_ar: 'الأجواء خرافية والرعب حقيقي! انصح بالزيارة.',
    content_en: 'The atmosphere is incredible and the horror is real! Highly recommend.',
    image: 'assets/social-3.png',
    likes: '450',
  },
  {
    id: 4,
    platform: 'facebook',
    user: 'أحمد علي',
    content_ar: 'تجربة رهيبة، الألغاز ذكية جداً والقصة مشوقة.',
    content_en: 'Amazing experience — clever puzzles and a gripping story.',
    image: 'assets/social-4.png',
    likes: '300',
  },
];

/* ============================================================
   HELPERS
   ============================================================ */
function t() { return translations[state.lang]; }

function q(sel) { return document.querySelector(sel); }
function qa(sel) { return document.querySelectorAll(sel); }

function getKey(obj, path) {
  return path.split('.').reduce((o, k) => (o != null ? o[k] : undefined), obj);
}

/* ============================================================
   APPLY LANGUAGE (translations + dir)
   ============================================================ */
function applyLang() {
  const tr = t();

  document.documentElement.lang = state.lang;
  document.documentElement.dir = tr.dir;
  q('#app').setAttribute('dir', tr.dir);

  document.body.style.fontFamily = state.lang === 'ar'
    ? "'Tajawal', system-ui, sans-serif"
    : "'Inter', 'Tajawal', system-ui, sans-serif";

  // Static text elements
  qa('[data-i18n]').forEach(el => {
    const val = getKey(tr, el.dataset.i18n);
    if (val !== undefined) el.textContent = val;
  });

  // Dynamic rendered sections
  renderHeroStats();
  renderFaq();
  renderExpTabs();
  renderExpContent(false);
  renderGallery();
  renderSocialPosts();
}

/* ============================================================
   HERO STATS
   ============================================================ */
function renderHeroStats() {
  const container = q('#hero-stats');
  if (!container) return;
  container.innerHTML = t().hero.stats
    .map(s => `<div class="stat-item">
      <div class="stat-value text-neon">${s.v}</div>
      <div class="stat-label">${s.l}</div>
    </div>`)
    .join('');
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function renderFaq() {
  const container = q('#how');
  if (!container) return;

  container.innerHTML = t().faq.items
    .map((f, i) => `
      <div class="faq-item${state.openFaq === i ? ' faq-open' : ''}" data-faq="${i}">
        ${state.openFaq === i ? '<div class="faq-active-bg"></div>' : ''}
        <div class="faq-header">
          <div class="faq-header-left">
            <span class="faq-num${state.openFaq === i ? ' text-neon' : ' text-muted'}">0${i + 1}</span>
            <h3 class="faq-title-text">${f.title}</h3>
          </div>
          <svg class="icon faq-chevron${state.openFaq === i ? ' text-neon' : ' text-muted'}"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
        <div class="faq-body${state.openFaq === i ? ' faq-body-open' : ''}">
          <div class="faq-body-inner">
            <p class="faq-text">${f.body}</p>
          </div>
        </div>
      </div>`)
    .join('');

  container.querySelectorAll('.faq-item').forEach(el => {
    el.addEventListener('click', () => {
      const i = parseInt(el.dataset.faq, 10);
      state.openFaq = state.openFaq === i ? null : i;
      renderFaq();
    });
  });
}

/* ============================================================
   EXPERIENCE SECTION
   ============================================================ */
function renderExpTabs() {
  const container = q('#exp-tabs');
  if (!container) return;

  container.innerHTML = t().exp.tabs
    .map((tab, i) => `
      <button class="exp-tab-btn${i === state.expIdx ? ' active' : ''}" data-exp="${i}">
        ${tab.label}
      </button>`)
    .join('');

  container.querySelectorAll('.exp-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.expIdx = parseInt(btn.dataset.exp, 10);
      renderExpTabs();
      renderExpContent(true);
      restartExpRotation();
    });
  });
}

let coInterval = null;

function renderExpContent(animate) {
  const tabs = t().exp.tabs;
  const idx = state.expIdx;
  const img = q('#exp-img');
  const label = q('#exp-label');
  const desc = q('#exp-desc');
  const dots = q('#exp-dots');
  const now = q('#exp-now-label');
  const grid = q('#exp-img-grid');

  const content = EXP_IMAGES[idx];

  // Clear previous slideshow interval
  if (coInterval) {
    clearInterval(coInterval);
    coInterval = null;
  }

  if (img && grid) {
    if (Array.isArray(content)) {
      // Companies tab (show grid)
      img.style.display = 'none';
      grid.style.display = 'grid';
      
      grid.innerHTML = content.map(src => 
        `<img src="${src}" class="exp-grid-img" loading="lazy" onclick="selectCompanyImg('${src}')">`
      ).join('');
      
    } else {
      // Normal tab (show single image)
      grid.style.display = 'none';
      img.style.display = 'block';
      
      if (animate) {
        img.style.opacity = '0';
        setTimeout(() => {
          img.src = content;
          img.alt = tabs[idx].label;
          img.style.opacity = '1';
        }, 200);
      } else {
        img.src = content;
        img.alt = tabs[idx].label;
        img.style.opacity = '1';
      }
    }
  }

  if (label) label.textContent = tabs[idx].label;
  if (desc) desc.textContent = tabs[idx].desc;
  if (now) now.textContent = t().exp.now;

  if (dots) {
    dots.innerHTML = tabs
      .map((_, i) => `<span class="exp-dot${i === idx ? ' active' : ''}"></span>`)
      .join('');
  }
}

// Global function for click handler
window.selectCompanyImg = function(src) {
  const img = q('#exp-img');
  const grid = q('#exp-img-grid');
  if (img && grid) {
    img.src = src;
    img.style.display = 'block';
    img.style.opacity = '1';
    grid.style.display = 'none';
  }
};

let expInterval = null;

function startExpRotation() {
  expInterval = setInterval(() => {
    state.expIdx = (state.expIdx + 1) % t().exp.tabs.length;
    renderExpTabs();
    renderExpContent(true);
  }, 4000);
}

function restartExpRotation() {
  clearInterval(expInterval);
  startExpRotation();
}

/* ============================================================
   GALLERY
   ============================================================ */
function renderGallery() {
  const container = q('#gallery-grid');
  if (!container) return;

  container.innerHTML = t().gallery.items
    .map((g, i) => `
      <div class="gallery-item">
        <img src="${GALLERY_IMAGES[i]}" alt="${g.title}" class="gallery-img" loading="lazy">
        <div class="gallery-overlay"></div>
        <div class="gallery-hover-glow"></div>
        <div class="gallery-info">
          <div class="gallery-item-title text-neon">${g.title}</div>
          <div class="gallery-item-sub">${g.sub}</div>
        </div>
      </div>`)
    .join('');
}

/* ============================================================
   SOCIAL POSTS
   ============================================================ */
const IG_SVG = `<svg class="icon text-neon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
</svg>`;

const FB_SVG = `<svg class="icon text-neon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
</svg>`;

function postCard(post) {
  const isAr = state.lang === 'ar';
  const content = isAr ? post.content_ar : post.content_en;
  const icon = post.platform === 'instagram' ? IG_SVG : FB_SVG;
  return `
    <div class="post-card">
      <div class="post-header">
        <div class="post-user-info">
          <div class="post-avatar">${post.user.substring(0, 2)}</div>
          <div>
            <div class="post-username">${post.user}</div>
            <div class="post-platform">${post.platform}</div>
          </div>
        </div>
        ${icon}
      </div>
      <img src="${post.image}" alt="post" class="post-image" loading="lazy">
      <p class="post-content ${isAr ? 'text-right' : 'text-left'}">${content}</p>
      <div class="post-footer">
        <span>❤️ ${post.likes}</span>
        <span>💬 Reply</span>
      </div>
    </div>`;
}

function renderSocialPosts() {
  const doubled = [...POSTS, ...POSTS];
  const left = q('#social-col-left');
  const right = q('#social-col-right');
  const mobile = q('#social-mobile');

  if (left) left.innerHTML = doubled.map(postCard).join('');
  if (right) right.innerHTML = doubled.map(postCard).join('');
  if (mobile) mobile.innerHTML = POSTS.map(postCard).join('');
}



/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
function initLang() {
  ['lang-btn', 'lang-btn-mobile'].forEach(id => {
    const btn = q('#' + id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      state.lang = state.lang === 'ar' ? 'en' : 'ar';
      applyLang();
    });
  });
}

/* ============================================================
   FOOTER YEAR
   ============================================================ */
function setYear() {
  const el = q('#year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const btn = q('#hamburger-btn');
  const menu = q('#mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setYear();
  applyLang();
  initLang();
  initMobileMenu();
  startExpRotation();
});
