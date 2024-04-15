const nodemailer = require('nodemailer');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

require("dotenv").config();
const app = express();
app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get("/", (req, res) => {
  res.send('hello');
})

app.post("/contact", (req, res) => {
  const contact = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }

  const main = async (contact) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.APP_PASSWORD
      }
    });

    const mailOptions = {
      from: {
        name: contact.name,
        address: contact.email
      },
      to: 'sackeyemmanuelfynn@gmail.com',
      subject: 'Lights Up Orders',
      text: contact.message,
      html: ''
    };

    const info = await transporter.sendMail(mailOptions, (error, information) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + information.response);
          res.send("Thank your for reaching us " + contact.name);
        }
      }); 

}

  main(contact)
})
 
app.post("/order", (req, res) => {

  const recipient = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    location: req.body.location
  }

  const cart =  { 
    budget: req.body.quantity[0], 
    oneMan: req.body.quantity[1], 
    hungry: req.body.quantity[2], 
    satisfactory: req.body.quantity[3], 
    familyPack: req.body.quantity[4]
  };

  const cost = {
    dishAmount: req.body.totalAmount,
    okro: req.body.okro,
    beans: req.body.beans,
    grossAmount: req.body.grossAmount
  }


  const main = async (recipient, cart, cost) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.APP_PASSWORD

      }
    });

    const mailOptions = {
      from: {
        name: recipient.name,
        address: 'noreply'
      },
      to: 'sackeyemmanuelfynn@gmail.com',
      subject: 'Lights Up Orders',
      text: 'That was easy!',
      html: '<b style="color:blue;">Yes an html</b>'
    };

    const info = await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 

}

  main(recipient, cart, cost)

  console.log(recipient);
  console.log(cart);
  console.log(cost);
  res.send("received successfully")
})

app.listen(5000, () => {
  console.log("server started on port 5000")
});
