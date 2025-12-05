import React from 'react';
import { Globe, Terminal, Code2, Palette, Database, Layout, Figma, Github, Cpu, Headphones, Gamepad2, Music, Camera } from 'lucide-react';
import Reveal from './Reveal';
import GravitySkills from './GravitySkills';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import SectionWrapper from './ui/SectionWrapper';
import ProfileHeader from './ProfileHeader';

const AboutBento: React.FC = () => {
    return (
        <SectionWrapper id="about" className="bg-[#020202]">
            <ProfileHeader />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                {/* Experience Card */}
                <div>
                    <ExperienceCard />
                </div>

                {/* Skills Card - Central Feature with Gravity Physics */}
                <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden">
                    <GravitySkills />
                </div>

                {/* Education Card */}
                <div>
                    <EducationCard />
                </div>

                {/* Techs & Tools - Wide Card */}
                <div className="md:col-span-2 bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                                <Terminal className="text-white" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Techs & Tools</h3>
                            <p className="text-gray-500 text-sm max-w-xs">
                                My favorite weapons of choice for building digital products.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { icon: <Code2 size={24} /> },
                                { icon: <Palette size={24} /> },
                                { icon: <Database size={24} /> },
                                { icon: <Globe size={24} /> },
                                { icon: <Layout size={24} /> },
                                { icon: <Figma size={24} /> },
                                { icon: <Github size={24} /> },
                                { icon: <Cpu size={24} /> }
                            ].map((tech, i) => (
                                <div
                                    key={i}
                                    className="w-14 h-14 rounded-2xl bg-white/5 text-gray-400 flex items-center justify-center border border-white/5 hover:bg-white/10 hover:text-white hover:scale-110 transition-all cursor-pointer"
                                >
                                    {tech.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Hobby Card */}
                <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-6 relative overflow-hidden group flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Headphones className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Hobby</h3>
                    <div className="flex gap-4">
                        <div className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                            <Gamepad2 size={20} className="text-gray-400" />
                        </div>
                        <div className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                            <Music size={20} className="text-gray-400" />
                        </div>
                        <div className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                            <Camera size={20} className="text-gray-400" />
                        </div>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default AboutBento;
