import React , { useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';

import { CustomButton, customButton } from './';
import { logo, menu, search, thirdweb} from '../assets';
import { navlinks} from '../constants' ;

const Navbar = () => {
    const navigate = useNavigation();
    const [isActive , setIsActive] = useState('dashboard');
    const [toggleDrawer , setToggleDrawer] = useState(false);

    const address = "0xabc";

    return (
        <div className= "flex md:flex-rowflex-col-reverse justify-between mb-[35px] gap-6">
            <div className= "lg:flex-1 flex flex-row max-w-[458px] py-2 px-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
            
                <input type="text" placeholder= "Search for Campaigns"  className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />


                <div className= "w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
                    <img src={search} alt="search" className="w-[15px] h-[15px] object-contain" />
                </div>
            </div>
            <div className= "sm:flex hidden flex-row justify-end gap-4">
                <CustomButton
                    btnType="button"
                    title={address ? "Create a Campaign" : "Connect"}
                    styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
                    handleClick={() => {
                        if (address) 
                            navigate('/create-campaign');
                        else navigate('/connect-wallet');
                    }} 
                     />
                <Link to="/profile">
                <div className= "w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                    <img src= {thirdweb} alt="profile" className="w-[52px] h-[52px] rounded-full" />
                    </div>
                </Link>

            </div>


                <Link to="/profile">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                        <img src={thirdweb} alt="profile" className="w-[52px] h-[52px] rounded-full" />
                    </div>
                </Link>

                 <div className='sm:hidden flex justify-between items-center relative'>
               <div className= "w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                <img src={thirdweb} alt="profile" className="w-[52px] h-[52px] rounded-full" />
                </div> 
                <img 
                    src={menu} 
                    alt="menu" 
                    className="w-[34px] h-[34px] object-contain cursor-pointer" 
                    onClick={() => setToggleDrawer((!toggleDrawer))} 
                />
                <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? 'translate-y-[100vh]': 'translate-y-0'} transition-all duration-500 ease-in-out`}>
                    <ul className='mb-4'>
                        {navlinks.map((link)=>(
                            <li
                                key={link.name}
                                className={`flex p-4 ${isActive === link.name ? 'bg-[#3a3a43]' : ''} hover:bg-[#3a3a43] cursor-pointer`}
                                onClick={() => {
                                    setIsActive(link.name);
                                    setToggleDrawer(false);
                                    navigate(link.link);
                                }}
                            >
                            <img
                                src={link.imgurl}
                                alt='link.name'
                            />
                            <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]': 'text-[#808191]'}`}>{link.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
