import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-10 border-t text-center flex flex-col items-center gap-6 bg-[#020202] border-white/5">
            <p className="text-gray-500 text-sm font-mono">
                &copy; {new Date().getFullYear()} Felipe Souza Design. Code & Design by Me.
            </p>
        </footer>
    );
};

export default Footer;
