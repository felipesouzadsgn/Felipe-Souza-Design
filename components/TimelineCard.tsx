import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown, LucideIcon } from 'lucide-react';

interface TimelineItem {
    year: string;
    role: string;
    company: string;
}

interface TimelineCardProps {
    title: string;
    icon: LucideIcon;
    items: TimelineItem[];
    color: string; // e.g., 'purple' or 'blue'
    delay?: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ title, icon: Icon, items, color, delay = 0 }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartY(e.pageY - scrollRef.current.offsetTop);
        setScrollTop(scrollRef.current.scrollTop);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const y = e.pageY - scrollRef.current.offsetTop;
        const walk = (y - startY) * 2; // Scroll speed multiplier
        scrollRef.current.scrollTop = scrollTop - walk;
    };

    const handleScrollUp = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: -100, behavior: 'smooth' });
        }
    };

    const handleScrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: 100, behavior: 'smooth' });
        }
    };

    // Determine color classes based on prop - NOW MONOCHROME
    const borderColor = 'group-hover:border-black/30 dark:group-hover:border-white/30';
    const gradientColor = 'from-black/5 dark:from-white/5';
    const dotBorderColor = 'border-black dark:border-white';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className={`row-span-2 h-[620px] bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/5 rounded-3xl p-6 relative overflow-hidden group ${borderColor} transition-colors flex flex-col shadow-sm dark:shadow-none`}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className={`absolute inset-0 bg-gradient-to-b ${gradientColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

            <div className="relative z-10 flex-shrink-0">
                <div className="w-10 h-10 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-black dark:text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-6">{title}</h3>
            </div>

            <div
                ref={scrollRef}
                className="relative flex-grow overflow-y-auto no-scrollbar cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-black/10 dark:before:bg-white/10 pb-4">
                    {items.map((item, i) => (
                        <div key={i} className="relative pl-8 select-none">
                            <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0A0A0A] border-2 ${dotBorderColor} z-10`} />
                            <span className="text-xs text-gray-500 font-mono block mb-1">{item.year}</span>
                            <h4 className="text-black dark:text-white font-bold">{item.role}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.company}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-20">
                <button
                    onClick={handleScrollUp}
                    className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5 flex items-center justify-center text-black dark:text-white transition-colors"
                >
                    <ChevronUp size={16} />
                </button>
                <button
                    onClick={handleScrollDown}
                    className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5 flex items-center justify-center text-black dark:text-white transition-colors"
                >
                    <ChevronDown size={16} />
                </button>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </motion.div>
    );
};

export default TimelineCard;
