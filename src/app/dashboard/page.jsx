

import React from 'react'
import Layout from '../components/Layout'
import '../style.css';
import './dashboard.css'
import { Divider, colors } from '@mui/material';

export default function Dashboard() {
  return (
    <div>
        <Layout>
            {/* <h2>dashbaord</h2> */}
            <div className="container1 flex">
              <div className="boxd d1">
                <h2 className=' text-cyan-50 text-3xl m-8'>Most popular</h2>
                <Divider sx={{ backgroundColor:'white',margin:'0px 20px' }}/>
                <div className="items ml-10 flex flex-wrap">
                  <div className="item m-2">
                    <img src="/images/Group 69.png" alt="" />
                    <div className="dis">
                      <h2>Spicy sea foods</h2>
                    </div>
                  </div>
                  <div className="item m-2">
                    <img src="/images/Group 69.png" alt="" />
                    <div className="dis">
                      <h2>Spicy sea foods</h2>
                    </div>
                  </div>
                  <div className="item m-2">
                    <img src="/images/Group 69.png" alt="" />
                    <div className="dis">
                      <h2>Spicy sea foods</h2>
                    </div>
                  </div>
                  <div className="item m-2">
                    <img src="/images/Group 69.png" alt="" />
                    <div className="dis">
                      <h2>Spicy sea foods</h2>
                    </div>
                  </div>
                  <div className="item m-2">
                    <img src="/images/Group 69.png" alt="" />
                    <div className="dis">
                      <h2>Spicy sea foods</h2>
                    </div>
                  </div>
                  <div className="item m-2">
                    <img src="/images/Group 69.png" alt="" />
                    <div className="dis">
                      <h2>Spicy sea foods</h2>
                    </div>
                  </div>
                  <div className="item m-2">
                    <img src="/images/Group 69.png" alt="" />
                    <div className="dis">
                      <h2>Spicy sea foods</h2>
                    </div>
                  </div>
                  <div className="item m-2">
                    <img src="/images/Group 69.png" alt="" />
                    <div className="dis">
                      <h2>Spicy sea foods</h2>
                    </div>
                  </div>
                  <div className="item m-2">
                    <img src="/images/Group 69.png" alt="" />
                    <div className="dis">
                      <h2>Spicy sea foods</h2>
                    </div>
                  </div>
               
                 
                  
                </div>
              
              </div>
              <div className="boxd">

                <img src="/images/Image.png" alt="" width="550px" className='mt-3 ml-4' />
                <h2 className=' text-cyan-50 text-2xl m-8'>Indian sea food curry</h2>
                <p className=' text-zinc-400 -mt-3 ml-10'>Indulge your taste buds with the vibrant flavors of Thailand with this exquisite Thai Red Curry with Shrimp recipe. Bursting with aromatic spices, creamy coconut milk, and succulent shrimp, this dish is a celebration of Southeast Asian cuisine. Perfect for a cozy dinner at home or impressing guests with your culinary prowess.</p>
                
                <button className=' border p-3 rounded border-red-500 text-red-500 hover:bg-red-500 hover:text-red-50 ml-10 mt-5'>View more</button>
            

              </div>
            </div>
        </Layout>
      
    </div>
  )
}
