import React from 'react';
import Sidebar from "./Sidebar";
import ChatMessages from "./ChatMessages";
import "./TextMe.css"

import useQueryParams from "../customHooks/useQueryParams";
import {QUERY_GET_USER_SNAPSHOT} from "../gql/queries/users";
import {useQuery} from "@apollo/client";

const TextMe = () => {
    const queryParam = useQueryParams();
    const [userDetails, setUserDetails] = React.useState(null);
    const [selectedChatId, setSelectedChatId] = React.useState(null);
    const userId = queryParam.get("userId");

    const {data: landPage, loading, error} = useQuery(QUERY_GET_USER_SNAPSHOT, {variables: {getUserLandPage: userId}});
    React.useEffect(() => {
            if (landPage) {
                setUserDetails(landPage.getUserLandPage);
                document.title = `${landPage.getUserLandPage.user.name}  ${landPage.getUserLandPage.user.lastName}`;
            }
        },
        [landPage]
    );

    if (loading) return <p>loading</p>

    if (error) {
        return alert('User not found');
    }

    return (
        <>
            {userDetails &&
                <div className="app">
                    <div className="app-body">
                        <Sidebar user={userDetails.user} chats={userDetails.chats} contacts={userDetails.contacts}
                                 selectedChatId={selectedChatId} setSelectedChatId={setSelectedChatId}/>
                        <ChatMessages user={userDetails.user} selectedChatId={selectedChatId}></ChatMessages>
                    </div>
                </div>
            }
        </>
    )

}


export default TextMe;
