"use client";

import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import AgentDesign from '../components/AgentDesign';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import AboutBento from '../components/AboutBento';
import Projects from '../components/sections/Projects';
import AgentPromo from '../components/sections/AgentPromo';
import Workflow from '../components/sections/Workflow';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import { SOCIAL_LINKS } from '../lib/constants';

type ViewMode = 'landing' | 'agent';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<ViewMode>('landing');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (currentView === 'agent') {
        return <AgentDesign onClose={() => setCurrentView('landing')} isFullPage={true} />;
    }

    return (
        <div className="min-h-screen font-sans selection:bg-black/10 dark:selection:bg-white/20 selection:text-black dark:selection:text-white overflow-x-hidden relative transition-colors duration-300" style={{ backgroundColor: '#020202', color: '#e5e5e5' }}>
            {/* Global Ambient Cursor Light */}
            <div
                className="fixed w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-transform duration-100 ease-out"
                style={{ left: mousePosition.x, top: mousePosition.y }}
            />

            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-8 right-8 z-40 animate-bounce-slow">
                <a
                    href={`https://wa.me/${SOCIAL_LINKS.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex items-center justify-center p-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl shadow-lg transition-all hover:scale-105"
                    aria-label="Contato via WhatsApp"
                >
                    <MessageSquare size={28} className="fill-white" />
                    <span className="absolute right-full mr-4 bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black dark:text-white px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-lg">
                        Fale comigo agora
                    </span>
                </a>
            </div>

            <Header onAgentClick={() => setCurrentView('agent')} forceDark={true} />

            <main>
                <Hero />
                <AboutBento />
                <Projects />
                <AgentPromo onAgentClick={() => setCurrentView('agent')} />
                <Workflow />
                <Testimonials />
                <Contact />
            </main>

            <Footer forceDark={true} />
        </div>
    );
};

export default App;
