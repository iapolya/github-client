import React from "react";
import {Card} from "antd";

const {Meta} = Card;

function ShortUserInfo() {
    return (
        <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Полина" description="login" />
            </Card>
        </div>
    )
}

export default ShortUserInfo;