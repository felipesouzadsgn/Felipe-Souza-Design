"use client";

import React, { useState } from 'react';
import { Zap, Menu, X, Layers, Briefcase, Cpu, Mail, Bot, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
    onAgentClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAgentClick }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();

    const handleAgentClick = () => {
        if (onAgentClick) {
            onAgentClick();
        } else {
            router.push('/?view=agent');
        }
        setMobileMenuOpen(false);
    };

    const menuItems = [
        { label: 'Expertise', icon: Layers, href: '#expertise' },
        { label: 'Projetos', icon: Briefcase, href: '#projects' },
        { label: 'Blog', icon: FileText, href: '/blog' },
        { label: 'Processo', icon: Cpu, href: '#process' },
        { label: 'Contato', icon: Mail, href: '#contact' }
    ];

    return (
        <header className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm transition-all duration-300">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                    <img src="https://github.com/felipesouzadsgn.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="text-white font-bold text-sm">Felipe Souza</h3>
                    <p className="text-gray-500 text-xs">@felipesouzadsgn</p>
                </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                <div className="w-10 h-10 flex items-center justify-center">
                    <Zap size={32} className="text-white fill-white" />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button
                    className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {mobileMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 z-[60]"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <div className="fixed top-24 right-8 w-72 bg-[#050505]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 flex flex-col gap-2 shadow-2xl z-[70] animate-fade-in-down">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all active:scale-95"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <div className="w-10 h-10 rounded-xl bg-black/50 flex items-center justify-center text-white group-hover:scale-110 transition-all border border-white/5">
                                    <item.icon size={20} />
                                </div>
                                <span className="text-gray-300 group-hover:text-white font-medium">{item.label}</span>
                            </a>
                        ))}

                        <div className="h-px bg-white/10 my-2" />

                        <button
                            onClick={handleAgentClick}
                            className="group w-full p-4 rounded-2xl bg-white text-black font-bold shadow-lg transition-all active:scale-95 border border-transparent relative overflow-hidden hover:bg-gray-200"
                        >
                            <div className="relative flex items-center justify-center gap-3">
                                <Bot size={20} className="animate-bounce-slow" />
                                <span>Agent Design AI</span>
                            </div>
                        </button>
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;
