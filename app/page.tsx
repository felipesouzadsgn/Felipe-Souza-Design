import React from 'react';
import HomeClient from '../components/HomeClient';

export default function Home() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <HomeClient />
        </React.Suspense>
    );
}
