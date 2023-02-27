// import { Card } from "antd";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";

const { Meta } = Card;

const CardComponent = () => {
    return (
        // <div className="site-card-border-less-wrapper">
        //     <Card
        //         title="Card title"
        //         bordered={false}
        //         style={{
        //             width: 300,
        //         }}
        //     >
        //         <p>Card content</p>
        //         <p>Card content</p>
        //         <p>Card content</p>
        //     </Card>
        // </div>
        <Card
            hoverable
            style={{ width: 300 }}
            // cover={
            //     <img
            //         alt="example"
            //         src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            //     />
            // }
            actions={[
                <SettingOutlined key="setting" />,
                // <EditOutlined key="edit" />,
                // <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem deleniti ex obcaecati? Sint, ut aut."
            />
        </Card>
    );
};

export default CardComponent;
