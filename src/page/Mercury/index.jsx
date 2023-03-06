import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import source from '../../assets/icon-source.svg';
import { Triangle } from 'react-loader-spinner';
import planets from '../../assets/data.json';


const Mercury = ({ home }) => {
  const { id } = useParams();
  const [active, setActive] = useState('OVERVIEW');
  const [photos, setPhotos] = useState('');
  const [descr, setDescr] = useState('');
  const [link, setLink] = useState('');
  const [geology, setGeology] = useState('');
  const [colors, setColors] = useState('');
  const [data, setData] = useState([]);
  const buttons = ['overview', 'Internal Structure', 'Surface Geology'];
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

  console.log(planets)

  useEffect(() => {
    setData(planets)
  }, []);

  useEffect(() => {
    setColors(allColors[id ? id : home]);
  }, [id]);

  useEffect(() => {
    if (active === 'OVERVIEW') {
      setPhotos('src/' + data[id ? id : home]?.images.planet);
      setDescr(data[id ? id : home]?.overview.content);
      setLink(data[id ? id : home]?.overview.source);
    } else if (
      active.toUpperCase() === 'INTERNAL STRUCTURE' ||
      active.toUpperCase() === 'STRUCTURE'
    ) {
      setPhotos('src/' + data[id ? id : home]?.images.internal);
      setDescr(data[id ? id : home]?.structure.content);
      setLink(data[id ? id : home]?.structure.source);
    } else {
      setPhotos('src/' + data[id ? id : home]?.images.planet);
      setGeology('src/' + data[id ? id : home]?.images.geology);
      setDescr(data[id ? id : home]?.geology.content);
      setLink(data[id ? id : home]?.geology.source);
    }
  }, [active, data[id ? id : home]]);

  const handleActive = (ev) => {
    setActive(ev.target.innerText.slice(2));
  };

  const handleMobileActive = (ev) => {
    setActive(ev.target.innerText);
  };

  console.log(active);

  return (
    <div className="custom__container">
      {!data[id ? id : home] ? (
        <div className="absolute left-0 top-0 w-full h-full">
          <Triangle
            height="200"
            width="200"
            color="#fff"
            ariaLabel="triangle-loading"
            wrapperStyle={{
              justifyContent: 'center',
              height: '100%',
              alignItems: 'center',
            }}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <div className="block md:hidden">
            <ul className="flex justify-between  px-[24px]  border-b-2 border-b-[#ffffff1f]">
              <li
                style={{ borderBottom: active === 'OVERVIEW' ? `3px solid ${colors}` : '',  }}
                onClick={(ev) => handleMobileActive(ev)}
                className={`py-[20px] uppercase font-bold tracking-[1.9px] text-[9px] leading-[10px] cursor-pointer `}>
                overview
              </li>
              <li
                style={{ borderBottom: active === 'STRUCTURE' ? `3px solid ${colors}` : '' }}
                onClick={(ev) => handleMobileActive(ev)}
                className={`py-[20px] uppercase font-bold tracking-[1.9px] text-[9px] leading-[10px]`}>
                structure
              </li>
              <li
                style={{ borderBottom: active === 'SURFACE' ? `3px solid ${colors}` : '' }}
                onClick={(ev) => handleMobileActive(ev)}
                className={`py-[20px] uppercase font-bold tracking-[1.9px] text-[9px] leading-[10px]`}>
                surface
              </li>
            </ul>
          </div>
          <div className="pt-[24px] md:pt-[126px] pb-0 lg:pb-[87px] max-w-[1110px] mx-auto flex justify-between flex-col lg:flex-row h-auto lg:h-[858px]">
            <div className="h-[256px] md:h-[422px] lg:h-[582px] flex items-center justify-center w-full  relative">
              {active === 'OVERVIEW' ||
              active === 'INTERNAL STRUCTURE' ||
              active === 'STRUCTURE' ? (
                <img
                  className="max-h-[256px] md:max-h-[422px] lg:max-h-[582px]"
                  src={photos}
                  alt=""
                />
              ) : (
                <>
                  <img
                    className="max-h-[256px] md:max-h-[422px] lg:max-h-[582px]"
                    src={photos}
                    alt=""
                  />
                  <img
                    className="lg:w-[163px]  w-[73px] md:w-[123px]  absolute bottom-0"
                    src={geology}
                    alt=""
                  />
                </>
              )}
            </div>
            <div className="flex flex-row mb-[40px] max-w-full lg:flex-col lg:max-w-[350px] items-center px-[24px] md:px-[40px] lg:px-[10px] mt-[41px] md:mt-[130px] lg:mt-0">
              <div className="md:h-[253px] lg:h-[326px] mb-[40px] text-center md:text-left md:max-w-[50%] lg:max-w-full">
                <h1 className="font-antonio text-[40px] md:text-[80px] leading-[52px] md:leading-[104px] mb-[32px] md:mb-[23px]">
                  {data[id ? id : home]?.name}
                </h1>
                <p className=" leading-[25px] mb-[24px]">{descr}</p>
                <div className="justify-center md:justify-start flex items-center mb-[28px] md:mb-[40px]">
                  <p className="opacity-50 mr-[8px]">
                    Source :{' '}
                    <a href={link} className="underline text-white">
                      Wikipedia
                    </a>
                  </p>
                  <img src={source} alt="" />
                </div>
              </div>
              <ul className="hidden md:block w-full ml-[70px] lg:ml-0">
                {buttons.map((el, id) => (
                  <li
                    style={{ backgroundColor: `${el.toUpperCase() === active ? `${colors}` : ''}` }}
                    onClick={(ev) => handleActive(ev)}
                    className={`py-[12px] border-opacity-20 border-white border-2 uppercase font-bold tracking-[2.5px] text-[12px] leading-[25px] mb-[16px] lg:mb-[27px] cursor-pointer  ease-in-out duration-300 `}>
                    <span className="pl-[28px] mr-[28px] opacity-50">0{id + 1}</span>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-[1110px] mx-auto pb-[26px] px-[24px] md:px-[40px] lg:px-[10px]">
            <ul className="flex flex-col md:flex-row justify-between uppercase">
              <li className="flex justify-between items-center md:items-start flex-row md:flex-col w-full h-full pt-[9px] pb-[13px] px-[24px] md:pt-[16px] md:pb-[19px] md:pl-[15px] lg:pt-[20px] lg:pb-[27px] lg:pl-[23px] mr-[30px] border-opacity-20 border-white mb-[8px] md:mb-0 border-2">
                <p className="opacity-50 text-[8px] lg:text-[11px] tracking-[1px] font-bold leading-[25px]">
                  rotation time
                </p>
                <span className="text-[20px] md:text-[24px] lg:text-[40px] font-antonio tracking-[-1.5px] leading-[26px] md:leading-[52px]">
                  {data[id ? id : home]?.rotation}
                </span>
              </li>
              <li className="flex justify-between items-center md:items-start flex-row md:flex-col w-full h-full pt-[9px] pb-[13px] px-[24px] md:pt-[16px] md:pb-[19px] md:pl-[15px] lg:pt-[20px] lg:pb-[27px] lg:pl-[23px] border-opacity-20 border-white border-2 mb-[8px] md:mb-0 mr-[30px]">
                <p className="opacity-50 text-[8px] lg:text-[11px] tracking-[1px] font-bold leading-[25px]">
                  revolution time
                </p>
                <span className="text-[20px] md:text-[24px] lg:text-[40px] font-antonio tracking-[-1.5px] leading-[26px] md:leading-[52px]">
                  {data[id ? id : home]?.revolution}
                </span>
              </li>
              <li className="flex justify-between flex-row md:flex-col items-center md:items-start w-full h-full pt-[9px] pb-[13px] px-[24px] md:pt-[16px] md:pb-[19px] md:pl-[15px] lg:pt-[20px] lg:pb-[27px] lg:pl-[23px] border-opacity-20 border-white border-2 mb-[8px] md:mb-0 mr-[30px]">
                <p className="opacity-50 text-[8px] lg:text-[11px] tracking-[1px] font-bold leading-[25px]">
                  radius
                </p>
                <span className="text-[20px] md:text-[24px] lg:text-[40px] font-antonio tracking-[-1.5px] leading-[26px] md:leading-[52px]">
                  {data[id ? id : home]?.radius}
                </span>
              </li>
              <li className="flex justify-between items-center md:items-start flex-row md:flex-col w-full h-full pt-[9px] pb-[13px] px-[24px] md:pt-[16px] md:pb-[19px] md:pl-[15px] lg:pt-[20px] lg:pb-[27px] lg:pl-[23px] border-opacity-20 border-white border-2">
                <p className="opacity-50 text-[8px] lg:text-[11px] tracking-[1px] font-bold leading-[25px]">
                  average temp
                </p>
                <span className="text-[20px] md:text-[24px] lg:text-[40px] font-antonio tracking-[-1.5px] leading-[26px] md:leading-[52px]">
                  {data[id ? id : home]?.temperature}
                </span>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Mercury;
