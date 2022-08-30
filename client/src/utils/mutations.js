import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query singleUser {
        user {
            _id
            username 
            email
            password
            bookCount
            savedBooks {
                _id bookId
                authors 
                description
                title 
                link
                image
            }
        }
    }
`