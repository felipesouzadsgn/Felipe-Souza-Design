import React from 'react';
import { getPostBySlug, getAllPosts } from '../../../lib/blog';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'coverImage',
        'tags'
    ]);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <article className="max-w-3xl mx-auto">
                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} />
                    Voltar para o Blog
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-white/10 px-3 py-1 rounded-full text-white font-medium border border-white/10">
                            {post.tags?.[0] || 'Article'}
                        </span>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-display">
                        {post.title}
                    </h1>

                    {post.coverImage && (
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 mb-8">
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="w-full h-full object-cover grayscale opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                    )}
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-gray-400 prose-a:text-white prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-white prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[#111] prose-pre:border prose-pre:border-white/10">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </article>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = getAllPosts(['slug']);

    return posts.map((post) => ({
        slug: post.slug,
    }));
}
