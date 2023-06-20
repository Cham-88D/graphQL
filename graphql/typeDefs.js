const { gql } = require("apollo-server");

module.exports = gql`
type Movie{
    title:String!
    year:Int!
    description:String!

}

input MovieInput{
    title:String!
    year:Int!
    description:String!

}

type Query{
    movie(ID:ID!):Movie!
    getMovie(amount:Int):[Movie]
}

type Mutation{
    createMovie(movieInput:MovieInput):Movie!
    deleteMovie(ID:ID!):Boolean
    editMovie(ID:ID!,movieInput:MovieInput):Boolean
}

`