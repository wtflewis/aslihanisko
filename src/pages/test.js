import Image from 'next/image'
import { Inter } from 'next/font/google'
import Status from '@/components/Spotify/Status';
const inter = Inter({ subsets: ['latin'] })

import useSWR from 'swr';


export default function Test() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify/status', fetcher);
  const isDarkMode = true; // Change this to a variable that determines if dark mode is enabled or not
  return (
    <main className={`h-screen`}>
     
 
    </main>
  )
}
