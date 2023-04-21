import graduate from "../pages/photos/graduate.png"

const Education = () => {
    return ( 
        <div id="education" className="h-screen flex justify-center align-center ">
            <div className="h-[100%] w-[50%] pl-[6rem] pt-[3em]">
                <div className="h-[8rem] align-middle ">
                    <h1 className="text-[1.5em] text-start uppercase text-sky-600 font-bold hover:subpixel-antialiased">UNIVERSITY OF NIGERIA, NSUKKA</h1>
                </div>
                <div className="h-[10rem] align-middle pt-[1em] ">
                    <div><h3 className="text-[1.3em]  text-black-300 font-semibold text-start mb-[2rem]">Degree: Bachelor of Science</h3></div>
                    <div><h3 className="text-[1.3em]  text-black-300 font-semibold text-start">Discipline: Computer Science</h3></div>
                </div>
                <div className="h-[12rem] align-middle pt-[1em] w-[100%]  rounded-[6em] ">
                    <div>
                        <p className="text-[1.3em] text-start text-black-300 font-bold uppercase mb-[1rem]">Year of Study</p>
                    </div>
                    <div>
                        <p className="text-[1.3em] text-black-300 font-semibold text-start ">From: October 2017</p>
                    </div>
                    <div>
                        <p className="text-[1.3em] text-black-300 font-semibold text-start ">To: December 2022</p>
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-[100%] university">
                <div className=" w-[100%] uni-sub "><img src={graduate} alt="graduate" ></img></div>
            </div>
        </div>
     );
}
 
export default Education;