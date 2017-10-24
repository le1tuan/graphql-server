const express = require('express')

const bodyParser = require('body-parser')

const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

const connectMongo = require('./connect-db');

const schema = require('./schema/index')

var app = express()



const start = async () => {
    const mongo = await connectMongo();
    app.use('/graphql', bodyParser.json(), graphqlExpress({
        context: {
            mongo
        },
        schema
    }));

    app.use('/graphiql', graphiqlExpress({
        endpointURL: '/graphql',
    }));

    const PORT = 3000

    app.listen(PORT, () => {
        console.log('runnn')
    })
}
start();