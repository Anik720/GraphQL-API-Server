// auth.js
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secret_key'; 
const payload = { userId: 'user_id' };
const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1y' });
console.log(token);

function authenticate(token) {
  if (token) {
    try {
      const decoded = jwt.verify(token.replace('Bearer ', ''), SECRET_KEY);
      return decoded; // Return user data if token is valid
    } catch (err) {
      throw new Error('Invalid token');
    }
  }
  throw new Error('No token provided');
}

module.exports = { authenticate };
