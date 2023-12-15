

export default function TailCard({imgSrc, title, subtile, tags}) {
  return (
    <div className="mx-auto flex flex-col justify-center items-center grid grid-cols-3 grid-row-5 bg-slate-400">
      <div className="w-auto">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="flex flex-col justify-center bg-zinc-500">
        {title}
      </div>
      <div className="flex flex-col bg-orange-600">
        {subtile}
      </div>
      <div className="flex flex-col bg-yellow-300">
        {tags}
      </div>
    </div>
  )
}
