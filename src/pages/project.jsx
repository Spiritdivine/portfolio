import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import landpage from "./photos/landpage.png";
import portfolio from "./photos/portfolio.png";
import restaurant from "./photos/restaurant.png";

const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  }

const Project = () => {
    return ( 
        <div className="bg-slate-300 h-[180vh] py-[3rem]">
            <h1 className="text-6xl font-bold leading-none mb-[4rem]">Projects</h1>
            <div className=" flex justify-center items-center mb-[4rem]">
                <motion.div 
                animate={{ x: 0, y: 0 }} 
                initial={{x: -150, y: -150}}
                transition={{
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                  }}
                className=" h-[26rem]">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm flex justify-between items-center flex-col pb-6">
                        
                        <motion.div 
                        animate={{ x: 0, y: 0 }} 
                        initial={{x: -150, y: -150}}
                        transition={{
                            x: { duration: 0.5 },
                            default: { ease: "linear" }
                          }}
                        className="h-[12rem] w-96">
                            <img className="rounded-t-lg w-full h-full object-fit" src={landpage} alt=""/>
                        </motion.div>
                        
                        <div className="p-4 h-48">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Nike landing-page</h5>
                            <p className="text-gray-700 text-base mb-4">
                                This is a landing-page i built using few technologies namely react, material UI, tailwind, html, css and javascript.
                            </p>
                            <div className="flex justify-evenly items-center ">
                                <a href="https://www.linkedin.com/in/madu-kelechi-4186b9208" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <button type="button" className="w-[7rem] inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">source code</button>
                                </a>
                                <a href="https://www.linkedin.com/in/madu-kelechi-4186b9208" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <button type="button" className="w-[7rem] inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Visit</button>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </motion.div>
                <motion.div
                animate={{ x: 0, y: 0 }} 
                initial={{x: 150, y: -150}}
                transition={{
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                  }}
                className=" ml-8 h-[26rem]">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm flex justify-between items-center flex-col pb-6">

                        <motion.div 
                        animate={{ x: 0, y: 0 }} 
                        initial={{x: 150, y: 150}}
                        transition={{
                            x: { duration: 0.5 },
                            default: { ease: "linear" }
                          }}
                        className="h-[12rem] w-96">
                            <img className="rounded-t-lg w-full h-full object-fit" src={landpage} alt=""/>
                        </motion.div>

                        <div className="p-4 h-48">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">E-commerce site</h5>
                            <p className="text-gray-700 text-base mb-4">
                                I built the clientside of a local startups e-commerce site using react, tailwind, css, html, material UI and several other react based css libraries.
                            </p>
        
                            <div className="flex justify-evenly items-center ">
                                <a href="https://portfolio-chi-woad-15.vercel.app/" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <button type="button" className="w-[7rem] inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">source code</button>
                                </a>
                                <a href="https://portfolio-chi-woad-15.vercel.app/" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <button type="button" className="w-[7rem] inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Visit</button>
                                </a>
                            </div>
                        
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className=" flex justify-center items-center">
                <motion.div 
                animate={{ x: 0, y: 0 }} 
                initial={{x: -150, y: 150}}
                transition={{
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                  }}
                className=" h-[26rem]">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm flex justify-between items-center flex-col pb-6">
                        
                        <motion.div 
                        animate={{ x: 0, y: 0 }} 
                        initial={{x: -150, y: 150}}
                        transition={{
                            x: { duration: 0.5 },
                            default: { ease: "linear" }
                          }}
                        className="h-[12rem] w-96">
                            <img className="rounded-t-lg w-full h-full object-fit" src={portfolio} alt=""/>
                        </motion.div>
                        
                        <div className="p-4 h-48">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Personal Portfolio</h5>
                            <p className="text-gray-700 text-base mb-4">
                                This here is a personal portfolio site i built using few technologies namely react, material UI, tailwind, html, css and javascript.
                            </p>
                            <div className="flex justify-evenly items-center ">
                                <a href="https://portfolio-chi-woad-15.vercel.app/" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <button type="button" className="w-[7rem] inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">source code</button>
                                </a>
                                <a href="https://portfolio-chi-woad-15.vercel.app/" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <button type="button" className="w-[7rem] inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Visit</button>
                                </a>
                            </div>


                        </div>
                        
                    </div>
                </motion.div>
                <motion.div 
                animate={{ x: 0, y: 0 }} 
                initial={{x: 150, y: 150}}
                transition={{
                    x: { duration: 0.5 },
                    default: { ease: "linear" }
                  }}
                className=" ml-8 h-[26rem]">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm flex justify-between items-center flex-col pb-6">

                        <motion.div 
                        animate={{ x: 0, y: 0 }} 
                        initial={{x: 150, y: 150}}
                        transition={{
                            x: { duration: 0.5 },
                            default: { ease: "linear" }
                          }}
                        className="h-[12rem] w-96">
                            <img className="rounded-t-lg w-full h-full object-fit" src={restaurant} alt=""/>
                        </motion.div>

                        <div className="p-4 h-48">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Food Restaurant</h5>
                            <p className="text-gray-700 text-base mb-4">
                                I built the clientside of a Food restaurant using HTML, CSS and Javascript.
                            </p>
                            <div className="flex justify-evenly items-center ">
                                <a href="https://portfolio-chi-woad-15.vercel.app/" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <button type="button" className="w-[7rem] inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">source code</button>
                                </a>
                                <a href="https://portfolio-chi-woad-15.vercel.app/" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <button type="button" className="w-[7rem] inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Visit</button>
                                </a>
                            </div>
                        
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
     );
}
 
export default Project;