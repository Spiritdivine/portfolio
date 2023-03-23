import contact from "../pages/photos/contact.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';



const Contact = () => {
    return ( 
        <div className="h-screen  bg-slate-100 pt-[2rem] px-[2rem]" id="contact">
            <div className="flex justify-center align-center ">
                <h2 className="text-6xl font-bold leading-none mb-[2rem] " id="exp-text">CONTACT</h2>
            </div>
            <div id="contact" className=" flex justify-center align-center mt-[1rem]">
                <div className="w-[50%] h-[100%] ">
                    <img src={contact} alt="contact" />
                </div>
                <div className='w-[50%] h-[70vh] bg-slate-500 grid grid-cols-2 gap-2 py-[3rem] px-[2rem] justify-center align-center rounded-md'>
                    <div className=" block justify-center align-center">
                        <div className="h-[7rem] w-[100%] flex justify-center align-center ">
                            <div className=" h-[6rem] w-[6rem] border-solid border-4 border-sky-500 rounded-full flex justify-center align-center">
                                <HiOutlineLocationMarker  size={70} className="relative top-[10px]" />
                            </div>
                        </div>
                        <div>
                            <h3>Address:</h3>
                            <p>No 16 Amaokwe Street, Edozie, Ziks Avenue, Enugu, NIGERIA.</p>
                        </div>
                    </div>
                    <div>
                        <div className="h-[7rem] w-[100%] flex justify-center align-center ">
                            <div className=" h-[6rem] w-[6rem] border-solid border-4 border-sky-500 rounded-full flex justify-center ">
                                <FiPhoneCall  size={50} className="relative top-[1.5rem]" />
                            </div>
                        </div>
                        <div><a href="#">+2349134483801</a></div>
                    </div>
                    <div>
                        <div className="h-[7rem] w-[100%] flex justify-center align-center ">
                            <div className=" h-[6rem] w-[6rem] border-solid border-4 border-sky-500 rounded-full flex justify-center align-center">
                                <HiOutlineMail  size={70} className="relative top-[0.5rem]" />
                            </div>
                        </div>
                        <div><a href="#">spiritdivine777@gmail.com</a></div>
                    </div>
                    <div>
                        <div>
                            <h3 className="text-[2rem]">Contact Me</h3>
                            <p>Contact me for engagement and value driven time </p>
                        </div>
                        <div className="flex justify-center align-center">
                            <div className="mr-3"><a href="#"><LinkedInIcon/></a></div>
                            <div className="mr-3"><a href="#"><TwitterIcon/></a></div>
                            <div className="mr-3"><a href="#"><InstagramIcon/></a></div>
                            <div><a href="#"><RedditIcon/></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default Contact;