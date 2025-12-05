"use client";

import React, { useRef, useState, useEffect } from 'react';
import { GraduationCap, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { EDUCATION_ITEMS } from '../lib/constants';

const EducationCard: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollUp, setCanScrollUp] = useState(false);
    const [canScrollDown, setCanScrollDown] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const startY = useRef(0);
    const scrollTop = useRef(0);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            setCanScrollUp(scrollTop > 0);
            setCanScrollDown(scrollTop < scrollHeight - clientHeight - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scrollUp = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: -80, behavior: 'smooth' });
        }
    };

    const scrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: 80, behavior: 'smooth' });
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        startY.current = e.pageY - (scrollRef.current?.offsetTop || 0);
        scrollTop.current = scrollRef.current?.scrollTop || 0;
        document.body.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.cursor = 'default';
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const y = e.pageY - (scrollRef.current.offsetTop || 0);
        const walk = (y - startY.current) * 2; // Scroll-fast
        scrollRef.current.scrollTop = scrollTop.current - walk;
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            document.body.style.cursor = 'default';
        }
    };

    return (
        <div className="relative w-full h-[450px] bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden group">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800')] bg-cover bg-center opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/70 to-[#0A0A0A]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-4">
                        <GraduationCap className="text-white" size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Education</h3>
                </div>

                {/* Scrollable Timeline */}
                <div className="flex-1 relative overflow-hidden">
                    {/* Top Fade */}
                    <div className={`absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollUp ? 'opacity-100' : 'opacity-0'}`} />

                    <div
                        ref={scrollRef}
                        className="h-full overflow-y-auto pr-2 cursor-grab active:cursor-grabbing"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onScroll={checkScroll}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <style jsx>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        <div className="space-y-6 pb-12 pt-2">
                            {EDUCATION_ITEMS.map((item) => (
                                <div key={item.id} className="flex gap-4 items-start select-none">
                                    {/* Square Placeholder for Logo */}
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex-shrink-0" />

                                    <div className="flex-1 pt-1">
                                        <span className="text-xs text-gray-400 font-mono block mb-1">{item.period}</span>
                                        <h4 className="text-white font-bold text-lg leading-tight mb-1">{item.degree}</h4>
                                        <p className="text-gray-500 text-sm">{item.institution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Fade */}
                    <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollDown ? 'opacity-100' : 'opacity-0'}`} />

                    {/* Navigation Arrows */}
                    <div className="absolute bottom-0 right-0 z-20 flex flex-col gap-2 pb-2">
                        <button
                            onClick={scrollUp}
                            disabled={!canScrollUp}
                            className={`w-10 h-10 bg-[#111] border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${canScrollUp ? 'opacity-100 hover:bg-white/10' : 'opacity-0 pointer-events-none'}`}
                        >
                            <ChevronUp className="text-white" size={20} />
                        </button>
                        <button
                            onClick={scrollDown}
                            disabled={!canScrollDown}
                            className={`w-10 h-10 bg-[#111] border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${canScrollDown ? 'opacity-100 hover:bg-white/10' : 'opacity-0 pointer-events-none'}`}
                        >
                            <ChevronDown className="text-white" size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
