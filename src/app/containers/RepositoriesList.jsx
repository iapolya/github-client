import React from "react";
import { connect } from 'react-redux';

function RepositoriesList(props) {
    console.log(props);
    const { reposList } = props;

    return (
        <div>
            {reposList.map((repo) =>
                <ul>
                    <li>id: {repo.id}</li>
                    <li>login: {repo.login}</li>
                </ul>
            )}
        </div>
    )
}

export default connect(state => ({
    users: state.auth
}))(RepositoriesList)