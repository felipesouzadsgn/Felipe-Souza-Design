import React from 'react';

interface SectionWrapperProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    containerClassName?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    id,
    className = '',
    children,
    containerClassName = ''
}) => {
    return (
        <section
            id={id}
            className={`py-20 md:py-32 px-6 md:px-8 relative ${className}`}
        >
            <div className={`max-w-7xl mx-auto ${containerClassName}`}>
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
