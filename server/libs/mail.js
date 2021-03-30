const nodemailer = require("nodemailer");

const sendMail = (receiver, subject, query) => {
  console.log(receiver, subject, query);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "referraltestapp@gmail.com",
      pass: "referral5$",
    },
  });

  var mailOptions = {
    from: "referraltestapp@gmail.com",
    to: receiver,
    subject: subject,
    html: query,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendMail;
