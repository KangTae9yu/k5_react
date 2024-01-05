import { useRecoilValue } from "recoil";
import { divn, divn2 } from "./DivAtoms" ;

import Div1 from "./Div1";


export default function DivMain() {
    const n = useRecoilValue (divn);
    const n2 = useRecoilValue (divn2);
    

    return (
        <div className="w-full h-full flex justify-center items-center bg-slate-300">
            <div className="w-5/6 h-5/6 rounded-xl p-10 flex flex-col justify-center items-center bg-slate-500 ">
                <div className="text-xl text-white">Recoil DivMain n={n} n2={n2}</div>
                <Div1 />
            </div>
        </div>
    )
}
// 프롭스드릴링 Div3을 사용하기 위해 Div1,Div2가 필요하다. Div1 -> Div2 -> Div3
// 리코일은 여러개의 컴포넌트들을 관리