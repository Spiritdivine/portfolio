import Hero from "./hero";
import Experience from "./experience";
import Project from "./project";
import Skills from "./skills";
import Education from "./education";
import Contact from "./contact";
import About from "./About";


const Body = () => {
    return ( 
        <div className="w-[80%] ml-auto body">
            <Hero/>
            <About/>
            <Experience/>
            <Project/>
            <Skills/>
            <Education/>
            <Contact/>
        </div>
     );
}
 
export default Body;