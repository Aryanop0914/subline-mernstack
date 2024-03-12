import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState({
    first_name: "",
    last_name: "",
    city: "",
    limit: 5,
  });
  const [customerDetails, setCustomerDetails] = useState([]);
  useEffect(() => {
    getUserData();
  }, [page]);
  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/search", {
        params: { ...search, page },
        headers: { "content-type": "application/json" },
      });
      setCustomerDetails(response.data.data.customers);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = () => {
    setPage(1);
    getUserData();
  };
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 class="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-6xl dark:text-white">
        Customer Details
      </h1>
      <p class="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Search With Pagination
      </p>
      <div className="flex items-center mx-auto w-full p-12 mt-6">
        <div className="relative w-full flex flex-row">
          <input
            type="text"
            id="firstName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
            placeholder="First Name"
            onChange={(e) => {
              setSearch({ ...search, first_name: e.target.value });
            }}
            required
          />
          <input
            type="text"
            id="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
            placeholder="Last Name"
            onChange={(e) => {
              setSearch({ ...search, last_name: e.target.value });
            }}
            required
          />
          <input
            type="text"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
            placeholder="City"
            onChange={(e) => {
              setSearch({ ...search, city: e.target.value });
            }}
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            handleSubmit();
          }}
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          Search
        </button>
      </div>
      <div className="flex justify-center mx-auto w-full">
        <Link
          to={"/uniqueCities"}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Unique Cities With Count
        </Link>
      </div>
      <div className="w-full p-12">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  First name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last name
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  Company
                </th>
                <th scope="col" className="px-6 py-3">
                  View Profile
                </th>
              </tr>
            </thead>
            <tbody>
              {customerDetails.map((customer) => (
                <tr
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  key={customer._id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {customer.first_name}
                  </th>
                  <td className="px-6 py-4">{customer.last_name}</td>
                  <td className="px-6 py-4">{customer.city}</td>
                  <td className="px-6 py-4">{customer.company}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/customerDetails/${customer._id}`}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li
            onClick={() => {
              setPage((prev) => Math.max(prev - 1, 1));
            }}
          >
            <p className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Previous
            </p>
          </li>
          {[1, 2, 3, 4, 5].map((pageNumber) => (
            <li
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`${
                page === pageNumber
                  ? "bg-gray-700 text-white"
                  : "text-white bg-gray-800"
              } border border-gray-700 hover:bg-gray-700 hover:text-white`}
            >
              <p className="flex items-center justify-center px-4 h-10 leading-tight">
                {pageNumber}
              </p>
            </li>
          ))}
          <li
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          >
            <p className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
