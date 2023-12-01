import { useEffect, useState } from "react"
import TailH1 from "../UI/TailH1";
import TailButton from "../UI/TailButton";

export default function Frcst() {
  //상태변수
  const [dataF, setDataF] = useState();
  const [dtTags, setDtTags] = useState();
  const [cnTags, setCnTags] = useState();

  //키배열
  const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"] ;
  const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"] ;
  
  //fetch 해오는 사용자 정의 함수
  const getData = () => {
    //fetch 주소
    let url = "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustWeekFrcstDspth?" ;
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}` ;
    url = url + `&returnType=json&numOfRows=100&pageNo=1`;
    url = url + `&searchDate=2023-11-30` ;

    console.log(url);
    fetch(url)
    .then(resp => resp.json())
    .then(data => setDataF(data.response.body.items[0]))
    .catch(err => console.log(err))

  }
  // 날짜를 선택했을 때 실행되는 사용자 정의함수
  const handleDtClick = (idx) => {
    console.log(dataF[cnKey[idx]])

    let tm = dataF[cnKey[idx]].split(",") ;
    tm = tm.map((item) => item.split(":"))
    
    tm = tm.map((item, idx) => <div key={`dt${idx}`} className="bg-emerald-300 flex flex-col justify-center items-center rounded-sm border-5 border-solid p-2">
      <div className="bg-sky-600 text-white p-2 w-full flex justify-center items-center">{item[0]}</div>
      <div className="bg-sky-100 p-2 w-full flex justify-center items-center">
        {
        (item[1].trim() === "낮음")
        ? <span className="text-blue-700">{item[1]}</span>
        :(item[1].trim() === "보통")
          ?<span>{item[1]}</span>
          :<span className="text-red-600">{item[1]}</span>
        
        }
        </div>
      </div>
      
    );
    console.log(tm)
    setCnTags(tm) ;
  }

  //컴포넌트가 생성될 때 처음 한번
  useEffect(()=>{
    //API키 확인
    // console.log(process.env.REACT_APP_APIKEY) ;   

    //fetch 해오는 사용자 정의 함수
    getData() ;
  }, []);

  //state 변수 dataF가 변경되었을 때 실행
  useEffect(()=>{
    if (dataF === undefined) return;

    console.log(dataF)
    let tm = dtKey.map((k, idx) =>
      // <div key={`dt${idx}`} onClick={()=>handleDtClick(idx)}>{dataF[k]}</div>
      <TailButton key={`dt${idx}`} 
      caption={dataF[k]}
      handleClick={() => handleDtClick(idx)} />
    );

    setDtTags(tm);
  }, [dataF]);

  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <div className="flex justify-center items-center text-white h-20">
        <TailH1 title={"초미세먼지예보"} />
      </div>
        <div className="grow flex flex-col justify-top">
          <div className="flex justify-center items-center p-10">
            {dtTags}
          </div>
          <div className="flex flex-col justify-center items-center bg-slate-200 p-5 ">
            <div className="grid grid-cols-4 gap-4">
            {cnTags}
            </div>
          </div>
      </div>
    </div>
  )
}
