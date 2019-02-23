//https://myaccount.google.com/lesssecureapps - for security reasons enable it


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sarkarsayan198@gmail.com',
    pass: 'Iam@shayan1'
  }
});
var mailOptions = {
  from: 'sarkarsayan1@gmail.com',
  to: 'tkarmakar2711@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});