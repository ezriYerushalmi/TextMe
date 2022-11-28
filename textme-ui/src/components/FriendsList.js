import {useLazyQuery, useQuery} from "@apollo/client";
import {QUERY_ALL_USERS, QUERY_GET_USER} from "../gql/queries/users";
import {useState} from "react";

function FriendsList(props) {
    const {data: usersData, loading, error} = useQuery(QUERY_ALL_USERS);
    const [fetchUser, {data: userDetails, error: UserError}] =
        useLazyQuery(QUERY_GET_USER);
    const [inputValue, setInputValue] = useState("");

    if (loading) {
        <h1>Data is Loading</h1>;
    }

    if (error) {
        console.log(error);
    }

    return (
        <div>
            {usersData &&
                usersData.users.map((user) => {
                    return (
                        <div>
                            <h2> Name: {user.name}</h2>
                            <h2> lastName: {user.lastName}</h2>
                            <h2> phone: {user.phone}</h2>
                        </div>
                    );
                })}

            <div>
                <input
                    type="text"
                    placeholder="put ChatInfo Id"
                    onChange={(event) => {
                        setInputValue(event.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        fetchUser({
                            variables: {
                                userId: inputValue,
                            },
                        });
                    }}
                >
                    {" "}
                    fetch Data
                </button>
            </div>

            <div>
                {userDetails && userDetails.user && (
                    <div>
                        <h2> Name: {userDetails.user.name}</h2>
                        <h2> lastName: {userDetails.user.lastName}</h2>
                        <h2> phone: {userDetails.user.phone}</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FriendsList;
