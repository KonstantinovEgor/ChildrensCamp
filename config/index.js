const publicRoutes = require('./routes/publicRoutes');
const privateRoutes = require('./routes/privateRoutes');

require('dotenv')
    .config();

module.exports = {
    migrate: true,
    port: process.env.PORT,
    host: process.env.HOST,
    publicRoutes,
    privateRoutes
};