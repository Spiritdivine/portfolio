import Navbar from "./navbar";
import Body from "./body";


const Portfolio = () => {
    return ( 
        <div style={{display:'flex', alignItems:"flex-start", justifyContent:"space-between"}} className='m-0 p-0 w-[100%] '>
            <Navbar/>
            <Body/>
        </div>
     );
}
 
export default Portfolio;