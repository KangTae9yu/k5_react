import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import TailButton from "../UI/TailButton";
import TailH1 from "../UI/TailH1";
import TailSelect from "../UI/TailSelect";
import getxy from "./getxy.json";




export default function Frcst() {
    const area = getxy.map(item => item['1단계'])
    
    // 상태변수
    const [tag, setTag] = useState('');
    const [dt, setDt] = useState('');
    const [sel, setSel] = useState('');
    
    // 이동 객체 생성
    const navigate = useNavigate();    

    const handelDt = (e) => {
        setDt(e.target.value.replaceAll('-', '')) ;
    }
    
    const handleSelChange = (e) => {
        setSel(e.target.value) ;
        // console.log(e.target.value, console.log(dtRef.current.value))
    }
    

  return (
    <div className="container mx-auto w-full h-screen">
            <div className="flex flex-col justify-top items-center w-full h-full my-8">
                <div className="flex">                    
                </div>
                <form name="kform" className="bg-slate-200 my-8 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-2 gap-4">                    
                    <div className="flex justify-center items-center mx-4">
                        <div className="relative max-w-sm">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </div>
                            <input type="date" class="bg-gray-50 border border-gray-300 text-gray-900 
                                                        text-sm rounded-lg
                                                         focus:ring-blue-500 focus:border-blue-500 
                                                         block w-full ps-10 p-2.5 " 
                                                         placeholder="Select date"
                                                         onChange={handelDt} />
                        </div>
                    </div>
                    <div className="flex w-full justify-center items-center ">
                        <TailSelect opItem={area} handleChange={handleSelChange} />
                    </div>
                    <div className="flex w-full justify-center items-center ">
                        <TailButton caption = {' 초단기예보 '} 
                                    bcolor = {'sky'} 
                                    handleClick = {() => navigate(`/detail?gubun=${1}&dt=${dt}&area=${sel}`)}/>
                    </div>
                    <div className="flex w-full justify-center items-center ">                    
                        <TailButton caption = {' 단기예보 '} 
                                    bcolor = {'sky'} 
                                    handleClick = {() => navigate(`/detail?gubun=${2}&dt=${dt}&area=${sel}`)}/>
                    </div>
                </form>                
            </div>
            <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {tag}
            </div>       
        </div>
  )
}

// const sido = getxy.map(item => (item["1단계"])) ;
    // console.log(sido);
    // const [tdata, setTdata] = useState([]);

    // const handleSelSido = (e) => {
    //     console.log(e.target.value);




// <div className="container mx-auto px-4 h-screen">
    //     <div className="flex flex-col justify-top items-center w-full h-full my-8">
    //         <div className="flex my-10">
    //             <TailH1 title={"단기예보 선택"} />                    
    //         </div>
    //         <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
    //             <div>
    //                 <input type="date" />
    //             </div>
    //             <div>
    //                 <TailSelect opItem={sido} handleChange={handleSelSido} />
    //             </div>
    //             <div>
    //                 <TailButton caption={"초단기예보"} bcolor={"sky"} handleClick={''} />                    
    //             </div>
    //             <div>
    //                 <TailButton caption={"단기예보"} bcolor={"sky"} handleClick={''} />
    //             </div>
    //         </div>
    //     </div>
    // </div>

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