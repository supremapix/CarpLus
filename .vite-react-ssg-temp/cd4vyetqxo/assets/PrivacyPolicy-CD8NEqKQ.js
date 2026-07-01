import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import "lucide-react";
import "react";
import "react-router-dom";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
function PrivacyPolicy() {
  const __seo = useSEO({
    title: "Política de Privacidade | Carplus Pneus e Oficina Curitiba",
    description: "Saiba como a Carplus Centro Automotivo coleta, usa e protege os dados dos clientes em Curitiba. Política de Privacidade da loja de pneus e oficina no Portão.",
    canonical: "https://www.carpluspneuseoficina.com.br/politica-de-privacidade",
    ogImage: "https://www.carpluspneuseoficina.com.br/og-carplus.webp"
  });
  return /* @__PURE__ */ jsxs("div", { className: "bg-white min-h-screen", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "pt-32 md:pt-36 pb-24 max-w-4xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl mb-8", children: "Política de Privacidade" }),
      /* @__PURE__ */ jsxs("div", { className: "prose prose-lg text-gray-600 space-y-6", children: [
        /* @__PURE__ */ jsx("p", { children: "Na Carplus Centro Automotivo, a sua privacidade é uma prioridade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações quando você visita nosso site ou utiliza nossos serviços em nossa loja no Portão, Curitiba." }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-dark", children: "1. Coleta de Informações" }),
        /* @__PURE__ */ jsx("p", { children: "Coletamos informações básicas de contato (como nome e telefone) através de formulários de orçamento ou via WhatsApp para prestar o melhor atendimento técnico possível." }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-dark", children: "2. Uso dos Dados" }),
        /* @__PURE__ */ jsx("p", { children: "Os dados coletados são usados exclusivamente para:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6", children: [
          /* @__PURE__ */ jsx("li", { children: "Fornecer orçamentos de pneus e serviços automotivos;" }),
          /* @__PURE__ */ jsx("li", { children: "Agendar revisões e manutenções;" }),
          /* @__PURE__ */ jsx("li", { children: "Enviar notificações sobre o status da sua ordem de serviço;" }),
          /* @__PURE__ */ jsx("li", { children: "Melhorar a experiência de navegação em nosso site." })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-dark", children: "3. Proteção de Dados" }),
        /* @__PURE__ */ jsx("p", { children: "Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado ou vazamento." }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-dark", children: "4. Seus Direitos" }),
        /* @__PURE__ */ jsx("p", { children: "De acordo com a LGPD, você tem o direito de solicitar a exclusão ou correção de seus dados a qualquer momento entrando em contato conosco." }),
        /* @__PURE__ */ jsx("p", { className: "mt-12 text-sm italic", children: "Última atualização: Abril de 2026." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  PrivacyPolicy as default
};
