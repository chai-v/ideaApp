import React from "react";

interface footerProps{

}

const Footer: React.FC<footerProps> = () => {
    return(
        <div className='w-full flex flex-row items-center justify-between bg-darkpurple py-4 px-6'>
        <div className='h-1/2 rounded-full flex flex-row items-center'>
            <span className='ml-2 font-semibold text-2xl leading-[64px] text-cream'>ideaApp</span>
        </div>
        <div className=''>
          <a href=''>
            <img width='45px' height='45px' src='/github.png'></img>
          </a>
        </div>
    </div>
    )
}

export default Footer;