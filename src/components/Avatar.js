import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect} from 'react';
import { motion, AnimatePresence} from 'framer-motion';


export default function Avatar() {
    const [randomAvatar, setRandomAvatar] = useState(`/memoji/memoji4.PNG`);

    useEffect(() => {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * 3) + 1; // 1 ile 10 arasında rastgele bir sayı üret
        const randomFileName = `memoji${randomIndex}.PNG`;
        setRandomAvatar(`/memoji/${randomFileName}`);
      }, 3000); // 3 saniyede bir değişim yap
  
    }, []);
  
    

  return (
 <>
    <div className="avatar-container sm:w-36 w-24">
    <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <motion.img
          src="/memoji/memoji4.PNG"
          alt="Random Avatar"
          className=" rounded-lg "
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.5 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        />
      </motion.div>
    </div>
  </>
  )
}
