import { BsFillPersonFill } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import { MdLibraryBooks } from "react-icons/md";
import { RiBarChartBoxFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineFolderOpen } from "react-icons/md";
import me from "./photos/me.jpg";



const Navbar = () => {
    return ( 
        <nav className="w-[20%]  h-full fixed z-10 shadow-md bg-blue-400 pt-4 navbar">
              <div className="pt-4 pb-2 px-2">
                    <a href="#!">
                    <div className="flex items-center">
                        <div className="shrink-0">
                        <img src={me} className="rounded-full w-10" alt="Avatar"/>
                        </div>
                        <div className="grow ml-3">
                        <p className="text-sm font-semibold text-blue-600">MADU KELECHI</p>
                        </div>
                    </div>
                    </a>
                </div>
            <div>
                <ul className="relative">
                    <a href="#about"><li className="relative pt-8... cursor-pointer flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" ><BsFillPersonFill/>About</li></a>
                    <a href="#experience"><li className="relative pt-8... cursor-pointer flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" ><FiTrendingUp/>Experience</li></a>
                    <a href="#projects"><li className="relative pt-8... cursor-pointer flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" ><MdLibraryBooks/>projects</li></a>
                    <a href="#skills"><li className="relative pt-8... cursor-pointer flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" ><RiBarChartBoxFill/>Skills</li></a>
                    <a href="#education"><li className="relative pt-8... cursor-pointer flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" ><FaGraduationCap/>Education</li></a>
                    <a href="#contact"><li className="relative pt-8... cursor-pointer flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" ><MdEmail/>Contact</li></a>
                    <a href="#blog"><li className="relative pt-8... cursor-pointer flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" ><MdEmail/>Blog Posts</li></a>
                    <a href="#resume"><li className="relative pt-8... cursor-pointer flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" ><MdOutlineFolderOpen/>Resume</li></a>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;