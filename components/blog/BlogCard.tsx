import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../../lib/blog';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <Link href={`/blog/${post.slug}`} className="group relative flex flex-col h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={post.coverImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-white">
                    {post.tags?.[0] || 'Article'}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    {/* <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>5 min read</span>
                    </div> */}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
                    Ler Artigo <ArrowUpRight size={16} />
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
