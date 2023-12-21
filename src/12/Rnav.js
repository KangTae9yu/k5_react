import { Link } from "react-router-dom" ;

export default function Rnav() {
  return (
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>page1</Link></li>
            <li><Link to='/'>page2</Link></li>
        </ul>
    </div>
  )
}
