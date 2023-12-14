import TailButton from "../UI/TailButton";

export default function TrafficNav({ title, carr, sel, setSel}) {

    const handleBtClick = (item) => {
        setSel(item);
    }

    const tags = carr.map((item, idx) => 
                            <TailButton 
                            caption = {item}
                            key = {`bt${idx}`}
                            bcolor = {item === sel ? 'orange' : 'sky'}
                            handleClick = {() => handleBtClick(item)}
                            />
    );


    return (
        <div className="flex w-full bg-slate-100 p-3 my-4">
            <div className="flex justify-center items-center text-xl w-1/6">
                {title}
            </div>
            <div className="flex justify-end items-center w-5/6">
                {tags}
            </div>
        </div>
    )
}
