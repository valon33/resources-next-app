import { Button, Form, Input, Select } from "antd";
import { resourcesGroup } from "../../data/html";
import { addNewResource } from "../../lib/fetch";
const { TextArea } = Input;

const onFinish = ({ name, link, logo, resource, shortDescription }) => {
    if (!logo) logo = "/image.svg";
    if (!resource) resource = "html";
    addNewResource({ name, link, logo, resource, shortDescription });
};

const Add = () => {
    return (
        <div
            style={{
                width: "600px",
                border: "1px solid black",
                height: "700px",
                display: "flex",
                flexDirection: "column",
                gap: "70px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "7px",
                margin: "80px auto",
                boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
            }}
        >
            <h2
                style={{
                    fontSize: "35px",
                    fontWeight: "900",
                    textAlign: "center",
                    color: "var(--color-grey-dark)",
                }}
            >
                Add Resource
            </h2>
            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{
                    width: "100%",
                    //   maxWidth: 650,
                    //   margin: "0 auto",
                }}
                onFinish={onFinish}
            >
                <Form.Item label="Resource Name" name="name">
                    <Input placeholder="Add Resource Name" />
                </Form.Item>

                <Form.Item
                    name="logo"
                    label="Logo URL"
                    rules={[
                        { type: "url", warningOnly: true },
                        { type: "string" },
                    ]}
                >
                    <Input placeholder="Add Logo URL" />
                </Form.Item>

                <Form.Item
                    name="link"
                    label="Resource URL"
                    rules={[
                        { required: true },
                        { type: "url", warningOnly: true },
                        { type: "string", min: 6 },
                    ]}
                >
                    <Input placeholder="Add Resource URL" />
                </Form.Item>

                <Form.Item label="Select Resource" name="resource">
                    <Select placeholder="Select resource group">
                        {resourcesGroup.map((resource) => {
                            return (
                                <Select.Option value={resource} key={resource}>
                                    {resource.charAt(0).toUpperCase() +
                                        resource.slice(1)}
                                </Select.Option>
                            );
                        })}
                    </Select>
                </Form.Item>

                <Form.Item label="TextArea" name="shortDescription">
                    <TextArea
                        rows={4}
                        placeholder="Resource short description"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                            backgroundColor: "var(--color-grey-dark)",
                            border: "none",
                            marginLeft: "50px",
                            marginTop: "30px",
                        }}
                    >
                        Add Resource
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Add;
