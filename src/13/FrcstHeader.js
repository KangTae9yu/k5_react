import TailH1 from "../UI/TailH1";
import {Link} from "react-router-dom" ;

export default function FrcstHeader() {
  return (
    <div className="container mx-auto ">
        <div className="flex flex-col justify-top items-center w-full h-full my-8">
            <div className="flex">
                <TailH1 title={"기상청 초단기/단기예보"} />
            </div>
            <div className="flex w-2/3 justify-end ">
                <div>
                    <Link to="/">홈으로</Link>
                    {/* <Link to="/detail">상세페이지</Link> */}
                </div>
            </div>
        </div>
    </div>
  )
}
