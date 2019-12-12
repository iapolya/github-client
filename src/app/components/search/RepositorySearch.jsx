import Repositories from "../profile/Repositories";
import React from "react";
import {Query} from 'react-apollo';
import gql from "graphql-tag";

const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  query Reps($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            viewerHasStarred
            url
            isPrivate
            isArchived
            owner {
            login
            avatarUrl
          }
          }
        }
      }
    }
  }
`;

const RepositorySearch = ({query}) => (
    <Query query={GET_REPOSITORIES_OF_ORGANIZATION} variables={{query}}>
        {({data, loading}) => {
            console.log(data);
            return (loading ? <div>Loading ...</div> :
                data ? <div><Repositories repositories={data.search}/></div> :
                    <p>Nothing was found</p>);
        }
        }
    </Query>
);

export default RepositorySearch;
