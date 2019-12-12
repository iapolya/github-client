const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  query Reps($quer: String!) {
    search(query: $quer, type: REPOSITORY, first: 10) {
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