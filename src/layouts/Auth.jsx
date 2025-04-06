import { Outlet } from 'react-router-dom'

const Auth = () => {
      return (
            <div className='bg-gradient-to-br max-md:px-2.5 back-img w-[100vw] from-[#2A003D] to-[#1D2D50] h-screen'>
                  <Outlet />
            </div>
      )
}

export default Auth