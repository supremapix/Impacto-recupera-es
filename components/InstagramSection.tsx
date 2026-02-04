
import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Play } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/impacto_recuperacoes";

  // Simulando posts recentes de alta performance (Imagens reais de recuperação seriam linkadas aqui)
  const posts = [
    { id: 1, type: 'video', likes: '1.2k', comments: '84', img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600' },
    { id: 2, type: 'image', likes: '842', comments: '32', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600' },
    { id: 3, type: 'image', likes: '2.1k', comments: '156', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600' },
    { id: 4, type: 'video', likes: '954', comments: '41', img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-full mb-4 border border-pink-100">
              <Instagram size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Feed em Tempo Real</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-accent uppercase italic tracking-tighter leading-none">
              OPERAÇÕES NO <span className="text-primary">INSTAGRAM</span>
            </h2>
          </div>
          
          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-accent text-white px-8 py-4 rounded-2xl font-black hover:bg-primary transition-all shadow-xl active:scale-95"
          >
            SEGUIR @IMPACTO_RECUPERACOES
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {posts.map((post) => (
            <a 
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-[2rem] overflow-hidden group shadow-lg"
            >
              <img 
                src={post.img} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1.5 text-white font-black">
                    <Heart size={20} fill="white" /> {post.likes}
                  </div>
                  <div className="flex items-center gap-1.5 text-white font-black">
                    <MessageCircle size={20} fill="white" /> {post.comments}
                  </div>
                </div>
                {post.type === 'video' && <Play size={32} className="text-white fill-white" />}
              </div>
              <div className="absolute top-4 right-4 text-white opacity-70">
                <Instagram size={20} />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-[3rem] border border-gray-100 text-center">
           <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Atualizado há 12 minutos via Central Social</p>
           <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-primary/30 rounded-full"></div>)}
           </div>
        </div>
      </div>
    </section>
  );
};
