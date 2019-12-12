import gql from "graphql-tag";
import React from "react";
import {Query} from 'react-apollo';
import FullProfile from "../components/profile/FullProfile";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

const profileQuery = gql`
query UserProfile($login:String!){
  user(login: $login) {
    id
    isViewer
    viewerIsFollowing
    avatarUrl
    bio
    email
    login
    name
    repositories(first: 10) {
      edges {
        node {
          id
          name
          stargazers {
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

function Profile(props) {
    let {login} = useParams();

    return (
        <Query query={profileQuery} variables={{login: login}}>
            {({data, loading}) => {
                if (loading) return <p>loading...</p>;
                return (
                    <FullProfile data={data.user}/>)
            }}
        </Query>
    );
}

export default connect(
    state => ({
        user: state.auth.user
    })
)
(Profile);