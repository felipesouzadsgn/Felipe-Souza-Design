import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-10 border-t border-black/5 dark:border-white/5 text-center flex flex-col items-center gap-6 bg-white dark:bg-[#020202] transition-colors duration-300">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono">
                &copy; {new Date().getFullYear()} Felipe Souza Design. Code & Design by Me.
            </p>
        </footer>
    );
};

export default Footer;
