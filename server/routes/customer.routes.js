const { Router } = require("express");
const router = Router();
const {
  searchWithPagination,
  getCustomerDetails,
  uniqueCitiesWithCount,
} = require("../controllers/search.controller");

router.route("/search").get(searchWithPagination);

router.route("/getCustomerDetails/:customerId").get(getCustomerDetails);

router.route("/uniqueCityWithCount").get(uniqueCitiesWithCount);

module.exports = router;
