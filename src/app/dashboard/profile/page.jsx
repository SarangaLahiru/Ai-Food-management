'use client'
import Layout from '@/app/components/Layout'
import { useState } from 'react';

export default function Profile() {
 

  const [data,setData]=useState('sdfs fdsdfsdf')
 
  
  return (
    <div>
       <Layout>
       <h2>profile page </h2>
       <h2>{data}</h2>
       </Layout>
      
    </div>
  )
}
