import React from 'react';

interface FooterProps {
    forceDark?: boolean;
}

const Footer: React.FC<FooterProps> = ({ forceDark = false }) => {
    const bgClass = forceDark ? 'bg-[#020202] border-white/5' : 'bg-white dark:bg-[#020202] border-black/5 dark:border-white/5';
    const textClass = forceDark ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400';

    return (
        <footer className={`py-10 border-t text-center flex flex-col items-center gap-6 transition-colors duration-300 ${bgClass}`}>
            <p className={`${textClass} text-sm font-mono`}>
                &copy; {new Date().getFullYear()} Felipe Souza Design. Code & Design by Me.
            </p>
        </footer>
    );
};

export default Footer;
