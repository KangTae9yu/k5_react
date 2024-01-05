import Div2 from "./Div2";
import { useRecoilValue } from "recoil";
import { divn3 } from "./DivAtoms";

export default function Div1() {
  const n3 = useRecoilValue (divn3);
    
  return (
    <div className="w-5/6 h-5/6 rounded-xl p-10 flex flex-col justify-center items-center bg-slate-700">
        <div className="text-xl text-white">Div1 n3={n3}</div>  
        <Div2 />
    </div>
  )
}

