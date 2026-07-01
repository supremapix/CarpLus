import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import "lucide-react";
import "react";
import "react-router-dom";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
function ReturnPolicy() {
  const __seo = useSEO({
    title: "Trocas, Devoluções e Garantia | Carplus Pneus Curitiba",
    description: "Política de trocas, devoluções e garantia da Carplus Centro Automotivo: garantia de fábrica nos pneus e 90 dias nos serviços de oficina, conforme o CDC.",
    canonical: "https://www.carpluspneuseoficina.com.br/trocas-e-devolucoes",
    ogImage: "https://www.carpluspneuseoficina.com.br/og-carplus.webp"
  });
  return /* @__PURE__ */ jsxs("div", { className: "bg-white min-h-screen", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "pt-32 md:pt-36 pb-24 max-w-4xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl mb-8", children: "Política de Devolução e Garantia" }),
      /* @__PURE__ */ jsxs("div", { className: "prose prose-lg text-gray-600 space-y-6", children: [
        /* @__PURE__ */ jsx("p", { children: "A Carplus Centro Automotivo preza pela transparência e satisfação total dos nossos clientes de Curitiba e região." }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-dark", children: "1. Garantia de Pneus" }),
        /* @__PURE__ */ jsx("p", { children: "Todos os pneus vendidos (Pirelli, Michelin, Goodyear, etc.) possuem garantia de fábrica contra defeitos de fabricação pelo período estipulado pelo fabricante (geralmente 5 anos). A garantia não cobre danos causados por mau uso, cortes, bolhas por impacto ou falta de alinhamento." }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-dark", children: "2. Garantia de Serviços" }),
        /* @__PURE__ */ jsx("p", { children: "Nossos serviços de oficina (suspensão, freios, motor) possuem garantia de 90 dias conforme o Código de Defesa do Consumidor, ou conforme especificado na nota fiscal para peças específicas." }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-dark", children: "3. Trocas de Peças" }),
        /* @__PURE__ */ jsx("p", { children: "Peças não instaladas podem ser trocadas em até 7 dias, desde que estejam na embalagem original e sem marcas de tentativa de instalação." }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-dark", children: "4. Processo de Acionamento" }),
        /* @__PURE__ */ jsx("p", { children: "Para acionar qualquer garantia, você deve trazer o veículo à nossa unidade no Portão com o comprovante de compra ou ordem de serviço original." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ReturnPolicy as default
};
