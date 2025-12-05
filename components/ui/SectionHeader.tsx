import React from 'react';
import Reveal from '../Reveal';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    align?: 'center' | 'left';
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    description,
    align = 'center',
    className = ''
}) => {
    return (
        <Reveal>
            <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
                {subtitle && (
                    <span className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4 block">
                        {subtitle}
                    </span>
                )}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    {title}
                </h2>
                {description && (
                    <p className={`text-gray-400 text-lg max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
                        {description}
                    </p>
                )}
            </div>
        </Reveal>
    );
};

export default SectionHeader;
