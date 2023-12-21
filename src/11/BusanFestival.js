import TailH1 from "../UI/TailH1";
import TailCard from "../UI/TailCard";
import { useEffect, useRef, useState } from "react";


export default function BusanFestival() {
    // 환경변수값 가져오기
    let apikey = process.env.REACT_APP_APIKEY;

    // fetch 데이터 저장
    const [tdata, setTdata] = useState([]);

    // 화면에 재 랜더링
    const [tags, setTags] = useState([]);

    const [selected, setSelected] = useState([]);

    // 키워드 선택
    const kwSelect = useRef();
    
    const handleSelect = async(e) => {
        setSelected(e.tags.value);

        

        // URL
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = url + `serviceKey=${apikey}`;
        url = url + `&pageNo=1`;
        url = url + `&numOfRows=40`;
        url = url + `&resultType=json`;

        console.log(url);

        const resp = await fetch(url);  // await 패치하는 동안 기다림
        const data = await resp.json();
        
        setTdata(data.response.body.items.item);

    };

    // tdata 변경
    useEffect(() => {
        console.log("tdata=", tdata);

        let tm = tdata.map((item, idx) =>
            <TailCard imgSrc = {item.galWebImageUrl.replace('http://', 'https://')}
            key={`card${idx}`}
            title = {item.galTitle}
            subtile = {item.galPhotogaraphyLocation}
            tags = {item.galSearchKeyword} />
        );

        setTags(tm);

    }, [tdata])


  return (
    <div className="container mx-auto h-screen">
        <div className="flex flex-col items-center w-full h-full my-8">
            <div>
                <TailH1 title={"부산축제정보"} />
            </div>
            <form name="kform" className="my-5 w-4/5 flex justify-center items-center">
                <div className=" w-1/2 mx-4">
                    <select ref={kwSelect} onChange={handleSelect} value={selected} className="block w-full p-4 ps-10 text-sm
                                                    text-gray-900 border border-gray-300 rounded-lg
                                                    bg-gray-50" placeholder="--지역 선택--"
                                                    //  {(e) => handleChange(e)}
                                                    > 
                                                    <option value="지역선택">--지역선택--</option>
                     </select>
                </div>
            </form>
            <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {tags}
            </div>                        
        </div>      
    </div>
  )
}
