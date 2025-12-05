import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#020202] text-white flex flex-col items-center justify-center p-6 text-center font-body">
            <h1 className="text-9xl font-bold font-display text-white/10 mb-4">404</h1>
            <h2 className="text-3xl font-bold font-display mb-4">Página não encontrada</h2>
            <p className="text-gray-400 mb-8 max-w-md">
                A página que você está procurando não existe ou foi movida.
            </p>
            <Link
                href="/"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-xl font-bold transition-all"
            >
                <ArrowLeft size={18} /> Voltar para Home
            </Link>
        </div>
    );
}
