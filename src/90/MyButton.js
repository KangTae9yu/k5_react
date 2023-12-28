

export default function MyButton({caption, bcolor, handleOnClick}) {
    const bcolorlt = {
        'blue' : 'bg-blue-700 hover:bg-blue-800',
        'orange' : 'bg-orange-700 hover:bg-orange-800',
        'green' : 'bg-green-700 hover:bg-green-800'
    }
    
  return (
    <button onClick={handleOnClick}
                        className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium 
                                text-white focus:outline-none 
                                ${bcolorlt[bcolor]} 
                                rounded-lg border  focus:z-10 focus:ring-4 focus:ring-gray-200 
                                `}>
                        {caption}
    </button>
  )
}
