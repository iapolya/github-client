import React from "react";
import gql from "graphql-tag";
import {Query} from 'react-apollo';
import './search.scss';
import {Avatar, Card} from "antd";
import {Link} from "react-router-dom";

const { Meta } = Card;

const userSearchQuery = gql`
query User($login:String!){
    user(login: $login) {
        login
        name
        avatarUrl  
    } 
}`;

const UserSearchResult = ({login}) => (
    <Query query={userSearchQuery} variables={{login}}>
        {
            ({data, loading}) => {
            return (loading ? <div>Loading ...</div> :
                data ?
                    <Link to={`/profile/${data.user.login}`}>
                        <Card style={{ width: 300, marginTop: 16 }}>
                            <Meta
                                avatar={
                                    <Avatar src={data.user.avatarUrl} />
                                }
                                title={data.user.login}
                                description={data.user.name}
                            />
                        </Card>
                    </Link>
                    :
                    <p>Nothing was found</p>);
            }
        }
    </Query>
);

export default UserSearchResult;