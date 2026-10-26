import { useEffect } from "react";

const SITE_URL = "https://xlligent-softwares.com";
const DEFAULT_TITLE = "Xlligent Softwares | Business Software & Digital Solutions";
const DEFAULT_DESCRIPTION =
  "Xlligent Softwares builds industry-focused business software, ERP systems, websites and mobile applications for education, healthcare, retail and other sectors.";

function setMeta(selector, attribute, value) {
  if (!value) return;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

/** Keeps page titles, descriptions and social metadata aligned with the active route. */
function usePageMeta(title, description, keywords = "") {
  useEffect(() => {
    const pageTitle = title || DEFAULT_TITLE;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = pageTitle;
    setMeta('meta[name="description"]', "content", pageDescription);
    setMeta('meta[name="robots"]', "content", "index, follow, max-image-preview:large");
    setMeta('meta[name="keywords"]', "content", keywords);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:site_name"]', "content", "Xlligent Softwares");
    setMeta('meta[property="og:title"]', "content", pageTitle);
    setMeta('meta[property="og:description"]', "content", pageDescription);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", `${SITE_URL}/image/logo.webp`);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", pageTitle);
    setMeta('meta[name="twitter:description"]', "content", pageDescription);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [title, description, keywords]);
}

export default usePageMeta;
