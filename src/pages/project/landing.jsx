import landpage from "../photos/landpage.png"

const Landing = () => {
    return ( 
        <div className=" h-[26rem] rounded-lg shadow-lg  max-w-sm flex justify-between items-center flex-col pb-6 subproj">
            <div className="h-[12rem] w-96 imgpng">
                <img className="rounded-t-lg w-full h-full object-fit" src={landpage} alt="landpage"/>
            </div>
            
            <div className="p-4 h-48 details">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Nike landing-page</h5>
                <p className="text-gray-700 text-base mb-4">
                    This is a landing-page i built using few technologies namely react, material UI, tailwind, html, css and javascript.
                </p>
                <div className="flex justify-evenly items-center ">
                    <a href="https://www.linkedin.com/in/madu-kelechi-4186b9208" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <button type="button" className="w-[7rem] inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">source code</button>
                    </a>
                    <a href="https://www.linkedin.com/in/madu-kelechi-4186b9208" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <button type="button" className="w-[7rem] inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Visit</button>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Landing;