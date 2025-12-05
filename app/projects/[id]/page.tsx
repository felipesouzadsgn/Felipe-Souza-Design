import React from 'react';
import { PROJECTS } from '../../../lib/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

// Generate static params for all projects
export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        id: project.id,
    }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = PROJECTS.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#020202] text-white selection:bg-purple-500/30 selection:text-white pb-20">
            {/* Header / Hero */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute top-8 left-8 z-20">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <ArrowLeft size={16} /> Voltar
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
                    <div className="max-w-7xl mx-auto">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            {project.title}
                        </h1>

                        <div className="flex flex-wrap gap-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
                                >
                                    <ExternalLink size={18} /> Ver Projeto
                                </a>
                            )}
                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-all"
                                >
                                    <Github size={18} /> Código Fonte
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-16 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Description */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                                Sobre o Projeto
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {project.longDescription}
                            </p>
                        </section>

                        {/* Gallery (Bento Grid Style) */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Galeria</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[200px]">
                                {project.gallery.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`relative group overflow-hidden rounded-2xl border border-white/10 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">

                        {/* Tech Stack */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-4 text-white">Tecnologias</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm bg-black/40 border border-white/10 rounded-lg text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-4 text-white">Funcionalidades</h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle2 size={18} className="text-purple-500 mt-1 shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
