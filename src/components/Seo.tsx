import React, { useEffect } from 'react';
import { COMPANY } from '../data/company';
import { getOrganizationSchema, getWebSiteSchema } from '../lib/schema';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  schemas?: (object | null | undefined)[];
}

/**
 * Componente SEO Dinâmico (PARTE 5.1 & 5.2)
 * Atualiza Title, Meta Description, Canonical real por rota, Open Graph,
 * Twitter Card e JSON-LD structured data sem duplicar tags.
 */
export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonicalPath = '/',
  ogType = 'website',
  ogImage = `${COMPANY.dominio}/favicon.svg`,
  noindex = false,
  schemas = [],
}) => {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper para atualizar ou criar meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Meta description & robots
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 3. Canonical URL
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = cleanPath === '/' ? `${COMPANY.dominio}/` : `${COMPANY.dominio}${cleanPath.replace(/\/$/, '')}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:site_name', COMPANY.nomeFantasia);
    setMeta('property', 'og:locale', 'pt_BR');

    // 5. Twitter Cards
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 6. JSON-LD Schemas (Organization + WebSite + custom schemas)
    const activeSchemas = [
      getOrganizationSchema(),
      getWebSiteSchema(),
      ...schemas.filter(Boolean),
    ].flat();

    const scriptId = 'json-ld-seo-data';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(activeSchemas.length === 1 ? activeSchemas[0] : activeSchemas, null, 2);

    return () => {
      // Cleanup on unmount if needed
    };
  }, [title, description, canonicalPath, ogType, ogImage, noindex, schemas]);

  return null;
};

export default Seo;
