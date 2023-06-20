const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect("mongodb://localhost:27017/Movie", { useNewUrlParser: true }).then(() => {
    console.info("Database Connected");
    return server.listen({ port: 5000 });
    
}).then((res) => {
    console.log(`server running at ${res.url}`)
})