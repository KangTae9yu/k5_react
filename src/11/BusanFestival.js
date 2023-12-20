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

    // 키워드 선택
    const kwSelect = useRef();
    
    const handleChange = async(e) => {
        e.preventDefault();

        // 키워드 선택
        let enkw = encodeURI(kwSelect.current.value);
        if (enkw === ''){
            alert("키워드를 선택하세요.") ;
            kwSelect.current.focus();
            return;
        }

        // URL
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = url + `serviceKey=iqQxm1QACjb9nrpmvqLEzL6uJN151%2BVvxKuyMLaLIvEulBT%2BkoAhBnYJGdGamdvvQTUZI%2FZYfkx6kqS6Db2XeA%3D%3D`;
        url = url + `&pageNo=1`;
        url = url + `&numOfRows=40`;
        url = url + `&resultType=json`;

        console.log(url);

        const resp = await fetch(url);
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
                    <select ref={kwSelect} className="block w-full p-4 ps-10 text-sm
                                                    text-gray-900 border border-gray-300 rounded-lg
                                                    bg-gray-50" placeholder="--지역 선택--"
                                                    //  {(e) => handleChange(e)}
                                                    > 
                                                        {/* <option>--지역선택--</option> */}
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
