const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const PORT = 3007;
mongoose.connect("mongodb+srv://Tigran:qwer1234@cluster0.gfxcd.azure.mongodb.net/shop?retryWrites=true&w=majority",
    { useUnifiedTopology: true ,useNewUrlParser: true } )

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

const dbConnection = mongoose.connection;

dbConnection.on('error', err => console.log('error'+'  ' +err))
dbConnection.once('open', () => console.log('db to connected'))

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!');
});