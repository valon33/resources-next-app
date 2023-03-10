import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Card, Avatar } from "antd";
import CardTitle from "./CardTitle";
import { removeResource } from "../../lib/fetch";

const { Meta } = Card;

const CardComponent = ({ name, logo, link, text, id }) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    return (
        <>
            <Card
                hoverable
                style={{
                    width: 300,
                    border: "5px solid var(--color-green-light-2)",
                    // border: "5px solid var(--color-skin)",
                }}
                actions={
                    status === "authenticated" && [
                        <DeleteOutlined
                            key="delete"
                            style={{
                                color: "red",
                            }}
                            onClick={() => removeResource(id, router)}
                        />,
                    ]
                }
            >
                <Meta
                    avatar={
                        <Avatar src={logo} style={{ objectFit: "contain" }} />
                    }
                    title={<CardTitle name={name} link={link} />}
                    description={text}
                    style={{ minHeight: 150 }}
                />
            </Card>
        </>
    );
};

export default CardComponent;
