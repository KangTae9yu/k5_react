import MyButton from "./MyButton";
import { useState, useEffect, useRef } from "react";

export default function Ex01() {
    const arr = ['안녕하세요', '반갑습니다', '추워요'] ;
    const arrColor = ['blue', 'orange', 'green'] ;

    const [tagMsg, setTagMsg] = useState(arr[0]);
    const inRef = useRef();

    // let tagMsg = '안녕하세요.' ;// useState로 써야됌
    const tagArr = arr.map((item, idx) => 
        // let tm = item.slice(0,2);
        <MyButton key={`mb${idx}`} 
                  caption={item} 
                  handleOnClick={()=>handleClick(item)}
                  bcolor={arrColor[idx]}/>
    ); // 배열 갯수만큼 돌기 위해 map 사용

    const handleClick = (msg) => {
        // alert(msg);
        // tagMsg = msg;
        inRef.current.value === '' ? setTagMsg(msg)
                                    :setTagMsg(`${inRef.current.value}님 ${msg}`);
        
    }

    useEffect(() => {
        console.log("tagMsg", tagMsg)
    }, [tagMsg]);
    
    return (
        <div className="container mx-auto px-4">
            <h1 className="bg-slate-200  h-10 
                            flex justify-center items-center 
                            text-2xl m-5 p-5">리액트</h1>
            <div className="flex justify-center items-center">
                <form>
                    <input type="text"
                            ref={inRef}
                            className="m-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="이름입력" />
                </form>
            </div>
            <div className="flex justify-center items-center w-full">
                <button onClick={() => handleClick(arr[0])}
                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium 
                                text-gray-900 focus:outline-none bg-white 
                                rounded-lg border border-gray-200 hover:bg-gray-100 
                                hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 
                                dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
                                dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
                                ">
                        {arr[0]}
                </button>
                <button onClick={() => handleClick(arr[1])} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-orange-600 rounded-lg border border-red-400 hover:bg-amber-400">{arr[1]}</button>
                <button onClick={() => handleClick(arr[2])}>{arr[2]}</button>
            </div>
            <div className="flex justify-center items-center w-full">
                {tagArr}
            </div>
            <div className="h-20 flex justify-center items-center text-2xl m-5 p-5">
                {tagMsg}
            </div>
        </div>
    )
}