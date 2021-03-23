const express = require("express");
const router = express.Router();
const signupSchema = require("../models/SignupModels");
const bcrypt = require("bcrypt");

router.post("/signup", async (request, response) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(request.body.password, saltPassword);
  // console.log(securePassword);
  const signedUpUser = new signupSchema({
    fullName: request.body.fullName,
    age: request.body.age,
    email: request.body.email,
    password: securePassword,
    receive: request.body.receive,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.send({success: "User signed up successfully"});
    })
    .catch((error) => {
      response.send({error: "Email address already exists!"})
    });
});

module.exports = router;
