import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getxy from "./getxy.json";

export default function FrcstDetail() {
    const [tags, setTag] = useState([]);
    const [tdata, setTdata] = useState([]);

    const [sParams] = useSearchParams();
    const gubun = sParams.get('gubun');
    const dt = sParams.get('dt');
    const area = sParams.get('area');

    // 환경변수값 가져오기
    let apikey = process.env.REACT_APP_APIKEY;

    // nx, ny 구하기
    let tm = getxy.filter(item => item['1단계'] === area);

    let x = tm[0]['격자 X'];
    let y = tm[0]['격자 Y'];

    console.log(x, y)

    const getData = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();

        let tm = data.response.body.items.item;
        setTdata(tm);

    }

    useEffect(() => {

        let url = '';

        if (gubun === '1') {
            url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst`;
            url = `${url}?serviceKey=${apikey}&numOfRows=60&pageNo=1&dataType=json`;
            url = `${url}&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`;
        }
        else if (gubun === '2') {
            url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst`;
            url = `${url}?serviceKey=${apikey}&numOfRows=60&pageNo=1&dataType=json`;
            url = `${url}&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`;
        }

        console.log(url)

        getData(url);

    }, []);

    useEffect(() => {
        
        let tm = tdata.map((item, idx) =>
            <div key={`d${idx}`}>
                <div>{item['category']}</div>
                <div>{item['fcstTime']}</div>
                <div>{item['fcstValue']}</div>
            </div>
        );

        setTag(tm);


    }, [tdata]);



    return (
        <div className="flex flex-col justify-center items-center w-full my-8">
            <div className="my-5 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-4">
                {tags}
            </div>
        </div>
    )
}
