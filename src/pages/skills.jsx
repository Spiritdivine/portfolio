import html from "./photos/Skills/html5.svg";
import css from "./photos/Skills/css3.svg";
import js from "./photos/Skills/js.svg";
import mongo from "./photos/Skills/mongo.svg";
import node from "./photos/Skills/nodejs.svg";
import react from "./photos/Skills/react.svg";
import bootstrap from "./photos/Skills/bootstrap.svg";
import php from "./photos/Skills/php.svg";

const Skills = () => {
    return ( 
        <div id="skills"  className=" px-6 py-14 h-screen ">
            <div className="w-84 mb-10"><h2 className="text-6xl font-mono">Technologies</h2></div>
            <div className=" flex justify-between mb-14">
                <div>
                    <div className="w-36 "><img className="w-full" src={html} alt="HTML"/></div>
                </div>
                <div>
                    <div className="w-36 "><img className="w-full" src={css} alt="CSS"/></div>
                </div>
                <div>
                    <div className="w-36 "><img className="w-full" src={js} alt="Javascript"/></div>
                </div>
                <div>
                    <div className="w-36 "><img className="w-full" src={react} alt="React js"/></div>
                </div>
            </div>
            <div className=" flex justify-between ">
                <div>
                    <div className="w-36 "><img className="w-full" src={node} alt="Node js"/></div>
                </div>
                <div>
                    <div className="w-36 "><img className="w-full" src={bootstrap} alt="Express js"/></div>
                </div>
                <div>
                    <div className="w-36 "><img className="w-full" src={mongo} alt="Mongo db"/></div>
                </div>
                <div>
                    <div className="w-36 "><img className="w-full" src={php} alt="php"/></div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;