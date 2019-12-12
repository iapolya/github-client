import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import {Button, PageHeader} from "antd";
import github from "./static/images/github.png";
import {Redirect, useHistory} from "react-router-dom";

function App({ children }) {
    let history = useHistory();
  return (
    <div>
        <PageHeader
            style={{
                border: '1px solid rgb(235, 237, 240)',
            }}
            title={
                <img height="40px" src={github} alt="logo"/>
            }
            subTitle="simple client"
            extra={[
                <Button key="3" shape="circle" icon="search" />,
                <Button key="2" shape="round" icon="user">My profile</Button>,
                <Button onClick={logOut} key="1" shape="round" type="primary" icon="logout">
                    Logout
                </Button>,
            ]}
        />
        <div style={Layout}>
            {children}
        </div>
    </div>
  );

    function logOut() {
        localStorage.removeItem('token');
        history.push('/login');
    }
}

export default App;

const Layout = {
    margin: '50px'
};
