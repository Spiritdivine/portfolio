import loudit from "./photos/loudit.jpg";
import afrihub from "./photos/Afrihub.jpg";




const Experience = () => {



    return ( 
        <div className="h-[180vh] flex items-center flex-col" id="experience">


            <div className="mb-10 w-screen flex items-center justify-center py-6"><h2 className="text-6xl font-bold leading-none align-middle" id="exp-text">Experience</h2></div>


            <div className=" flex justify-center items-center mb-10 experience flex-wrap">
                <div className="h-96 hover:shadow-2xl rounded-lg shadow-lg  places">
                    
                        
                    <div className=" max-w-96 h-48 subplace1">
                        <img className="rounded-t-lg object-cover w-full h-full" src={afrihub} alt=""/>
                    </div>
                    
                    <div className="p-6 h-48 subplace2">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">AFRIHUB</h5>
                        <p className="text-gray-700 text-base mb-4">
                            During my stay at Afrihub IMT i worked as an intern and also an associate tutor filling in for my superiors that were at some point absent for some reason. 
                        </p>
                    </div>
                    
                </div>
                <div  className="ml-8 h-96 hover:shadow-2xl rounded-lg shadow-lg   places otherside">
                    
                    <div className="w-96 h-48 subplace1">
                        <img className="rounded-t-lg object-cover w-full h-full" src={loudit} alt=""/>
                    </div>
                    <div className="p-6 h-48 subplace2">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">LOUDIT</h5>
                        <p className="text-gray-700 text-base mb-4">
                            I worked as the frontend engineer developing the clientside of their E-commerce site and also assisting the CTO in charge.
                        </p>
                    </div>
                    
                </div>
            </div>


            <div id="experience" className=" flex justify-center items-center experience flex-wrap">
                <div className="h-96 hover:shadow-2xl rounded-lg shadow-lg  places">
                    
                        
                    <div className="w-96 h-48 subplace1">
                        <img className="rounded-t-lg object-cover w-full h-full" src={afrihub} alt=""/>
                    </div>
                    
                    <div className="p-6 h-48 subplace2">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">FREELANCER</h5>
                        <p className="text-gray-700 text-base mb-4">
                            During my stay at Afrihub IMT i worked as an intern and also an associate tutor filling in for my superiors that were at some point absent for some reason. 
                        </p>
                    </div>
                    
                </div>
                <div className="ml-8 h-96 hover:shadow-2xl rounded-lg shadow-lg   places otherside">
                    
                    <div className="w-96 h-48 subplace1">
                        <img className="rounded-t-lg object-cover w-full h-full" src={loudit} alt=""/>
                    </div>
                    <div className="p-6 h-48 subplace2">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">ICEHUB</h5>
                        <p className="text-gray-700 text-base mb-4">
                            I worked as the frontend engineer developing the clientside of their E-commerce site and also assisting the CTO in charge.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Experience;