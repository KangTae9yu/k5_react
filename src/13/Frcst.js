import { useState } from "react";
import TailButton from "../UI/TailButton";
import TailH1 from "../UI/TailH1";
import TailSelect from "../UI/TailSelect";
import getxy from "./getxy.json";



export default function Frcst() {
    const sido = getxy.map(item => (item["1단계"])) ;
    console.log(sido);
    const [tdata, setTdata] = useState([]);

    const handleSelSido = (e) => {
        console.log(e.target.value);

    }

  return (
    <div className="container mx-auto px-4 h-screen">
        <div className="flex flex-col justify-top items-center w-full h-full my-8">
            <div className="flex my-10">
                <TailH1 title={"단기예보 선택"} />                    
            </div>
            <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div>
                    <input type="date" />
                </div>
                <div>
                    <TailSelect opItem={sido} handleChange={handleSelSido} />
                </div>
                <div>
                    <TailButton caption={"초단기예보"} bcolor={"sky"} handleClick={''} />                    
                </div>
                <div>
                    <TailButton caption={"단기예보"} bcolor={"sky"} handleClick={''} />
                </div>
            </div>
        </div>
    </div>
    // <div>
    //  <div>
    //     <div>기상청 단기예보</div>
    //         <div>
    //             <TailH1 title={"단기예보 선택"} />
    //         </div>
    //             <form className="flex flex-col justify-center items-center border-2 h-screen px-6">
    //                 <div className="flex justify-center items-start px-5">
    //                     <input className="bg-slate-300"></input>
    //                     <div className="w-1/2 my-4">
    //                     {/* <TailSelect handleChange={handleChange} /> */}
    //                     </div>
    //                 </div>
    //                 <div className="flex justify-center items-center">
    //                     <TailButton caption={"초단기예보"} bcolor={"sky"} />
    //                     <TailButton caption={"단기예보"} bcolor={"sky"}/>
    //                 </div>
    //             </form>
    //     </div>
    // </div>
  )
}
