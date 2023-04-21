import Hero from "./hero";
import Experience from "./experience";
import Project from "./project";
import Skills from "./skills";
import Education from "./education";
import Contact from "./contact";
import About from "./About";


const Body = () => {
    return ( 
        <main className="body" id="body">
            <Hero/>
            <About/>
            <Experience/>
            <Project/>
            <Skills/>
            <Education/>
            <Contact/>
        </main>
     );
}
 
export default Body;