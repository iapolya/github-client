import React from "react";
import {Button, Col, Row, Tabs} from "antd";
import './profile.scss';
import Repositories from "./Repositories";
import ShortUserInfo from "./ShortUserInfo";

const { TabPane } = Tabs;

function FullProfile(props) {
    const { data } = props;
    return (
        <div>
            <Row type="flex" justify="center">
                <Col align="center" span={20}>
                    <ShortUserInfo user={data}/>
                    <Button shape="round" type="primary">
                        Follow
                    </Button>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col align="center" span={20}>
                    <Repositories repositories={data.repositories} login={data.login} />
                </Col>
            </Row>
        </div>
    )
}

export default FullProfile;