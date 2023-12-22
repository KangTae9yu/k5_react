import { Link } from "react-router-dom" ;

export default function Rnav() {
  return (
    <div className="flex justify-center items-center h-15 bg-slate-100">
        <ul className="flex">
            <li className="inline-block p-2 mx-5 hover:bg-sky-500 hover:text-sky-50">
              <Link to='/'>Home</Link>
            </li>
            <li className="inline-block p-2 mx-5 hover:bg-sky-500 hover:text-sky-50">
              <Link to='/page1'>page1</Link>
            </li>
            <li className="inline-block p-2 mx-5 hover:bg-sky-500 hover:text-sky-50">
              <Link to='/page2'>page2</Link>
            </li>
        </ul>
    </div>
  )
}
