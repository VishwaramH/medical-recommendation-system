const express = require("express");
const router = express.Router();
const signupSchema = require("../models/SignupModels");

router.post("/signup", (request, response) => {
  const signedUpUser = new signupSchema({
    fullName: request.body.fullName,
    email: request.body.email,
    password: request.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
