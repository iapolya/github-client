import React from "react";
import {Button, Col, Icon, Input, Row} from "antd";

function Login() {
    return (
        <div>
            <Row type="flex" justify="center">
                <Col align="center" span={6}>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Token"
                    />
                    <Button type="dashed" block htmlType="submit">
                        Log in
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Login;