import graduate from "../pages/photos/graduate1.jpg"

const Education = () => {
    return ( 
        <div id="education" className="h-screen flex justify-center align-center">
            <div>
                <div>
                    <h1>UNIVERSITY OF NIGERIA, NSUKKA</h1>
                </div>
                <div>
                    <div>Degree: Bachelor of Science</div>
                    <div>Discipline: Computer Science</div>
                </div>
                <div>
                    <div>
                        Year of Study
                    </div>
                    <div>
                        From: October 2017
                    </div>
                    <div>
                        To: December 2022
                    </div>
                </div>
            </div>
            <div>
                <div className="h-[10rem] w-[20rem]"><img src={graduate} alt="graduate" ></img></div>
            </div>
        </div>
     );
}
 
export default Education;