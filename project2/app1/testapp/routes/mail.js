var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  console.log('got');
  var mail=req.query.recipent;
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rohitagarwal17800@gmail.com',
        pass: '8013789437'
      }
    });
    var mailOptions = {
      from: 'rohitagarwal17800@gmail.com',
      to:     mail,
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
        transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        res.render('index', { title: 'Workshop' });
        
        console.log('Email sent: ' + info.response);
      }
    })

  });
module.exports=router;