import React, {useState} from "react";
import {Button, Col, Icon, Input, Row} from "antd";
import github from "../static/images/github.png";
import "./styles.scss";
import {Redirect} from "react-router-dom";

function Login() {
    let [githubToken, setGithubToken] = useState('');
    let [token] = useState(localStorage.getItem('token'));

    return token ? (
        <Redirect to='/search' />
    ) : (
        <div>
            <Row type="flex" justify="center">
                <Col align="center" span={6}>
                    <img src={github} alt="" className="mb-10 img"/>
                    <Input
                        className="mb-10"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Token"
                        value={githubToken}
                        onChange={(event) => setGithubToken(event.target.value)}
                    />
                    <Button
                        type="dashed"
                        block
                        htmlType="submit"
                        onClick={login}
                    >
                        Log in
                    </Button>
                </Col>
            </Row>
        </div>
    );

    function login() {
        localStorage.setItem('token', githubToken);
        window.location.reload(true);
    }
}

export default Login;