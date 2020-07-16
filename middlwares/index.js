/* eslint-disable no-console */
const jwt = require('jsonwebtoken');

module.exports = {
  showDate: (req, res, next) => {
    const date = new Date();
    console.log(`🌎 Año de Petición: ${date.getFullYear()}`);
    next();
  },
  verifyToken: (req, res, next) => {
    try {
      const { authorization } = req.headers;
      // Bearer eyJhbGciOiJIUz9.eyJpZCI6IjVmMDN.jNTFkZWUw
      // authorization.split(' '); // -> [ "Bearer", "eyJhbG..." ]
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded);
      req.decoded = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Auth error', error });
    }
  },
// eslint-disable-next-line eol-last
};