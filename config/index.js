require('dotenv')
    .config();

module.exports = {
    migrate: true,
    port: process.env.PORT,
    host: process.env.HOST,
};