import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Github, 
  Instagram, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Send, 
  Sparkles, 
  MousePointer2, 
  Monitor, 
  Layout, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Menu, 
  X, 
  Bot,
  Zap,
  FileText
} from 'lucide-react';
import Reveal from './components/Reveal';
import AgentDesign from './components/AgentDesign';
import Typewriter from './components/Typewriter';
import { SERVICES_OPTIONS, PROJECTS, WORKFLOW, TESTIMONIALS, SOCIAL_LINKS, AGENT_BG_IMAGE } from './constants';

type ViewMode = 'landing' | 'agent';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('landing');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleServiceToggle = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const servicesList = selectedServices.map(id => SERVICES_OPTIONS.find(s => s.id === id)?.label).join(', ');
    const subject = `Novo Projeto: ${formData.name}`;
    const body = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AServiços: ${servicesList || 'Não especificado'}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`;
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
  };

  // Dedicated Agent Page View
  if (currentView === 'agent') {
    return <AgentDesign onClose={() => setCurrentView('landing')} isFullPage={true} />;
  }

  // Main Landing Page View
  return (
    <div className="min-h-screen bg-[#020202] text-gray-200 font-sans selection:bg-purple-500/30 selection:text-white overflow-x-hidden relative">
      
      {/* Global Ambient Cursor Light */}
      <div 
        className="fixed w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-transform duration-100 ease-out"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-40 animate-bounce-slow">
        <a 
          href={`https://wa.me/${SOCIAL_LINKS.whatsapp}`} 
          target="_blank" 
          rel="noreferrer"
          className="group relative flex items-center justify-center p-4 bg-[#25D366]/90 hover:bg-[#25D366] backdrop-blur-md text-white rounded-2xl shadow-[0_0_40px_-10px_rgba(37,211,102,0.5)] transition-all hover:scale-105 border border-white/20"
          aria-label="Contato via WhatsApp"
        >
          <MessageSquare size={28} className="fill-white" />
          <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-xl border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap translate-x-4 group-hover:translate-x-0 pointer-events-none">
            Fale comigo agora
          </span>
        </a>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#020202]/60 backdrop-blur-xl border-b border-white/5 h-20 shadow-lg' : 'bg-transparent h-24'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-gray-100 to-gray-500 flex items-center justify-center text-black shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]">
              <span className="font-bold text-xs">FS</span>
            </div>
            FELIPE SOUZA
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/5">
            {['Expertise', 'Projetos', 'Processo'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace('ç','c').replace('ã','a')}`}
                className="px-6 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => setCurrentView('agent')}
              className="ml-2 px-6 py-2 bg-purple-600/20 border border-purple-500/30 text-purple-300 rounded-lg text-sm font-bold hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 flex items-center gap-2"
            >
              <Bot size={16} /> Agent AI
            </button>
            <a 
              href="#contact" 
              className="ml-2 px-6 py-2 bg-white/10 border border-white/10 backdrop-blur-md text-white rounded-lg text-sm font-bold hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Contato
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
           <div className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/5 p-4 flex flex-col gap-2 shadow-2xl animate-fade-in-down">
              {['Expertise', 'Projetos', 'Processo', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={item === 'Contato' ? '#contact' : `#${item.toLowerCase().replace('ç','c').replace('ã','a')}`}
                  className="p-4 rounded-lg bg-white/5 text-center text-white font-medium hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => {
                  setCurrentView('agent');
                  setMobileMenuOpen(false);
                }}
                className="p-4 rounded-lg bg-purple-600 text-center text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              >
                <div className="flex items-center justify-center gap-2">
                  <Bot size={20} /> Agent Design AI
                </div>
              </button>
           </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Fundo tecnológico" 
            className="w-full h-full object-cover opacity-20 animate-pulse-slow"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <Reveal delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md w-fit text-xs font-semibold text-gray-300 uppercase tracking-widest shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Disponível para projetos
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
                Design Visionário.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 animate-gradient-x">
                  Código Inteligente.
                </span>
              </h1>
            </Reveal>
            
            <Reveal delay={300}>
              <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed border-l-2 border-white/10 pl-6">
                Eu transformo ideias complexas em interfaces de alta performance. 
                Combinando <span className="text-white font-semibold">Design</span>, <span className="text-white font-semibold">Código</span> e <span className="text-white font-semibold">IA</span>.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setCurrentView('agent')}
                  className="relative group px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-3 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] overflow-hidden"
                >
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                   <Bot size={20} className="relative z-10 text-purple-600" />
                   <span className="relative z-10">Iniciar com IA</span>
                </button>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="group px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 rounded-xl font-medium hover:bg-white/10 hover:text-white hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:animate-ping transition-all"></span>
                  Ver Portfolio
                </a>
              </div>
            </Reveal>
          </div>

          {/* Abstract 3D Glass Card Effect */}
          <div className="relative hidden lg:block perspective-1000">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
             <div className="relative z-10 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out preserve-3d">
                <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                   {/* Glass Sheen */}
                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                   
                   <div className="flex justify-between items-start mb-12">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <div className="px-3 py-1 rounded-lg bg-white/10 text-[10px] font-mono text-gray-400 border border-white/5">
                        OneFile.tsx
                      </div>
                   </div>

                   <div className="space-y-4 font-mono text-sm">
                      <div className="flex items-center gap-3 text-purple-400">
                        <span className="text-gray-600">01</span>
                        <span>import</span> <span className="text-white">Future</span> <span>from</span> <span className="text-green-400">'@design/ai'</span>;
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <span className="text-gray-600">02</span>
                        <span>const</span> <span className="text-blue-400">Experience</span> <span>=</span> <span>()</span> <span>=&gt;</span> <span>{`{`}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300 pl-8">
                         <span className="text-gray-600">03</span>
                         <span className="text-pink-400">return</span> <span>(</span>
                      </div>
                      <div className="pl-12 py-2 border-l border-white/10 ml-9 my-2 bg-white/5 rounded-r-lg">
                         <Typewriter text='<Hello World! />' className="text-green-400 font-bold" />
                      </div>
                      <div className="flex items-center gap-3 text-gray-300 pl-8">
                         <span className="text-gray-600">05</span>
                         <span>);</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <span className="text-gray-600">06</span>
                        <span>{`}`}</span>;
                      </div>
                   </div>

                   <div className="mt-12 pt-6 border-t border-white/10 flex justify-between items-center text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                         <CheckCircle2 size={14} className="text-green-500" />
                         <span>No Errors Found</span>
                      </div>
                      <span>Compiling... 100%</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Expertise Bento Grid */}
      <section id="expertise" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Expertise Híbrida</h2>
              <p className="text-gray-400 text-lg max-w-2xl">Não sou apenas um designer que "arranha" código, nem um dev sem gosto visual. Domino ambos os mundos.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Reveal className="col-span-1 md:col-span-2 h-full" delay={100}>
              <div className="group relative h-full rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="flex flex-col md:flex-row h-full">
                  <div className="p-10 flex-1 relative z-10 flex flex-col justify-between">
                    <div>
                      <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500 group-hover:border-white/20">
                        <Layout className="text-white" size={28} />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">UI/UX & Framer</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Design systems escaláveis no Figma e sites "no-code" absurdamente rápidos no Framer. Foco total em conversão e estética.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 min-h-[300px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" 
                      alt="Figma Interface" 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" 
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal className="col-span-1 h-full" delay={200}>
              <div className="group relative h-full rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden shadow-2xl flex flex-col">
                <div className="p-10 flex-1 relative z-10">
                  <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500 group-hover:border-white/20">
                    <Terminal className="text-white" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Front-end Dev</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    React, Next.js e Tailwind. Componentes modernos, micro-interações e performance.
                  </p>
                </div>
                <div className="h-48 relative overflow-hidden mt-auto">
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10"></div>
                   <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Code" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal className="col-span-1 md:col-span-3" delay={300}>
              <div className="group relative rounded-[2rem] bg-gradient-to-r from-[#0f0f0f] to-[#151515] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden shadow-2xl flex flex-col md:flex-row-reverse items-center">
                 <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px] pointer-events-none"></div>
                 
                 <div className="p-10 flex-1 relative z-10 w-full">
                    <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500 group-hover:border-white/20">
                      <Cpu className="text-white" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Desenvolvimento com IA</h3>
                    <p className="text-gray-400 max-w-2xl mb-8 leading-relaxed">
                      Não é apenas sobre usar ChatGPT. É sobre integrar APIs de LLMs em sistemas reais para automatizar processos, gerar conteúdo dinâmico e criar experiências mágicas para o usuário.
                    </p>
                    <div className="flex flex-wrap gap-3">
                       {['OpenAI API', 'Automations', 'Next.js AI SDK'].map((tag) => (
                         <span key={tag} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-sm font-mono text-gray-300 transition-colors">
                           {tag}
                         </span>
                       ))}
                    </div>
                 </div>
                 <div className="flex-1 w-full h-80 md:h-full min-h-[300px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent z-10 md:bg-gradient-to-r md:via-[#0f0f0f]/50"></div>
                    <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" alt="AI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 border-b border-white/5 pb-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Projetos Selecionados</h2>
                <p className="text-gray-400 max-w-lg text-lg">
                  Uma curadoria de interfaces onde a beleza encontra a função.
                </p>
              </div>
              <a href={SOCIAL_LINKS.instagram} className="group flex items-center gap-3 text-white px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]">
                Ver mais no Instagram <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, index) => (
              <Reveal key={index} delay={index * 150}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 border border-white/5 shadow-2xl">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                    
                    {/* Glass Overlay on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
                       <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
                          <MousePointer2 className="text-white" size={24} />
                       </div>
                    </div>

                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    
                    <div className="absolute top-4 left-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[-10px] group-hover:translate-y-0">
                       {project.tags.map((tag, i) => (
                         <span key={i} className="px-3 py-1 bg-black/60 backdrop-blur-xl text-[10px] font-bold uppercase tracking-wider text-white rounded-full border border-white/10">{tag}</span>
                       ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm font-mono uppercase tracking-widest">{project.category}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Agent Design Promo Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-[#020202] to-[#0A0A0A] border-t border-white/5">
         <div className="absolute inset-0 z-0">
            <img 
               src={AGENT_BG_IMAGE} 
               alt="AI Agent Background" 
               className="w-full h-full object-cover opacity-10 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/90 to-transparent"></div>
         </div>

         <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6">
                  <Bot size={14} />
                  <span>Nova Ferramenta</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Agent Design</span><br />
                  Seu Assistente Criativo.
               </h2>
               <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
                  Não sabe por onde começar? O Agent Design utiliza inteligência artificial avançada para estruturar sua ideia, definir requisitos e gerar um briefing profissional em minutos.
               </p>

               <div className="flex flex-col gap-4 mb-10">
                  {[
                     { icon: <MessageSquare size={18} />, text: "Conversa natural e intuitiva" },
                     { icon: <Zap size={18} />, text: "Geração instantânea de ideias" },
                     { icon: <FileText size={18} />, text: "Exportação direta por e-mail" }
                  ].map((feat, i) => (
                     <div key={i} className="flex items-center gap-4 text-gray-300">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-purple-400 border border-white/5">
                           {feat.icon}
                        </div>
                        <span>{feat.text}</span>
                     </div>
                  ))}
               </div>

               <button 
                  onClick={() => setCurrentView('agent')}
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] flex items-center gap-3 w-fit"
               >
                  <Bot size={20} />
                  <span>Acessar Agent AI</span>
                  <ArrowRight size={18} />
               </button>
            </Reveal>

            <Reveal delay={200} className="hidden lg:block">
               <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-30"></div>
                  <div className="relative rounded-xl overflow-hidden aspect-video border border-white/5 bg-[#050505]">
                     {/* Mock Chat Interface */}
                     <div className="absolute inset-0 flex flex-col p-6">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                           <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-blue-600"></div>
                           <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                        </div>
                        <div className="space-y-4">
                           <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-500/30 flex-shrink-0"></div>
                              <div className="space-y-2">
                                 <div className="h-2 w-48 bg-white/10 rounded-full"></div>
                                 <div className="h-2 w-32 bg-white/10 rounded-full"></div>
                              </div>
                           </div>
                           <div className="flex gap-3 flex-row-reverse">
                              <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0"></div>
                              <div className="space-y-2">
                                 <div className="h-2 w-40 bg-purple-500/20 rounded-full ml-auto"></div>
                              </div>
                           </div>
                           <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-500/30 flex-shrink-0"></div>
                              <div className="space-y-2">
                                 <div className="h-2 w-56 bg-white/10 rounded-full"></div>
                                 <div className="h-2 w-40 bg-white/10 rounded-full"></div>
                                 <div className="h-2 w-24 bg-white/10 rounded-full"></div>
                              </div>
                           </div>
                        </div>
                        
                        <div className="mt-auto pt-4">
                           <div className="h-10 w-full rounded-full bg-white/5 border border-white/10 flex items-center px-4">
                              <div className="h-2 w-24 bg-white/10 rounded-full"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Reveal>
         </div>
      </section>

      {/* Workflow Section */}
      <section id="process" className="py-32 px-6 bg-[#050505] border-y border-white/5 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-blue-900/10 to-transparent rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-24">
               <span className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4 block">Metodologia</span>
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Processo Transparente</h2>
               <p className="text-gray-400 max-w-2xl mx-auto text-lg">Sem "caixa preta". Você acompanha cada etapa da evolução do seu produto.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {WORKFLOW.map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2 h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[2rem] rounded-tr-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"></div>
                  
                  <div className="text-7xl font-bold text-white/[0.03] absolute top-6 right-8 font-mono">{item.step}</div>
                  
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 text-white relative z-10 border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-[#020202] overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 text-center">Feedback Real</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {TESTIMONIALS.map((t, i) => (
               <Reveal key={i} delay={i * 150}>
                 <div className="p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-sm border border-white/5 relative hover:bg-white/[0.07] transition-colors duration-300 group">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none"></div>
                   <div className="text-purple-500 mb-8 relative z-10">
                     <Sparkles size={32} className="fill-current" />
                   </div>
                   <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10 font-medium relative z-10">"{t.text}"</p>
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-[#020202] to-[#020202] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Contact Info */}
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Vamos criar<br />o <span className="text-gray-500">futuro?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
                Estou pronto para ouvir sua ideia. Preencha o formulário e receba uma resposta em até 24 horas.
              </p>
              
              <div className="space-y-6">
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all border border-white/10 shadow-lg shadow-black/50">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">Email</span>
                    <span className="text-xl text-white font-medium">{SOCIAL_LINKS.email}</span>
                  </div>
                </a>
                
                <a href={`https://wa.me/${SOCIAL_LINKS.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all border border-white/10 shadow-lg shadow-black/50">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">WhatsApp</span>
                    <span className="text-xl text-white font-medium">(13) 99643-2357</span>
                  </div>
                </a>

                <div className="pt-8 flex gap-4">
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:scale-110 hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
                    <Instagram size={24} />
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:scale-110 hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 shadow-lg">
                    <Linkedin size={24} />
                  </a>
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:scale-110 hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Tech Form */}
            <Reveal delay={200}>
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-2">
                   <Monitor size={20} className="text-purple-500" />
                   <span>INICIAR PROTOCOLO</span>
                </h3>
                
                <form onSubmit={handleFormSubmit} className="space-y-8 relative z-10">
                  
                  {/* Service Selection */}
                  <div className="space-y-4">
                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest block">01 // SELECIONE O SERVIÇO</label>
                    <div className="flex flex-wrap gap-3">
                      {SERVICES_OPTIONS.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleServiceToggle(service.id)}
                          className={`
                             group flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-medium transition-all duration-300
                             ${selectedServices.includes(service.id) 
                               ? 'bg-purple-500/20 border-purple-500 text-white shadow-[0_0_15px_-3px_rgba(168,85,247,0.4)]' 
                               : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:bg-white/10 hover:text-white'}
                          `}
                        >
                          <span className={selectedServices.includes(service.id) ? "text-purple-300" : "text-gray-500 group-hover:text-purple-400"}>
                            {service.icon}
                          </span>
                          {service.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                     <label className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">02 // DADOS DO CLIENTE</label>
                     <div className="space-y-1">
                        <div className="flex items-center bg-[#0A0A0A] border-b border-white/20 focus-within:border-purple-500 transition-colors">
                           <span className="pl-4 text-gray-500 font-mono text-sm">{`>`}</span>
                           <input 
                              type="text" 
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full bg-transparent p-4 text-white placeholder-gray-700 font-mono focus:outline-none"
                              placeholder="NOME_COMPLETO"
                              required
                           />
                        </div>
                     </div>
                     <div className="space-y-1">
                        <div className="flex items-center bg-[#0A0A0A] border-b border-white/20 focus-within:border-purple-500 transition-colors">
                           <span className="pl-4 text-gray-500 font-mono text-sm">{`@`}</span>
                           <input 
                              type="email" 
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full bg-transparent p-4 text-white placeholder-gray-700 font-mono focus:outline-none"
                              placeholder="EMAIL_CORPORATIVO"
                              required
                           />
                        </div>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <label className="text-xs font-mono text-gray-500 uppercase tracking-widest block">03 // DETALHES DA MISSÃO</label>
                     <div className="bg-[#0A0A0A] border border-white/10 rounded-none focus-within:border-purple-500 transition-colors relative">
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20"></div>
                        
                        <textarea 
                           id="message"
                           name="message"
                           value={formData.message}
                           onChange={handleInputChange}
                           rows={4}
                           className="w-full bg-transparent p-4 text-white placeholder-gray-700 font-mono focus:outline-none resize-none text-sm leading-relaxed"
                           placeholder="Descreva o projeto..."
                           required
                        ></textarea>
                     </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full group relative bg-white text-black font-bold py-5 px-6 overflow-hidden transition-all hover:bg-white hover:text-purple-600 rounded-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="flex items-center justify-between relative z-10 font-mono tracking-wider">
                       <span>ENVIAR_DADOS</span>
                       <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </button>
                  
                  <div className="text-center">
                     <p className="text-[10px] text-gray-600 font-mono uppercase">
                        SISTEMA SEGURO // CRIPTOGRAFIA DE PONTA A PONTA
                     </p>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>

          <div className="mt-32 pt-10 border-t border-white/5 text-center flex flex-col items-center gap-6">
            <p className="text-gray-500 text-sm font-mono">&copy; {new Date().getFullYear()} Felipe Souza Design. Code & Design by Me.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;