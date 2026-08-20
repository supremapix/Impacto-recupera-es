import React, { useState, useEffect } from 'react';
import { List, ChevronDown, AlignLeft } from 'lucide-react';
import { BlocoConteudo } from '../../data/artigos';

interface SumarioItem {
  id: string;
  texto: string;
  nivel: 'h2' | 'h3';
}

interface SumarioArtigoProps {
  corpo: BlocoConteudo[];
}

export const SumarioArtigo: React.FC<SumarioArtigoProps> = ({ corpo }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  const itens: SumarioItem[] = corpo
    .filter((b): b is { tipo: 'h2' | 'h3'; texto: string; id: string } => b.tipo === 'h2' || b.tipo === 'h3')
    .map((b) => ({
      id: b.id,
      texto: b.texto,
      nivel: b.tipo,
    }));

  useEffect(() => {
    if (itens.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-100px 0% -60% 0%',
        threshold: 0,
      }
    );

    itens.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [itens]);

  if (itens.length === 0) return null;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetEl = document.getElementById(id);
    if (targetEl) {
      const headerOffset = 100;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* SUMÁRIO MOBILE (Accordion) */}
      <div className="xl:hidden my-8 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
        <button
          type="button"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-expanded={isMobileOpen}
          aria-controls="sumario-mobile-conteudo"
          className="w-full px-5 py-4 min-h-[48px] flex items-center justify-between font-bold text-slate-900 text-sm cursor-pointer"
        >
          <div className="flex items-center gap-2 text-slate-900">
            <AlignLeft className="w-4 h-4 text-[#5a6fa6]" />
            <span>Índice do Artigo ({itens.length} seções)</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-[#5a6fa6] transition-transform duration-200 ${
              isMobileOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <div
          id="sumario-mobile-conteudo"
          hidden={!isMobileOpen}
          className={`px-5 pb-5 pt-1 border-t border-slate-200 ${isMobileOpen ? 'block' : 'hidden'}`}
        >
          <nav aria-label="Índice de seções mobile">
            <ul className="space-y-2 text-sm">
              {itens.map((item) => (
                <li
                  key={item.id}
                  className={item.nivel === 'h3' ? 'pl-4 border-l border-slate-200' : ''}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className={`block py-1 transition-colors min-h-[36px] flex items-center ${
                      activeId === item.id
                        ? 'text-[#5a6fa6] font-bold'
                        : 'text-slate-700 hover:text-slate-950'
                    }`}
                  >
                    {item.texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* SUMÁRIO DESKTOP (Sticky Sidebar em xl) */}
      <aside className="hidden xl:block w-72 shrink-0">
        <div className="sticky top-28 p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-200 text-slate-900">
            <List className="w-4 h-4 text-[#5a6fa6]" />
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              Neste Artigo
            </h2>
          </div>

          <nav aria-label="Índice de seções do artigo" className="max-h-[calc(100vh-220px)] overflow-y-auto pr-2">
            <ul className="space-y-2 text-xs">
              {itens.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li
                    key={item.id}
                    className={item.nivel === 'h3' ? 'pl-3 border-l border-slate-200 ml-1' : ''}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      className={`block py-1 leading-snug transition-all rounded-lg px-2 min-h-[32px] flex items-center ${
                        isActive
                          ? 'bg-[#5a6fa6]/10 text-[#5a6fa6] font-bold'
                          : 'text-slate-600 hover:text-slate-950 hover:bg-white/80'
                      }`}
                    >
                      {item.texto}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SumarioArtigo;
