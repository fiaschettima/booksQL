import { gql } from '@apollo/client';

export const NEW_USER = gql `
    mutation newUser($username : String!, $email: String!, $password: String!){
        newUser(username: $username, email: $email, password: $password){token}
            user{
                _id
                username
                email
                bookCount
                savedBooks {
                    _id
                    bookId
                    authors
                    description
                    title
                    link
                    image
                }
            }
    }
`;

export const USER_LOGIN = gql`
    mutation login(email:String!, password : String!){
        login(email: $email, password: $password){token}
            user{
                _id
                username
                email
            }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook(input: savedBook!){
        saveBook(input: $input){
            _id
            username 
            email
            bookCount
            savedBooks{
                _id
                authors
                description
                bookId
                image
                Link
                title
            }
        }
    }
`;