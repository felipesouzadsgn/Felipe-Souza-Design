"use client";

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';


const StyleguidePage = () => {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="min-h-screen bg-[#020202] text-white font-body selection:bg-white/20 selection:text-white">

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <header className="mb-20 border-b border-white/10 pb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono uppercase tracking-wider mb-6">
                            System Design v1.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">Styleguide</h1>
                        <p className="text-xl text-gray-500 max-w-2xl">
                            Documentação oficial do sistema de design, tipografia e cores para manter a consistência visual do projeto.
                        </p>
                    </header>

                    {/* Typography */}
                    <section className="mb-24">
                        <h2 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm text-gray-400">01</span>
                            Tipografia
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                                    <span className="text-gray-500 font-mono text-xs block mb-4">FONT FAMILY: REM (TITLES)</span>
                                    <h1 className="text-6xl font-bold font-display mb-4">Heading 1</h1>
                                    <h2 className="text-5xl font-bold font-display mb-4">Heading 2</h2>
                                    <h3 className="text-4xl font-bold font-display mb-4">Heading 3</h3>
                                    <h4 className="text-3xl font-bold font-display mb-4">Heading 4</h4>
                                    <h5 className="text-2xl font-bold font-display mb-4">Heading 5</h5>
                                    <h6 className="text-xl font-bold font-display">Heading 6</h6>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                                    <span className="text-gray-500 font-mono text-xs block mb-4">FONT FAMILY: RALEWAY (BODY)</span>
                                    <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p className="text-base text-gray-500 mb-6 leading-relaxed">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Colors */}
                    <section className="mb-24">
                        <h2 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm text-gray-400">02</span>
                            Cores
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {[
                                { name: 'Background', value: '#020202' },
                                { name: 'Surface', value: '#0A0A0A' },
                                { name: 'White', value: '#FFFFFF' },
                                { name: 'Gray 200', value: '#E5E7EB' },
                                { name: 'Gray 400', value: '#9CA3AF' },
                                { name: 'Gray 600', value: '#4B5563' },
                            ].map((color, i) => (
                                <div key={i} className="group cursor-pointer" onClick={() => copyToClipboard(color.value)}>
                                    <div
                                        className="h-32 rounded-2xl mb-3 border border-white/10 shadow-lg transition-transform group-hover:scale-105 relative flex items-center justify-center"
                                        style={{ backgroundColor: color.value }}
                                    >
                                        {copied === color.value && (
                                            <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1">
                                                <Check size={12} /> Copied
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-bold text-white text-sm">{color.name}</p>
                                            <p className="text-gray-500 text-xs font-mono">{color.value}</p>
                                        </div>
                                        <Copy size={14} className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Components */}
                    <section className="mb-24">
                        <h2 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm text-gray-400">03</span>
                            Componentes
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Buttons */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                                <h3 className="text-lg font-bold mb-6 text-gray-400">Botões</h3>
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors">
                                        Primary
                                    </button>
                                    <button className="px-6 py-3 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-colors">
                                        Secondary
                                    </button>
                                    <button className="px-6 py-3 border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 transition-colors">
                                        Outline
                                    </button>
                                </div>
                            </div>

                            {/* Inputs */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                                <h3 className="text-lg font-bold mb-6 text-gray-400">Formulários</h3>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Input Padrão"
                                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                                    />
                                    <div className="flex items-center bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 focus-within:border-white/30 transition-colors">
                                        <span className="text-gray-500 mr-2">@</span>
                                        <input
                                            type="text"
                                            placeholder="Com ícone"
                                            className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Cards */}
                            <div className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/5">
                                <h3 className="text-lg font-bold mb-6 text-gray-400">Cards</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-6 bg-[#0A0A0A] rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                                        <div className="w-10 h-10 bg-white/5 rounded-lg mb-4"></div>
                                        <h4 className="font-bold text-white mb-2">Card Title</h4>
                                        <p className="text-gray-500 text-sm">Description text goes here. Simple and clean card design.</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="w-10 h-10 bg-white/10 rounded-lg mb-4"></div>
                                        <h4 className="font-bold text-white mb-2">Glass Card</h4>
                                        <p className="text-gray-500 text-sm">Glassmorphism effect with background blur and transparency.</p>
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/10">
                                        <div className="w-10 h-10 bg-white rounded-lg mb-4"></div>
                                        <h4 className="font-bold text-white mb-2">Gradient Card</h4>
                                        <p className="text-gray-400 text-sm">Subtle gradient background for emphasis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>


        </div>
    );
};

export default StyleguidePage;
