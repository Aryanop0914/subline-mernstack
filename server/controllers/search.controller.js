const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");
const Customer = require("../models/customer.models");
const { isValidObjectId } = require("mongoose");
const searchWithPagination = async (req, res) => {
  try {
    const { first_name, last_name, city, page, limit } = req.query;
    if (page < 0) {
      throw new ApiError(400, "Page number should be greater than 0");
    }
    const query = {};
    if (first_name) query.first_name = first_name;
    if (last_name) query.last_name = last_name;
    if (city) query.city = city;
    const customers = await Customer.find(query)
      .skip((page - 1) * limit)
      .limit(limit);
    const count = await Customer.countDocuments(query);
    res
      .status(200)
      .json(new ApiResponse(200, { customers, count }, "Search Applied"));
  } catch (error) {
    console.error(error);
    res
      .status(error.statusCode)
      .json(new ApiResponse(error.statusCode, null, error.error_message));
  }
};

const getCustomerDetails = async (req, res) => {
  try {
    const { customerId } = req.params;
    if (!isValidObjectId(customerId)) {
      throw new ApiError(500, "Customer Id is not valid!!");
    }
    const customerDetails = await Customer.findById(customerId);
    if (!customerDetails) {
      throw new ApiError(401, "Customer Details Unavailable");
    }
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          customerDetails,
          "Customer Details Fetch Successfully"
        )
      );
  } catch (error) {
    res
      .status(error.statusCode)
      .json(new ApiResponse(error.statusCode, null, error.error_message));
  }
};

const uniqueCitiesWithCount = async (req, res) => {
  try {
    const uniqueCities = await Customer.aggregate([
      {
        $group: {
          _id: "$city",
          customer_details: {
            $push: {
              _id: "$_id",
              last_name: "$last_name",
              company: "$company",
              first_name: "$first_name",
            },
          },
          count: { $sum: 1 },
        },
      },
    ]);
    if (!uniqueCities) {
      throw new ApiError(401, "Citys Not found Unavailable");
    }
    res
      .status(200)
      .json(new ApiResponse(200, uniqueCities, "Details Fetch Successfully"));
  } catch (error) {
    res
      .status(error.statusCode)
      .json(new ApiResponse(error.statusCode, null, error.error_message));
  }
};

module.exports = {
  searchWithPagination,
  getCustomerDetails,
  uniqueCitiesWithCount,
};
