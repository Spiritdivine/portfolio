import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import loudit from "./photos/loudit.jpg";
import afrihub from "./photos/Afrihub.jpg";

const leftVariant = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: { opacity: 0, scale: 0, x: 500 },
}

const rightVariant = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: { opacity: 0, scale: 0, x: -500 },
}



const Experience = () => {

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return ( 
        <div id="experience" className="h-screen pt-6 flex justify-center items-center bg-slate-400">
            <motion.div 
            ref={ref}
            variants={leftVariant}
            initial="hidden"
            animate={control}
            transition={{
                delay: 0.2,
                x: { duration: 0.5 },
                default: { ease: "linear" }
              }}
            className="flex h-96 hover:shadow-2xl">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    
                    <div className="w-96 h-48">
                        <img className="rounded-t-lg object-cover w-full h-full" src={afrihub} alt=""/>
                    </div>
                    
                    <div className="p-6 h-48">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">AFRIHUB IMT</h5>
                    <p className="text-gray-700 text-base mb-4">
                        During my stay at Afrihub IMT i worked as an intern and also an associate tutor filling in for my superiors that were at some point absent for some reason. 
                    </p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
            ref={ref}
            variants={rightVariant}
            initial="hidden"
            animate={control}
            transition={{
                delay: 0.2,
                x: { duration: 0.5 },
                default: { ease: "linear" }
              }}
            className="flex ml-8 h-96 hover:shadow-2xl">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <div className="w-96 h-48">
                        <img className="rounded-t-lg object-cover w-full h-full" src={loudit} alt=""/>
                    </div>
                    <div className="p-6 h-48">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">LOUDIT</h5>
                    <p className="text-gray-700 text-base mb-4">
                        I worked as the frontend engineer developing the clientside of their E-commerce site and also assisting the CTO in charge.
                    </p>
                    </div>
                </div>
            </motion.div>
        </div>
     );
}
 
export default Experience;