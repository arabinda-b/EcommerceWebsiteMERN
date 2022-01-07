const express = require("express");
const {
  processPayment,
  sendStripApiKey,
} = require("../controllers/paymentController");
const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/payment/process").post(isAuthenticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripApiKey);

module.exports = router;
