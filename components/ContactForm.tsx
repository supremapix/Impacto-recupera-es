import React, { useState } from 'react';
import { Send, PhoneCall, ShieldCheck, Mail, Building, ClipboardList, MessageSquare, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '../src/data/company';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    empresa: '',
    servico: 'recuperacao',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ nome: '', telefone: '', email: '', empresa: '', servico: 'recuperacao', mensagem: '' });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
        {/* Sidebar Informativa Oficial */}
        <div className="lg:w-5/12 bg-[#171922] p-8 sm:p-10 text-white flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full mb-6 border border-white/15">
              <ShieldCheck className="w-4 h-4 text-[#8ba2d4] shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-200">
                Pronta Resposta 24h
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
              Central de Atendimento & Acionamento
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Para ocorrências em andamento, ligue diretamente para nossa central ou envie sua mensagem corporativa.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#5a6fa6] flex items-center justify-center text-white shrink-0 shadow-md">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Plantão 24 Horas</span>
                  <a
                    href={`tel:${COMPANY.telefone.e164}`}
                    className="font-bold text-xl text-white hover:text-[#8ba2d4] transition-colors"
                  >
                    {COMPANY.telefone.exibicao}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#8ba2d4] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">E-mail Institucional</span>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-medium text-sm text-gray-200 hover:text-white transition-colors break-all"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-gray-400 leading-relaxed font-mono">
            <p>Sede: {COMPANY.endereco.resumo}</p>
            <p className="mt-1">CNPJ {COMPANY.cnpj} · Desde 2019</p>
          </div>
        </div>

        {/* Formulário Interativo com Acessibilidade e IDs */}
        <div className="lg:w-7/12 p-8 sm:p-10 bg-white">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-gray-900 mb-2">Mensagem Recebida com Sucesso</h4>
              <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                Nossa central de monitoramento recebeu sua solicitação. Se for uma emergência em andamento, priorize o contato via WhatsApp ou telefone 24h.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold uppercase tracking-wider text-[#5a6fa6] hover:underline"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Formulário de Contato Impacto Recuperações">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-nome" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    id="contact-nome"
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome ou contato"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#5a6fa6] focus:ring-2 focus:ring-[#5a6fa6]/20 outline-none text-sm text-gray-900 placeholder:text-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-telefone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    id="contact-telefone"
                    type="tel"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#5a6fa6] focus:ring-2 focus:ring-[#5a6fa6]/20 outline-none text-sm text-gray-900 placeholder:text-gray-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    E-mail Corporativo
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemplo@empresa.com.br"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#5a6fa6] focus:ring-2 focus:ring-[#5a6fa6]/20 outline-none text-sm text-gray-900 placeholder:text-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-servico" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Tipo de Atendimento
                  </label>
                  <select
                    id="contact-servico"
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#5a6fa6] focus:ring-2 focus:ring-[#5a6fa6]/20 outline-none text-sm text-gray-900 transition-colors"
                  >
                    <option value="recuperacao">Recuperação de Veículo Roubado/Furtado</option>
                    <option value="cargas">Pronta Resposta para Cargas & Frotas</option>
                    <option value="escolta">Apoio com Escolta Homologada PF</option>
                    <option value="varredura">Varredura de Sinal Anti-Jammer</option>
                    <option value="parceria">Credenciamento de Parceiros</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-mensagem" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Mensagem ou Detalhes da Ocorrência *
                </label>
                <textarea
                  id="contact-mensagem"
                  name="mensagem"
                  required
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Informe o local aproximado, modelo do veículo ou necessidade operacional..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#5a6fa6] focus:ring-2 focus:ring-[#5a6fa6]/20 outline-none text-sm text-gray-900 placeholder:text-gray-400 resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[52px] py-3.5 px-6 rounded-xl bg-[#5a6fa6] hover:bg-[#4b5d8d] text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Enviando dados...</span>
                ) : (
                  <>
                    <span>Enviar Mensagem para a Central</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
