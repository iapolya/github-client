import React from "react";
import {Button, Col, Icon, Row, Tabs} from "antd";
import './profile.scss';
import Repositories from "./Repositories";
import ShortUserInfo from "./ShortUserInfo";
import FollowUserButton from "./FollowUserButton";

const { TabPane } = Tabs;

function FullProfile(props) {
    const { data } = props;
    return (
        <div>
            <Row type="flex" justify="center">
                <Col align="center" span={20}>
                    <ShortUserInfo user={data}/>
                    <p>{data.bio}</p>
                    <Icon type="mail" style={{marginRight: '5px'}} />
                    <span>{data.email}</span>
                    <br/>
                    <FollowUserButton id={data.id} isFollowing={data.viewerIsFollowing} />
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col align="center" span={20}>
                    <h2>Repositories</h2>
                    <Repositories repositories={data.repositories} />
                </Col>
            </Row>
        </div>
    )
}

export default FullProfile;