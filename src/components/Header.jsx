import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../assets/data.json';
import Modal from './Modal';

const Header = () => {
  const [openModal, setOpenModal] = useState(false)


  useEffect(() => {
    if(openModal){
      document.body.style.overflowY = "hidden"
    }else{
      document.body.style.overflowY = "initial"
    }
  },[openModal])

  return (
    <header className="py-[16px] md:pt-[32px] md:pb-[25px] lg:py-[25px]  border-b-2 border-b-[#ffffff1f] ">
      <div className="custom__container px-[24px] md:pl-[35px]">
        <nav className="justify-between items-center flex flex-row md:flex-col lg:flex-row">
          <div>
            <h1 className="text-[28px] uppercase font-antonio tracking-[-1.05px]">The planets</h1>
          </div>
          <div onClick={() => setOpenModal(!openModal)} className='block md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
              <g fill={`${openModal ? '#ffffff26' : '#FFF'}`} fill-rule="evenodd">
                <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
              </g>
            </svg>
          </div>
          <ul className=" items-center mt-[40px] hidden md:flex lg:mt-0">
            {data.map((el, id) => (
              <li
                className={`cursor-pointer mr-[33px] font-bold uppercase text-[14px] tracking-[1px] opacity-75 hover:opacity-100 ease-in-out duration-300`}>
                <Link to={`/planets-facts/${id}`}>{el.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
        <Modal open={openModal} setOpen={setOpenModal}/>
    </header>
  );
};

export default Header;
