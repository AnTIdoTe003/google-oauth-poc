const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");
const client = new OAuth2Client(
  "810546057582-dekmu2djvt1n09fom490vbl89buj1n6i.apps.googleusercontent.com"
);

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, "GoogleOAuthPoc", {
    expiresIn: "24h",
  });
};

exports.googleLogin = async (req, res) => {
  console.log(req);
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:
        "810546057582-dekmu2djvt1n09fom490vbl89buj1n6i.apps.googleusercontent.com",
    });

    const { email, name, sub: googleId } = ticket.getPayload();

    // checking user exits or not if not then create one
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, name, googleId });
      await user.save();
    }
    // also check if google id exists or not
    if (!user.googleId) {
      user.googleId = googleId;
      await user.save();
    }

    res.json({
      success: true,
      message: "token generated",
      token: generateToken(user),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
