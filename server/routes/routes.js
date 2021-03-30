const express = require("express");
const router = express.Router();
const userSchema = require("../models/SignupModels");
const bcrypt = require("bcrypt");
const querySchema = require("../models/QueryModel");
const feedbackSchema = require("../models/FeedbackModel");
const mail = require("../libs/mail");
const users = userSchema;

router.post("/signup", async (request, response) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(request.body.password, saltPassword);
  // console.log(securePassword);
  const signedUpUser = new userSchema({
    fullName: request.body.fullName,
    age: request.body.age,
    email: request.body.email,
    password: securePassword,
    receive: request.body.receive,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.send({ success: "User signed up successfully" });
    })
    .catch((error) => {
      response.send({ error: "Email address already exists!" });
    });
});

// router.post("/signin", async (request, response) => {
//   const email = request.body.email;
//   const password = request.body.password;
//   users.findOne({ email }).then(user => {
//     if (!user) {
//       return response.status(409).json({ emailnotFound: "Email not found" });
//     }
//     bcrypt.compare(password, user.password).
//   })
// });
router.post("/query", (request, response) => {
  const queryData = new querySchema({
    email: request.body.email,
    category: request.body.category,
    age: request.body.age,
    query: request.body.query,
  });
  // var queryRegex = RegExp(".*" + queryData.query + ".*");

  feedbackSchema.find(
    { $text: { $search: queryData.query } },
    (error, data) => {
      if (error) {
        queryData
          .save()
          .then((data) => response.send({ success: "Query sent to the admin" }))
          .catch((error) => response.send({ error: "An error occurred!" }));
      } else if (data) {
        console.log(data);
        mail(queryData.email, "Reply to your medical query", data[0].feedback)
          .then((info) => {
            console.info(`Email sent ${info.response}`);
            response.send({
              message: "Email sent to the mail id. Please check",
            });
          })
          .catch((error) => {
            console.log(error);
            response.send(500);
          });
      }
    }
  );
});

router.get("/queries/all", (request, response) => {
  querySchema.find({}, (error, data) => {
    if (error) {
      console.error(error);
      response.send(500);
    }
    response.send(data);
  });
});

router.post("/email", (request, response) => {
  var feedback = request.body.feedback;
  var email = request.body.email;
  var query = request.body.query;
  var feedbackData = new feedbackSchema({
    query: query,
    feedback: feedback,
  });
  feedbackData.save().then((res) => console.log(res));
  mail(email, "Reply to your medical query", feedback)
    .then((info) => {
      console.info(`Email sent ${info.response}`);
      response.send({ message: "Email sent to the mail id. Please check" });
      querySchema
        .deleteOne({ query: query, email: email })
        .then((res) => console.log(res));
    })
    .catch((error) => {
      console.log(error);
      response.send(500);
    });
});
module.exports = router;
