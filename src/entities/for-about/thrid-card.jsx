
export default function Thrid({children}) {
    const[foto,title,txt] = children
  return (
    <div  className="flex flex-col items-center  rounded-[5px]">
        <img src={foto} alt="" />
        <h2 className="text-[20px] font-bold ">{title}</h2>
        <p className="m-0">{txt}</p>

      
    </div>
  )
}
