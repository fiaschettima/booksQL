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
   
        authors : [String]
        description : String
        bookId : String
        image : String
        Link : String
        title : String
    }
    input saveBook { 
        bookId : String
        authors : [String]
        description : String
        title: String
        link:String
        image : String
    }
    type Auth { 
        token : ID!
        user: User
    }
    type Query {
        singleUser: User
    }
    type Mutation {
        newUser (username: String!, email: String!, password: String!): Auth
        login(email:String!, password : String!): Auth
        saveBook(input: saveBook!): User
        deleteBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;