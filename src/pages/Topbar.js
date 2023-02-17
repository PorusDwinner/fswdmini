import { Link } from "react-router-dom"

const Topbar = () => {
  return (
    <div className='w-[50%] h-[5rem] display-block m-auto mt-2 bg-cyan-600'>
        <ul className="flex justify-around" >
            <li>
                <Link to='/' className="text-white font-medium text-xl leading-[5rem] ">
                    Home
                </Link>
            </li>
            <li>
                <Link to='/login-register' className="text-white font-medium text-xl leading-[5rem] ">
                    Login
                </Link>
            </li>
        </ul>
      
    </div>
  )
}

export default Topbar
