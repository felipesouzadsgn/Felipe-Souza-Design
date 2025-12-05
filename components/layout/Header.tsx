import React, { useState } from 'react';
import { Zap, Menu, X, Layers, Briefcase, Cpu, Mail, Bot } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

interface HeaderProps {
    onAgentClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAgentClick }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Expertise', icon: Layers, href: '#expertise' },
        { label: 'Projetos', icon: Briefcase, href: '#projects' },
        { label: 'Processo', icon: Cpu, href: '#process' },
        { label: 'Contato', icon: Mail, href: '#contact' }
    ];

    return (
        <header className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 dark:border-white/20">
                    <img src="https://github.com/felipesouzadsgn.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="text-black dark:text-white font-bold text-sm">Felipe Souza</h3>
                    <p className="text-gray-500 text-xs">@felipesouzadsgn</p>
                </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                <div className="w-10 h-10 flex items-center justify-center">
                    <Zap size={32} className="text-black dark:text-white fill-black dark:fill-white" />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <ThemeToggle />
                <button
                    className="p-2 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {mobileMenuOpen && (
                <div className="absolute top-24 right-8 w-72 bg-white/90 dark:bg-[#050505]/90 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-3xl p-4 flex flex-col gap-2 shadow-2xl animate-fade-in-down z-50">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="group flex items-center gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5 transition-all active:scale-95"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-black/50 flex items-center justify-center text-black dark:text-white group-hover:scale-110 transition-all border border-black/5 dark:border-white/5">
                                <item.icon size={20} />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white font-medium">{item.label}</span>
                        </a>
                    ))}

                    <div className="h-px bg-black/10 dark:bg-white/10 my-2" />

                    <button
                        onClick={() => {
                            onAgentClick();
                            setMobileMenuOpen(false);
                        }}
                        className="group w-full p-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold shadow-lg transition-all active:scale-95 border border-transparent relative overflow-hidden"
                    >
                        <div className="relative flex items-center justify-center gap-3">
                            <Bot size={20} className="animate-bounce-slow" />
                            <span>Agent Design AI</span>
                        </div>
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
