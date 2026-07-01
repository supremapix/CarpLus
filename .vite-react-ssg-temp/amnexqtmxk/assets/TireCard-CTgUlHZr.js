import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
function TireCard({ tire, index }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const rectRef = useRef(null);
  const rafRef = useRef(null);
  const handleMouseEnter = useCallback((e) => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
    setIsHovered(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rectRef.current = null;
    setIsHovered(false);
  }, []);
  const handleMouseMove = useCallback((e) => {
    const rect = rectRef.current;
    if (!rect) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const x = (clientX - rect.left) / rect.width * 100;
      const y = (clientY - rect.top) / rect.height * 100;
      setMousePos({ x, y });
    });
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "group bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-100 relative flex flex-col justify-between hover:shadow-2xl hover:border-primary/20 transition-all overflow-hidden [animation:var(--animate-fade-in-up)]",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute top-6 left-6 flex flex-col gap-2 z-20", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary font-black text-[11px] uppercase tracking-[0.2em]", children: tire.marca }),
          tire.novoModelo && /* @__PURE__ */ jsx("span", { className: "bg-black text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase self-start tracking-wider", children: "Novo" }),
          tire.destaque && /* @__PURE__ */ jsx("span", { className: "bg-primary text-black text-[9px] font-black px-2 py-0.5 rounded-full uppercase self-start tracking-wider", children: "Destaque" })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "mt-6 mb-6 relative aspect-square cursor-none overflow-visible flex items-center justify-center p-4 bg-transparent",
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            onMouseMove: handleMouseMove,
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: tire.imagem,
                  alt: `Pneu ${tire.marca} ${tire.nome} ${tire.medida} aro ${tire.aro} em Curitiba`,
                  loading: index < 4 ? "eager" : "lazy",
                  decoding: "async",
                  width: 400,
                  height: 400,
                  className: `w-full h-full object-contain transition-all duration-500 transform ${isHovered ? "scale-105 opacity-0" : "scale-100 opacity-100"} [mix-blend-mode:multiply]`
                }
              ),
              isHovered && /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 z-10 w-full h-full pointer-events-none [mix-blend-mode:multiply] transition-all duration-300",
                  style: {
                    backgroundImage: `url(${tire.imagem})`,
                    backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
                    backgroundSize: "250%",
                    backgroundRepeat: "no-repeat"
                  }
                }
              ),
              isHovered && /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute z-20 w-16 h-16 border-2 border-primary rounded-full pointer-events-none mix-blend-difference flex items-center justify-center p-2",
                  style: {
                    left: `${mousePos.x}%`,
                    top: `${mousePos.y}%`,
                    transform: "translate(-50%, -50%)"
                  },
                  children: /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-primary rounded-full" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative z-20", children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-between items-start mb-2", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-black uppercase leading-none tracking-tighter truncate w-full", title: tire.nome, children: tire.nome }) }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-400 font-bold text-[11px] mb-6 uppercase tracking-widest leading-tight", children: [
            tire.linha,
            " | ",
            tire.medida,
            tire.categoria && /* @__PURE__ */ jsx("span", { className: "block mt-1 opacity-60", children: tire.categoria })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-8", children: [
            /* @__PURE__ */ jsxs("span", { className: "bg-gray-50 text-gray-400 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase italic border border-gray-100", children: [
              "Aro ",
              tire.aro
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-[#00C853] text-[10px] font-black uppercase", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-[#00C853] animate-pulse" }),
              " Em estoque"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/pneu/${tire.slug}`,
              className: "w-full flex items-center justify-center gap-3 bg-black hover:bg-primary hover:text-black text-white py-4 rounded-2xl font-black transition-all hover:scale-[1.02] active:scale-[0.98] text-sm uppercase tracking-widest shadow-xl",
              children: [
                "Detalhes ",
                /* @__PURE__ */ jsx(ChevronRight, { size: 18 })
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
export {
  TireCard as T
};
