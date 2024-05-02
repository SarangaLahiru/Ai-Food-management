"use client"
import React, { useState } from 'react';
import './dashheader.css';
import { MdWorkspacePremium } from 'react-icons/md';
import { BiSolidCoin } from 'react-icons/bi';
import { WiStars } from 'react-icons/wi';
import axios from 'axios';

export default function Dashheader() {
  const currentDate = new Date();

  const [open, setOpen] = useState(false);
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [mealType, setMealType] = useState('');
  const [generatedRecipes, setGeneratedRecipes] = useState([]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const dayIndex = currentDate.getDay();

  const monthName = monthNames[monthIndex];
  const dayName = dayNames[dayIndex];

  const formattedDate = `${dayName}, ${monthName} ${day}, ${year}`;

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleCuisineChange = (e) => {
    setCuisine(e.target.value);
  };

  const handleDietaryRestrictionsChange = (e) => {
    setDietaryRestrictions(e.target.value);
  };

  const handleMealTypeChange = (e) => {
    setMealType(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/recipe', {
        ingredients,
        cuisine,
        dietaryRestrictions,
        mealType
      });
      setGeneratedRecipes(response); // Update state with response data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="containerd1 flex items-center">
        <div className="box basis-2/5">
          <h2 className="text-4xl m-10">jhone Adrew</h2>
          <h2 className="-mt-6 ml-10 text-zinc-300">{formattedDate}</h2>
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
              <BiSolidCoin className="precoin" />
              <h2 className="mt-6 text-2xl">100</h2>
            </div>
          </div>
          <div className="dis flex items-center -mt-5 a2">
            <div className="dis1 dis2 flex items-center">
              <MdWorkspacePremium className="prestar a1" />
              <h2 className="mt-6 text-2xl">Try Premium</h2>
            </div>
          </div>
          <div className="dis flex items-center -mt-5 a2 s1">
            <div className="dis1 dis3 flex items-center " onClick={() => setOpen(true)}>
              <WiStars className="s2 prestar" />
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 flex justify-center z-50 items-center bg-black bg-opacity-75">
          <div className=" bg-neutral-700 p-8 rounded-lg w-3/4">
            <h2 className="text-2xl font-bold mb-4 text-red-50">Recipe Generator</h2>
            <div className="box flex flex-wrap items-center justify-center">
              <form onSubmit={handleSubmit} className="w-96">
                {/* Ingredients */}
                <div className="mb-4">
                  <label className="block text-gray-100 text-sm font-bold mb-2">Ingredients:</label>
                  <input
                    type="text"
                    value={ingredients}
                    onChange={handleIngredientsChange}
                    placeholder="example : meat,coconut oil"
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-500 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                {/* Cuisine */}
                <div className="mb-4">
                  <label className="block text-gray-100 text-sm font-bold mb-2">Cuisine:</label>
                  <select
                    value={cuisine}
                    onChange={handleCuisineChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-500 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Cuisine</option>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Chinese">Chinese</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                {/* Dietary Restrictions */}
                <div className="mb-4">
                  <label className="block text-gray-100 text-sm font-bold mb-2">Dietary Restrictions:</label>
                  <select
                    value={dietaryRestrictions}
                    onChange={handleDietaryRestrictionsChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-500 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Dietary Restrictions</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Gluten-Free">Gluten-Free</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                {/* Meal Type */}
                <div className="mb-6">
                  <label className="block text-gray-100 text-sm font-bold mb-2">Meal Type:</label>
                  <select
                    value={mealType}
                    onChange={handleMealTypeChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-500 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Meal Type</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                {/* Submit Button */}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Generate Recipes
                </button>
                <button
                  className="mt-4 ml-10 border pl-6 pr-6 p-2 rounded border-red-500 text-red-500 hover:text-gray-100 hover:bg-red-500"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </form>

              {/* Display Generated Recipes */}
              <div className="ml-24 relative -top-9 text-red-50">
                <h3 className="text-2xl -mt-2 font-bold mb-2">Generated Recipes:</h3>
                {generatedRecipes && (
                  <h3>{generatedRecipes}</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
