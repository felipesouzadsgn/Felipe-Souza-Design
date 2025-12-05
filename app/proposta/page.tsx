"use client";

import React, { useState } from 'react';
import {
    CheckCircle2,
    Zap,
    Layout,
    Smartphone,
    MessageSquare,
    Rocket,
    ArrowRight,
    Briefcase,
    Building2,
    Gavel,
    Stethoscope,
    ShoppingBag,
    Code2,
    Star,
    ChevronDown,
    Shield,
    Clock,
    Award,
    TrendingUp,
    Users,
    Sparkles
} from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const ProposalPage = () => {
    const whatsappLink = "https://wa.me/5513996432357?text=Olá Felipe, gostaria de saber mais sobre a criação de Landing Pages.";
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const stats = [
        { value: "50+", label: "Projetos Entregues", icon: <Rocket size={20} /> },
        { value: "98%", label: "Clientes Satisfeitos", icon: <Star size={20} /> },
        { value: "24h", label: "Tempo de Resposta", icon: <Clock size={20} /> },
        { value: "5x", label: "Mais Conversões", icon: <TrendingUp size={20} /> }
    ];

    const benefits = [
        {
            icon: <Layout size={28} />,
            title: "Design Exclusivo",
            description: "Nada de templates. Design único que reflete sua marca."
        },
        {
            icon: <Zap size={28} />,
            title: "Ultra Rápido",
            description: "Carregamento instantâneo. Google e clientes amam."
        },
        {
            icon: <Smartphone size={28} />,
            title: "Mobile First",
            description: "Perfeito em qualquer dispositivo, sempre."
        },
        {
            icon: <TrendingUp size={28} />,
            title: "Alta Conversão",
            description: "Estrutura estratégica focada em vendas."
        }
    ];

    const niches = [
        { icon: <Building2 size={22} />, label: "Imobiliárias" },
        { icon: <Stethoscope size={22} />, label: "Clínicas" },
        { icon: <Gavel size={22} />, label: "Advogados" },
        { icon: <Briefcase size={22} />, label: "Consultores" },
        { icon: <ShoppingBag size={22} />, label: "E-commerce" },
        { icon: <Code2 size={22} />, label: "Startups" },
        { icon: <Users size={22} />, label: "Infoprodutores" },
        { icon: <Award size={22} />, label: "Coaches" }
    ];

    const plans = [
        {
            name: "Essencial",
            price: "1.200",
            period: "único",
            description: "Ideal para começar sua presença digital.",
            features: [
                "Landing Page One-Page",
                "Design Responsivo",
                "Botão WhatsApp Flutuante",
                "Formulário de Contato",
                "Hospedagem Grátis",
                "Entrega em 5 dias"
            ],
            highlight: false
        },
        {
            name: "Profissional",
            price: "2.500",
            period: "único",
            description: "Para escalar vendas com alto impacto.",
            features: [
                "Tudo do Essencial",
                "Design Premium",
                "Animações Avançadas",
                "Integração CRM/Email",
                "SEO Otimizado",
                "Analytics Configurado",
                "Entrega em 10 dias"
            ],
            highlight: true
        },
        {
            name: "Enterprise",
            price: "Consultar",
            period: "",
            description: "Soluções sob medida para grandes negócios.",
            features: [
                "Múltiplas Páginas",
                "CMS Personalizado",
                "Integrações Avançadas",
                "Blog Integrado",
                "Suporte Prioritário",
                "Testes A/B",
                "Consultoria UX"
            ],
            highlight: false
        }
    ];

    const testimonials = [
        {
            text: "A landing page aumentou minhas conversões em 300%. O investimento se pagou no primeiro mês.",
            author: "Dr. Ricardo",
            role: "Clínica Odontológica",
            rating: 5
        },
        {
            text: "Design impecável e entrega super rápida. Recomendo para qualquer empreendedor.",
            author: "Amanda S.",
            role: "Infoprodutora",
            rating: 5
        },
        {
            text: "Profissionalismo do início ao fim. A página ficou exatamente como eu imaginava.",
            author: "Carlos M.",
            role: "Corretor de Imóveis",
            rating: 5
        }
    ];

    const faqs = [
        {
            q: "Quanto tempo leva para ficar pronta?",
            a: "O prazo varia de acordo com o plano escolhido. O Essencial é entregue em 5 dias úteis, o Profissional em 10 dias."
        },
        {
            q: "Preciso pagar hospedagem?",
            a: "Não! Hospedamos sua landing page gratuitamente na Vercel, uma das melhores plataformas do mundo."
        },
        {
            q: "A página é minha para sempre?",
            a: "Sim! Após a entrega, você recebe todos os arquivos e tem propriedade total do projeto."
        },
        {
            q: "Como funciona o suporte?",
            a: "Oferecemos 30 dias de suporte gratuito para ajustes menores após a entrega."
        }
    ];

    return (
        <div className="min-h-screen font-sans overflow-x-hidden" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <Header onAgentClick={() => { }} forceDark={true} />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
                    {/* Background Effects */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[150px]" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[150px]" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
                    </div>

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-8">
                            <Sparkles size={16} />
                            Oferta Especial de Lançamento
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
                            Landing Pages que{' '}
                            <span className="text-gray-500">
                                Vendem
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Design premium, carregamento instantâneo e foco total em conversão.
                            <span className="text-white font-medium"> A ferramenta que faltava para escalar seu negócio.</span>
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 bg-white text-black px-8 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:bg-gray-200 hover:scale-105 transition-all"
                            >
                                <MessageSquare size={24} />
                                Quero minha Landing Page
                                <ArrowRight size={20} />
                            </a>

                            <a href="#plans" className="text-gray-500 hover:text-white font-medium flex items-center gap-2 transition-colors">
                                Ver planos e preços
                                <ChevronDown size={18} />
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <Shield size={16} className="text-gray-500" />
                                Garantia de 30 dias
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-gray-500" />
                                Resposta em 24h
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 border-y border-white/10">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-gray-400 mb-4">
                                        {stat.icon}
                                    </div>
                                    <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-gray-500 font-medium text-sm uppercase tracking-widest mb-4 block">Por que nos escolher</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Não entregamos código.<br />
                                <span className="text-gray-600">Entregamos resultados.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="group p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-white/10 transition-all hover:-translate-y-2"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white/20 transition-colors">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Niches Section */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-white/5 rounded-[3rem] p-12 md:p-16 text-center overflow-hidden border border-white/10">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Atendemos todos os nichos
                                </h2>
                                <p className="text-gray-500 mb-10 max-w-lg mx-auto">
                                    Independente do seu segmento, criamos páginas que convertem.
                                </p>

                                <div className="flex flex-wrap justify-center gap-3">
                                    {niches.map((niche, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 px-5 py-3 rounded-full hover:bg-white/10 hover:text-white transition-colors"
                                        >
                                            {niche.icon}
                                            <span className="font-medium">{niche.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Plans Section */}
                <section id="plans" className="py-24 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-gray-500 font-medium text-sm uppercase tracking-widest mb-4 block">Investimento</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Transparente e sem surpresas
                            </h2>
                            <p className="text-gray-600 max-w-lg mx-auto">
                                Escolha o plano ideal para o seu momento e comece a vender mais hoje.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {plans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`relative p-8 rounded-3xl border ${plan.highlight
                                        ? 'bg-white/10 border-white/20 shadow-2xl'
                                        : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                                        } transition-all`}
                                >
                                    {plan.highlight && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-5 py-1.5 rounded-full text-sm font-bold shadow-lg">
                                            Mais Popular
                                        </div>
                                    )}

                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        {plan.price !== "Consultar" && <span className="text-gray-600 text-lg">R$</span>}
                                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                                        {plan.period && <span className="text-gray-600 ml-1">/{plan.period}</span>}
                                    </div>
                                    <p className="text-gray-500 mb-8 pb-8 border-b border-white/5">
                                        {plan.description}
                                    </p>

                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="text-gray-400 shrink-0 mt-0.5" size={18} />
                                                <span className="text-gray-400">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold transition-all hover:scale-[1.02] ${plan.highlight
                                            ? 'bg-white text-black hover:bg-gray-200'
                                            : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                                            }`}
                                    >
                                        Contratar Agora
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-24 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-gray-500 font-medium text-sm uppercase tracking-widest mb-4 block">Depoimentos</span>
                            <h2 className="text-4xl md:text-5xl font-bold">
                                O que dizem nossos clientes
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="p-8 bg-white/[0.02] rounded-3xl border border-white/5"
                                >
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={18} className="fill-gray-400 text-gray-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-400 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                                    <div>
                                        <div className="font-bold text-white">{testimonial.author}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 px-6 bg-gradient-to-b from-transparent to-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-gray-500 font-medium text-sm uppercase tracking-widest mb-4 block">Dúvidas Frequentes</span>
                            <h2 className="text-4xl md:text-5xl font-bold">Perguntas Frequentes</h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-white/5 rounded-2xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full p-6 text-left flex items-center justify-between bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                                    >
                                        <span className="font-bold text-white">{faq.q}</span>
                                        <ChevronDown
                                            size={20}
                                            className={`text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {openFaq === index && (
                                        <div className="p-6 pt-0 text-gray-500">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Pronto para transformar<br />
                            <span className="text-gray-500">seu negócio?</span>
                        </h2>
                        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
                            Não perca mais vendas com sites que não convertem. Vamos construir sua máquina de vendas hoje.
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-black px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:bg-gray-200 hover:scale-105 transition-all"
                        >
                            <MessageSquare size={28} />
                            Falar com Especialista
                        </a>
                        <p className="mt-6 text-gray-600">
                            Sem compromisso. Resposta garantida em até 24h.
                        </p>
                    </div>
                </section>
            </main>

            <Footer forceDark={true} />
        </div>
    );
};

export default ProposalPage;
