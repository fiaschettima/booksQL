import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    {
        singleUser {
            _id
            username 
            email
            password
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
`