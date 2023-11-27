import { useState } from 'react' ;
import style from './Lotto.module.css' ;
import './Lotto.css' ;

export default function Lotto() {
    const [tags, setTags] = useState() ;

    const handleClick = (e) => {
        e.preventDefault();
        
        let arr = [] ;
        while (arr.length < 7) {
            let n = Math.floor(Math.random()*45) + 1; //1~45
            if (!arr.includes(n)) arr.push(n) ; 
        }      
        
        let tempTags ;
        tempTags = arr.map((item, idx) =>
            idx == 5 
                ?   <>
                    <span key={`sp${idx}`} className='sp' id={`sp${Math.floor(parseInt(item) / 10)}`}>
                    {item}
                    </span>                    
                    <span key={`spp${idx}`} className={style.spp}>+</span>                   
                    </>
                :   <span key={`sp${idx}`} className='sp' id={`sp${Math.floor(parseInt(item) / 10)}`}>
                    {item}
                    </span>
                    
        )

        console.log(tempTags)
        setTags(tempTags) ;
    }

    return (
        <main className={style.m}>
            <section className={style.sec}>
                <form className={style.fm}>
                    <div className={style.fdiv}>
                        <div className={style.div1} id='d1' >
                            {tags}
                        </div>
                    </div>
                    <div className={style.fdiv}>
                        <div className={style.div1} id='d2'>                        
                        <button className={style.bt} onClick={handleClick}>로또번호생성</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}
