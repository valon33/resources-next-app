import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { loginUser, signUpUser } from "../../lib/fetch";

const App = ({ login }) => {
  const onFinish = ({ username, password }) => {
    login ? loginUser(username, password) : signUpUser(username, password);
  };
  return (
    <div className="wtf">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "var(--color-grey-dark)",
              border: "none",
            }}
            className="login-form-button"
          >
            {" "}
            {login ? "Log in" : "Sign Up"}
          </Button>
          Or{" "}
          <Link href={`${login ? "signup" : "login"}`}>
            <a href="">
              {login ? "register now!" : "Login with existing account"}
            </a>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
