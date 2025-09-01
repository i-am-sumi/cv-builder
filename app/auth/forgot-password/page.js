"use client";
import { ArrowLeftOutlined, FileTextOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Layout } from "antd";
import Link from "next/link";

export default function ForgotPassword() {
  const [form] = Form.useForm();
  return (
    <Layout
      style={{
        paddingTop: "20px",
        paddingBottom: "20px",
        alignItems: "center",
        width: "100%",
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
                fontSize: "25px",
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
            <h1
              style={{
                fontSize: "20px",
                font: "bold",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Forgot Password?
            </h1>
            <p style={{ fontSize: "14px", color: "gray" }}>
              No worries! Enter your email address and we ll send you a link to
              reset your password.
            </p>
          </div>
        </div>

        <Form
          form={form}
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          style={{ width: "100%" }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input
              style={{ width: "100%" }}
              placeholder="Enter your email address"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{ fontSize: "15px" }}
            >
              Send Reset Link
            </Button>
            <p style={{ textAlign: "center" }}>
              <Link href="">
                {" "}
                <ArrowLeftOutlined /> Back to Sign IN
              </Link>
            </p>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
}
