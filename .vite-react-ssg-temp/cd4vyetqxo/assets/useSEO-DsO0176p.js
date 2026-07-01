import { jsxs, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
const BASE_URL = "https://www.carpluspneuseoficina.com.br";
function Seo({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  keywords = [],
  schemaJSON,
  noindex = false,
  prevUrl,
  nextUrl
}) {
  const fullImage = ogImage ? ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}` : void 0;
  const schemas = schemaJSON ? Array.isArray(schemaJSON) ? schemaJSON : [schemaJSON] : [];
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    /* @__PURE__ */ jsx(
      "meta",
      {
        name: "robots",
        content: noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      }
    ),
    keywords.length > 0 && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords.join(", ") }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: ogType }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Carplus Pneus e Oficina" }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "pt_BR" }),
    canonical && /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonical }),
    fullImage && /* @__PURE__ */ jsx("meta", { property: "og:image", content: fullImage }),
    fullImage && /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
    fullImage && /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    fullImage && /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: fullImage }),
    canonical && /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
    prevUrl && /* @__PURE__ */ jsx("link", { rel: "prev", href: prevUrl }),
    nextUrl && /* @__PURE__ */ jsx("link", { rel: "next", href: nextUrl }),
    schemas.map((schema, i) => /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) }, i))
  ] });
}
function useSEO(props) {
  return /* @__PURE__ */ jsx(Seo, { ...props });
}
export {
  useSEO as u
};
