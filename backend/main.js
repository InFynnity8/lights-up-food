const nodemailer = require('nodemailer');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get("/", (req, res) => {
  res.send('hello');
})

app.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  console.log(email)
  res.send("Thank your for reaching onto us " + name)
})
 
app.post("/order", (req, res) => {
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const location = req.body.location;
  const quantity = req.body.quantity;
  const totalAmount = req.body.totalAmount;
  console.log(name , phoneNumber, location, quantity, totalAmount);
  res.send("received successfully")
})

app.listen(5000, () => {
  console.log("server started on port 5000")
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
