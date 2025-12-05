import React from 'react';
import { Bot, MessageSquare, Zap, FileText, ArrowRight } from 'lucide-react';
import Reveal from '../Reveal';
import ChatSimulation from '../ChatSimulation';
import { AGENT_BG_IMAGE } from '../../lib/constants';

interface AgentPromoProps {
    onAgentClick: () => void;
}

const AgentPromo: React.FC<AgentPromoProps> = ({ onAgentClick }) => {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-[#020202] border-t border-white/5">
            <div className="absolute inset-0 z-0">
                <img
                    src={AGENT_BG_IMAGE}
                    alt="AI Agent Background"
                    className="w-full h-full object-cover opacity-10 blur-sm grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/90 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <Reveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6">
                        <Bot size={14} />
                        <span>Nova Ferramenta</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        <span className="text-gray-400">Agent Design</span><br />
                        Seu Assistente Criativo.
                    </h2>
                    <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg">
                        Não sabe por onde começar? O Agent Design utiliza inteligência artificial avançada para estruturar sua ideia, definir requisitos e gerar um briefing profissional em minutos.
                    </p>

                    <div className="flex flex-col gap-4 mb-10">
                        {[
                            { icon: <MessageSquare size={18} />, text: "Conversa natural e intuitiva" },
                            { icon: <Zap size={18} />, text: "Geração instantânea de ideias" },
                            { icon: <FileText size={18} />, text: "Exportação direta por e-mail" }
                        ].map((feat, i) => (
                            <div key={i} className="flex items-center gap-4 text-gray-400">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white border border-white/5">
                                    {feat.icon}
                                </div>
                                <span>{feat.text}</span>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={onAgentClick}
                        className="px-8 py-4 bg-white hover:bg-gray-200 text-black rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-3 w-fit"
                    >
                        <Bot size={20} />
                        <span>Acessar Agent AI</span>
                        <ArrowRight size={18} />
                    </button>
                </Reveal>

                <Reveal delay={200} className="hidden lg:block">
                    <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-600 rounded-3xl blur opacity-30"></div>
                        <div className="relative rounded-xl overflow-hidden aspect-video border border-white/5 bg-[#050505]">
                            <ChatSimulation />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default AgentPromo;
