"use client";

import React from 'react';
import { Instagram, Github, Layout, Figma, X, CheckCircle2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../lib/constants';
import HeroWave from './HeroWave';

const ProfileHeader: React.FC = () => {
    return (
        <div className="relative w-full flex flex-col items-center justify-center py-20 overflow-hidden">
            {/* Background Wave */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <HeroWave />
            </div>

            {/* Gradient Overlay for Fade Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020202] pointer-events-none" />

            {/* Profile Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Profile Image with Glow */}
                <div className="relative mb-6 group">
                    <div className="absolute inset-0 bg-white/20 blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
                    <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden">
                        <img
                            src="https://github.com/felipesouzadsgn.png"
                            alt="Felipe Souza"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </div>

                {/* Name & Handle */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                    Felipe Souza
                </h1>
                <div className="flex items-center gap-1.5 mb-8">
                    <span className="text-gray-400 text-lg">@felipesouzadsgn</span>
                    <CheckCircle2 size={18} className="text-gray-400 fill-gray-400/10" />
                </div>

                {/* Bio */}
                <p className="max-w-xl text-gray-500 text-sm md:text-base leading-relaxed mb-10 px-4">
                    Front-End Dev & UI motion with more than +10 years of experience in product development and creating interfaces with out-of-the-box animations.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    {[
                        { icon: <Instagram size={20} />, href: SOCIAL_LINKS.instagram },
                        { icon: <Github size={20} />, href: SOCIAL_LINKS.github },
                        { icon: <Layout size={20} />, href: "#" },
                        { icon: <Figma size={20} />, href: "#" },
                        { icon: <X size={20} />, href: "#" }
                    ].map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all hover:scale-110 hover:-translate-y-1"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
