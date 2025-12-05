import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import Link from 'next/link';
import { PROJECTS } from '../lib/constants';
import { ArrowUpRight, Figma, Code, Smartphone, Layout, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCarousel = () => {
    // Duplicate projects to create seamless loop
    const carouselProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS, ...PROJECTS];
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);

    // Calculate dimensions
    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
            setContentWidth(containerRef.current.scrollWidth);
        }
    }, []);

    // Auto-scroll animation
    useEffect(() => {
        const controls = animate(x, -contentWidth / 2, {
            duration: 60,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            onUpdate: (latest) => {
                // Reset if we've scrolled past the first set
                if (latest <= -contentWidth / 2) {
                    x.set(0);
                }
            }
        });

        if (isHovered) {
            controls.stop();
        } else {
            controls.play();
        }

        return () => controls.stop();
    }, [x, contentWidth, isHovered]);

    const handleDragEnd = () => {
        setIsHovered(false);
    };

    const scrollLeft = () => {
        const currentX = x.get();
        animate(x, currentX + 400, { duration: 0.5, ease: "easeInOut" });
    };

    const scrollRight = () => {
        const currentX = x.get();
        animate(x, currentX - 400, { duration: 0.5, ease: "easeInOut" });
    };

    // Map tags to icons
    const getTechIcon = (tag: string) => {
        const lowerTag = tag.toLowerCase();
        if (lowerTag.includes('figma')) return <Figma size={16} />;
        if (lowerTag.includes('react')) return <Code size={16} />;
        if (lowerTag.includes('next')) return <Code size={16} />;
        if (lowerTag.includes('mobile') || lowerTag.includes('app')) return <Smartphone size={16} />;
        if (lowerTag.includes('ai') || lowerTag.includes('openai')) return <Cpu size={16} />;
        return <Layout size={16} />;
    };

    return (
        <div className="w-full py-20 overflow-hidden bg-transparent relative group/carousel">

            {/* Header / Filters */}
            <div className="text-center mb-12 relative z-10">
                <h2 className="text-4xl font-bold text-white mb-8">Select Works</h2>
                <div className="flex justify-center gap-4 flex-wrap">
                    {['Branding', 'UI Design', 'Website'].map((filter) => (
                        <button
                            key={filter}
                            className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-white/10 hover:text-white transition-all"
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Carousel Track */}
            <div
                className="relative w-full"
                ref={containerRef}
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}
            >
                <motion.div
                    className="flex gap-8 px-8 cursor-grab active:cursor-grabbing"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: -contentWidth + containerWidth, right: 0 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onDragStart={() => setIsHovered(true)}
                    onDragEnd={handleDragEnd}
                >
                    {carouselProjects.map((project, index) => (
                        <Link
                            href={`/projects/${project.id}`}
                            key={`${project.id}-${index}`}
                            className="relative group shrink-0 w-[400px] aspect-[4/5] rounded-3xl overflow-hidden bg-[#0A0A0A]"
                            draggable={false}
                        >
                            <motion.div
                                className="w-full h-full"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

                                {/* Content - Top (Icons) */}
                                <div className="absolute top-6 left-0 w-full flex justify-center gap-2 opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    {project.tags.slice(0, 3).map((tag, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                            {getTechIcon(tag)}
                                        </div>
                                    ))}
                                </div>

                                {/* Content - Bottom (Title & Link) */}
                                <div className="absolute bottom-0 left-0 w-full p-8 text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    <div className="w-12 h-12 mx-auto mb-4 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                        <span className="font-bold text-white text-lg">Fs</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <div className="flex items-center justify-center gap-1 text-gray-400 text-sm group-hover:text-white transition-colors">
                                        <span>View Project</span>
                                        <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-12 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                <button
                    onClick={scrollLeft}
                    className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={scrollRight}
                    className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default ProjectCarousel;
