
export default function ComponentForStoryCard({children}) {
    const[foto,title,txt,color] = children
  return (
    <div style={{backgroundColor:color}} className="flex flex-col items-center w-[85%] mx-auto p-[20px]  border border-[grey] rounded-[5px] lg:p-[30px_40px]">
        <img src={foto} alt="" />
        <h2 className="text-[32px] font-bold ">{title}</h2>
        <p>{txt}</p>

      
    </div>
  )
}
