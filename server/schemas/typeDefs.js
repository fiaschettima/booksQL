const { gql } = require("apollo-server-express");
const typeDefs = gql`
    type User {
        _id : ID!
        username : String
        email : String
        password : String
        bookCount: Int
        savedBooks : [Book]
    }

    type Book {
        
    }
`;

module.exports = typeDefs;