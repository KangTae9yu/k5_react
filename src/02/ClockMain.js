import LogoImg from "../01/LogoImg";
import { useState } from "react";

function ClockMain() {
    const [ctime, setCtime] = useState(new Date().toLocaleTimeString()) ;

    //1초에 한번씩
    setInterval(()=>{
        setCtime(new Date().toLocaleTimeString());
    }, 1000);
    // let ctime = new Date().toLocaleTimeString() ;
    return(
        <main className="App-header">        
            <LogoImg />
            <div>현재시간 : {ctime}</div>
        </main>
    );
}

export default ClockMain ;