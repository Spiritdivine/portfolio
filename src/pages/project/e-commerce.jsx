import portfolio from "../photos/portfolio.png";
import { motion } from "framer-motion";

const Ecommerce = () => {
    return ( 
        <div className=" h-[26rem] rounded-lg shadow-lg bg-white max-w-sm flex justify-between items-center flex-col pb-6 subproj">
            <motion.div 
            animate={{ x: 0, y: 0 }} 
            initial={{x: -150, y: 150}}
            transition={{
                x: { duration: 0.5 },
                default: { ease: "linear" }
                }}
            className="h-[12rem] w-96 imgpng">
                <img className="rounded-t-lg w-full h-full object-fit" src={portfolio} alt=""/>
            </motion.div>
            
            <div className="p-4 h-48 details">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Personal Portfolio</h5>
                <p className="text-gray-700 text-base mb-4">
                    This here is a personal portfolio site i built using few technologies namely react, material UI, tailwind, html, css and javascript.
                </p>
                <div className="flex justify-evenly items-center ">
                    <a href="https://github.com/Spiritdivine/portfolio" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <button type="button" className="w-[7rem] inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">source code</button>
                    </a>
                    <a href="https://portfolio-chi-woad-15.vercel.app/" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <button type="button" className="w-[7rem] inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Visit</button>
                    </a>
                </div>


            </div>
        </div>
     );
}
 
export default Ecommerce;