import React from 'react';
import { ExternalLink, AlertCircle, Info, Lightbulb, CheckCircle2 } from 'lucide-react';
import { BlocoConteudo } from '../../data/artigos';
import { CtaCentral } from './CtaCentral';

interface BlocoRendererProps {
  blocos: BlocoConteudo[];
  inserirCtaAposH2?: number; // padrão: 3
}

export const BlocoRenderer: React.FC<BlocoRendererProps> = ({
  blocos,
  inserirCtaAposH2 = 3,
}) => {
  let contadorH2 = 0;

  return (
    <div className="artigo-corpo max-w-[68ch] mx-auto text-slate-800 font-sans text-base sm:text-lg leading-[1.75] space-y-[1.25em]">
      {blocos.map((bloco, index) => {
        let elemento: React.ReactNode = null;
        let deveRenderizarCta = false;

        switch (bloco.tipo) {
          case 'h2':
            contadorH2++;
            if (contadorH2 === inserirCtaAposH2) {
              deveRenderizarCta = true;
            }
            elemento = (
              <h2
                id={bloco.id}
                key={index}
                className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-14 mb-4 scroll-mt-28 border-b border-slate-200 pb-2"
              >
                {bloco.texto}
              </h2>
            );
            break;

          case 'h3':
            elemento = (
              <h3
                id={bloco.id}
                key={index}
                className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-10 mb-3 scroll-mt-28"
              >
                {bloco.texto}
              </h3>
            );
            break;

          case 'p':
            elemento = (
              <p key={index} className="text-slate-800">
                {bloco.texto}
              </p>
            );
            break;

          case 'lista':
            elemento = bloco.ordenada ? (
              <ol key={index} className="my-6 space-y-3 list-decimal pl-6 text-slate-800">
                {bloco.itens.map((item, itemIdx) => (
                  <li key={itemIdx} className="pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={index} className="my-6 space-y-3 list-none pl-0 text-slate-800">
                {bloco.itens.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#5a6fa6] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
            break;

          case 'passos':
            elemento = (
              <div key={index} className="my-8 space-y-4">
                {bloco.itens.map((passo, passoIdx) => (
                  <div
                    key={passoIdx}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-lg bg-[#5a6fa6] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        0{passoIdx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1">
                          {passo.titulo}
                        </h4>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {passo.texto}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
            break;

          case 'tabela':
            elemento = (
              <div
                key={index}
                className="my-8 w-full overflow-x-auto rounded-2xl border border-slate-200 shadow-sm"
                role="region"
                aria-label="Tabela informativa de comparação de procedimentos"
                tabIndex={0}
              >
                <table className="w-full text-left text-sm sm:text-base border-collapse bg-white min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      {bloco.colunas.map((coluna, colIdx) => (
                        <th
                          key={colIdx}
                          scope="col"
                          className="px-4 py-3.5 font-bold uppercase tracking-wider text-xs sm:text-sm border-r border-slate-800 last:border-r-0"
                        >
                          {coluna}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {bloco.linhas.map((linha, rowIdx) => (
                      <tr
                        key={rowIdx}
                        className={rowIdx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/70 hover:bg-slate-100/70'}
                      >
                        {linha.map((celula, cellIdx) => (
                          <td
                            key={cellIdx}
                            className={`px-4 py-3.5 align-top leading-relaxed text-slate-800 border-r border-slate-200 last:border-r-0 ${
                              cellIdx === 0 ? 'font-bold text-slate-900' : ''
                            }`}
                          >
                            {celula}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
            break;

          case 'destaque':
            const iconMap = {
              atencao: <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />,
              aviso: <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />,
              dica: <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />,
            };
            const styleMap = {
              atencao: 'bg-amber-50 border-amber-300 text-amber-950',
              aviso: 'bg-red-50 border-red-300 text-red-950',
              dica: 'bg-emerald-50 border-emerald-300 text-emerald-950',
            };

            elemento = (
              <div
                key={index}
                className={`my-6 p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 text-sm sm:text-base leading-relaxed ${styleMap[bloco.variante]}`}
              >
                {iconMap[bloco.variante]}
                <div>{bloco.texto}</div>
              </div>
            );
            break;

          case 'citacaoFonte':
            elemento = (
              <div
                key={index}
                className="my-6 p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md"
              >
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-3">
                  "{bloco.texto}"
                </p>
                <div className="flex items-center justify-between gap-4 pt-3 border-t border-slate-800">
                  <span className="text-xs font-mono text-slate-400">
                    Fonte Oficial: <strong className="text-white">{bloco.fonte}</strong>
                  </span>
                  <a
                    href={bloco.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[36px] px-3.5 py-1.5 rounded-lg bg-[#5a6fa6] hover:bg-[#4b5e91] text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <span>Acessar Portal Oficial</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
            break;

          default:
            elemento = null;
        }

        return (
          <React.Fragment key={index}>
            {elemento}
            {deveRenderizarCta && (
              <CtaCentral
                compacto
                titulo="Precisa de auxílio tático na sua ocorrência?"
                subtitulo="Fale com nosso plantão de operações 24h para averiguação imediata e suporte."
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BlocoRenderer;
