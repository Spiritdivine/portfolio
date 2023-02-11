import loudit from "./photos/loudit.jpg";
import afrihub from "./photos/Afrihub.jpg";

const Experience = () => {
    return ( 
        <div className="h-screen pt-6 flex justify-center items-center bg-slate-400">
            <div className="flex h-96">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    
                    <div className="w-96 h-48">
                        <img className="rounded-t-lg object-cover w-full h-full" src={afrihub} alt=""/>
                    </div>
                    
                    <div className="p-6 h-48">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">AFRIHUB IMT</h5>
                    <p className="text-gray-700 text-base mb-4">
                        During my stay at Afrihub IMT i worked as an intern and also an associate tutor filling in for my superiors that were at some point absent for some reason. 
                    </p>
                    </div>
                </div>
            </div>
            <div className="flex ml-8 h-96">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <div className="w-96 h-48">
                        <img className="rounded-t-lg object-cover w-full h-full" src={loudit} alt=""/>
                    </div>
                    <div className="p-6 h-48">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">LOUDIT</h5>
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