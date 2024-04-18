'use client'
import Layout from '@/app/components/Layout'
import React, { useState } from 'react'
import '../../style.css'
import './genarate.css';

export default function genarate() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUploadClick = () => {
    // Trigger the hidden file input
    document.getElementById('imageInput').click();
  };

  

  return (
    <div>
      <Layout>
<div className="boxgg flex justify-center">
<div className="boxg w-1/2 m-5 flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-md mx-auto mt-10">
      <div className="relative">
        <div
          className="flex items-center justify-center w-full h-32 border-4 border-dashed border-gray-400 rounded-md cursor-pointer p-4"
          onClick={handleUploadClick}
        >
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400">Drag & drop or click to upload</span>
          )}
        </div>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
      <button
        onClick={handleUploadClick}
        className="mt-4 bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload Image
      </button>
    </div>
    </div>
    <div className="boxg boxg1 mt-5">
    <h1 className=' text-cyan-50 text-2xl m-12'>Your recipe</h1>
      <div className="dis">
        
        <img src="/images/Image.png" width="500px" className='m-14' alt="" />
        <p className=' text-zinc-400 m-14'>Indulge your taste buds with the vibrant flavors of Thailand with this exquisite Thai Red Curry with Shrimp recipe. Bursting with aromatic spices, creamy coconut milk, and succulent shrimp, this dish is a celebration of Southeast Asian cuisine. Perfect for a cozy dinner at home or impressing guests with your culinary prowess, this Thai curry will transport you to the bustling streets of Bangkok with every bite.</p>
      </div>

    </div>
</div>

      </Layout>
    </div>
  )
}
