import React from "react";

const Repositories = ({repositories}) => (
    <div>
        {repositories.edges.map(({node}) => {
                return (
                    <div key={node.id}>
                        <span>{node.name}</span>
                    </div>
                );
            })
        }
    </div>
);

export default Repositories;