import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

const Modal = ({ open, setOpen }) => {
  const allColors = [
    '#419EBB',
    '#EDA249',
    '#6D2ED5',
    '#D14C32',
    '#D83A34',
    '#CD5120',
    '#1EC1A2',
    '#2D68F0',
  ];
  return (
    <div
      style={{ transform: !open ? 'translateX(-100%)' : 'translateX(0%)' }}
      className="absolute bg-[#070724] left-0 w-full top-[76px] h-full z-10 ease-in-out duration-300 overflow-x-auto">
      <div className="pt-[24px] px-[24px] pb-[76px]">
        {data.map((el, id) => (
          <Link
            onClick={() => {
              setOpen(false);
            }}
            to={`/${id}`}
            className="flex justify-between items-center py-[20px] border-b-2 border-[#ffffff10]">
            <div className="flex">
              <span
                style={{ backgroundColor: allColors[id] }}
                className={`block w-[20px] h-[20px] rounded-full mr-[25px]`}></span>
              {el.name}
            </div>
            <svg className="justify-end" xmlns="http://www.w3.org/2000/svg" width="6" height="8">
              <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Modal;
