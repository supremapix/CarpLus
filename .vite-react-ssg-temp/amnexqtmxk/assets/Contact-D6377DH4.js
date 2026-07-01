import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import "react";
import "react-router-dom";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
function Contact() {
  const __seo = useSEO({
    title: "Contato – Carplus Pneus e Oficina no Portão, Curitiba",
    description: "Fale com a Carplus Centro Automotivo: (41) 3082-7282, WhatsApp e endereço na Av. Arthur da Silva Bernardes, 1323 – Portão, Curitiba. Orçamento de pneus e serviços.",
    canonical: "https://www.carpluspneuseoficina.com.br/contato",
    ogImage: "https://www.carpluspneuseoficina.com.br/og-carplus.webp",
    keywords: ["contato Carplus", "telefone oficina Curitiba", "WhatsApp pneus Curitiba", "orçamento pneus Portão"]
  });
  return /* @__PURE__ */ jsxs("div", { className: "bg-white min-h-screen", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-[130px] pb-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-6xl mb-4", children: [
          "Entre em ",
          /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Contato" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-500", children: "Agende sua revisão ou peça um orçamento de pneus agora mesmo." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-dark text-white p-12 rounded-[40px] shadow-2xl", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl mb-8", children: "Dados de Atendimento" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(Phone, { className: "text-primary", size: 28 }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold text-xl", children: "(41) 3082-7282" }),
                /* @__PURE__ */ jsx("p", { className: "text-white/50", children: "Telefone Fixo" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(MessageSquare, { className: "text-primary", size: 28 }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold text-xl", children: "(41) 3082-7282" }),
                /* @__PURE__ */ jsx("p", { className: "text-white/50", children: "WhatsApp Comercial" }),
                /* @__PURE__ */ jsx("a", { href: "https://wa.me/554130827282", className: "text-primary underline mt-2 block font-bold", children: "Iniciar conversa no WhatsApp" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "text-primary", size: 28 }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold text-xl", children: "Av. Arthur da Silva Bernardes, 1323" }),
                /* @__PURE__ */ jsx("p", { className: "text-white/50", children: "Portão, Curitiba - PR" }),
                /* @__PURE__ */ jsx("a", { href: "https://maps.app.goo.gl/75ZjiqbsPe9QWrPs7", className: "text-primary underline mt-2 block font-bold", children: "Abrir no Google Maps" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(Clock, { className: "text-primary", size: 28 }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold text-xl italic uppercase", children: "Horário de Funcionamento" }),
                /* @__PURE__ */ jsx("p", { className: "text-white/50", children: "Segunda a Sexta: 08:00 às 18:00" }),
                /* @__PURE__ */ jsx("p", { className: "text-white/50", children: "Sábado: 08:00 às 12:00" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "h-full", children: /* @__PURE__ */ jsx(
          "iframe",
          {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.240580658666!2d-49.30287292373215!3d-25.46364093422533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce31ec1ad6641%3A0xa51067e0d7b484af!2sCarplus%20Pneus%20e%20Oficina%20Mec%C3%A2nica!5e0!3m2!1spt-BR!2sbr!4v1779235735934!5m2!1spt-BR!2sbr",
            width: "100%",
            height: "100%",
            style: { border: 0, borderRadius: "40px", minHeight: "500px" },
            allowFullScreen: true,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Contact as default
};
