import React from "react";
import { connect } from 'react-redux';

function RepositoriesList({reposList}) {
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

const mapStateToProps = state => {
    return { reposList: state.auth };
};
export default connect(mapStateToProps
)(RepositoriesList);