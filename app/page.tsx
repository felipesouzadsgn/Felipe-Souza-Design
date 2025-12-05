import React from 'react';
import HomeClient from '../components/HomeClient';
import { getAllPosts } from '../lib/blog';

export default function Home() {
    const posts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'tags']).slice(0, 3);

    return <HomeClient posts={posts} />;
}
