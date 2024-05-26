import React, { MouseEventHandler, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../utils/UserContext";
import { useNavigate } from "react-router-dom";

interface homeProps{

}

const Home:React.FC<homeProps> = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [sidebarItem, setsidebarItem] = useState('Home')
    const [open, setOpen] = useState<boolean>(false)
    const navigate = useNavigate();

    const { user, userlogin, userlogout} = useAuth();
    
    const handleOpen = () => {
        setOpen(!open);
      }

      const handleSidebar = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isMobile) {
          setOpen(!open);
        }
        const textContent = e.currentTarget.textContent;
        if (textContent) {
          setsidebarItem(textContent);
        }
      };

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 700);
        };
      
        handleResize();
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const handleLogout = () => {
        userlogout();
        navigate('/');
      };


    return(
        <div className='w-full h-full px-0 overflow-hidden bg-cream'>
          {/* Header */}
            <div className={`nav w-full ${isMobile ? 'h-[8vh]' : 'h-[11vh]'} flex flex-wrap items-center justify-between p-4 bg-darkpurple content-center frosted sticky top-0 `}>
                {isMobile ? <button onClick={handleOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </button> :
                  <h1 className="text-cream font-sans font-bold">Dashboard</h1>
                }
                <button className="text-cream font-sans font-bold" onClick={handleLogout}>Logout</button>
            </div>
            {/* Side bar */}
            <div className={`${isMobile ? 'h-[92vh] flex flex-col relative' : 'h-[89vh] grid grid-cols-5'}`}>
              <div className={`${isMobile ? (!open ? '-translate-x-full':'translate-x-0') : ''} ${isMobile ? 'bg-new w-full z-40 absolute inset-y-0 left-0' :'bg-purple'} sidebar col-span-1 isolate shadow-lg ring-1 ring-black/5 flex flex-col gap-2 items-center transition-transform ease-in-out duration-300`}>
                  <Link 
                      to="/home/dashboard" 
                      className={`text-cream font-sans font-bold mt-4 hover:bg-darkpurple rounded-md px-20 py-2 ${sidebarItem === 'Home' ? 'bg-darkpurple' : ''}`}
                      onClick={handleSidebar}
                  >
                    <div className='w-full h-full flex items-center'>
                      <div>Home</div>
                    </div>
                  </Link>
                  <Link 
                      to="/home/feed" 
                      className={`text-cream font-sans font-bold mt-4 hover:bg-darkpurple rounded-md px-20 py-2 ${sidebarItem === 'Posts' ? 'bg-darkpurple' : ''}`} 
                      onClick={handleSidebar}
                  >
                    <div className='w-full h-full flex items-center'>
                      Posts
                      </div>
                  </Link>
                  <Link 
                      to="/home/profile" 
                      className={`text-cream font-sans font-bold mt-4 hover:bg-darkpurple rounded-md px-20 py-2 ${sidebarItem === 'Profile' ? 'bg-darkpurple' : ''}`} 
                      onClick={handleSidebar}
                  >
                    <div className='w-full h-full flex items-center'>
                      Profile
                      </div>
                  </Link>
              </div>
              <div className="outlet col-span-4 overflow-y-scroll"><Outlet context={[isMobile, setIsMobile]}/></div>
          </div>
        </div>
    )
}

export default Home;