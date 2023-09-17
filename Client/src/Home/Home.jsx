import {Navbar} from "../Components/Navbar/Navbar.jsx";
import {Details} from "../Components/Details/Details.jsx";
export default function Home() {
        return (
            <>
                <div className="bg-[#e7fdea] flex  items-center h-[4px] mt-[400px] relative">

                    <img
                        src={"https://cdn-cenii.nitrocdn.com/dxZQGVjeOyXblsYkcsxiHEoJOLKUvtcl/assets/images/optimized/rev-a677aee/www.pranaair.com/wp-content/uploads/2021/09/what-is-aqi-air-quality-index.jpg"}
                        alt="India" border="0" className="w-full"/>
                    <button className="bg-green-500 py-2 px-3 rounded-2xl absolute top-[40px] left-[500px]">
                        <a href='https://live-air-quality-india.netlify.app/'>CLICK HERE TO KNOW YOUR AQI</a>
                    </button>

                </div>
                {/*<img src={"https://i.ibb.co/MSQ6NzK/india.png"} alt="India" border="0" className="w-full"/>*/}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Details/>

            </>
        )
}