import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import loudit from "./photos/loudit.jpg";
import afrihub from "./photos/Afrihub.jpg";

const leftVariant = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: { opacity: 0, scale: 0, x: -200}
}

const rightVariant = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: { opacity: 0, scale: 0, x: 150 }
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

    const charge = useAnimation()
    const [def, inPlace] = useInView()

    useEffect(() => {
        if (inPlace) {
          charge.start("visible");
        } else {
            charge.start("hidden");
        }
    }, [charge, inPlace]);

    return ( 
        <div className="h-[180vh] bg-slate-400 pt-10 flex items-center flex-col" id="experience">


            <h2 className="text-6xl font-bold leading-none mb-[4rem] " id="exp-text">Experience</h2>


            <div className=" flex justify-center items-center mb-10 experience">
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
                className="h-96 hover:shadow-2xl rounded-lg shadow-lg bg-white places">
                    
                        
                    <div className="w-96 h-48 subplace1">
                        <img className="rounded-t-lg object-cover w-full h-full" src={afrihub} alt=""/>
                    </div>
                    
                    <div className="p-6 h-48 subplace2">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">AFRIHUB</h5>
                        <p className="text-gray-700 text-base mb-4">
                            During my stay at Afrihub IMT i worked as an intern and also an associate tutor filling in for my superiors that were at some point absent for some reason. 
                        </p>
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
                className="ml-8 h-96 hover:shadow-2xl rounded-lg shadow-lg bg-white  places otherside">
                    
                    <div className="w-96 h-48 subplace1">
                        <img className="rounded-t-lg object-cover w-full h-full" src={loudit} alt=""/>
                    </div>
                    <div className="p-6 h-48 subplace2">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">LOUDIT</h5>
                        <p className="text-gray-700 text-base mb-4">
                            I worked as the frontend engineer developing the clientside of their E-commerce site and also assisting the CTO in charge.
                        </p>
                    </div>
                    
                </motion.div>
            </div>


            <div id="experience" className=" flex justify-center items-center experience">
                <motion.div 
                ref={def}
                variants={leftVariant}
                initial="hidden"
                animate={charge}
                transition={{
                    delay: 0.2,
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                }}
                className="h-96 hover:shadow-2xl rounded-lg shadow-lg bg-white places">
                    
                        
                    <div className="w-96 h-48 subplace1">
                        <img className="rounded-t-lg object-cover w-full h-full" src={afrihub} alt=""/>
                    </div>
                    
                    <div className="p-6 h-48 subplace2">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">FREELANCER</h5>
                        <p className="text-gray-700 text-base mb-4">
                            During my stay at Afrihub IMT i worked as an intern and also an associate tutor filling in for my superiors that were at some point absent for some reason. 
                        </p>
                    </div>
                    
                </motion.div>
                <motion.div 
                ref={def}
                variants={rightVariant}
                initial="hidden"
                animate={charge}
                transition={{
                    delay: 0.2,
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                }}
                className="ml-8 h-96 hover:shadow-2xl rounded-lg shadow-lg bg-white  places otherside">
                    
                    <div className="w-96 h-48 subplace1">
                        <img className="rounded-t-lg object-cover w-full h-full" src={loudit} alt=""/>
                    </div>
                    <div className="p-6 h-48 subplace2">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">ICEHUB</h5>
                        <p className="text-gray-700 text-base mb-4">
                            I worked as the frontend engineer developing the clientside of their E-commerce site and also assisting the CTO in charge.
                        </p>
                    </div>
                    
                </motion.div>
            </div>
        </div>
     );
}
 
export default Experience;