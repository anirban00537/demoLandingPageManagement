const express = require("express");

const customerContact = require("../controller/customerContact.js");
const router = express.Router();
router.get("/", customerContact.getCustomerContactContent);

router.post("/", customerContact.createCustomerContactContent);

module.exports = router;
