import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FileText, CircleCheck, Copy, TriangleAlert, ChartBar, ListFilter, Search, ExternalLink } from "lucide-react";
import { getSeoStats, getAllTireDecisions, MIN_PRODUCT_WORDS } from "./seoIndexing-wgbeegp_.js";
import { g as generateTireContent } from "./tireContent-Bdt-G5Xg.js";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import "./tire-catalog-f1Gw3RQz.js";
import "../main.mjs";
import "vite-react-ssg";
import "react-helmet-async";
const REASON_LABEL = {
  duplicate: "Variante duplicada",
  "low-score": "Score SEO baixo",
  "thin-content": "Conteúdo fino"
};
function AdminSeoDashboard() {
  const __seo = useSEO({
    title: "Dashboard SEO | Carplus (Admin)",
    description: "Painel interno de monitoramento de indexação.",
    noindex: true,
    canonical: "https://www.carpluspneuseoficina.com.br/admin/seo"
  });
  const [filter, setFilter] = useState("duplicate");
  const [query, setQuery] = useState("");
  const stats = useMemo(() => getSeoStats(), []);
  const decisions = useMemo(() => getAllTireDecisions(), []);
  const thinSlugs = useMemo(() => {
    const set = /* @__PURE__ */ new Set();
    for (const d of decisions) {
      if (!d.decision.index) continue;
      const wc = generateTireContent(d.tire).wordCount + (d.tire.descricao || "").split(/\s+/).length;
      if (wc < MIN_PRODUCT_WORDS) set.add(d.tire.slug);
    }
    return set;
  }, [decisions]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return decisions.filter((d) => {
      if (filter === "indexable" && !d.decision.index) return false;
      if (filter === "duplicate" && !d.decision.reasons.includes("duplicate")) return false;
      if (filter === "low-score" && !d.decision.reasons.includes("low-score")) return false;
      if (filter === "thin" && !thinSlugs.has(d.tire.slug)) return false;
      if (q && !d.tire.nome.toLowerCase().includes(q) && !d.tire.slug.toLowerCase().includes(q)) {
        return false;
      }
      return true;
    }).slice(0, 300);
  }, [decisions, filter, query, thinSlugs]);
  const kpis = [
    { label: "URLs de produto", value: stats.total, icon: /* @__PURE__ */ jsx(FileText, { size: 20 }), tone: "neutral" },
    { label: "Indexáveis", value: stats.indexable, icon: /* @__PURE__ */ jsx(CircleCheck, { size: 20 }), tone: "good" },
    { label: "Duplicadas (noindex)", value: stats.duplicates, icon: /* @__PURE__ */ jsx(Copy, { size: 20 }), tone: "warn" },
    { label: "Score baixo (noindex)", value: stats.lowScore, icon: /* @__PURE__ */ jsx(TriangleAlert, { size: 20 }), tone: "warn" },
    { label: "Páginas finas", value: thinSlugs.size, icon: /* @__PURE__ */ jsx(FileText, { size: 20 }), tone: thinSlugs.size > 0 ? "warn" : "good" },
    { label: "Redução de URLs", value: `${stats.reductionPct}%`, icon: /* @__PURE__ */ jsx(ChartBar, { size: 20 }), tone: "good" }
  ];
  const filters = [
    { key: "all", label: "Todas", count: stats.total },
    { key: "indexable", label: "Indexáveis", count: stats.indexable },
    { key: "duplicate", label: "Duplicadas", count: stats.duplicates },
    { key: "low-score", label: "Score baixo", count: stats.lowScore },
    { key: "thin", label: "Conteúdo fino", count: thinSlugs.size }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-dark text-white", children: [
    __seo,
    /* @__PURE__ */ jsx("header", { className: "border-b border-white/10 px-4 md:px-8 py-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-2xl md:text-3xl font-bold uppercase tracking-tight italic", children: [
          "Dashboard ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "SEO" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm mt-1", children: "Monitoramento de indexação inteligente — atualizado em tempo real a partir do catálogo." })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-xs font-bold uppercase tracking-widest text-white/60 hover:text-primary", children: "← Voltar ao site" })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 md:px-8 py-8", children: [
      /* @__PURE__ */ jsx("section", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10", children: kpis.map((k) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white/5 border border-white/10 rounded-2xl p-5",
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `inline-flex p-2 rounded-xl mb-3 ${k.tone === "good" ? "bg-green-500/15 text-green-400" : k.tone === "warn" ? "bg-primary/15 text-primary" : "bg-white/10 text-white/70"}`,
                children: k.icon
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-bold", children: k.value }),
            /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-widest text-white/50 mt-1", children: k.label })
          ]
        },
        k.label
      )) }),
      /* @__PURE__ */ jsxs("section", { className: "bg-white/5 border border-white/10 rounded-2xl p-6 mb-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-bold uppercase tracking-tight mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ListFilter, { size: 18, className: "text-primary" }),
          " Regras de indexação aplicadas"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white/70", children: [
          /* @__PURE__ */ jsx("li", { children: "• Variantes equivalentes (por veículo, -para-*, -run-flat, -oe, -yt, -1..-9) → noindex,follow + canonical para a principal." }),
          /* @__PURE__ */ jsx("li", { children: "• Página canônica com score SEO mínimo e 900+ palavras → index,follow." }),
          /* @__PURE__ */ jsx("li", { children: "• Paginação /pneus?page=2+ e filtros → noindex,follow e fora do sitemap." }),
          /* @__PURE__ */ jsx("li", { children: "• Medidas com menos de 2 opções → noindex (conteúdo fino)." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "flex flex-col md:flex-row md:items-center gap-4 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: filters.map((f) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setFilter(f.key),
            className: `px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${filter === f.key ? "bg-primary text-black" : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"}`,
            children: [
              f.label,
              " ",
              /* @__PURE__ */ jsxs("span", { className: "opacity-60", children: [
                "(",
                f.count,
                ")"
              ] })
            ]
          },
          f.key
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "relative md:ml-auto md:w-72", children: [
          /* @__PURE__ */ jsx(Search, { size: 16, className: "absolute left-3 top-1/2 -translate-y-1/2 text-white/40" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              value: query,
              onChange: (e) => setQuery(e.target.value),
              placeholder: "Buscar por nome ou slug…",
              className: "w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-sm outline-none focus:border-primary"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-white/5 border border-white/10 rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "text-left text-[11px] uppercase tracking-widest text-white/40 border-b border-white/10", children: [
            /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-bold", children: "Produto" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-bold", children: "Status" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-bold", children: "Score" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-bold", children: "Canonical" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: filtered.map((d) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/5 hover:bg-white/5", children: [
            /* @__PURE__ */ jsxs("td", { className: "px-4 py-3", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `/pneu/${d.tire.slug}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "font-medium hover:text-primary inline-flex items-center gap-1",
                  children: [
                    d.tire.nome,
                    " ",
                    /* @__PURE__ */ jsx(ExternalLink, { size: 12, className: "text-white/30" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-white/40 mt-0.5", children: [
                "/pneu/",
                d.tire.slug
              ] })
            ] }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: d.decision.index ? /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-green-400 text-xs font-bold", children: [
              /* @__PURE__ */ jsx(CircleCheck, { size: 14 }),
              " index"
            ] }) : /* @__PURE__ */ jsxs("span", { className: "inline-flex flex-col gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary text-xs font-bold", children: "noindex,follow" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] text-white/40", children: d.decision.reasons.map((r) => REASON_LABEL[r]).join(", ") })
            ] }) }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-3 font-bold", children: d.decision.score }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-[11px] text-white/50", children: d.decision.canonicalSlug === d.tire.slug ? /* @__PURE__ */ jsx("span", { className: "text-white/30", children: "— própria" }) : /* @__PURE__ */ jsxs("span", { children: [
              "/pneu/",
              d.decision.canonicalSlug
            ] }) })
          ] }, d.tire.slug)) })
        ] }) }),
        filtered.length === 0 && /* @__PURE__ */ jsx("div", { className: "px-4 py-12 text-center text-white/40 text-sm", children: "Nenhuma URL encontrada para este filtro." }),
        filtered.length >= 300 && /* @__PURE__ */ jsx("div", { className: "px-4 py-3 text-center text-white/40 text-xs border-t border-white/10", children: "Exibindo as primeiras 300 URLs. Refine a busca para ver mais." })
      ] })
    ] })
  ] });
}
export {
  AdminSeoDashboard as default
};
