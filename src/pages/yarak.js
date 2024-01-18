

import Image from 'next/image';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import Status from '@/components/Spotify/Status';
import { Inter } from 'next/font/google';
import JSXStyle from 'styled-jsx/style';

const inter = Inter({ subsets: ['latin'] });

export default function Yarak() {
    const [randomText, setRandomText] = useState('');

    useEffect(() => {
        const fetchRandomText = async () => {
            const response = await fetch('https://baconipsum.com/api/?type=all-meat&paras=1');
            const data = await response.json();
            setRandomText(data[0]);
        };
        fetchRandomText();
    }, []);

    const { data: randomImage } = useSWR('https://source.unsplash.com/random/800x600', {
        refreshInterval: 5000,
    });

    return (
        <main className={`h-screen bg-gradient-radial`}>
            <div className="flex flex-col mt-[99rem] items-center justify-center h-full">
                <div className="mb-8">
                    <Status />
                </div>
                <div className="mb-8">
                    <Image src={randomImage} width={800} height={600} alt="Random Image" />
                </div>
                <div className="text-center">
                    <p className="text-3xl font-bold mb-4">{randomText}</p>
                    <p className="text-lg">{randomText}</p>
                </div>
            </div>
        </main>
    );
}
