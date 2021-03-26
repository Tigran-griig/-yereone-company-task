const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('../schema/schema');
// const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const PORT = 3007;
// mongoose.connect(`mongodb://localhost:27017/shop`,{ useUnifiedTopology: true ,useNewUrlParser: true } )

// Todo://Avelacnel MongoDb-um
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));





app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!');
});