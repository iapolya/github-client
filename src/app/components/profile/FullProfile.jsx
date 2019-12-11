import React from "react";
import {Col, Row} from "antd";
import './profile.scss';
import Repositories from "./Repositories";
import ShortUserInfo from "./ShortUserInfo";

function FullProfile(props) {
    const { data } = props;
    return (
        <div>
            <Row type="flex" justify="center">
                <Col align="center" span={20}>
                    <ShortUserInfo user={data}/>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col align="center" span={20}>
                    <Repositories repositories={data.repositories} />
                </Col>
            </Row>
        </div>
    )
}

export default FullProfile;