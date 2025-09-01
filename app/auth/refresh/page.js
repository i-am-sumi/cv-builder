"use client";
import { FileTextOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Form, Layout } from "antd";
import Link from "next/link";

export default function Refresh() {
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
            <MailOutlined
              style={{
                fontSize: "20px",
                backgroundColor: "#ddf0efff",
                padding: "15px",
                color: "gray",
                borderRadius: "40px",
              }}
            />
            <h1
              style={{
                fontSize: "20px",
                font: "bold",
                marginTop: "10px",
              }}
            >
              Verify Your Email
            </h1>
            <p style={{ fontSize: "14px", color: "gray" }}>
              We ve sent a verification link to john.doe@example.com. Click the
              link in the email to verify your account.
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
            <div
              style={{
                width: "300px",
                wordBreak: "break-all",
                border: "1px solid #52ece5ff",
                padding: "10px",
                borderRadius: "10px",
                marginTop: "10px",
                marginBottom: "10px",
                backgroundColor: "#ddf0efff",
                color: "#5c4bf7ff",
                fontSize: "15px",
              }}
            >
              <strong>Did not receive the email?</strong> Check your spam folder
              or click resend below
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Resend Verication Email
              </Button>
            </Form.Item>
            <p style={{ textAlign: "center" }}>
              Wrong email?<Link href="">Change email address</Link>
            </p>
            <p></p>
            <Link href="">Back to Sign In</Link>
          </Form>
        </div>
      </Card>
    </Layout>
  );
}
