import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>

        <div className='flex flex-col items-center gap-[50px] mt-[50px]'>
            <h1 className='text-[100px]'>404 Not Found</h1>
            <p className='text-[20px]'>Your visited page not found. You may go home page.</p>
            <button className='bg-[#DB4444] p-[10px_20px] rounded text-[#fff]'><Link to="/">Back to home page</Link></button>
        </div>
      
    </div>
  )
}
