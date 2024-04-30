// Import statements
'use client'
import Layout from '@/app/components/Layout';
import React, { useState } from 'react';
import axios from 'axios';
import '../../style.css';
import './genarate.css';

export default function Genarate() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('idle');
<<<<<<< HEAD
=======
  const [imageRes,setImageRes]=useState(""); 
>>>>>>> fd3ced434c51c8751dc0a0c6a4cc128837c38a9e

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUploadClick = async () => {
    if (!selectedImage) {
      alert('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
<<<<<<< HEAD
    formData.append('file', selectedImage);
=======
    formData.append('file', selectedImage); 
>>>>>>> fd3ced434c51c8751dc0a0c6a4cc128837c38a9e
    setUploadStatus('uploading');

    try {
      const response = await axios.post('http://localhost:8000/check', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload successful:', response.data);
      setUploadStatus('success');
      setImageRes(response.data)

    } catch (error) {
      console.error('Upload failed:', error);
      setUploadStatus('failed');
    }
  };

  return (
    <div>
      <Layout>
        <div className="boxgg flex justify-center">
          <div className="boxg w-1/2 m-5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto mt-10">
              <div className="relative">
                <div
                  className={`flex items-center justify-center w-full h-32 border-4 border-dashed border-gray-400 rounded-md cursor-pointer p-4 ${
                    uploadStatus === 'uploading' ? 'opacity-50' : ''
                  }`}
                  onClick={() => document.getElementById('imageInput').click()}
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
                  name="file"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
              <button
                onClick={handleUploadClick}
                className={`mt-4 bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${
                  uploadStatus === 'uploading' ? 'disabled opacity-50' : ''
                }`}
                disabled={uploadStatus === 'uploading'}
              >
                {uploadStatus === 'uploading' ? 'Uploading...' : 'Upload Image'}
              </button>
            </div>
          </div>
          <div className="boxg boxg1 mt-5">
            <h1 className="text-cyan-50 text-2xl m-12">Your recipe</h1>
            <div className="dis">
              {selectedImage && (
                <img src={URL.createObjectURL(selectedImage)} width="500px" className="m-14" alt="" />
              )}
              {imageRes && (
                <h5>{imageRes}</h5>
              )}
              <p className="text-zinc-400 m-14">
                {/* Placeholder recipe content */}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
// 'use client'
// import React, { useState } from 'react';
// import axios from 'axios';

// function Genarate() {
//   const [file, setFile] = useState(null);
//   const [response, setResponse] = useState('');

//   const handleFileChange = (e) => {
//       setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//       if (!file) return;

//       const formData = new FormData();
//       formData.append('file', file);

//       try {
//           const res = await axios.post('http://localhost:5000/upload', formData, {
//               headers: {
//                   'Content-Type': 'multipart/form-data'
//               }
//           });
//           setResponse(res.data);
//       } catch (error) {
//           console.error("Upload failed:", error);
//       }
//   };

//   return (
//       <div>
//           <input type="file" onChange={handleFileChange} />
//           <button onClick={handleUpload}>Upload</button>
//           {response && <div>{response}</div>}
//       </div>
//   );
// };


// export default Genarate;

