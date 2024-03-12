import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    getCustomerData();
  }, [customerId]);
  const getCustomerData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/getCustomerDetails/${customerId}`,
        {
          "content-type": "application/json",
        }
      );
      setCustomer(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex flex-rows justify-center items-center w-full h-screen">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
        <div className="flex flex-col items-center pb-10 mt-4">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="../public/Images/profile-picture-3.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {customer.first_name} {customer.last_name}
          </h5>
          <span className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {customer.city}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Company : {customer.company}
          </span>
        </div>
      </div>
    </section>
  );
};

export default CustomerDetails;
