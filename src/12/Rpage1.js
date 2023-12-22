import { useParams } from "react-router-dom" ;


export default function Rpage1() {
  const item = useParams().item1 ;
  // item = {"🍎", "🍌", 🥕};

  const itemList = { '사과' : '🍎',
                      '바나나' : '🍌',
                      '당근' : '🥕'
                    }

  return (
    <div>
      {/* page1 : {item === '사과' ? '🍎'
                              : item === '바나나' ? '🍌' : '🥕'} */}
      page1 : {itemList[item]}
    </div>
  )
}
