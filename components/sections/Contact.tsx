import React, { useState } from 'react';
import { Mail, MessageSquare, Instagram, Linkedin, Github, Monitor, Send } from 'lucide-react';
import Reveal from '../Reveal';
import SectionWrapper from '../ui/SectionWrapper';
import { SOCIAL_LINKS, SERVICES_OPTIONS } from '../../lib/constants';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const handleServiceToggle = (id: string) => {
        setSelectedServices(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const servicesList = selectedServices.map(id => SERVICES_OPTIONS.find(s => s.id === id)?.label).join(', ');
        const subject = `Novo Projeto: ${formData.name}`;
        const body = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AServiços: ${servicesList || 'Não especificado'}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`;
        window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
    };

    return (
        <SectionWrapper id="contact" className="bg-[#020202] relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 via-[#020202] to-[#020202] pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                {/* Contact Info */}
                <Reveal>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Vamos criar<br />o <span className="text-gray-600">futuro?</span>
                    </h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-md leading-relaxed">
                        Estou pronto para ouvir sua ideia. Preencha o formulário e receba uma resposta em até 24 horas.
                    </p>

                    <div className="space-y-6">
                        <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all border border-white/10 shadow-lg">
                                <Mail size={24} className="text-white group-hover:text-black" />
                            </div>
                            <div>
                                <span className="text-sm text-gray-600 block mb-1">Email</span>
                                <span className="text-xl text-white font-medium">{SOCIAL_LINKS.email}</span>
                            </div>
                        </a>

                        <a href={`https://wa.me/${SOCIAL_LINKS.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all border border-white/10 shadow-lg">
                                <MessageSquare size={24} className="text-white group-hover:text-black" />
                            </div>
                            <div>
                                <span className="text-sm text-gray-600 block mb-1">WhatsApp</span>
                                <span className="text-xl text-white font-medium">(13) 99643-2357</span>
                            </div>
                        </a>

                        <div className="pt-8 flex gap-4">
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:scale-110 hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
                                <Instagram size={24} />
                            </a>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:scale-110 hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
                                <Linkedin size={24} />
                            </a>
                            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:scale-110 hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                </Reveal>

                {/* Tech Form */}
                <Reveal delay={200}>
                    <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                        <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-2">
                            <Monitor size={20} className="text-gray-400" />
                            <span>INICIAR PROTOCOLO</span>
                        </h3>

                        <form onSubmit={handleFormSubmit} className="space-y-8 relative z-10">

                            {/* Service Selection */}
                            <div className="space-y-4">
                                <label className="text-xs font-mono text-gray-600 uppercase tracking-widest block">01 // SELECIONE O SERVIÇO</label>
                                <div className="flex flex-wrap gap-3">
                                    {SERVICES_OPTIONS.map((service) => (
                                        <button
                                            key={service.id}
                                            type="button"
                                            onClick={() => handleServiceToggle(service.id)}
                                            className={`
                                                group flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-medium transition-all duration-300
                                                ${selectedServices.includes(service.id)
                                                    ? 'bg-white text-black border-white shadow-lg'
                                                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:bg-white/10 hover:text-white'}
                                            `}
                                        >
                                            <span className={selectedServices.includes(service.id) ? "text-black" : "text-gray-500 group-hover:text-white"}>
                                                {service.icon}
                                            </span>
                                            {service.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <label className="text-xs font-mono text-gray-600 uppercase tracking-widest block mb-4">02 // DADOS DO CLIENTE</label>
                                <div className="space-y-1">
                                    <div className="flex items-center bg-[#0A0A0A] border-b border-white/20 focus-within:border-white transition-colors">
                                        <span className="pl-4 text-gray-600 font-mono text-sm">{`>`}</span>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent p-4 text-white placeholder-gray-700 font-mono focus:outline-none"
                                            placeholder="NOME_COMPLETO"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center bg-[#0A0A0A] border-b border-white/20 focus-within:border-white transition-colors">
                                        <span className="pl-4 text-gray-600 font-mono text-sm">{`@`}</span>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent p-4 text-white placeholder-gray-700 font-mono focus:outline-none"
                                            placeholder="EMAIL_CORPORATIVO"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs font-mono text-gray-600 uppercase tracking-widest block">03 // DETALHES DA MISSÃO</label>
                                <div className="bg-[#0A0A0A] border border-white/10 rounded-none focus-within:border-white transition-colors relative">
                                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20"></div>
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20"></div>
                                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20"></div>

                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full bg-transparent p-4 text-white placeholder-gray-700 font-mono focus:outline-none resize-none text-sm leading-relaxed"
                                        placeholder="Descreva o projeto..."
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full group relative bg-white text-black font-bold py-5 px-6 overflow-hidden transition-all hover:bg-gray-200 rounded-lg hover:shadow-lg"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                <div className="flex items-center justify-between relative z-10 font-mono tracking-wider">
                                    <span>ENVIAR_DADOS</span>
                                    <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </button>

                            <div className="text-center">
                                <p className="text-[10px] text-gray-600 font-mono uppercase">
                                    SISTEMA SEGURO // CRIPTOGRAFIA DE PONTA A PONTA
                                </p>
                            </div>
                        </form>
                    </div>
                </Reveal>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
