import Image from 'next/image'
import { Inter } from 'next/font/google'
import Status from '@/components/Spotify/Status';
const inter = Inter({ subsets: ['latin'] })
import useSWR from 'swr';
import Avatar from '@/components/Avatar';
import { CiLocationOn } from "react-icons/ci";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, createElement } from 'react';


export default function Bio() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center sm:flex-row sm:items-center sm:justify-between'>
                    <div className='mb-4 sm:mb-0 sm:mr-4'>
                        <Avatar />
                    </div>

 
                                        <motion.div
                                            className='text-center mr-4 ml-4 sm:text-left'
                                            variants={containerVariants}
                                            initial='hidden'
                                            animate='visible'
                                            exit='hidden'
                                        >
                                            <motion.h1
                                                className='font-extrabold text-transparent text-4xl sm:text-6xl bg-clip-text bg-gradient-to-br drop-shadow-lg from-white to-teal-500'
                                                variants={itemVariants}
                                            >
                                                Lewis
                                            </motion.h1>
                                            <div className=''>
                                                <motion.p
                                                    className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-white'
                                                    variants={itemVariants}
                                                >
                                                    Full-stack web developer
                                                </motion.p>
                                                <motion.div className='flex' variants={itemVariants}>
                                                    <CiLocationOn color='red' size={25} />
                                                    <motion.p
                                                        className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-bl from-blue-800 to-red-400'
                                                        variants={itemVariants}
                                                    >
                                                        Turkey/Kayseri
                                                    </motion.p>
                                                </motion.div>
                                            </div>
                                            <motion.h1
                                                className='mt-4 font-bold text-xl font-montserrat text-transparent bg-clip-text bg-gradient-to-tr from-gray-600 to-white'
                                                variants={itemVariants}
                                            >
                                                Merhaba, ben Ali
                                            </motion.h1>
                                            <motion.p className=' ' variants={itemVariants}>
                                                Web geliştirme konusunda öğrenciyim ve kullanıcı dostu web siteleri oluşturmayı seviyorum.
                                            </motion.p>
                                            <motion.p className=' ' variants={itemVariants}>
                                                Amacım, insanların ihtiyaçlarını karşılayacak modern web siteleri oluşturarak web dünyasına katkı sağlamak.
                                            </motion.p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                

