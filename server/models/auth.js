const jwt = require('jsonwebtoken');

// Clé secrète pour les tokens
const ACCESS_TOKEN_SECRET = 'your-access-token-secret';

// Création d'un token de connexion
function createAccessToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}

// Vérification d'un token de connexion
function verifyAccessToken(token) {
  return jwt.verify(token, ACCESS_TOKEN_SECRET);
}

module.exports = {
  createAccessToken,
  verifyAccessToken,
};
