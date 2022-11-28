import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            name,
            lastName,
            phone
        }
    }
`;


export const QUERY_GET_USER = gql`
    query GetUser($userId: ID!) {
        user(id: $userId) {
            name,
            lastName,
            phone
        }
    }
`;