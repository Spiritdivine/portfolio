import Hero from "./hero";
import Experience from "./experience";
import Project from "./project";


const Body = () => {
    return ( 
        <div className="w-4/5 ml-auto">
            <Hero/>
            <Experience/>
            <Project/>
        </div>
     );
}
 
export default Body;