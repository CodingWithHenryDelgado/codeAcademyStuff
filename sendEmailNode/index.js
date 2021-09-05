const nodemailer = require('nodemailer');

const message = {
    from: 'random@gmail.com',
    to: 'to@email.com',
    subject: 'Design Your Model S | Tesla',
    html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>'
};

transporter.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});