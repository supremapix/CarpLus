import { TIRES } from "./tire-catalog-f1Gw3RQz.js";
import { c as BRAND_PAGES, b as ARO_PAGES } from "../main.mjs";
import "vite-react-ssg";
import "react/jsx-runtime";
import "react";
import "react-router-dom";
import "lucide-react";
const BASE_URL = "https://www.carpluspneuseoficina.com.br";
const MIN_PRODUCT_WORDS = 900;
const VEHICLE_TOKENS = [
  "chevrolet",
  "gm",
  "fiat",
  "volkswagen",
  "vw",
  "honda",
  "toyota",
  "hyundai",
  "renault",
  "ford",
  "jeep",
  "nissan",
  "peugeot",
  "citroen",
  "mitsubishi",
  "kia",
  "bmw",
  "audi",
  "mercedes",
  "mini",
  "volvo",
  "land-rover",
  "seat",
  "celta",
  "classic",
  "onix",
  "prisma",
  "cruze",
  "corsa",
  "montana",
  "spin",
  "cobalt",
  "tracker",
  "s10",
  "uno",
  "palio",
  "argo",
  "cronos",
  "mobi",
  "toro",
  "strada",
  "siena",
  "punto",
  "bravo",
  "idea",
  "stilo",
  "tempra",
  "gol",
  "voyage",
  "polo",
  "virtus",
  "golf",
  "jetta",
  "fox",
  "saveiro",
  "up",
  "tcross",
  "t-cross",
  "nivus",
  "amarok",
  "civic",
  "city",
  "fit",
  "hrv",
  "hr-v",
  "wrv",
  "wr-v",
  "corolla",
  "etios",
  "yaris",
  "hilux",
  "sw4",
  "rav4",
  "hb20",
  "hb20s",
  "creta",
  "tucson",
  "ix35",
  "sandero",
  "logan",
  "duster",
  "kwid",
  "captur",
  "oroch",
  "fluence",
  "megane",
  "ka",
  "fiesta",
  "focus",
  "ecosport",
  "ranger",
  "territory",
  "compass",
  "renegade",
  "commander",
  "kicks",
  "versa",
  "march",
  "frontier",
  "206",
  "207",
  "208",
  "2008",
  "3008",
  "308"
];
const VARIANT_SUFFIX_RE = /-(run-flat|runflat|oe|oem|yt|bl|xl|mo|moe|ao|ssr|star)$/i;
const TRAILING_NUMBER_RE = /-\d{1,2}$/;
const PARA_VEICULO_RE = /-para-/i;
const VEHICLE_SUFFIX_RE = new RegExp(
  `-(${VEHICLE_TOKENS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})(-[a-z0-9]+)*$`,
  "i"
);
function specKey(t) {
  return [t.marca, t.medida, t.linha, t.indiceCarga, t.indiceVelocidade].map((s) => (s || "").toString().toLowerCase().replace(/\s+/g, "")).join("|");
}
function variantPenalty(t) {
  const s = t.slug || "";
  let p = 0;
  if (PARA_VEICULO_RE.test(s)) p += 1e3;
  if (VEHICLE_SUFFIX_RE.test(s)) p += 800;
  if (VARIANT_SUFFIX_RE.test(s)) p += 400;
  if (TRAILING_NUMBER_RE.test(s)) p += 300;
  p += s.length * 0.1;
  if (t.destaque) p -= 5;
  return p;
}
let _canonicalMap = null;
function buildCanonicalMap() {
  const groups = /* @__PURE__ */ new Map();
  for (const t of TIRES) {
    if (!t || !t.slug) continue;
    const k = specKey(t);
    const arr = groups.get(k);
    if (arr) arr.push(t);
    else groups.set(k, [t]);
  }
  const map = /* @__PURE__ */ new Map();
  for (const arr of groups.values()) {
    let rep = arr[0];
    let best = variantPenalty(rep);
    for (let i = 1; i < arr.length; i++) {
      const pen = variantPenalty(arr[i]);
      if (pen < best) {
        best = pen;
        rep = arr[i];
      }
    }
    for (const t of arr) map.set(t.slug, rep.slug);
  }
  return map;
}
function canonicalMap() {
  if (!_canonicalMap) _canonicalMap = buildCanonicalMap();
  return _canonicalMap;
}
function getCanonicalSlug(slug) {
  return canonicalMap().get(slug) ?? slug;
}
function isCanonicalSlug(slug) {
  return getCanonicalSlug(slug) === slug;
}
function getCanonicalTireUrl(slug) {
  return `${BASE_URL}/pneu/${getCanonicalSlug(slug)}`;
}
const HIGH_DEMAND_MEASURES = /* @__PURE__ */ new Set([
  "175/70R13",
  "185/60R15",
  "185/65R14",
  "195/55R15",
  "195/60R15",
  "185/65R15",
  "205/55R16",
  "195/65R15",
  "205/45R17",
  "225/45R17",
  "215/50R17",
  "205/60R16"
]);
function computeSeoScore(tire) {
  var _a, _b, _c;
  const descWords = (tire.descricao || "").trim().split(/\s+/).filter(Boolean).length;
  const conteudo = Math.min(30, Math.round(descWords / 4) + Math.min(10, ((_a = tire.carros) == null ? void 0 : _a.length) || 0));
  const estoque = 20;
  let buscas = HIGH_DEMAND_MEASURES.has(tire.medida) ? 18 : 8;
  if (tire.destaque) buscas += 4;
  if (tire.novoModelo) buscas += 3;
  buscas = Math.min(25, buscas);
  const linksInternos = Math.min(
    15,
    (((_b = tire.carros) == null ? void 0 : _b.length) || 0) * 2 + (((_c = tire.tipoVeiculo) == null ? void 0 : _c.length) || 0) * 2
  );
  const cat = (tire.categoria || "").toLowerCase();
  const conversao = /premium|esportivo|suv|performance|conforto/.test(cat) ? 10 : 6;
  const total = conteudo + estoque + buscas + linksInternos + conversao;
  return { conteudo, estoque, buscas, linksInternos, conversao, total };
}
const MIN_SEO_SCORE = 45;
function decideTireIndexing(tire) {
  const canonicalSlug = getCanonicalSlug(tire.slug);
  const isCanonical = canonicalSlug === tire.slug;
  const { total } = computeSeoScore(tire);
  const reasons = [];
  if (!isCanonical) reasons.push("duplicate");
  if (isCanonical && total < MIN_SEO_SCORE) reasons.push("low-score");
  return {
    index: reasons.length === 0,
    canonicalSlug,
    canonicalUrl: `${BASE_URL}/pneu/${canonicalSlug}`,
    reasons,
    score: total
  };
}
function countTiresByMeasure(normalizedMedida) {
  const target = normalizedMedida.replace(/\s/g, "").toUpperCase();
  let n = 0;
  for (const t of TIRES) {
    if (t && t.medida && t.medida.replace(/\s/g, "").toUpperCase() === target) n++;
  }
  return n;
}
function isMeasureIndexable(normalizedMedida) {
  return countTiresByMeasure(normalizedMedida) >= 2;
}
const DOMINANT_THRESHOLD = 0.6;
function topValue(tires, key) {
  const counts = /* @__PURE__ */ new Map();
  for (const t of tires) {
    const v = key(t);
    if (v === void 0 || v === null || v === "") continue;
    counts.set(v, (counts.get(v) || 0) + 1);
  }
  let best = null;
  for (const [value, count] of counts) {
    if (!best || count > best.count) best = { value, count };
  }
  return best;
}
function detectDominantProfile(tires, threshold = DOMINANT_THRESHOLD) {
  const total = tires.length;
  if (total === 0) return null;
  const dims = [
    { type: "marca", pick: (t) => t.marca },
    { type: "aro", pick: (t) => t.aro },
    { type: "categoria", pick: (t) => t.categoria }
  ];
  const candidates = [];
  for (const dim of dims) {
    const top = topValue(tires, dim.pick);
    if (top) {
      candidates.push({ type: dim.type, value: top.value, count: top.count, share: top.count / total });
    }
  }
  const priority = { marca: 3, aro: 2, categoria: 1 };
  const strong = candidates.filter((c) => c.share >= threshold).sort((a, b) => b.share - a.share || priority[b.type] - priority[a.type]);
  return strong[0] ?? null;
}
const CATALOG_PER_PAGE = 24;
const REDIRECT_THRESHOLD = 0.85;
const _brandSlugByName = new Map(
  BRAND_PAGES.map((p) => [p.marca.toLowerCase(), p.slug])
);
const _aroSlugByNumber = new Map(
  ARO_PAGES.map((p) => [p.aro, p.slug])
);
function resolveThematicLanding(profile) {
  if (!profile) return null;
  if (profile.type === "marca") {
    const slug = _brandSlugByName.get(String(profile.value).toLowerCase());
    return slug ? { slug, label: `Pneus ${profile.value} em Curitiba` } : null;
  }
  if (profile.type === "aro") {
    const slug = _aroSlugByNumber.get(Number(profile.value));
    return slug ? { slug, label: `Pneus Aro ${profile.value} em Curitiba` } : null;
  }
  return null;
}
function getDefaultOrderedTires() {
  return TIRES.filter((t) => t && t.slug).slice().sort((a, b) => a.marca.localeCompare(b.marca) || a.aro - b.aro);
}
function analyzePagination() {
  const ordered = getDefaultOrderedTires();
  const totalPages = Math.max(1, Math.ceil(ordered.length / CATALOG_PER_PAGE));
  const out = [];
  for (let page = 2; page <= totalPages; page++) {
    const start = (page - 1) * CATALOG_PER_PAGE;
    const slice = ordered.slice(start, start + CATALOG_PER_PAGE);
    const profile = detectDominantProfile(slice);
    const landing = resolveThematicLanding(profile);
    const redirect = !!landing && !!profile && profile.share >= REDIRECT_THRESHOLD;
    out.push({
      page,
      count: slice.length,
      profile,
      landing,
      robots: "noindex,follow",
      canonical: landing ? `${BASE_URL}/${landing.slug}` : `${BASE_URL}/pneus`,
      redirect
    });
  }
  return out;
}
function getPaginationRedirects() {
  return analyzePagination().filter((p) => p.redirect && p.landing).map((p) => ({
    from: `/pneus?page=${p.page}`,
    toSlug: p.landing.slug,
    to: `${BASE_URL}/${p.landing.slug}`,
    page: p.page
  }));
}
function getPaginationStats() {
  const pages = analyzePagination();
  const totalPaginated = pages.length;
  const consolidated = pages.filter((p) => p.landing).length;
  const redirected = pages.filter((p) => p.redirect).length;
  const noindexOnly = totalPaginated - consolidated;
  const indexableLandings = _brandSlugByName.size + _aroSlugByNumber.size;
  const consolidationRate = totalPaginated > 0 ? consolidated / totalPaginated : 1;
  const indexationRate = Math.round(consolidationRate * 100);
  return {
    totalPaginated,
    consolidated,
    redirected,
    noindexOnly,
    indexableLandings,
    consolidationRate,
    indexationRate,
    lowIndexationAlert: indexationRate < 70
  };
}
function getAllTireDecisions() {
  return TIRES.filter((t) => t && t.slug).map((tire) => ({
    tire,
    decision: decideTireIndexing(tire)
  }));
}
function getIndexableTireSlugs() {
  return getAllTireDecisions().filter((d) => d.decision.index).map((d) => d.tire.slug);
}
function getSeoStats() {
  const all = getAllTireDecisions();
  const total = all.length;
  const indexable = all.filter((d) => d.decision.index).length;
  const duplicates = all.filter((d) => d.decision.reasons.includes("duplicate")).length;
  const lowScore = all.filter((d) => d.decision.reasons.includes("low-score")).length;
  return {
    total,
    indexable,
    duplicates,
    lowScore,
    uniqueProducts: indexable,
    reductionPct: total > 0 ? Math.round((total - indexable) / total * 100) : 0
  };
}
export {
  BASE_URL,
  CATALOG_PER_PAGE,
  DOMINANT_THRESHOLD,
  MIN_PRODUCT_WORDS,
  MIN_SEO_SCORE,
  REDIRECT_THRESHOLD,
  analyzePagination,
  computeSeoScore,
  countTiresByMeasure,
  decideTireIndexing,
  detectDominantProfile,
  getAllTireDecisions,
  getCanonicalSlug,
  getCanonicalTireUrl,
  getDefaultOrderedTires,
  getIndexableTireSlugs,
  getPaginationRedirects,
  getPaginationStats,
  getSeoStats,
  isCanonicalSlug,
  isMeasureIndexable,
  resolveThematicLanding
};
