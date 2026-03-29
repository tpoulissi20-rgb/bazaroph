/* ============================================================
   ANIVERSE HUB — app.js
   Données + toute la logique interactive
   ============================================================ */

"use strict";

/* ════════════════════════════════════════════════════════════
   1. BASE DE DONNÉES DES SITES
   ════════════════════════════════════════════════════════════ */
const SITES = [

  /* ─── ANIME ─────────────────────────────────────────── */
  {
    id: 1,
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com/fr",
    shortUrl: "crunchyroll.com",
    type: "anime",
    vostfr: true, vf: false, free: true,
    desc: "La référence mondiale du streaming anime légal. Simulcast japonais, immense bibliothèque, gratuit avec publicités.",
    tags: ["simulcast", "légal", "HD", "VOSTFR"],
    lang: "FR / EN / JP",
    thumb: "crunchyroll_gfm7.jpg",
    featured: true
  },
  {
    id: 2,
    name: "ADN",
    url: "https://animedigitalnetwork.fr",
    shortUrl: "animedigitalnetwork.fr",
    type: "anime",
    vostfr: true, vf: true, free: true,
    desc: "Anime Digital Network, plateforme française légale. Simulcast, VOSTFR et VF disponibles. Quelques épisodes gratuits.",
    tags: ["simulcast", "légal", "VOSTFR", "VF", "français"],
    lang: "FR",
    thumb: "ADN.png",
    featured: true
  },
    
  {
    id: 4,
    name: "FRanime",
    url: "https://franime.fr",
    shortUrl: "franime.fr",
    type: "anime",
    vostfr: true, vf: false, free: true,
    desc: "Catalogue complet en VOSTFR, bien organisé par genres, saisons et années de sortie.",
    tags: ["VOSTFR", "gratuit", "complet", "genres"],
    lang: "FR",
    thumb: "franime.png",
    featured: false
  },
  {
    id: 5,
    name: "9anime",
    url: "https://9animetv.to",
    shortUrl: "9animetv.to",
    type: "anime",
    vostfr: false, vf: false, free: true,
    desc: "Référence internationale en anglais. Catalogue massif avec plusieurs serveurs de lecture en HD.",
    tags: ["VOSTA", "HD", "multi-serveurs", "complet"],
    lang: "EN",
    thumb: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
    featured: false
  },
  {
    id: 6,
    name: "Aniwatch",
    url: "https://aniwatch.to",
    shortUrl: "aniwatch.to",
    type: "anime",
    vostfr: false, vf: false, free: true,
    desc: "Interface premium, lecteur rapide, sans création de compte. Catalogue à jour avec les nouvelles saisons.",
    tags: ["VOSTA", "HD", "sans inscription", "rapide"],
    lang: "EN",
    thumb: "anime_watch.png",
    featured: false
  },
  {
    id: 7,
    name: "Voiranime",
    url: "https://voiranime.com",
    shortUrl: "voiranime.com",
    type: "anime",
    vostfr: true, vf: true, free: true,
    desc: "Portail francophone très fourni. Streaming sans téléchargement, catalogue régulièrement enrichi.",
    tags: ["VOSTFR", "VF", "portail", "streaming"],
    lang: "FR",
    thumb: "voiranime.jpg",
    featured: false
  },
  {
    id: 8,
    name: "AnimeSultra",
    url: "https://ww.animesultra.org",
    shortUrl: "animesultra.org",
    type: "anime",
    vostfr: true, vf: true, free: true,
    desc: "Site français avec bonne sélection en VOSTFR et VF. Mise à jour régulière avec les nouvelles saisons.",
    tags: ["VOSTFR", "VF", "français"],
    lang: "FR",
    thumb: "animeultra.png",

        featured: false
  },

  /* ─── WEBTOON ────────────────────────────────────────── */
  {
    id: 9,
    name: "Webtoon Officiel",
    url: "https://www.webtoons.com/fr/",
    shortUrl: "webtoons.com",
    type: "webtoon",
    vostfr: false, vf: false, free: true,
    desc: "Plateforme officielle NAVER. Catalogue légal en français et anglais, webtoons originaux et traductions. 100% légal.",
    tags: ["officiel", "légal", "gratuit", "français", "original"],
    lang: "FR / EN",
    thumb: "webtoon.png",
    featured: true
  },
  {
    id: 10,
    name: "MangaPlus",
    url: "https://mangaplus.shueisha.co.jp/",
    shortUrl: "mangaplus.shueisha.co.jp",
    type: "webtoon",
    vostfr: false, vf: false, free: true,
    desc: "Service officiel de Shueisha. Lecture légale gratuite en simultané avec le Japon (One Piece, Dragon Ball…).",
    tags: ["officiel", "légal", "simulcast", "Shueisha"],
    lang: "FR / EN",
    thumb: "mangaplus.png",
    featured: false
  },
  {
    id: 11,
    name: "Tapas",
    url: "https://tapas.io",
    shortUrl: "tapas.io",
    type: "webtoon",
    vostfr: false, vf: false, free: true,
    desc: "Plateforme anglophone de webtoons et comics indépendants. Beaucoup de contenu gratuit créé par des artistes.",
    tags: ["indépendant", "comics", "artistes", "anglais"],
    lang: "EN",
    thumb: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&q=80",
    featured: false
  },
  {
    id: 12,
    name: "Lezhin Comics",
    url: "https://www.lezhinus.com/en",
    shortUrl: "lezhinus.com",
    type: "webtoon",
    vostfr: false, vf: false, free: true,
    desc: "Plateforme de webtoons coréens premium. Manhwa de qualité, certains contenus accessibles gratuitement.",
    tags: ["manhwa", "coréen", "premium", "freemium"],
    lang: "EN / KR",
    thumb: "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=600&q=80",
    featured: false
  },
  {
    id: 13,
    name: "scan mangas",
    url: "https://www.scan-manga.com/?po",
    shortUrl: "scan-manga.com/?po",
    type: "webtoon",
    vostfr: true, vf: false, free: true,
    desc: "Site communautaire francophone. Traductions fanmade de manhwas populaires en français.",
    tags: ["fanmade", "traductions FR", "manhwa", "communauté"],
    lang: "FR",
    thumb: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    featured: false
  },

  /* ─── MANGA ──────────────────────────────────────────── */
  {
    id: 14,
    name: "MangaDex",
    url: "https://mangadex.org",
    shortUrl: "mangadex.org",
    type: "manga",
    vostfr: true, vf: true, free: true,
    desc: "La plus grande plateforme communautaire de lecture manga. Traductions dans +40 langues dont le français.",
    tags: ["communautaire", "multi-langue", "VOSTFR", "VF", "gratuit"],
    lang: "FR / EN / +40",
    thumb: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
    featured: true
  },
  {
    id: 15,
    name: "Scan VF",
    url: "https://www.scan-vf.net",
    shortUrl: "scan-vf.net",
    type: "manga",
    vostfr: false, vf: true, free: true,
    desc: "Lecture en ligne de mangas en VF. Catalogue massif, mise à jour rapide des nouvelles sorties.",
    tags: ["VF", "scan", "gratuit", "français"],
    lang: "FR",
    thumb: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&q=80",
    featured: false
  },
  {
    id: 16,
    name: "MangaLib",
    url: "https://mangalib.me",
    shortUrl: "mangalib.me",
    type: "manga",
    vostfr: false, vf: false, free: true,
    desc: "Grande bibliothèque manga & manhwa en anglais et russe. Interface moderne, organisation par genres.",
    tags: ["manga", "manhwa", "bibliothèque", "EN/RU"],
    lang: "EN / RU",
    thumb: "mangalib.png",
    featured: false
  },

  /* ─── MULTI ──────────────────────────────────────────── */
  {
    id: 17,
    name: "Animension",
    url: "https://animension.fr",
    shortUrl: "animension.fr",
    type: "both",
    vostfr: true, vf: true, free: true,
    desc: "Portail français multi-contenu : anime, manga et webtoon réunis. Interface moderne, mise à jour quotidienne.",
    tags: ["anime", "manga", "webtoon", "français", "multi"],
    lang: "FR",
    thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    featured: false
  },
  {
    id: 18,
    name: "Otakufr",
    url: "https://www.otakufr.org",
    shortUrl: "otakufr.org",
    type: "both",
    vostfr: true, vf: true, free: true,
    desc: "Communauté francophone otaku. Streaming anime + lecture de manga, actualités et forums.",
    tags: ["communauté", "anime", "manga", "VOSTFR"],
    lang: "FR",
    thumb: "otakufr.png",
    featured: false
  }
];

/* ════════════════════════════════════════════════════════════
   2. ÉTAT DE L'APPLICATION
   ════════════════════════════════════════════════════════════ */
const state = {
  filter: "all",       // filtre actif
  search: "",          // recherche
  heroIndex: 0,        // slide hero actif
  heroTimer: null      // setInterval hero
};

/* ════════════════════════════════════════════════════════════
   3. SÉLECTEURS DOM
   ════════════════════════════════════════════════════════════ */
const DOM = {
  cardsGrid:    () => document.getElementById("cardsGrid"),
  visibleCount: () => document.getElementById("visibleCount"),
  heroSlides:   () => document.getElementById("heroSlides"),
  heroDots:     () => document.getElementById("heroDots"),
  filterTabs:   () => document.querySelectorAll("[data-filter]"),
  navSearch:    () => document.getElementById("navSearch"),
  toast:        () => document.getElementById("toastNotif"),
  toastMsg:     () => document.getElementById("toastMsg"),
  ublockBanner: () => document.getElementById("ublockBanner"),
  tabCounts:    () => document.querySelectorAll(".tab-count[data-type]")
};

/* ════════════════════════════════════════════════════════════
   4. FILTRAGE DES SITES
   ════════════════════════════════════════════════════════════ */
function getFiltered() {
  return SITES.filter(s => {
    // filtre de catégorie
    const matchCat =
      state.filter === "all"    ||
      state.filter === s.type   ||
      (state.filter === "vostfr" && s.vostfr) ||
      (state.filter === "vf"     && s.vf);

    // filtre de recherche
    const q = state.search.toLowerCase();
    const matchQ = !q ||
      s.name.toLowerCase().includes(q)  ||
      s.desc.toLowerCase().includes(q)  ||
      s.tags.some(t => t.toLowerCase().includes(q)) ||
      s.lang.toLowerCase().includes(q);

    return matchCat && matchQ;
  });
}

/* ════════════════════════════════════════════════════════════
   5. HELPERS BADGES
   ════════════════════════════════════════════════════════════ */
const TYPE_LABEL = { anime:"Anime", webtoon:"Webtoon", manga:"Manga", both:"Multi" };
const TYPE_CLASS = { anime:"badge-anime", webtoon:"badge-webtoon", manga:"badge-manga", both:"badge-both" };

/* ════════════════════════════════════════════════════════════
   6. RENDU DES CARTES
   ════════════════════════════════════════════════════════════ */
function renderCards() {
  const filtered = getFiltered();
  const grid     = DOM.cardsGrid();
  const count    = DOM.visibleCount();

  // Mise à jour du compteur
  if (count) count.textContent = `${filtered.length} site${filtered.length !== 1 ? "s" : ""}`;

  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <p>Aucun site trouvé pour "<strong>${state.search || state.filter}</strong>"</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map((s, i) => `
    <div class="site-card"
         style="animation-delay:${Math.min(i * 0.05, 0.4)}s"
         onclick="visitSite('${s.url}', '${s.name}')">

      <div class="card-thumb">
        <img src="${s.thumb}" alt="${s.name}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=60'">
        <span class="card-badge-type ${TYPE_CLASS[s.type]}">
          ${TYPE_LABEL[s.type]}
        </span>
        ${s.free ? `<span class="card-badge-free"><i class="fas fa-check-circle"></i> FREE</span>` : ""}
      </div>

      <div class="card-body">
        <div class="card-name">${s.name}</div>
        <div class="card-url"><i class="fas fa-link" style="margin-right:4px;opacity:.5;font-size:.6rem;"></i>${s.shortUrl}</div>
        <p class="card-desc">${s.desc}</p>
        <div class="card-tags">
          ${s.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="card-footer">
          <span class="card-lang">
            <i class="fas fa-language"></i> ${s.lang}
          </span>
          <a class="btn-visit"
             href="${s.url}"
             target="_blank"
             rel="noopener noreferrer"
             onclick="event.stopPropagation(); showToast('Ouverture de ${s.name}...')">
            <i class="fas fa-external-link-alt"></i> Visiter
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

/* ════════════════════════════════════════════════════════════
   7. COMPTEURS DANS LES ONGLETS
   ════════════════════════════════════════════════════════════ */
function updateTabCounts() {
  DOM.tabCounts().forEach(el => {
    const type = el.dataset.type;
    let count;
    if (type === "all")    count = SITES.length;
    else if (type === "vostfr") count = SITES.filter(s => s.vostfr).length;
    else if (type === "vf")     count = SITES.filter(s => s.vf).length;
    else count = SITES.filter(s => s.type === type).length;
    el.textContent = count;
  });
}

/* ════════════════════════════════════════════════════════════
   8. HERO CAROUSEL
   ════════════════════════════════════════════════════════════ */
const FEATURED = SITES.filter(s => s.featured);
const HERO_TYPE_CLASS = { anime:"anime", webtoon:"webtoon", manga:"manga", both:"both" };

function buildHero() {
  const container = DOM.heroSlides();
  const dotsWrap  = DOM.heroDots();
  if (!container || !dotsWrap) return;

  // slides
  container.innerHTML = FEATURED.map((s, i) => `
    <div class="hero-slide${i === 0 ? " active" : ""}" data-hero="${i}">
      <div class="hero-slide-bg"
           style="background-image:url('${s.thumb}')"></div>
      <div class="hero-slide-content">
        <div class="container">
          <span class="hero-type-badge ${HERO_TYPE_CLASS[s.type]}">
            <i class="fas fa-${s.type === 'anime' ? 'play' : s.type === 'webtoon' ? 'book-open' : 'book'}"></i>
            ${TYPE_LABEL[s.type]}
          </span>
          <h1 class="hero-title">${s.name}</h1>
          <p class="hero-desc">${s.desc}</p>
          <div class="hero-actions">
            <a class="btn-hero-visit"
               href="${s.url}"
               target="_blank"
               rel="noopener noreferrer"
               onclick="showToast('Ouverture de ${s.name}...')">
              <i class="fas fa-external-link-alt"></i>
              Visiter le site
            </a>
            <button class="btn-hero-info"
                    onclick="filterByType('${s.type}')">
              <i class="fas fa-th-large"></i>
              Voir similaires
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // dots
  dotsWrap.innerHTML = FEATURED.map((_, i) => `
    <button class="hero-dot${i === 0 ? " active" : ""}"
            onclick="goToSlide(${i})"
            aria-label="Slide ${i + 1}"></button>
  `).join("");

  startHeroTimer();
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots   = document.querySelectorAll(".hero-dot");
  if (!slides.length) return;

  slides[state.heroIndex]?.classList.remove("active");
  dots[state.heroIndex]?.classList.remove("active");

  state.heroIndex = (index + FEATURED.length) % FEATURED.length;

  slides[state.heroIndex]?.classList.add("active");
  dots[state.heroIndex]?.classList.add("active");
}

function startHeroTimer() {
  clearInterval(state.heroTimer);
  state.heroTimer = setInterval(() => goToSlide(state.heroIndex + 1), 5000);
}

/* boutons fléchés */
function heroNext() { goToSlide(state.heroIndex + 1); startHeroTimer(); }
function heroPrev() { goToSlide(state.heroIndex - 1); startHeroTimer(); }

/* ════════════════════════════════════════════════════════════
   9. FILTRES / NAVIGATION
   ════════════════════════════════════════════════════════════ */
function setFilter(filter) {
  state.filter = filter;
  DOM.filterTabs().forEach(el => {
    el.classList.toggle("active", el.dataset.filter === filter);
  });
  renderCards();
}

function filterByType(type) {
  setFilter(type);
  document.getElementById("mainContent")?.scrollIntoView({ behavior: "smooth" });
}

/* ════════════════════════════════════════════════════════════
   10. RECHERCHE
   ════════════════════════════════════════════════════════════ */
let searchDebounce;
function initSearch() {
  const input = DOM.navSearch();
  if (!input) return;
  input.addEventListener("input", () => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      state.search = input.value.trim();
      renderCards();
    }, 280);
  });
}

/* ════════════════════════════════════════════════════════════
   11. VISITE D'UN SITE
   ════════════════════════════════════════════════════════════ */
function visitSite(url, name) {
  showToast(`↗ Redirection vers ${name}…`);
  setTimeout(() => window.open(url, "_blank", "noopener,noreferrer"), 350);
}

/* ════════════════════════════════════════════════════════════
   12. TOAST NOTIFICATION
   ════════════════════════════════════════════════════════════ */
let toastTimer;
function showToast(msg) {
  const toast = DOM.toast();
  const msgEl = DOM.toastMsg();
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

/* ════════════════════════════════════════════════════════════
   13. BANNIÈRE UBLOCK
   ════════════════════════════════════════════════════════════ */
function closeUblockBanner() {
  const banner = DOM.ublockBanner();
  if (banner) {
    banner.style.transition = "opacity 0.35s, max-height 0.4s";
    banner.style.opacity = "0";
    banner.style.maxHeight = "0";
    banner.style.overflow = "hidden";
    banner.style.marginBottom = "0";
    banner.style.padding = "0";
    setTimeout(() => banner.remove(), 420);
  }
}

/* ════════════════════════════════════════════════════════════
   14. INITIALISATION GÉNÉRALE
   ════════════════════════════════════════════════════════════ */
function init() {
  buildHero();
  updateTabCounts();
  renderCards();
  initSearch();

  // Événements filtres (onclick défini en HTML via data-filter)
  DOM.filterTabs().forEach(el => {
    el.addEventListener("click", () => setFilter(el.dataset.filter));
  });
}

// Lancement au chargement du DOM
document.addEventListener("DOMContentLoaded", init);
