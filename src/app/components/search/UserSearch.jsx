import React from "react";
import gql from "graphql-tag";
import {Query} from 'react-apollo';
import ShortUserInfo from "../profile/ShortUserInfo";

const userSearchQuery = gql`
query User($login:String!){
    user(login: $login) {
        login
        name
        avatarUrl
        bio
        email  } 
        }
`;

const UserSearchResult = ({login}) => (
    <Query query={userSearchQuery} variables={{login}}>
        {({data, loading}) => {
            console.log(data);
            return (loading ? <div>Loading ...</div> :
                data ? <ShortUserInfo user={data.user}/> :
                    <p>Nothing was found</p>);
        }
        }
    </Query>
);

export default UserSearchResult;