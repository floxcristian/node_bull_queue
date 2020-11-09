const express = require("express");
const router = express.Router();
const { sendEmail } = require("./controller");

router.post("/send-email", sendEmail);

module.exports = (app) => {
  app.use("/email", router);
};
