const Experience = () => {
    return ( 
        <div className="h-screen pt-6 flex justify-center items-center bg-slate-300">
            <div className="flex">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                    </a>
                    <div className="p-6 h-48">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">AFRIHUB IMT</h5>
                    <p className="text-gray-700 text-base mb-4">
                        During my stay at Afrihub IMT i worked as an intern and also an associate tutor filling in for my superiors that were at some point absent for some reason. 
                    </p>
                    </div>
                </div>
            </div>
            <div className="flex ml-8">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                    </a>
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