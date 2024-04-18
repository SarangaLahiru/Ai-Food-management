// components/Sidebar.js
'use client'
import React from 'react';
import Link from 'next/link';
import { GiCook } from "react-icons/gi";
import { FaHome, FaUser, FaCog,FaCoins } from 'react-icons/fa';
import { BsStars } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import '../../style.css';
import './sidebar.css';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
  const router=usePathname();
  console.log(router)

  return (
    <div className="sider">
      <ul className="mt-10">
        <li className="box1 mb-6 icon2">
          <div className="block text-center">
            <GiCook className="text-6xl icon1" />
          </div>
        </li>
        <li className={`mb-6 ${router=== '/dashboard' ? 'active' : ' '}`}>
          <Link href="/dashboard">
            <div className="box block text-center">
              <FaHome className="text-3xl icon" />
            </div>
          </Link>
        </li>
        <li className={`mb-6 ${router === '/dashboard/profile' ? 'active' : ' '}`}>
          <Link href="/dashboard/profile">
            <div className="box block text-center">
              <FaUser className="text-3xl icon" />
            </div>
          </Link>
        </li>
        <li className={`mb-6 ${router === '/dashboard/setting' ? 'active' : ''}`}>
          <Link href="/dashboard/setting">
            <div className="box block text-center">
              <FaCoins className="text-3xl icon" />
            </div>
          </Link>
        </li>
        <li className={`mb-6 ${router === '/dashboard/genarate' ? 'active' : ''}`}>
          <Link href="/dashboard/genarate">
            <div className="box block text-center">
              <BsStars className="text-3xl icon" />
            </div>
          </Link>
        </li>
        <li className={`mb-6 ${router === '/dashboard/setting' ? 'active' : ''}`}>
          <Link href="/dashboard/setting">
            <div className="box block text-center">
              <FaCog className="text-3xl icon" />
            </div>
          </Link>
        </li>
        <li className={`mb-6 ${router === '/dashboard/setting' ? 'active' : ''}`}>
          <Link href="/dashboard/setting">
            <div className="box block text-center mt-24">
              <TbLogout className="text-3xl icon" />
            </div>
          </Link>
        </li>
        
        
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
