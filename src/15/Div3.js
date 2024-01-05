import { useRecoilState } from "recoil";
import TailButton from "../UI/TailButton";
import { divn } from "./DivAtoms";

export default function Div3() {
    const [n, setN] =useRecoilState(divn);

    const handleUp = () => {
        setN(n+1);
    }
    const handleDown = () => {
        setN(n-1);
    }
    
  return (
    <div className="w-5/6 h-5/6 rounded-xl p-10 flex flex-col justify-center items-center bg-slate-300">
        <div className="text-xl text-white">Div3</div>
            <div>
                <TailButton caption="증가" bcolor="lime" handleClick={handleUp} />
                <TailButton caption="감소" bcolor="sky" handleClick={handleDown} />
            </div>                
    </div>
  )
}