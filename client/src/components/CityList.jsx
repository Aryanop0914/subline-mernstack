import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CityList = () => {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    getCityData();
  }, []);

  const getCityData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/uniqueCityWithCount",
        { "content-type": "application/json" }
      );
      setCityData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm w-full text-white bg-white rounded-lg shadow p-6  dark:bg-gray-800 dark:border-gray-700">
        <Link to="/" className="absolute top-8 left-8">
          <svg
            className="w-6 h-6 text-gray-500 dark:text-gray-400 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <h1 className="text-3xl font-semibold mb-4">City List</h1>
        <ul>
          <li className="flex justify-between py-2">
            <span className="text-lg">Cities</span>
            <span className="text-lg">Unique Count</span>
          </li>
          {cityData.map((city, index) => (
            <li key={index} className="flex justify-between py-2 border-b">
              <span className="text-lg">{city._id}</span>
              <span className="text-lg">{city.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CityList;
