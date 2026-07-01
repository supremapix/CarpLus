const CARPLUS_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Av. Presidente Arthur da Silva Bernardes, 1323",
  addressLocality: "Curitiba",
  addressRegion: "PR",
  postalCode: "80320-300",
  addressCountry: "BR"
};
const CARPLUS_SELLER = {
  "@type": "AutoPartsStore",
  name: "Carplus Pneus e Oficina",
  telephone: "+55-41-3082-7282",
  address: CARPLUS_ADDRESS
};
const CARPLUS_RETURN_POLICY = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "BR",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 7,
  returnMethod: "https://schema.org/ReturnInStore",
  returnFees: "https://schema.org/FreeReturn"
};
const CARPLUS_SHIPPING = {
  "@type": "OfferShippingDetails",
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: "BR"
  },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: {
      "@type": "QuantitativeValue",
      minValue: 0,
      maxValue: 1,
      unitCode: "DAY"
    },
    transitTime: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 7,
      unitCode: "DAY"
    }
  }
};
function addDays(days, base = /* @__PURE__ */ new Date()) {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}
function todayISO() {
  return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
}
function generateProductSchema(props) {
  const {
    name,
    description,
    image,
    sku,
    brand = "Carplus Pneus",
    price,
    currency = "BRL",
    availability,
    url,
    ratingValue,
    reviewCount,
    dateModified,
    reviews = []
  } = props;
  const availabilityMap = {
    InStock: "https://schema.org/InStock",
    OutOfStock: "https://schema.org/OutOfStock",
    PreOrder: "https://schema.org/PreOrder"
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: Array.isArray(image) ? image : [image],
    sku,
    mpn: sku,
    brand: {
      "@type": "Brand",
      name: brand
    },
    // Última revisão de conteúdo da página (sinal de frescor para o Google)
    dateModified: dateModified ?? todayISO(),
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: currency,
      ...price && { price: price.toFixed(2) },
      // Validade do preço dinâmica: 30 dias a partir de hoje
      priceValidUntil: addDays(30),
      itemCondition: "https://schema.org/NewCondition",
      availability: availabilityMap[availability],
      seller: CARPLUS_SELLER,
      hasMerchantReturnPolicy: CARPLUS_RETURN_POLICY,
      shippingDetails: CARPLUS_SHIPPING
    }
  };
  if (ratingValue && reviewCount && reviewCount > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      reviewCount,
      bestRating: "5",
      worstRating: "1"
    };
  }
  if (reviews.length > 0) {
    schema.review = reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author
      },
      datePublished: r.datePublished,
      reviewBody: r.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.ratingValue.toFixed(1),
        bestRating: "5",
        worstRating: "1"
      }
    }));
  }
  return schema;
}
function generateProductListSchema(products) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catalogo de Pneus — Carplus Centro Automotivo",
    itemListElement: products.map((p) => ({
      "@type": "ListItem",
      position: p.position,
      name: p.name,
      url: p.url,
      image: p.image
    }))
  };
}
function generateFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer
      }
    }))
  };
}
function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
export {
  generateFaqSchema as a,
  generateProductListSchema as b,
  generateProductSchema as c,
  generateBreadcrumbSchema as g
};
