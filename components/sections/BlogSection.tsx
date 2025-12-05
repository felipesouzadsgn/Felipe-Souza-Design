import React from 'react';
import { BlogPost } from '../../lib/blog';
import BlogCard from '../blog/BlogCard';
import SectionHeader from '../ui/SectionHeader';
import SectionWrapper from '../ui/SectionWrapper';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface BlogSectionProps {
    posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
    return (
        <SectionWrapper id="blog" className="bg-black">
            <SectionHeader
                title="Blog & Insights"
                subtitle="Compartilhando conhecimento sobre design e tecnologia."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>

            <div className="flex justify-center">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium transition-all hover:scale-105"
                >
                    Ver Todos os Artigos <ArrowRight size={16} />
                </Link>
            </div>
        </SectionWrapper>
    );
};

export default BlogSection;
