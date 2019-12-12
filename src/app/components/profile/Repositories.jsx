import React from "react";
import './profile.scss';
import {Card, Icon} from "antd";
import {Link} from "react-router-dom";
import Star from "../repositories/Star";

const Repositories = ({repositories}) => (
    <div className="repositories">
        <h2>Repositories</h2>
        {repositories.edges.map(({node}) => {
            console.log(node);
                return (
                    <Card key={node.id}>
                        <Icon type={node.isPrivate ? 'lock' : 'unlock'} theme="twoTone" />
                        <Link to={`/repository/${node.owner.login}/${node.name}`}>
                            <span className="repository-name">{node.name}</span>
                        </Link>
                        <Star id={node.id} hasStarred={node.viewerHasStarred} />
                    </Card>
                );
            })
        }
    </div>
);

export default Repositories;