import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import blue from './photos/blue.png';
import pink from './photos/pink.png';
import MyComponent from "../component/Typed";


const Hero = () => {
    
    return ( 
        <div className='flex space-x-32 justify-start items-center px-2  h-screen  hero' id="hero">
            <div className='w-[45%]' id="hero-box1">
                <motion.p 
                animate={{ x: 0 }} 
                initial={{x: -500}}
                transition={{
                    delay: 0.2,
                    x: { duration: 0.5 },
                    default: { ease: "linear"}
                }}
                className='font-sans hover:font-serif text-3xl font-bold leading-relaxed text-blue-700'>
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
                className='text-6xl font-bold leading-none text-slate-800'>
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
                className='text-6xl font-bold leading-none text-slate-800'>
                    KELECHI
                </motion.h2>
                <motion.p
                animate={{ x: 0 }} 
                initial={{x: 500}}
                transition={{
                    delay: 0.8,
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                  }}
                className='text-slate-800 text-3xl whitespace-nowrap'>
                    <MyComponent/>
                </motion.p>
                <div className="flex justify-center items-center flex-wrap w-[50%]" id="hero-btn">
                    <a className="px-[2em] m-[1.5rem] hover:shadow-lg bg-slate-500 rounded-lg cursor-pointer align-middle shadow-xl font-bold text-[1rem]">about you</a>
                    <a href="#about"><div className="px-[2em] m-[1.5rem] hover:shadow-lg bg-slate-500 rounded-lg cursor-pointer align-middle shadow-xl font-bold text-[1rem]">Read More</div></a>
                    <a href="#contact"><div className="px-[2em] m-[1.5rem] hover:shadow-lg hover:bg-slate-500 bg-slate-300 rounded-lg cursor-pointer border-2 border-slate-200 text-slate-800 hover:text-black align-middle shadow-xl font-bold text-[1rem]">Contact Me</div></a>
                </div>
            </div>
            <div className='flex items-center w-[45%] relative design ml-8' role="main">
                <motion.div
                animate={{ y: 0 }}
                initial={{y: -1000}}
                transition={{
                    delay: 1,
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                }}
                className='w-72 h-84 bg-blue-400 rounded-lg relative z-10 blue'>
                    <img src={blue} alt='pic'/>
                </motion.div>                
                <div className='rounded-lg absolute left-32 pink'>
                    <img src={pink} alt='pic' className='w-84 h-42'/>
                </div>                
            </div>
        </div>
     );
}
 
export default Hero;