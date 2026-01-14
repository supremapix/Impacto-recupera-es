
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Image, Loader2, Download, Maximize, AlertCircle } from 'lucide-react';

export const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setError(null);
    setResultImage(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: size
          }
        },
      });

      let foundImage = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          setResultImage(`data:image/png;base64,${base64Data}`);
          foundImage = true;
          break;
        }
      }

      if (!foundImage) {
        setError("Não foi possível gerar a imagem. Tente um prompt diferente.");
      }
    } catch (err: any) {
      console.error(err);
      setError("Erro ao gerar imagem. Verifique sua conexão ou tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-accent text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-6">
            <Image size={18} className="text-primary-light" />
            <span className="text-xs font-bold tracking-widest uppercase">IA Visionária Impacto</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic">Gerador de Imagens Táticas</h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto">
            Utilize nossa IA de última geração para visualizar cenários, frotas ou esquemas de segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/10">
            <div className="mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-4">Prompt da Imagem</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: Uma viatura de segurança moderna em patrulha noturna em São Paulo, estilo cinematográfico..."
                className="w-full h-40 bg-black/40 border border-white/10 rounded-2xl p-6 text-white focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div className="mb-10">
              <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-4">Qualidade da Imagem</label>
              <div className="grid grid-cols-3 gap-4">
                {(['1K', '2K', '4K'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`
                      py-4 rounded-xl font-black text-lg transition-all border-2
                      ${size === s ? 'bg-primary border-primary text-white' : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'}
                    `}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={generateImage}
              disabled={loading || !prompt.trim()}
              className={`
                w-full py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-4 transition-all shadow-2xl
                ${loading || !prompt.trim() ? 'bg-gray-600 cursor-not-allowed' : 'bg-white text-accent hover:bg-primary hover:text-white'}
              `}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  GERANDO...
                </>
              ) : (
                <>
                  <Maximize />
                  GERAR IMAGEM AGORA
                </>
              )}
            </button>
          </div>

          {/* Result Display */}
          <div className="relative group min-h-[400px]">
            <div className="w-full h-full bg-black/40 rounded-[2rem] border-4 border-dashed border-white/10 flex flex-col items-center justify-center p-8 overflow-hidden relative">
              {loading ? (
                <div className="text-center animate-pulse">
                  <div className="w-24 h-24 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                  <p className="text-xl font-bold uppercase tracking-tighter">Processando Pixels...</p>
                  <p className="text-sm text-gray-500 mt-2">Nossa IA está criando sua visão.</p>
                </div>
              ) : resultImage ? (
                <>
                  <img 
                    src={resultImage} 
                    alt="Generated content" 
                    className="w-full h-full object-cover rounded-xl animate-fadeIn"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button 
                      onClick={() => window.open(resultImage, '_blank')}
                      className="p-4 bg-white text-accent rounded-full hover:scale-110 transition-transform"
                    >
                      <Download size={24} />
                    </button>
                  </div>
                </>
              ) : error ? (
                <div className="text-center text-red-400">
                  <AlertCircle size={48} className="mx-auto mb-4" />
                  <p className="font-bold">{error}</p>
                </div>
              ) : (
                <div className="text-center opacity-40">
                  <Image size={80} className="mx-auto mb-6" />
                  <p className="text-lg font-bold uppercase tracking-widest">Sua imagem aparecerá aqui</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
