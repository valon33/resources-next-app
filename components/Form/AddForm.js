import { useRouter } from "next/router";
import { Button, Form, Input, Select } from "antd";
import { resourcesGroup } from "../../data/html";
import { addNewResource } from "../../lib/fetch";
import { useSession } from "next-auth/react";
import FormWrapper from "./FormWrapper";
import styles from "./Form.module.css";
const { TextArea } = Input;

const Add = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const { data: session, status } = useSession();

    console.log("session", session?.user?.id);

    const onFinish = async ({
        name,
        link,
        logo,
        resource,
        shortDescription,
    }) => {
        if (!logo) logo = "/image.svg";
        if (!resource) resource = "html";
        await addNewResource({
            name,
            link,
            logo,
            resource,
            shortDescription,
        });
        form.resetFields();
        router.replace(`/${resource}`);
    };

    return (
        <FormWrapper formTitle={"Add Resource"}>
            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
                }}
                form={form}
                layout="horizontal"
                style={{
                    width: "100%",
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
                        className={`${styles.formButton} ${styles.loginFormButton}`}
                    >
                        Add Resource
                    </Button>
                </Form.Item>
            </Form>
        </FormWrapper>
    );
};

export default Add;
