import React from 'react';
import { getAllPosts } from '../../lib/blog';
import BlogCard from '../../components/blog/BlogCard';
import { Sparkles } from 'lucide-react';

export default function BlogPage() {
    const posts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'tags']);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-4">
                        <Sparkles size={14} />
                        <span>Blog & Insights</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight font-display">
                        Pensamentos sobre <br /> <span className="text-gray-500">Design e Tecnologia.</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-body">
                        Explorando o futuro da web, tutoriais de desenvolvimento e bastidores dos meus projetos.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
