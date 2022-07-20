const express = require('express')

const {port} = require('./config/env')

const { initializeDatabase} = require('./config/database')
const routs = require('./routes')

const app = express()

app.use(routs)

initializeDatabase()
    .then(() => {
        app.listen(port, () => console.log(`App is listening on port ${port}`));
    })
    .catch((err) => {
        console.log('Cannot connect to db:', err)
    })