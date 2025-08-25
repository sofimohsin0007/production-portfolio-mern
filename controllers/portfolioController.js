const nodemailer = require("nodemailer");

// transport
const transporter = nodemailer.createTransport({
  service: "gmail", // you can also use "Outlook", "Yahoo", etc.
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your app password (not regular password!)
  },
});

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    // email matter
    await transporter.sendMail({
      to: "sofi.mohsin8@gmail.com", // receiver
      from: process.env.EMAIL_USER, // sender
      subject: "Regarding Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    });

    return res.status(200).send({
      success: true,
      message: "Your Message Sent Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
