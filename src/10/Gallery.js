import TailH1 from "../UI/TailH1";
import { FcLandscape } from "react-icons/fc";
import TailButton from "../UI/TailButton";
import TailCard from "../UI/TailCard";
import { useState, useEffect, useRef } from "react";

export default function Gallery() {
    // 환경변수값 가져오기
    let apikey = process.env.REACT_APP_APIKEY;

    // fetch 데이터 저장
    const [tdata, setTdata] = useState([]) ;

    // 키워드 입력
    const kwInput = useRef() ;

    const handleGetData = async(e) => {
        // if (e.key !== "Enter") 
        e.preventDefault() ;

        // 키워드 인코딩
        let enkw = encodeURI(kwInput.current.value);
        if (enkw === '') {
            alert("키워드를 입력하세요.") ;
            kwInput.current.focus();
            return;
        }


        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = `${url}serviceKey=${apikey}`
        url = `${url}&numOfRows=10` ;
        url = `${url}&pageNo=1` ;
        url = `${url}&MobileOS=ETC` ;
        url = `${url}&MobileApp=AppTest` ;
        url = `${url}&arrange=A` ;
        url = `${url}&keyword=${enkw}` ;
        url = `${url}&_type=json` ;

        // console.log(url);

        const resp = await fetch(url) ;
        const data = await resp.json() ;

        console.log(data.response.body.items.item) ;
        setTdata(data.response.body.items.item)

    } ;

    const handleResetClick = (e) => {
        e.preventDefault() ;
        kwInput.current.value = '' ;
    } ;

    // const handleEnter() => {
    //     if (e.key !== "Enter")
    // } ;

    // tdata 변경
    useEffect (() => {
        console.log("tdata=", tdata) ;
    }, [tdata])

    return (
        <div className="container mx-auto h-screen">
            <div className="flex flex-col justify-top items-center w-full h-full my-8">
                <div className="flex justify-center items-center">
                    <TailH1 title={"한국관광공사 사진정보"} />
                    <FcLandscape className="text-4xl mx-5" />
                </div>
                <form name="kform" className="my-5 w-4/5 flex justify-center items-center">                    
                    <div className=" w-1/2 mx-4">                       
                        <input type="text" ref={kwInput} id="txt1" className="block w-full p-4 ps-10 text-sm
                                                                 text-gray-900 border border-gray-300 rounded-lg
                                                                 bg-gray-50
                                                                 focus:ring-blue-500
                                                                 focus:border-blue-500
                                                                 dark:bg-gray-700
                                                                 dark:border-gray-600
                                                                 dark:placeholder-gray-400
                                                                 dark:text-white
                                                                 dark:focus:ring-blue-500
                                                                 dark:focus:border-blue-500" 
                                                                //  onKeyDown={"Enter"}
                                                                 placeholder="키워드입력" required></input>                                          
                    </div>
                    <TailButton 
                            caption = {' 확 인 '}
                            bcolor = {'sky'}
                            handleClick = {(e) => handleGetData(e)}
                            />
                    <TailButton 
                            caption = {' 취 소 '} 
                            bcolor = {'sky'}
                            handleClick = {(e) => handleResetClick(e)}
                            />
                </form>
                <div>
                <TailCard imgSrc = {"https://tong.visitkorea.or.kr/cms2/website/61/2952361.jpg"}
                            title = {"광안리해수욕장"}
                            subtile = {"부산광역시 수영구 광안동"}
                            tags = {"광안리해수욕장, 부산광역시 수영구, 광안리해변, 바닷가, 바다, 부산"} />
                </div>
            </div>            
        </div>
    )
}
