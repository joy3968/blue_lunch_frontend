'use client';

import React, {useState} from 'react';
import "../../globals.css";
import Image from "next/image";
import {VscGraph} from "react-icons/vsc";
import {MdErrorOutline, MdOutlineSecurityUpdate} from "react-icons/md";
import {CiImageOn} from "react-icons/ci";

export default function DashboardPage() {

    const [selectedMenu, setSelectedMenu] = useState('대시보드'); // 초기값 설정

    const menuList: string[] = [
        '대시보드', '에러 로그', '업데이트 관리', '스플래시 이미지'
    ];

    const handleMenuClick = (menuName) => {
        setSelectedMenu(menuName); // 클릭 시 메뉴 상태 업데이트
    };

    const getIcon = (menuName) => {
        if (menuName === '대시보드') {
            return <VscGraph color={'#FFFFFF'}/>
        } else if (menuName === '에러 로그') {
            return <MdErrorOutline color={'#FFFFFF'}/>
        } else if (menuName === '업데이트 관리') {
            return <MdOutlineSecurityUpdate color={'#FFFFFF'}/>
        } else if (menuName === '스플래시 이미지') {
            return <CiImageOn color={'#FFFFFF'}/>
        }
    }

    const getIcon2 = (menuName) => {
        if (menuName === '대시보드') {
            return <VscGraph color={'#1999d6'}/>
        } else if (menuName === '에러 로그') {
            return <MdErrorOutline color={'#1999d6'}/>
        } else if (menuName === '업데이트 관리') {
            return <MdOutlineSecurityUpdate color={'#1999d6'}/>
        } else if (menuName === '스플래시 이미지') {
            return <CiImageOn color={'#1999d6'}/>
        }
    }

    return (
      <div className="flex h-screen">
          <div
              className={'w-[200px] h-screen bg-primary-blue flex flex-col items-center'}
          >
              <div
                  className={'w-[150px] h-[50px] bg-primary-white rounded-md flex flex-col justify-center items-center mt-10'}
              >
                  <Image
                      src={'https://bluemtec.com/renew/img/common/logo.png'} alt={'블루엠텍 로고'}
                      width={100} height={50}
                  />
              </div>
              <p
                  className={'text-primary-white text-center mt-6'}
              >
                  master 계정
              </p>
              <button
                  className="flex mt-2 mb-8 items-center rounded-md bg-red-500 px-3 py-1 text-primary-white hover:bg-red-600"
              >
                  로그아웃
              </button>
              {/*<div>
                  {
                      menuList.map((menu, index) => {
                          return (
                              <div
                                  key={index}
                                  className={`flex flex-col h-[60px] ${
                                      selectedMenu === menu ? 'bg-primary-white' : 'bg-primary-blue'
                                  }`}
                              >
                                  <div className="w-[200px] h-[10px] bg-primary-blue rounded-br-[12px]"/>
                                  <div
                                      className={`w-[200px] h-[40px] flex flex-col justify-center items-center ${
                                          selectedMenu === menu
                                              ? 'bg-primary-white'
                                              : 'bg-primary-blue'
                                      }`}
                                      style={
                                          selectedMenu === menu
                                              ? {background: 'linear-gradient(to right, #1999d6 50%, #ffffff 50%)'}
                                              : {}
                                      }
                                      onClick={() => handleMenuClick(menu)} // 클릭 핸들러
                                  >
                                      <div
                                          className={`space-x-2 w-[150px] h-screen flex justify-center items-center rounded-[12px] cursor-pointer bg-primary-white text-primary-blue ${
                                              selectedMenu === 'menu'
                                                  ? ''
                                                  : 'border-[1px] border-primary-white'
                                          }`}
                                      >
                                          {getIcon2(menu)}
                                          <span className="text-center">{menu}</span>
                                      </div>
                                  </div>
                                  <div className="w-[200px] h-[10px] bg-primary-blue rounded-tr-[12px]"/>
                              </div>
                          );
                      })
                  }
              </div>*/}
              {
                  menuList.map((menu, index) => {
                      return (
                          <div
                            key={index}
                            className={`mt-4 w-[150px] h-[40px] rounded-[12px] flex space-x-2 items-center cursor-pointer `}
                          >
                              {getIcon(menu)}

                              <span
                                className={`${selectedMenu === menu ? 'font-extrabold text-primary-white' : 'text-gray-200'} `}
                              >
                                  {menu}
                              </span>
                          </div>
                      );
                  })
              }
          </div>
          <div
              className="flex-1 grid grid-cols-3 gap-4 p-4"
          >
              <div className="h-[400px] border-primary-blue border-[1px] p-4 rounded-[12px] shadow">Content 1</div>
              <div className="h-[400px] border-primary-blue border-[1px] p-4 rounded-[12px] shadow">Content 2</div>
              <div className="h-[400px] border-primary-blue border-[1px] p-4 rounded-[12px] shadow">Content 3</div>
          </div>
      </div>
    );
}
