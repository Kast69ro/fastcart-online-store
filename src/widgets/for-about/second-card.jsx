import inst from '#/icon-instagram.svg'
import link from '#/Icon-Linkedin.svg'
import twit from '#/Icon-Twitter.svg'
export default function SecondCompCard({children}) {
    const [foto,name,title] = children
  return (
    <div className=' w-[100%]  '>
        <img className='rounded-[5px] w-[100%]' src={foto} alt="" />
        <div>
            <h3 className='text-[32px]'>{name}</h3>
            <p className='text-[16px]'>{title}</p>
            <div className='flex gap-[10px]'>
                <img src={twit} alt="" />
                <img src={inst} alt="" />
                <img src={link} alt="" />
            </div>
        </div>
      
    </div>
  )
}
