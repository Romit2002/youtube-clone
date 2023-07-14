import React, { Fragment, useContext } from 'react'
import { categories } from '../utills/constants';
import LeftNavMenuItem from './LeftNavMenuItem';
import { Context } from '../context/contextApi';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { useEffect } from 'react';
const LeftNav = () => {

    const { selectCategory, setSelectCategory, mobileMenu} = useContext(Context);

    const navigate = useNavigate();

    const onClickHandler = (name, type) => {
        switch(type){
            case 'category':
                return setSelectCategory(name);
            case 'home':
                return setSelectCategory(name);
            case 'menu':
                return false
            default:
                break;
        }
    }

    // useEffect(()=>{
    //     mobileMenu
    // })

    // const [] = useState("translate-x-[-240]")
  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 md:translate-x-0 transition-all ${mobileMenu===true?"translate-x-0":"translate-x-[-240px]"}`}>
    <div className="flex px-5 flex-col">
        {
            categories.map((item)=>{
                return(
                    <Fragment key={item.name}>
                        <LeftNavMenuItem text={item.type==="home"?"Home":item.name} icon={item.icon} action={()=>{
                            onClickHandler(item.name, item.type);
                            navigate("/");
                        }} className={`${selectCategory=== item.name?"bg-white/[0.15]":""}`}/>
                        {item.divider && (
                            <hr className='my-5 border-white/[0.2]' />
                        )}
                    </Fragment>
                )
            })
        }
        <hr className='my-5 border-white/[0.2]' />
        <div className='text-white/[0.5] text-[12px]'>
            Made by: Romit
        </div>
    </div>
      
    </div>
  )
}

export default LeftNav
