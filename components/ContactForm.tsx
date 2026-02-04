
import React, { useState } from 'react';
import { Send, PhoneCall, ShieldCheck, Mail, Building, ClipboardList, MessageSquare } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ phone: '', email: '', company: '', service: '', message: '' });
    }, 1800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-0 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border border-gray-100 bg-white">
        
        {/* Sidebar Informativa */}
        <div className="lg:w-[35%] bg-accent p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-8 border border-white/10">
              <ShieldCheck size={16} className="text-primary-light" />
              <span className="text-[10px] font-black uppercase tracking-widest">Protocolo de Segurança</span>
            </div>
            <h2 className="text-4xl font-black mb-6 uppercase italic leading-none tracking-tighter">
              CENTRAL DE <br /> <span className="text-primary">INTELIGÊNCIA</span>
            </h2>
            <p className="text-gray-400 font-medium mb-10 leading-relaxed text-lg">
              Solicite orçamentos para escolta armada ou acione nossa pronta resposta imediata.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="bg-primary p-4 rounded-2xl shadow-lg transition-transform group-hover:scale-110">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Linha de Emergência</p>
                  <p className="font-black text-2xl tracking-tighter">(11) 96502-0011</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 transition-transform group-hover:scale-110">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Canal Corporativo</p>
                  <p className="font-bold text-lg opacity-80">contato@impacto.com.br</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 p-6 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm relative z-10">
            <p className="text-sm font-bold italic text-gray-300">
              "Eficiência operacional em território nacional 24/7."
            </p>
          </div>
        </div>

        {/* Formulário Real */}
        <div className="lg:w-[65%] p-8 md:p-16 bg-white relative">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-fadeIn">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-green-200">
                <Send className="text-white" size={40} />
              </div>
              <h3 className="text-4xl font-black text-accent mb-4 uppercase italic">SOLICITAÇÃO RECEBIDA!</h3>
              <p className="text-gray-500 text-lg max-w-md mx-auto mb-10">
                Nossa central de monitoramento já está processando seus dados. Um agente entrará em contato em instantes.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-primary font-black uppercase tracking-widest hover:underline"
              >
                ENVIAR NOVA MENSAGEM
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 transition-colors group-focus-within:text-primary">
                    <PhoneCall size={12} /> Contato WhatsApp / Fixo
                  </label>
                  <input 
                    type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full px-6 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold text-accent placeholder:text-gray-300"
                  />
                </div>
                <div className="relative group">
                  <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 transition-colors group-focus-within:text-primary">
                    <Mail size={12} /> E-mail de Contato
                  </label>
                  <input 
                    type="email" name="email" required value={formData.email} onChange={handleChange}
                    placeholder="email@empresa.com.br"
                    className="w-full px-6 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold text-accent placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 transition-colors group-focus-within:text-primary">
                    <Building size={12} /> Empresa / Solicitante
                  </label>
                  <input 
                    type="text" name="company" required value={formData.company} onChange={handleChange}
                    placeholder="Nome completo ou Razão Social"
                    className="w-full px-6 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold text-accent placeholder:text-gray-300"
                  />
                </div>
                <div className="relative group">
                  <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 transition-colors group-focus-within:text-primary">
                    <ClipboardList size={12} /> Tipo de Serviço
                  </label>
                  <select 
                    name="service" required value={formData.service} onChange={handleChange}
                    className="w-full px-6 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold text-accent appearance-none cursor-pointer"
                  >
                    <option value="">Selecione a Categoria</option>
                    <option value="recuperacao">Recuperação de Veículo/Carga</option>
                    <option value="escolta">Escolta Armada Pesada</option>
                    <option value="investigacao">Investigação e Varredura</option>
                    <option value="parceria">Parcerias Estratégicas</option>
                  </select>
                </div>
              </div>

              <div className="relative group">
                <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 transition-colors group-focus-within:text-primary">
                  <MessageSquare size={12} /> Descrição da Necessidade
                </label>
                <textarea 
                  name="message" required rows={4} value={formData.message} onChange={handleChange}
                  placeholder="Detalhe brevemente a ocorrência ou solicitação..."
                  className="w-full px-6 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold text-accent placeholder:text-gray-300 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 transition-all duration-500 shadow-2xl relative overflow-hidden group
                  ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-accent hover:-translate-y-1 active:scale-95'}
                `}
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    AUTENTICANDO...
                  </div>
                ) : (
                  <>ACIONAR PROTOCOLO <Send size={24} className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
