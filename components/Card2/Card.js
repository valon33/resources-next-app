import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Card } from "antd";
import { EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Skeleton, Switch } from "antd";
import CardLogo from "./CardLogo";
import CardTitle from "./CardTitle";
import CardText from "./CardText";
import { FloatButton } from "antd";

const { Meta } = Card;

const CardComponent = ({ name, logo, link, text, id }) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { data: session, status } = useSession();

    const removeResource = async (id) => {
        try {
            const response = await fetch(`/api/delete/${id}`, {
                method: "Delete",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                router.replace(router.asPath);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Card
                hoverable
                style={{
                    width: 300,
                }}
                actions={
                    status === "authenticated" && [
                        <DeleteOutlined
                            key="delete"
                            style={{
                                color: "red",
                            }}
                            onClick={() => removeResource(id)}
                        />,
                    ]
                }
            >
                <Meta
                    avatar={<CardLogo logo={logo} />}
                    title={<CardTitle name={name} link={link} />}
                    description={<CardText text={text} />}
                    style={{ minHeight: 150 }}
                />
            </Card>
        </>
    );
};

export default CardComponent;
