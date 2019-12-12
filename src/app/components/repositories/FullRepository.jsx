import React from "react";

function FullRepository(props) {
    const { repository } = props;
    return (
        <div>
            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
        </div>
    )
}

export default FullRepository;