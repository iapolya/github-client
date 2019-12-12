import {Button} from "antd";
import {Mutation} from "@apollo/react-components";
import React from "react";
import gql from "graphql-tag";

const FOLLOW_USER = gql`
mutation($id:ID!){
   followUser(input: {userId:$id} ) {
        user{
            id
            viewerIsFollowing
        }
  }
}`;

const UNFOLLOW_USER = gql`
mutation($id:ID!){
   unfollowUser(input: {userId:$id} ) {
        user{
            id
            viewerIsFollowing
        }
  }
}`;

const FollowUserButton = ({id, isFollowing}) => (
    <Mutation mutation={isFollowing ? UNFOLLOW_USER : FOLLOW_USER} variables={{id}}>
        {followUser => (
            <Button shape="round" type="primary" onClick={followUser}>
                {isFollowing ? 'Unfollow' : 'Follow'}
            </Button>
        )}
    </Mutation>
);

export default FollowUserButton;

