import { gql } from '@apollo/client';

export const NEW_USER = gql `
    mutation newUser($username : String!, $email: String!, $password: String!){
        newUser(username: $username, email: $email, password: $password){token
            user{
                _id
                username
                email
                bookCount
                savedBooks {
                  
                    bookId
                    authors
                    description
                    title
                    Link
                    image
                }
            }
        }
    }
`;

export const USER_LOGIN = gql`
    mutation login($email:String!, $password : String!){
        login(email: $email, password: $password){token
            user{
                _id
                username
                email
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: saveBook!){
        saveBook(input: $input){
            _id
            username 
            email
            bookCount
            savedBooks{
       
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

export const DELETE_BOOK = gql`
    mutation deleteBook($bookId: ID!){
        deleteBook(bookId: $bookId){
            _id
            username 
            email
            bookCount
            savedBooks{
        
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