"use client";
import { ArrowLeftOutlined, FileTextOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Layout } from "antd";
import Link from "next/link";

export default function ResetPassword() {
  const [form] = Form.useForm();
  return (
    <Layout
      style={{
        paddingTop: "20px",
        paddingBottom: "20px",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card variant="borderless" style={{ width: 350 }}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <FileTextOutlined
              style={{
                background: "blue",
                padding: "5px",
                color: "white",
                fontSize: "20px",
                borderRadius: "5px",
              }}
            />
            <h1 style={{ fontSize: "20px", font: "bold" }}>CV Builder Pro</h1>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <h1 style={{ fontSize: "20px", font: "bold", marginTop: "10px" }}>
              Reset Your Password
            </h1>
            <p style={{ fontSize: "14px", color: "gray" }}>
              Enter your new password below. Make sure its strong and secure.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <Form
            form={form}
            name="login"
            layout="vertical"
            initialValues={{ remember: true }}
            autoComplete="off"
            style={{ width: "100%" }}
          >
            <Form.Item
              label="New Password"
              name="new-password"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Enter a valid email!" },
              ]}
              help="Password must be at least 8 characters with uppercase,lowercase,and numbers"
            >
              <Input
                style={{ width: "100%" }}
                placeholder="Enter your password"
              />
            </Form.Item>

            <Form.Item label="Confirm New Password" name="password">
              <Input.Password
                style={{ width: "100%" }}
                placeholder="Confirm new password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ fontSize: "15px" }}
              >
                Update Password
              </Button>
            </Form.Item>
            <p style={{ textAlign: "center" }}>
              <Link href="">
                {" "}
                <ArrowLeftOutlined />
                Back to Sign In
              </Link>
            </p>
          </Form>
        </div>
      </Card>
    </Layout>
  );
}
