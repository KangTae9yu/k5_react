export default function TailBlueButton({caption, onClick}) {
  return (
    <button 
    className="inline-flex justify-center items-center p-5 rounded-md m-1 h-10 bg-blue-600 text-white hover:bg-blue-800"
    onClick={onClick}
    >
      {caption}
    </button>
  )
}
