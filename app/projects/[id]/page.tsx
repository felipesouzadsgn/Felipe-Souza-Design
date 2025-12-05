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

export default async function ProjectPage({ params }: { params: { id: string } }) {
    const { id } = await params; // Await params to ensure compatibility
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#020202] text-white selection:bg-white/20 selection:text-white pb-20 font-body">
            {/* Header / Hero */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 grayscale"
                />
                <div className="absolute top-28 left-8 z-20">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all font-mono"
                    >
                        <ArrowLeft size={16} /> Voltar
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
                    <div className="max-w-7xl mx-auto">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 rounded-full uppercase tracking-wider">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-display">
                            {project.title}
                        </h1>

                        <div className="flex flex-wrap gap-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
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
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 font-display">
                                <span className="w-8 h-1 bg-white rounded-full"></span>
                                Sobre o Projeto
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed font-body">
                                {project.longDescription}
                            </p>
                        </section>

                        {/* Gallery (Bento Grid Style) */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 font-display">Galeria</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[200px]">
                                {project.gallery.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`relative group overflow-hidden rounded-2xl border border-white/10 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
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
                            <h3 className="text-xl font-bold mb-4 text-white font-display">Tecnologias</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm bg-black/40 border border-white/10 rounded-lg text-gray-400 font-mono"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-4 text-white font-display">Funcionalidades</h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-400 font-body">
                                        <CheckCircle2 size={18} className="text-white mt-1 shrink-0" />
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
