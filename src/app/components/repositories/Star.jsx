import {Icon} from "antd";
import React from "react";
import {Mutation} from "@apollo/react-components";
import gql from "graphql-tag";
import './repositories.scss';

const STAR_REPOSITORY = gql`
mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
        starrable {
            id
            viewerHasStarred
        }
    }
}`;

const REMOVE_STAR = gql`
mutation RemoveStar($id:ID!){
    removeStar(input:{starrableId:$id}){
        starrable{
            id
            viewerHasStarred
        }
    }
}`;

const Star = ({id, hasStarred, stars, setStars}) => (
    <Mutation mutation={hasStarred ? REMOVE_STAR : STAR_REPOSITORY} variables={{id}}>
        {starRepository => (
            <Icon type="star" className="star-icon" onClick={event => {
                event.preventDefault();
                setStars(hasStarred ? --stars : ++stars);
                starRepository();
            }} theme={hasStarred ? 'twoTone' : ''}/>
        )}
    </Mutation>
);

export default Star;
