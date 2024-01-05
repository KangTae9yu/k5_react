import Div3 from "./Div3";
import { useRecoilValue } from "recoil";
import { divn4 } from "./DivAtoms";

export default function Div2() {
  const n4 = useRecoilValue (divn4);
    
  return (
    <div className="w-5/6 h-5/6 rounded-xl p-10 flex flex-col justify-center items-center bg-slate-500">
        <div className="text-xl text-white">Div2 n4={n4}</div>
        <Div3 />
    </div>
  )
}