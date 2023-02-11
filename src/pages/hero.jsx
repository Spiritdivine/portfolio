import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import blue from './photos/blue.png';
import pink from './photos/pink.png';


const Hero = () => {
    return ( 
        <div className='flex space-x-32 justify-center items-center px-10  h-screen bg-slate-800'>
            <div className='w-1/2'>
                <motion.p 
                animate={{ x: 0 }} 
                initial={{x: -500}}
                transition={{
                    delay: 0.2,
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                  }}
                className='font-sans hover:font-serif text-4xl font-bold leading-relaxed text-blue-700'>
                    Hello, i am
                </motion.p>
                <motion.h2 
                animate={{ x: 0 }} 
                initial={{x: 500}}
                transition={{
                    delay: 0.4,
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                  }}
                className='text-8xl font-bold leading-none'>
                    MADU
                </motion.h2>
                <motion.h2 
                animate={{ x: 0 }} 
                initial={{x: -500}}
                transition={{
                    delay: 0.6,
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                  }}
                className='text-8xl font-bold leading-none'>
                    KELECHI
                </motion.h2>
                <motion.p
                animate={{ y: 0 }} 
                initial={{y: 500}}
                transition={{
                    delay: 0.8,
                    x: { duration: 0.8 },
                    default: { ease: "linear" }
                  }}
                >
                    I am a passionate developer
                </motion.p>
                <div>
                    <p className='text-white text-2xl'>
                        I design and develop services for customers of all sizes,
                        specializing in creating stylish, modern websites, web services and online stores
                    </p>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className='flex items-center w-1/2 relative'>
                <div className='w-72 h-84 bg-blue-700 rounded-lg relative z-10'><img src={blue} alt='pic'/></div>                
                <div className='rounded-lg absolute left-32'><img src={pink} alt='pic' className='w-84 h-42'/></div>                
            </div>
        </div>
     );
}
 
export default Hero;