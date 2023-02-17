import Hero from "./hero";
import Experience from "./experience";
import Project from "./project";
import Skills from "./skills";
import Education from "./education";


const Body = () => {
    return ( 
        <div className="w-[80%] ml-auto body">
            <Hero/>
            <Experience/>
            <Project/>
            <Skills/>
            <Education/>
        </div>
     );
}
 
export default Body;