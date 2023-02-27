import Link from "next/link";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";

const { Meta } = Card;

const CardComponent = ({ name, logo, link, text, id }) => {
    return (
        <>
            <Link href={link}>
                <Card
                    hoverable
                    style={{
                        width: 300,
                        minHeight: 250,
                    }}
                    actions={[
                        <EditOutlined key="edit" />,
                        <DeleteOutlined key="delete" />,
                    ]}
                >
                    <Meta
                        // avatar={<Avatar src={logo} size="large" />}
                        avatar={
                            <Avatar
                                src={logo}
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        }
                        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                        title={name}
                        description={text}
                        style={{ minHeight: 150 }}
                    />
                </Card>
            </Link>
        </>
    );
};

export default CardComponent;
