
import React, { useState } from 'react';
import { Send, PhoneCall } from 'lucide-react';

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
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ phone: '', email: '', company: '', service: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl">
        <div className="lg:w-1/3 bg-primary p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-black mb-6 uppercase leading-tight">IMPACTO RECUPERAÇÕES</h2>
            <p className="text-lg font-light mb-8 opacity-80">
              Entre em contato conosco para orçamentos, parcerias ou solicitações de emergência.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full"><PhoneCall size={20} /></div>
                <div>
                  <p className="text-sm opacity-60">Fale Agora</p>
                  <p className="font-bold text-xl">(11) 96502-0011</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 p-4 border border-white/20 rounded-xl bg-white/5">
            <p className="text-sm font-medium italic">"Excelência e agilidade na recuperação de patrimônio."</p>
          </div>
        </div>

        <div className="lg:w-2/3 p-12">
          <h3 className="text-2xl font-bold text-accent mb-2">Contato</h3>
          <p className="text-gray-500 mb-8">Preencha o formulário e nossa equipe retornará em breve.</p>

          {submitted ? (
            <div className="bg-green-50 text-green-700 p-8 rounded-2xl text-center border border-green-200 animate-fadeIn">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="text-green-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Mensagem Enviada!</h4>
              <p>Obrigado pelo contato. Responderemos o mais rápido possível.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-green-800 font-bold underline"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tighter">Número Celular / Fixo</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tighter">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemplo@empresa.com.br"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tighter">Nome / Empresa</label>
                  <input 
                    type="text" 
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Seu nome ou nome da empresa"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tighter">Serviço / Solicitação</label>
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="recuperacao">Recuperação de Veículo</option>
                    <option value="escolta">Escolta Armada/Velada</option>
                    <option value="preservacao">Preservação de Carga</option>
                    <option value="investigacao">Investigação Veicular</option>
                    <option value="outros">Outros Orçamentos</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tighter">Mensagem / Orçamento</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva brevemente sua necessidade..."
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-accent shadow-xl active:scale-95'}`}
              >
                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR SOLICITAÇÃO 🚀'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
