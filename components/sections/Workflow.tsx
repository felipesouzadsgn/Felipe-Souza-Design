import React from 'react';
import Reveal from '../Reveal';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { WORKFLOW } from '../../lib/constants';

const Workflow: React.FC = () => {
    return (
        <SectionWrapper id="process" className="bg-white dark:bg-[#050505] border-y border-black/5 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-gray-200/50 to-transparent dark:from-white/5 dark:to-transparent rounded-full blur-[120px] pointer-events-none"></div>

            <SectionHeader
                title="Processo Transparente"
                subtitle="Metodologia"
                description="Sem &quot;caixa preta&quot;. Você acompanha cada etapa da evolução do seu produto."
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {WORKFLOW.map((item, index) => (
                    <Reveal key={index} delay={index * 100}>
                        <div className="relative p-8 bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 group hover:-translate-y-2 h-full rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm shadow-sm dark:shadow-none">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 dark:bg-white/5 rounded-bl-[2rem] rounded-tr-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"></div>

                            <div className="text-7xl font-bold text-black/[0.03] dark:text-white/[0.03] absolute top-6 right-8 font-mono">{item.step}</div>

                            <div className="w-16 h-16 bg-black/5 dark:bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 text-black dark:text-white relative z-10 border border-black/5 dark:border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-black dark:text-white mb-4 relative z-10">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Workflow;
