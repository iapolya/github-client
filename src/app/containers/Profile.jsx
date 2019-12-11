import gql from "graphql-tag";
import React from "react";
import {Query} from 'react-apollo';
import FullProfile from "../components/profile/FullProfile";

const reposQuery = gql`
query Myrepositories($first:Int!){
    viewer {
        id
        isViewer
        viewerIsFollowing
        name
        login
        avatarUrl
        bio
        email   
        repositories(first: $first) {
            edges {
                node {
                    id
                    name
                    stargazers{
                        totalCount
                    }
                    viewerHasStarred
                    isPrivate
                }
            }
        }
    }
}
`;

function Profile() {
    return (
        <Query query={reposQuery} variables={{first: 10}}>
            {({data, loading}) => {
                if (loading) return <p>loading...</p>;
                return (
                    <FullProfile data={data.viewer}/>)
            }}
        </Query>
    );
}

export default Profile;