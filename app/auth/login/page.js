"use client";

import { useLoginUser } from "@/modules/auth/auth.query";
import {
  FileTextOutlined,
  GoogleOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Flex,
  Form,
  Input,
  Layout,
  Typography,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Title, Text, Paragraph } = Typography;

const LoginForm = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { mutate: login, isPending } = useLoginUser();

  const onFinish = (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    login(payload, {
      onSuccess: (response) => {
        const email = response?.user?.email;
        const userData = {
          firstName: response?.user?.firstName,
          lastName: response?.user?.lastName,
          email,
          role: response?.user?.role || "Candidate",
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("token", response.accessToken);

        window.dispatchEvent(new Event("user-updated"));

        router.push("/profile");
      },
    });
  };

  return (
    <Layout
      style={{
        paddingTop: "20px",
        paddingBottom: "20px",
        alignItems: "center",
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
            <Title level={2}>CV Builder Pro</Title>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <Title level={3} style={{ font: "bold", marginTop: "10px" }}>
              Welcome Back
            </Title>
            <Text style={{ fontSize: "14px", color: "gray" }}>
              Sign in to your account to continue building amazing CVs
            </Text>
          </div>
          <Flex vertical gap="small" style={{ width: "100%" }}>
            <Button block>
              {" "}
              <GoogleOutlined style={{ color: "blue", fontSize: "15px" }} />
              Sign up with Google
            </Button>
            <Button block>
              <LinkedinOutlined style={{ color: "blue", fontSize: "15px" }} />
              Sign up with Linkedln
            </Button>
          </Flex>
        </div>
        <Text
          style={{
            color: "gray",
            fontSize: "15px",
            textAlign: "center",
            margin: "10px",
          }}
        >
          or sign in with email
        </Text>

        <div className="flex items-center">
          <Form
            form={form}
            name="login"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
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
              <Input style={{ width: "100%" }} placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  min: 8,
                  message: "Password must be at least 8 characters long!",
                },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Checkbox style={{ paddingBottom: "5px" }}>Remember me</Checkbox>

              <Link href="">Forgot password</Link>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={isPending}
                block
                style={{ fontSize: "15px" }}
              >
                {isPending ? "Logging in..." : "Login"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </Layout>
  );
};

export default LoginForm;
