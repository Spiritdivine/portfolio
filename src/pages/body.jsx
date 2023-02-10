import Hero from "./hero";
import Experience from "./experience";
import Project from "./project";
import Skills from "./skills";


const Body = () => {
    return ( 
        <div className="w-4/5 ml-auto">
            <Hero/>
            <Experience/>
            <Project/>
            <Skills/>
        </div>
     );
}
 
export default Body;