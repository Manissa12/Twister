const { createAccessToken, verifyAccessToken } = require('./auth');

// Créer un token d'accès pour un utilisateur
const user = { id: 1, username: 'john_doe' };
const token = createAccessToken(user);
console.log('Token:', token);

// Vérifier le token d'accès
const decodedToken = verifyAccessToken(token);
console.log('Decoded token:', decodedToken);