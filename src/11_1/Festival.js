import TailH1 from "../UI/TailH1";
import TailCard from "../UI/TailCard";
import TailSelect from "../UI/TailSelect";
import { useState, useEffect, useRef } from "react" ;

export default function Festival() {
    // 상태변수
    const [tdata, setTdata] = useState([]);   // tdata 변경하려면 setTdata를 사용
    const [gu, setGu] = useState([]);
    const [seldata, setSelTdata] = useState([]) ;
    const [tags, setTags] = useState([]) ;
    
    
    // select 박스 rkqt
    // const selRef = useRef();

    // 환경변수값 가져오기
    let apikey = process.env.REACT_APP_APIKEY;

    // fetch 데이터 가져오기 tdata저장 사용자 정의 함수
    const getData = async () => {
        // URL
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = url + `serviceKey=${apikey}`;
        url = url + `&pageNo=1`;
        url = url + `&numOfRows=40`;
        url = url + `&resultType=json`;

        // console.log(url);
        
        const resp = await fetch(url);  // await 패치하는 동안 기다림
        const data = await resp.json();

        setTdata(data.getFestivalKr.item);
        

    }

    // select박스가 선택이 되면
    const handleChange = (e) => {
        console.log(e.target.value);
        let tm = tdata.filter(item => item.GUGUN_NM === e.target.value);
        console.log(tm);
        setSelTdata(tm);
    }
    
    // 컴포넌트 업데이트   
    useEffect(()=>{
        //1. fetch 데이터 가져오기 tdata저장
        getData();  // 함수 호출
        

    }, []);
    useEffect(()=>{
        //2. 구를 추출해서 저장
        let tm = tdata.map((item) => item.GUGUN_NM)
        tm = [... new Set(tm)].sort();  // 집합을 만드려면 new 키워드를 사용해야함. set으로 중복제거
        setGu(tm);

    }, [tdata]);

    useEffect(() => {
        let tm = seldata.map((item, idx) => 
            <TailCard key={`tc${idx}`}
                      imgSrc = {item.MAIN_IMG_THUMB}
                      title = {item.TITLE}
                      subtitle = {item.TRFC_INFO}
                      tags = {item.USAGE_DAY_WEEK_AND_TIME}
                      />
        );
        setTags(tm);
    }, [seldata]);

    // useEffect(()=>{
    //     //3. gu 정보를 select box의 option으로 추가
    //     console.log(gu);
    //     let tm = gu.map((item, idx) =>
    //                     <option key={`op${idx}`} value={item}>{item}</option>
    //     );
    //     setOps(tm);
    // }, [gu]);

    // useEffect (()=>{
    //     console.log("seldata = ", seldata);

    //     let tm = tdata.filter((item) => item.GUGUN_NM === seldata);
        
    //     console.log("gu=", tm);
    //     setTdata(tm);       

    // }, [])

  return (
    <div className="container mx-auto h-screen">
            <div className="flex flex-col justify-top items-center w-full h-full my-8">
                <div className="flex justify-center items-center">
                    <TailH1 title={"부산지역 축제"} />                    
                </div>
                    <div className=" w-1/2 my-4">
                        <TailSelect opItem={gu} handleChange={handleChange} />
                    </div>                
                <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {tags}
                </div>
            </div>            
        </div>
  )
}
