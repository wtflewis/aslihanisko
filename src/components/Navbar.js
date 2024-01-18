import Image from 'next/image'
import Link from 'next/link'
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineFolderRemove } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { PiStorefront,PiUserCircleFill } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";

export default function Navbar() {

    
  return (
 <>
 <div className="z-50 fixed flex items-center justify-center inset-x-0 bottom-4">
    <div className="z-50 flex items-center justify-center px-5 py-3 text-whit bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg">

 
   <div className="flex shrink-0">
     
         <Link href="/" >
            <BiHomeAlt2 color="white" size="2em" />
        </Link>
        <span className="border ml-2 mr-2 " ></span>
      
         <Link href="/test">  
            <HiOutlineFolderRemove color="white" size="2em" />
         </Link>
        <span className="border ml-2 mr-2 " ></span>
   
        <Link  href="/yarak" >
            <AiOutlineUser color="white" size="2em" />
        </Link>


       <span className="border ml-2 mr-2 " ></span>

        <Link href="/">
            <PiStorefront color="white" size="2em" />
        </Link>
    </div>

 
      </div>
    </div>
  
  </>
  )
}
