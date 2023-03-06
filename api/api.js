const mapRoutes = require('express-routes-mapper');

const app = require('express')();

const config = require('../config/index');
const database = require('../config/database');

app.use(require('cors')());
app.use(require('express').json());
app.use('/api/public', mapRoutes(config.publicRoutes, 'api/controllers/'));
app.use('/api/private', mapRoutes(config.privateRoutes, 'api/controllers/'));
app.use(require('../api/middlewares/errorHandlingMiddleware'));
const server = require('http').createServer(app);

const start = async () => {
    try {
        server.listen(config.port, async () => {
            console.log(`\nServer started on ${config.host}:${config.port}`);
        })

        database
            .authenticate()
            .then(() => console.log('Database successfully connected'));
    } catch (error) {
        console.log(`Fail to start the server:\n${error}`)
    }
}

start()
    .then();