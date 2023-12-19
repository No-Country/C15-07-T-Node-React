const { jwtSecret } = require('../../config');
const { loginUser } = require('./auth.controller');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    loginUser(email, password)
      .then((response) => {
        if (response) {
          console.log(response);
          const token = jwt.sign(
            {
              id: response.dataValues.id,
              email: response.dataValues.email,
              role: response.dataValues.role
            },
            jwtSecret
          );
          res.status(200).json({ message: 'Correct credentials', token });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    res.status(400).json({ message: 'Missing data' });
  }
};

module.exports = {
  login
};
