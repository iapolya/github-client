import gql from "graphql-tag";
import React from "react";
import {Query} from 'react-apollo';
import FullProfile from "../components/profile/FullProfile";
import {useParams} from "react-router-dom";
import {Col, Row, Spin} from "antd";

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
          owner {
            login
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
    let {login} = useParams();

    return (
        <Query query={profileQuery} variables={{login: login}}>
            {({data, loading}) => {
                if (loading) return (
                    <Row type="flex" justify="center">
                        <Col align="center">
                            <Spin style={{marginTop: 20}} size="large" />
                        </Col>
                    </Row>
                );
                return (
                    <FullProfile data={data.user}/>)
            }}
        </Query>
    );
}

export default (Profile);