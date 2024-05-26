import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className='w-full py-4 flex justify-center'>
            <div className='w-5/6 h-1/2 bg-cream rounded-full flex items-center px-6'>
                <span className='font-semibold text-2xl leading-[64px] text-darkpurple'>ideaApp</span>
                <div className='ml-auto flex space-x-4'>
                    <Link to='/login'>
                        <span className="font-semibold text-lg leading-[64px] text-darkpurple">Login</span>
                    </Link>
                    <Link to='/signup'>
                        <span className="font-semibold text-lg leading-[64px] text-darkpurple">Sign up</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
