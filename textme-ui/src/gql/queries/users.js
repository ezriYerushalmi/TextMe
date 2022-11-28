import { gql} from '@apollo/client';

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



export const QUERY_GET_USER_SNAPSHOT = gql`
    query GetUserLandPage($getUserLandPage: ID!) {
        getUserLandPage(userId: $getUserLandPage) {
            user {
                id,
                name,
                lastName,
                phone,
                isConnected,
                lastSeen,
                avatarImage
            },
            contacts {
                id,
                name,
                lastName,
                phone,
                isConnected,
                lastSeen,
                avatarImage
            },
            chats {
                id,
                chatMemberIds,
                name,
                chatMemberIds,
                lastUpdatedDate,
                messages {
                    id,
                    writerId,
                    sendDate,
                    text
                }
            }
        }
    }
`;

export const MUTATION_UPDATE_MESSAGE = gql`
    mutation UpdateMsg($updateMsgInput: UpdateMessageInput) {
        updateMsg(input: $updateMsgInput) {
            id,
            text,
            chatId,
            sendDate,
            writerId
        }
    }
`;

