import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Play } from "lucide-react";
function LiteYouTube({
  videoId,
  title,
  params = "",
  className = "absolute inset-0 w-full h-full",
  thumbnailQuality = "maxresdefault"
}) {
  const [activated, setActivated] = useState(false);
  const [thumbErrored, setThumbErrored] = useState(false);
  const thumbSrc = thumbErrored ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;
  if (activated) {
    const query = `autoplay=1${params ? `&${params}` : ""}`;
    return /* @__PURE__ */ jsx(
      "iframe",
      {
        src: `https://www.youtube-nocookie.com/embed/${videoId}?${query}`,
        title,
        className,
        loading: "lazy",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick: () => setActivated(true),
      className: `${className} group/lyt flex items-center justify-center bg-black cursor-pointer`,
      "aria-label": `Reproduzir vídeo: ${title}`,
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: thumbSrc,
            alt: title,
            loading: "lazy",
            decoding: "async",
            width: 480,
            height: 360,
            onError: () => setThumbErrored(true),
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-black/15 transition-colors group-hover/lyt:bg-black/5" }),
        /* @__PURE__ */ jsx("span", { className: "relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-2xl transition-transform group-hover/lyt:scale-110 md:h-20 md:w-20", children: /* @__PURE__ */ jsx(Play, { className: "ml-1 h-8 w-8 text-white md:h-9 md:w-9", fill: "white" }) })
      ]
    }
  );
}
export {
  LiteYouTube as L
};
