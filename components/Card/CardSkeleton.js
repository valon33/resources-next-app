import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Avatar, Skeleton } from "antd";
const { Meta } = Card;

const CardSkeleton = () => {
    const [loading, setLoading] = useState(true);

    return (
        <Card
            style={{ width: 300, marginTop: 16 }}
            actions={[<DeleteOutlined key="delete" />]}
        >
            <Skeleton loading={loading} avatar active>
                <Meta
                    avatar={
                        <Avatar src="https://joesch.moe/api/v1/random?key=2" />
                    }
                    title="Card title"
                    description="This is the description"
                />
            </Skeleton>
        </Card>
    );
};

export default CardSkeleton;
