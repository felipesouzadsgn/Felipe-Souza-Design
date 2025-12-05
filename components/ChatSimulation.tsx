"use client";

import React, { useState, useEffect } from 'react';
import { Bot, User } from 'lucide-react';

const ChatSimulation = () => {
    const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([]);
    const [step, setStep] = useState(0);

    const script = [
        { role: 'bot', text: "Olá! Vamos criar algo incrível hoje?" },
        { role: 'user', text: "Preciso de uma landing page para minha startup de IA." },
        { role: 'bot', text: "Claro! Qual é o foco principal da startup?" },
        { role: 'user', text: "Automação de processos jurídicos." },
        { role: 'bot', text: "Entendido. Gerando estrutura: Hero com proposta de valor, seção de Features e prova social..." },
        { role: 'bot', text: "Analise o wireframe abaixo. O que acha?" }
    ] as const;

    useEffect(() => {
        if (step >= script.length) return;

        const timer = setTimeout(() => {
            setMessages(prev => [...prev, script[step]]);
            setStep(prev => prev + 1);
        }, step === 0 ? 500 : 2500); // Delay inicial curto, depois pausas maiores para leitura

        return () => clearTimeout(timer);
    }, [step]);

    return (
        <div className="w-full h-full bg-[#050505] border border-white/10 rounded-xl overflow-hidden flex flex-col relative shadow-2xl">
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-white/5 backdrop-blur-md">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-auto text-xs text-gray-500 font-mono">agent_session_01.tsx</div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-6 space-y-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/50 pointer-events-none z-10"></div>

                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-4 duration-500`}
                    >
                        <div className={`
              w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
              ${msg.role === 'bot' ? 'bg-purple-600/20 text-purple-400' : 'bg-white/10 text-white'}
            `}>
                            {msg.role === 'bot' ? <Bot size={16} /> : <User size={16} />}
                        </div>
                        <div className={`
              p-3 rounded-2xl text-sm max-w-[80%]
              ${msg.role === 'bot'
                                ? 'bg-white/5 text-gray-300 rounded-tl-none border border-white/5'
                                : 'bg-purple-600 text-white rounded-tr-none shadow-lg shadow-purple-900/20'}
            `}>
                            {msg.text}
                        </div>
                    </div>
                ))}

                {step < script.length && (
                    <div className="flex gap-2 items-center text-gray-500 text-xs ml-11 animate-pulse">
                        <span>Agent is typing</span>
                        <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></span>
                        <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-100"></span>
                        <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-200"></span>
                    </div>
                )}
            </div>

            {/* Input Mock */}
            <div className="p-4 border-t border-white/5 bg-white/[0.02]">
                <div className="h-10 bg-white/5 rounded-lg border border-white/5 flex items-center px-4 gap-3">
                    <div className="w-4 h-4 rounded-full border border-white/20"></div>
                    <div className="h-2 w-32 bg-white/10 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default ChatSimulation;
