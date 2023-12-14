import { BiCameraMovie } from "react-icons/bi";
import TailH1 from "../UI/TailH1";
import { useEffect, useState , useRef} from "react";

export default function BoxOffice() {
  const [trs, setTrs] = useState();
  const [boxlist, setBoxlist] = useState();
  const [yesterday, setYesterday] = useState();
  const rfDt = useRef();
  

  const getFetchData = (dt) => {
      //환경변수값 가져오기
    let apikey = process.env.REACT_APP_BOXOFFICE;

    // console.log(apikey)
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"
    url = url + `key=${apikey}`
    url = url + `&targetDt=${dt}`;

    // console.log(url) ;
    fetch(url)
      .then(resp => resp.json())
      .then(data => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))
  }

  // 날짜변경시 호출
   const handleChange = () => {
    getFetchData(rfDt.current.value.replaceAll('-',''));
   }

  // Ref 변수를 사용하지 않을 경우
  //  const handleChange = (e) => {
  //   getFetchData(e.target.value.replaceAll('-',''));
  //  }


  useEffect(() => {
    let tmYesterday =  new Date();
    tmYesterday.setDate(tmYesterday.getDate()-1);
    tmYesterday = tmYesterday.toISOString().slice(0,10);
  
    setYesterday(tmYesterday);
    console.log(tmYesterday)
    getFetchData(tmYesterday.replaceAll('-','')); // 숫자만 입력되게 -를 공백으로 대체
  }, []);


  //boxlist 변경시 실행
  useEffect(() => {

    // console.log(boxlist)
    (boxlist === undefined)
      ? setTrs(<tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>)
      : setTrs(boxlist.map((item) =>
        <tr key={item.movieCd} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 hover:text-stone-950 hover:font-bold dark:hover:bg-gray-600">
          <td className="px-6 py-4">
            <span className="inline-flex justify-center items-center w-5 h-5 bg-slate-500 text-white rounded-md mx-2">
              {item.rank}
            </span> 
            {item.movieNm}
          </td>
          <td className="px-6 py-4 text-right">
            {parseInt(item.salesAmt).toLocaleString('ko-KR')}원
          </td>
          <td className="px-6 py-4 text-right">
            {parseInt(item.audiCnt).toLocaleString('ko-KR')}명
          </td>
          <td className="px-6 py-4 ">
            {
              ( parseInt(item.rankInten) > 0 )
              ?  <span className="text-red-600">▲{item.rankInten}</span>  
              : ( parseInt(item.rankInten) < 0 ) 
                ?  <span className="text-sky-600">▼{Math.abs(item.rankInten)}</span> 
                : "-"
            }
          </td>
        </tr>)
      );
  }, [boxlist]);

  return (
    <div className="container mx-auto h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">

        <div className="flex m-4">
          <BiCameraMovie className="text-5xl text-sky-800 mx-3" />
          <TailH1 title="박스오피스" />       
        </div>

        <div className="flex m-8">
          <label htmlFor = "dt"
              className="inline-flex justify-center items-center text-lg mx-1 px-2"
          >
            날짜선택</label>     
          <input type ='date'   
                 id = 'dt'
                 ref = {rfDt}
                 max = {yesterday}
                 className="bg-green-50 mx-5 px-4 h-10 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                 onChange = {handleChange}
          />
        </div>

        <div className="relative overflow-x-auto w-3/4 shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  영화명
                </th>
                <th scope="col" className="px-6 py-3">
                  매출액
                </th>
                <th scope="col" className="px-6 py-3">
                  관객수
                </th>
                <th scope="col" className="px-6 py-3">
                  증감율
                </th>
              </tr>
            </thead>
            <tbody>
              {trs}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}