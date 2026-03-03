import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    // Update Title
    const siteTitle = "Highpoint Digital | Performance Marketing for Trades & Services";
    document.title = title === "Home" ? siteTitle : `${title} | Highpoint Digital`;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update OG Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", document.title);
    }

    // Update OG Description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    }

  }, [title, description]);

  return null;
}
