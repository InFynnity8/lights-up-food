var nodemailer = require('nodemailer');


const main = async () => {

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,  //465
        secure: false, 
        auth: {
          user: 'sackeyemmanuelfynn@gmail.com',
          pass: '@Daddybosco3'
        }
      });

      const mailOptions = {
        from: {
          name: 'daddybosco3',
          address: 'sackeyemmanuelfynn@gmail.com'
        },
        to: 'daddybosco3@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };

      const info = await transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        }); 

}

main();