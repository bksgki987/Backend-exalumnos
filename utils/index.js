const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  // eslint-disable-next-line arrow-body-style
  comparePasswords: (userPassword, reqPassword) => {
    return bcrypt.compareSync(reqPassword, userPassword);
  },
  createToken: (user) => {
    const playload = {
      // eslint-disable-next-line no-underscore-dangle
      id: user._id,
      email: user.email,
      first_name: user.first_name,
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
    };

    try {
      const token = jwt.sign(playload, process.env.JWT_SECRET);
      return token;
    } catch (error) {
      return undefined;
    }
  },
};
