import Image from 'next/image'
import useSWR from 'swr'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState, useEffect } from "react";

import { SiSpotify } from 'react-icons/si';
import { HiOutlineDeviceMobile, HiOutlineDesktopComputer, HiOutlineDeviceTablet } from 'react-icons/hi';
import { BiVolumeFull, BiVolumeLow, BiVolumeMute } from 'react-icons/bi';


export default function Status() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data } = useSWR('/api/spotify/status', fetcher);

    const currentDeviceIcon = () => {
        if (data?.deviceType == 'Computer') {
            return <HiOutlineDesktopComputer size={20} color={'#1ED760'} />;
        } else if (data?.deviceType == 'Tablet') {
            return <HiOutlineDeviceTablet size={20} color={'#1ED760'} />;
        } else if (data?.deviceType == 'Smartphone') {
            return <HiOutlineDeviceMobile size={20} color={'#1ED760'} />;
        } else {
            return <HiOutlineDeviceMobile size={20} color={'#1ED760'} />;
        }
    };


    const currentVolumeIcon = () => {
        if (data?.volume == '0') {
            return <BiVolumeMute size={20} color={'#1ED760'} />;
        } else if (data?.volume == '50') {
            return <BiVolumeLow size={20} color={'#1ED760'} />;
        } else if (data?.volume == '100') {
            return <BiVolumeFull size={20} color={'#1ED760'} />;
        } else {
            return <BiVolumeFull size={20} color={'#1ED760'} />;
        }
    }



    const x = useMotionValue(50);
    const y = useMotionValue(50);
 
    const rotateX = useTransform(y, [0, 100], [45, -45]);
    const rotateY = useTransform(x, [0, 100], [-45, 45]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    function handleMouseLeave(event) {
        // Div'in mevcut dönüş açılarını al
        const currentRotateX = rotateX.get();
        const currentRotateY = rotateY.get();
      
        // Div'in sıfıra dönmesini sağlayacak animasyonları başlat
        rotateX.set(0, {
          transition: {
            duration: "2s",
            delay: "1s",
            easing: "ease-in"
          }
        });
        rotateY.set(0, {
          transition: {
            duration: "2s",
            delay: "1s",
            easing: "ease-in"
          }
        });
      }
      

    return (
        <>


            {data?.isPlaying ? (
                 <motion.div
                    style={{
                        width: 70,
                        height: 50,
                        display: "flex",
                        placeItems: "center",
                        placeContent: "center",
                        justifyContent: "center",
                        borderRadius: 30,
                         perspective: 400
                    }}
                    
                    onMouseMove={handleMouse}
                 >
                    <motion.div
                        style={{

                            borderRadius: 30,

                            rotateX,
                            rotateY, 
                            cursor: "grab"
                        }}
                        
                    >

                        <div className="text-white flex flex-col items-center">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={
                                    data?.isPlaying
                                        ? data.songUrl
                                        : 'https://open.spotify.com/user/31gudkeegnnghv6jiivvwgbdlgn4'
                                }
                                className="relative dark:text-white flex items-center p-3 space-x-4 transition-shadow border dark:border-white rounded-md hover:shadow-md w-72"
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    backdropFilter: 'blur(19px)',
                                    position: 'relative',
                                    maxWidth: '70vw',
                                }}
                            >
                                <div
                                    className="absolute top-0 opacity-70 left-0 w-full h-full"
                                    style={{
                                        backgroundImage: `url(${data?.albumImageUrl})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        filter: 'blur(3px)',
                                        zIndex: '-1',
                                    }}
                                ></div>
                                <div className="flex items-center justify-center w-[8rem] h-16 rounded-md">

                                    <div className='w-[4rem]'>
                                        {data?.isPlaying ? (
                                            <img
                                                className='rounded-lg shadow-sm'
                                                src={data?.albumImageUrl}
                                                alt={data?.album}
                                            />
                                        ) : (
                                            <SiSpotify size={48} color={'#1ED760'} />
                                        )}
                                    </div>


                                </div>

                                <div className="flex flex-col items-start justify-center flex-1">
                                    <h1 className="text-md font-semibold">
                                        {data?.title}
                                    </h1>
                                    <p className="text-sm text-green-400">
                                        {data?.artist}
                                    </p>
                                </div>

                                <div className="relative -top-5 left-1.5 flex flex-col items-end justify-start">
                                    <div className="flex items-end justify-end">
                                        <span className="">
                                            {currentDeviceIcon()}
                                        </span>
                                    </div>
                                </div>

                                <div className='absolute bottom-1.5 right-1.5'>
                                    <SiSpotify size={16} color={'#1ED760'} />
                                </div>

                                <div
                                    className='absolute -left-14 -top-7 -rotate-90'

                                >
                                    {/* Burada resminizi ekleyebilirsiniz */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ rotate: 100, scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20
                                        }}
                                    >
                                        <img
                                            src='/memoji/musicmemoji.png'
                                            alt='Image'
                                            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                                            draggable={false}
                                        />
                                    </motion.div>
                                </div>
                            </a>
                        </div>

                    </motion.div>
                    
                </motion.div>
             ) : null}
        </>
    );
}
