// import { useEffect , useState} from "react";
// import TailH1 from "../UI/TailH1" ;
// import data from "./dataFrcst.json" ;
// import TailBlueButton from "../UI/TailBlueButton";

// export default function Frcst() {
//     const [dtTags, setDtTags] = useState();
//     const [dtcnTags, setDtCnTags] = useState();

//     const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"] ;
//     const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"] ;
    
//     let dtcn = {}
//     for(let i=0 ; i < dtKey.length ; i++) {
//         dtcn[data[dtKey[i]]] = data[cnKey[i]]        
//     }
//     console.log(dtcn)

//     const handelClick = ((dt) => {
//         console.log(dt, dtcn[dt]) 
//         setDtCnTags(dtcn[dt]) ;
//     });

//     useEffect(() => {
//         setDtTags(
//             dtKey.map((k, idx) =>                
//                 <TailBlueButton key={`dt${idx}`} 
//                 caption={data[k]} 
//                 onClick={() => handelClick(data[k])} />
//             )
//         );
//     }, []);
//   return (
//     <div className="container mx-auto h-screen">
//       <div className="flex justify-center items-center h-1/6 bg-slate-100">
//         <TailH1 title={"초미세먼지 주간예보"} />
//       </div>
//       <div className="grow flex flex-col justify-center items-center">
//         <div className="flex justify-center items-center p-5">
//         {dtTags}
//         </div>
//         <div className="flex justify-center items-center p-5">
//         {dtcnTags}
//         </div>
//       </div>
//     </div>
//   )
// }
