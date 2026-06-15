// /src/lib/schema.ts
// Gerador de JSON-LD para Rich Snippets de Produto

export interface ProductSchemaProps {
  name: string;
  description: string;
  image: string | string[];
  sku: string;
  brand?: string;
  price?: number;
  currency?: string;
  availability: "InStock" | "OutOfStock" | "PreOrder";
  url: string;
  ratingValue?: number;
  reviewCount?: number;
  reviews?: Array<{
    author: string;
    datePublished: string;
    reviewBody: string;
    ratingValue: number;
  }>;
}

export function generateProductSchema(props: ProductSchemaProps): object {
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
    reviews = [],
  } = props;

  const availabilityMap = {
    InStock: "https://schema.org/InStock",
    OutOfStock: "https://schema.org/OutOfStock",
    PreOrder: "https://schema.org/PreOrder",
  };

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: Array.isArray(image) ? image : [image],
    sku,
    mpn: sku,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: currency,
      ...(price && { price: price.toFixed(2) }),
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      )
        .toISOString()
        .split("T")[0],
      itemCondition: "https://schema.org/NewCondition",
      availability: availabilityMap[availability],
      seller: {
        "@type": "Organization",
        name: "Carplus Centro Automotivo",
        telephone: "+55-41-3082-7282",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Arthur da Silva Bernardes, 1323",
          addressLocality: "Curitiba",
          addressRegion: "PR",
          postalCode: "80320-300",
          addressCountry: "BR",
        },
      },
      // Política de devolução — exigida pelo Google Rich Results para Merchant Listings
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "BR",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnInStore",
        returnFees: "https://schema.org/FreeReturn",
      },
      // Informações de entrega — exigidas pelo Google Rich Results para Merchant Listings
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "BR",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 7,
            unitCode: "DAY",
          },
        },
      },
    },
  };

  // AggregateRating — só insere se tiver dados reais
  if (ratingValue && reviewCount && reviewCount > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      reviewCount,
      bestRating: "5",
      worstRating: "1",
    };
  }

  // Reviews individuais
  if (reviews.length > 0) {
    schema.review = reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      datePublished: r.datePublished,
      reviewBody: r.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.ratingValue.toFixed(1),
        bestRating: "5",
        worstRating: "1",
      },
    }));
  }

  return schema;
}

// Schema da página de listagem de produtos (ItemList)
export function generateProductListSchema(
  products: Array<{ name: string; url: string; image: string; position: number }>
): object {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catalogo de Pneus — Carplus Centro Automotivo",
    itemListElement: products.map((p) => ({
      "@type": "ListItem",
      position: p.position,
      name: p.name,
      url: p.url,
      image: p.image,
    })),
  };
}

// Schema de FAQPage (Rich Snippet de Perguntas Frequentes)
export function generateFaqSchema(
  faqs: Array<{ question: string; answer: string }>
): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

// Schema de BreadcrumbList
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Schema de LocalBusiness para a Carplus
export function generateLocalBusinessSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "TireShop", "LocalBusiness"],
    name: "Carplus Centro Automotivo",
    alternateName: "Carplus Pneus",
    url: "https://www.carpluspneuseoficina.com.br",
    logo: "https://www.carpluspneuseoficina.com.br/images/logo-carplus-curitiba-portao.svg",
    image: "https://www.carpluspneuseoficina.com.br/images/loja/loja-de-pneus-curitiba.webp",
    telephone: "+55-41-3082-7282",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Arthur da Silva Bernardes, 1323",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "80320-300",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.4654,
      longitude: -49.2914,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "227",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Cash, Credit Card, Debit Card, PIX",
    areaServed: {
      "@type": "City",
      name: "Curitiba",
    },
    sameAs: [
      "https://www.instagram.com/carplusautocenter",
      "https://www.facebook.com/carplusautocenter",
    ],
  };
}
