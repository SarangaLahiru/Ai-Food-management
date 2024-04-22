'use client'
import React from 'react'
import './dashheader.css';
import { MdWorkspacePremium } from "react-icons/md";
import { BiSolidCoin } from "react-icons/bi";
import { WiStars } from "react-icons/wi";

export default function Dashheader() {
    const currentDate = new Date();
// Array of month names
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  // Array of day names
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Extract the day, month, and year from the Date object
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const dayIndex = currentDate.getDay();

  // Get the name of the month and day
  const monthName = monthNames[monthIndex];
  const dayName = dayNames[dayIndex];

  // Format the date string
  const formattedDate = `${dayName}, ${monthName} ${day}, ${year}`;
  return (
    <div>

        <div className="containerd1 flex items-center">
            <div className="box basis-2/5">
                <h2 className='text-4xl m-10'>jhone Adrew</h2>
                <h2 className='-mt-6 ml-10 text-zinc-300'>{formattedDate}</h2>
                
            </div>
            <div className="box">
            <div className="relative left-50 top-4">
      <input
        type="text"
        placeholder="Search"
        className="search w-56 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M13.293 14.707a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 1 1 1.414-1.414l3 3zM9 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
          clipRule="evenodd"
        />
      </svg>
           </div>
           
            </div>
            <div className="box preBox flex items-center -ml-20">
                <div className="dis flex items-center -mt-5">
                   <div className="dis1 flex items-center">
                   <BiSolidCoin className='precoin'/>
                <h2 className='mt-6 text-2xl'>100</h2>
                   </div>
                </div>
                <div className="dis flex items-center -mt-5 a2">
                  <div className="dis1 dis2 flex items-center">
                  <MdWorkspacePremium className='prestar a1 '/>
                <h2 className='mt-6 text-2xl'>Try Premium</h2>
                  </div>
                </div>
                <div className="dis flex items-center -mt-5 a2 s1">
                  <div className="dis1 dis3 flex items-center ">
                  <WiStars className='s2 prestar'/>
                
                  </div>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}
