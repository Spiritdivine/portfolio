import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Landing from "./project/landing";
import Portsite from "./project/portsite";
import Ecommerce from "./project/e-commerce";
import Food from "./project/food";

const tleftVariant = {
    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
    hidden: { opacity: 0, scale: 0, x: -150, y: -150 },
  }
const trightVariant = {
    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
    hidden: { opacity: 0, scale: 0, x: 150, y: -150 },
  }
const bleftVariant = {
    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
    hidden: { opacity: 0, scale: 0, x: -150, y: 150 },
  }
const brightVariant = {
    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
    hidden: { opacity: 0, scale: 0, x: 150, y: 150 },
  }

const Project = () => {

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
        <div id="projects" className="bg-slate-300 h-[180vh] py-[3rem]">

            <h1 className="text-6xl font-bold leading-none mb-[4rem]">Projects</h1>

            <div className=" flex justify-center items-center mb-[4rem] project1">
                <motion.div 
                ref={ref}
                variants={tleftVariant}
                animate={control}
                initial="hidden"
                transition={{
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                  }}>
                    <Landing/>
                </motion.div>
                <motion.div
                ref={ref}
                variants={trightVariant}
                animate={control}
                initial="hidden"
                transition={{
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                  }}>
                   <Portsite/>                     
                </motion.div>
            </div>
            <div className=" flex justify-center items-center project1">
                <motion.div 
                ref={def}
                variants={bleftVariant}
                animate={charge}
                initial="hidden"
                transition={{
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                }}>                  
                    <Ecommerce/>
                </motion.div>
                <motion.div 
                ref={def}
                variants={brightVariant}
                animate={charge}
                initial="hidden"
                transition={{
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                }}>
                    <Food/>                                       
                </motion.div>

            </div>
        </div>
     );
}
 
export default Project;