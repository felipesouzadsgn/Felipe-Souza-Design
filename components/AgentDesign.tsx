"use client";

import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import {
  X,
  Send,
  Mic,
  Plus,
  Bot,
  Sparkles,
  ChevronDown,
  Mail,
  ArrowLeft,
  MessageCircle
} from 'lucide-react';
import { AGENT_BG_IMAGE, SOCIAL_LINKS } from '../lib/constants';
import { ChatMessage } from '../lib/types';

interface AgentDesignProps {
  onClose: () => void;
  isFullPage?: boolean;
}

const AgentDesign: React.FC<AgentDesignProps> = ({ onClose, isFullPage = false }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize Gemini
  useEffect(() => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        const chat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: `Você é o 'Agent Design', um assistente virtual especialista em UI/UX e desenvolvimento web da Felipe Souza Design. 
            Seu objetivo é ajudar potenciais clientes a criar um briefing inicial para seus projetos. 
            Comece se apresentando brevemente e pergunte o nome do cliente.
            Em seguida, faça perguntas uma por uma para entender: 
            1. O tipo de projeto (Site, App, Sistema). 
            2. O público-alvo. 
            3. Preferências de estilo (Minimalista, Colorido, Dark, etc). 
            4. Funcionalidades principais.
            Seja simpático, use emojis ocasionalmente e mantenha um tom profissional mas moderno e tecnológico.
            Ao final, sugira que eles cliquem no botão de enviar por email para formalizar o contato.`
          }
        });
        setChatSession(chat);

        // Initial greeting
        const initialMsg: ChatMessage = {
          id: 'init',
          role: 'model',
          text: 'Olá! Sou o Agent Design. Estou aqui para ajudar você a estruturar a ideia do seu próximo projeto digital. Como posso te chamar?',
          timestamp: new Date()
        };
        setMessages([initialMsg]);
      } else {
        // Fallback if no API key
        setMessages([{
          id: 'error',
          role: 'model',
          text: 'Erro de configuração: API Key não encontrada. O chat não pode ser iniciado.',
          timestamp: new Date()
        }]);
      }
    } catch (error) {
      console.error("Error initializing AI:", error);
    }
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!input.trim() || !chatSession) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const result = await chatSession.sendMessage({ message: input });
      const responseText = result.text;

      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Desculpe, tive um problema de conexão. Poderia repetir?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFinishBriefing = () => {
    const conversationHistory = messages
      .map(m => `${m.role === 'user' ? 'Cliente' : 'Agent Design'}: ${m.text}`)
      .join('\n\n');

    const subject = "Briefing Gerado via Agent Design";
    const body = `Aqui está o histórico da conversa com o Agent Design:\n\n${conversationHistory}`;

    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsAppBriefing = () => {
    const conversationHistory = messages
      .map(m => `${m.role === 'user' ? 'Cliente' : 'Agent Design'}: ${m.text}`)
      .join('\n\n');

    const text = `*Briefing Gerado via Agent Design*\n\n${conversationHistory}`;
    const whatsappUrl = `https://wa.me/${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col bg-white dark:bg-black animate-in fade-in duration-300 ${isFullPage ? '' : 'items-center justify-center bg-white/80 dark:bg-black/80'}`}>
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={AGENT_BG_IMAGE}
          alt="Agent Background"
          className="w-full h-full object-cover opacity-5 dark:opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40 dark:from-black dark:via-black/80 dark:to-black/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200/50 via-transparent to-transparent dark:from-purple-900/20 dark:via-transparent dark:to-transparent"></div>
      </div>

      {/* Main Container */}
      <div
        className={`relative z-10 flex flex-col bg-white/40 dark:bg-black/40 backdrop-blur-xl border-black/10 dark:border-white/10 shadow-2xl overflow-hidden transition-colors
        ${isFullPage
            ? 'w-full h-full border-0 rounded-none'
            : 'w-full max-w-4xl h-[90vh] border rounded-2xl m-4'
          }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            {isFullPage && (
              <button onClick={onClose} className="mr-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <ArrowLeft size={24} />
              </button>
            )}
            <div className="w-10 h-10 rounded-xl bg-black dark:bg-white flex items-center justify-center shadow-lg">
              <Bot className="text-white dark:text-black" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
                Agent Design <span className="text-[10px] bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full border border-black/5 dark:border-white/5">BETA</span>
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Powered by Gemini 2.5 Flash</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleWhatsAppBriefing}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-lg text-sm text-[#25D366] transition-all group"
            >
              <MessageCircle size={16} className="group-hover:scale-110 transition-transform" /> WhatsApp
            </button>
            <button
              onClick={handleFinishBriefing}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 border border-black/10 dark:border-white/10 rounded-lg text-sm text-black dark:text-white transition-all group"
            >
              <Mail size={16} className="group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" /> Email
            </button>
            {!isFullPage && (
              <button
                onClick={onClose}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-[85%] md:max-w-[70%] p-5 rounded-2xl text-sm md:text-base leading-relaxed relative shadow-sm
                  ${msg.role === 'user'
                    ? 'bg-black dark:bg-white text-white dark:text-black rounded-br-none'
                    : 'bg-white dark:bg-[#1a1a1a]/80 backdrop-blur-md border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-200 rounded-bl-none'}
                `}
              >
                {/* Visual glow for bot messages */}
                {msg.role === 'model' && (
                  <div className="absolute -left-1 top-4 w-1 h-8 bg-black dark:bg-white rounded-full opacity-20"></div>
                )}
                {msg.text.split('\n').map((line, i) => (
                  <p key={i} className="mb-2 last:mb-0">{line}</p>
                ))}
                <span className={`text-[10px] opacity-50 block mt-2 ${msg.role === 'user' ? 'text-gray-400 dark:text-gray-600' : 'text-gray-500'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-[#1a1a1a]/80 backdrop-blur-md border border-black/10 dark:border-white/10 p-4 rounded-2xl rounded-bl-none flex items-center gap-1">
                <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce delay-150"></span>
                <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce delay-300"></span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area - DeepThink Style */}
        <div className="p-6 pt-2 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-black dark:via-black/90 dark:to-transparent">
          <div className="relative group max-w-4xl mx-auto">
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-full opacity-30 group-hover:opacity-60 transition duration-500 blur"></div>

            <div className="relative flex items-center bg-white dark:bg-[#0a0a0a] rounded-full px-2 py-2 border border-black/10 dark:border-white/10 shadow-lg">

              {/* Left Actions */}
              <button className="p-3 rounded-full text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all">
                <Plus size={20} />
              </button>

              {/* Mode Toggles (Visual) */}
              <div className="hidden md:flex items-center gap-1 mx-2 bg-black/5 dark:bg-white/5 rounded-full p-1 border border-black/5 dark:border-white/5">
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white dark:bg-white/10 text-xs font-medium text-black dark:text-white cursor-pointer shadow-sm">
                  <Sparkles size={12} className="text-black dark:text-white" />
                  <span>Normal</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-gray-500 hover:text-black dark:hover:text-white cursor-pointer transition-all">
                  <div className="w-3 h-3 rounded-full border border-gray-500 flex items-center justify-center">
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                  <span>DeepThink</span>
                  <ChevronDown size={10} />
                </div>
              </div>

              {/* Input */}
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Descreva sua ideia..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2 text-sm md:text-base"
                autoFocus
              />

              {/* Right Actions */}
              <div className="flex items-center gap-2 pr-1">
                <button className="p-3 rounded-full text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all">
                  <Mic size={20} />
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isTyping}
                  className={`
                    p-3 rounded-full flex items-center justify-center transition-all duration-300
                    ${input.trim()
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-md hover:scale-110'
                      : 'bg-black/5 dark:bg-white/10 text-gray-400 cursor-not-allowed'}
                  `}
                >
                  <Send size={18} className={input.trim() ? "fill-current" : ""} />
                </button>
              </div>
            </div>
          </div>
          <p className="text-center text-[10px] text-gray-400 dark:text-gray-600 mt-4 font-mono">
            Agent Design pode cometer erros. Considere verificar informações importantes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentDesign;