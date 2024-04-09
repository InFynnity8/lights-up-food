const nodemailer = require('nodemailer');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.post("/", (req, res) => {

})

app.post("/failure", (req, res) => {
  res.redirect("/")
})

app.post("/success", (req, res) => {
  res.redirect("/")
})

app.listen(3000, () => {
  console.log("server started on port 3000")
});










const main = async () => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
          user: 'sackeyemmanuelfynn@gmail.com',
          pass: 'pagazndczdviclnc'
        }
      });

      const mailOptions = {
        from: {
          name: 'Fynn',
          address: 'sackeyemmanuelfynn@gmail.com'
        },
        to: 'daddybosco3@gmail.com',
        subject: 'Lights Up Orders',
        text: 'That was easy!'
      };

      const info = await transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        }); 

}

main();