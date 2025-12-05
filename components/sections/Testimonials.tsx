import React from 'react';
import { Sparkles } from 'lucide-react';
import Reveal from '../Reveal';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { TESTIMONIALS } from '../../lib/constants';

const Testimonials: React.FC = () => {
    return (
        <SectionWrapper className="bg-[#020202] overflow-hidden relative">
            <SectionHeader title="Feedback Real" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TESTIMONIALS.map((t, i) => (
                    <Reveal key={i} delay={i * 150}>
                        <div className="p-10 bg-white/5 backdrop-blur-sm border border-white/5 relative hover:bg-white/[0.07] hover:border-white/20 transition-colors duration-300 group rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="text-gray-500 mb-8 relative z-10">
                                <Sparkles size={32} className="fill-current" />
                            </div>
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 font-medium relative z-10">"{t.text}"</p>
                            <div className="flex items-center gap-5 pt-8 border-t border-white/5 relative z-10">
                                <img src={t.image} alt={t.author} className="w-14 h-14 rounded-full object-cover border-2 border-white/10" />
                                <div>
                                    <h4 className="text-white font-bold text-lg">{t.author}</h4>
                                    <p className="text-gray-500 text-sm">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
