"use client";

import React, { useState, useEffect } from 'react';
import {
    Github,
    Linkedin,
    Instagram,
    Globe,
    ArrowUpRight,
    MessageSquare,
    FileText,
    Music,
    MapPin,
    Sparkles
} from 'lucide-react';


const LinksPage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const scrollRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Auto-scroll logic
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scroll = () => {
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: scrollContainer.clientWidth * 0.85, behavior: 'smooth' });
            }
        };

        const intervalId = setInterval(scroll, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const links = [
        {
            icon: <Globe size={24} />,
            label: "Portfolio Oficial",
            subLabel: "Ver meus projetos recentes",
            href: "/"
        },
        {
            icon: <FileText size={24} />,
            label: "Proposta Comercial",
            subLabel: "Landing Pages de Alta Conversão",
            href: "/proposta",
            highlight: true
        },
        {
            icon: <MessageSquare size={24} />,
            label: "WhatsApp",
            subLabel: "Vamos fechar um projeto?",
            href: "https://wa.me/5513996432357"
        },
        {
            icon: <Linkedin size={24} />,
            label: "LinkedIn",
            subLabel: "Conecte-se comigo",
            href: "https://linkedin.com/in/felipesouzadsgn"
        },
        {
            icon: <Github size={24} />,
            label: "GitHub",
            subLabel: "Veja meu código",
            href: "https://github.com/felipesouzadsgn"
        },
        {
            icon: <Instagram size={24} />,
            label: "Instagram",
            subLabel: "Bastidores e Design",
            href: "https://instagram.com/felipesouzadsgn"
        }
    ];

    const widgets = [
        {
            icon: <MapPin size={16} />,
            label: "Santos, SP",
            value: "Brasil"
        },
        {
            icon: <Music size={16} />,
            label: "Ouvindo",
            value: "Lo-Fi Beats"
        }
    ];

    return (
        <div className="min-h-screen font-sans overflow-x-hidden selection:bg-white/20 selection:text-white" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div
                    className="absolute w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] mix-blend-screen transition-transform duration-1000 ease-out"
                    style={{
                        left: mousePosition.x * 0.05,
                        top: mousePosition.y * 0.05,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] mix-blend-screen transition-transform duration-1000 ease-out"
                    style={{
                        right: mousePosition.x * 0.05,
                        bottom: mousePosition.y * 0.05,
                        transform: 'translate(50%, 50%)'
                    }}
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            </div>



            <main className="relative z-10 min-h-screen flex flex-col items-center justify-center py-32 px-6">

                {/* Profile Section */}
                <div className="text-center mb-12">
                    <div className="relative w-32 h-32 mx-auto mb-6 group">
                        <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                        <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-white/20 to-white/5 backdrop-blur-xl overflow-hidden">
                            <img
                                src="https://github.com/felipesouzadsgn.png"
                                alt="Felipe Souza"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-white text-black p-1.5 rounded-full border-4 border-black">
                            <Sparkles size={14} fill="currentColor" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Felipe Souza</h1>
                    <p className="text-gray-500 text-sm max-w-xs mx-auto">
                        Designer & Developer criando experiências digitais imersivas.
                    </p>

                    {/* Widgets Grid */}
                    <div className="flex justify-center gap-3 mt-6">
                        {widgets.map((widget, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 transition-all"
                            >
                                {widget.icon}
                                <div className="text-xs text-left">
                                    <div className="opacity-60">{widget.label}</div>
                                    <div className="font-bold text-white">{widget.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Banners Carousel */}
                <div
                    ref={scrollRef}
                    className="w-full max-w-md mb-8 overflow-x-auto pb-4 snap-x snap-mandatory flex gap-4 no-scrollbar scroll-smooth"
                >

                    {/* Framer Banner */}
                    <a
                        href="https://framer.link/fsdsgn"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex-shrink-0 w-[85%] aspect-[2/1] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] snap-center"
                    >
                        <div className="absolute inset-0 bg-black">
                            <img
                                src="https://framerusercontent.com/images/48ha9TP325zS5V9N8hB5M8S8.png"
                                alt="Framer"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-300 text-xs font-bold border border-white/10">
                                    Parceiro
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Framer</h3>
                            <p className="text-gray-400 text-xs mb-3 line-clamp-2">A ferramenta no-code mais poderosa.</p>
                            <div className="flex items-center gap-2 text-gray-300 font-medium text-xs group-hover:text-white transition-colors">
                                Testar Grátis <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </a>

                    {/* Framer Templates Banner */}
                    <a
                        href="https://framer.com/templates"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex-shrink-0 w-[85%] aspect-[2/1] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] snap-center"
                    >
                        <div className="absolute inset-0 bg-black">
                            <img
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                                alt="Templates"
                                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-300 text-xs font-bold border border-white/10">
                                    Recursos
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Templates</h3>
                            <p className="text-gray-400 text-xs mb-3 line-clamp-2">Templates premium para acelerar.</p>
                            <div className="flex items-center gap-2 text-gray-300 font-medium text-xs group-hover:text-white transition-colors">
                                Ver Coleção <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </a>

                    {/* Behance Banner */}
                    <a
                        href="https://www.behance.net/felipesouzadsgn"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex-shrink-0 w-[85%] aspect-[2/1] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] snap-center"
                    >
                        <div className="absolute inset-0 bg-black">
                            <img
                                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
                                alt="Behance"
                                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-300 text-xs font-bold border border-white/10">
                                    Portfolio
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Behance</h3>
                            <p className="text-gray-400 text-xs mb-3 line-clamp-2">Estudos de caso detalhados.</p>
                            <div className="flex items-center gap-2 text-gray-300 font-medium text-xs group-hover:text-white transition-colors">
                                Seguir <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </a>

                    {/* BlackSheep Club Banner */}
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex-shrink-0 w-[85%] aspect-[2/1] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] snap-center"
                    >
                        <div className="absolute inset-0 bg-black">
                            <img
                                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
                                alt="BlackSheep"
                                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-300 text-xs font-bold border border-white/10">
                                    Comunidade
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">BlackSheep</h3>
                            <p className="text-gray-400 text-xs mb-3 line-clamp-2">O clube mais exclusivo.</p>
                            <div className="flex items-center gap-2 text-gray-300 font-medium text-xs group-hover:text-white transition-colors">
                                Saiba Mais <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </a>

                </div>

                {/* Links List */}
                <div className="w-full max-w-md space-y-3 mb-16">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target={link.href.startsWith('/') ? '_self' : '_blank'}
                            rel={link.href.startsWith('/') ? '' : 'noreferrer'}
                            className={`group relative flex items-center gap-4 p-4 rounded-2xl border border-white/10 backdrop-blur-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] ${link.highlight
                                ? 'bg-white/10 border-white/20'
                                : 'bg-white/5 hover:bg-white/10'
                                }`}
                        >
                            {/* Icon Box */}
                            <div className="relative w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                                {link.icon}
                            </div>

                            {/* Text */}
                            <div className="relative flex-1">
                                <h3 className="font-bold text-white text-base leading-tight group-hover:text-gray-100 transition-colors">
                                    {link.label}
                                </h3>
                                <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                    {link.subLabel}
                                </p>
                            </div>

                            {/* Arrow */}
                            <div className="relative w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                <ArrowUpRight size={16} />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Projects Bento Grid */}
                <div className="w-full max-w-md">
                    <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                        <Sparkles size={20} className="text-gray-500" />
                        Projetos Recentes
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2 aspect-video rounded-2xl overflow-hidden border border-white/10 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                                alt="Project 1"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <span className="text-xs font-bold text-gray-400 bg-white/10 px-2 py-1 rounded-full border border-white/10 mb-2 inline-block">UI Design</span>
                                <h3 className="text-white font-bold">Neon Bank App</h3>
                            </div>
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
                                alt="Project 2"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3">
                                <h3 className="text-white font-bold text-sm">Arkitect</h3>
                            </div>
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
                                alt="Project 3"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3">
                                <h3 className="text-white font-bold text-sm">HealthAI</h3>
                            </div>
                        </div>
                        <div className="col-span-2 aspect-[2/1] rounded-2xl overflow-hidden border border-white/10 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1481487484168-9b9307a5296d?q=80&w=1000&auto=format&fit=crop"
                                alt="Project 4"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <span className="text-xs font-bold text-gray-400 bg-white/10 px-2 py-1 rounded-full border border-white/10 mb-2 inline-block">Web Dev</span>
                                <h3 className="text-white font-bold">TechFlow SaaS</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </main>


        </div>
    );
};

export default LinksPage;
