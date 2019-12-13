import gql from "graphql-tag";
import React from "react";
import {Query} from 'react-apollo';
import FullProfile from "../components/profile/FullProfile"
import {Col, Row, Spin} from "antd";

const myProfileQuery = gql`
query MyProfile($first:Int!){
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
                    owner {
                        login
                    }
                    viewerHasStarred
                    isPrivate
                }
            }
        }
    }
}`;

function MyProfile() {
    return (
        <Query query={myProfileQuery} variables={{first: 10}}>
            {({data, loading}) => {
                if (loading) return (
                    <Row type="flex" justify="center">
                        <Col align="center">
                            <Spin style={{marginTop: 20}} size="large" />
                        </Col>
                    </Row>
                );
                return (
                    <FullProfile data={data.viewer}/>)
            }}
        </Query>
    );
}

export default MyProfile;