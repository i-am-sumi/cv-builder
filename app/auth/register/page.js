"use client";

import { useRegisterUser } from "@/modules/auth/auth.query";
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
  Select,
  Typography,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
const { Text } = Typography;

const RegisterForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { mutate: register, isPending } = useRegisterUser();

  const onFinish = (values) => {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      phone: values.phone,
      location: values.location,
      role: values.role,
    };

    register(payload, {
      onSuccess: () => {
        const userData = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          role: values.role,
          location: values.location,
          password: values.password,
        };

        localStorage.setItem("userData", JSON.stringify(userData));
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
              Create Youre Account
            </h1>
            <p style={{ fontSize: "14px", color: "gray" }}>
              Join thousands of professionals who trust CV Builder Pro
            </p>
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
        <p
          style={{
            color: "grey",
            textAlign: "center",
            margin: "10px",
            fontSize: "15px",
          }}
        >
          or create account with email
        </p>

        <div className="flex items-center">
          <Form
            form={form}
            name="register"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            style={{ width: "100%" }}
          >
            <div style={{ display: "flex", gap: "16px" }}>
              <Form.Item
                label="First Name"
                name="firstName"
                style={{ flex: 1 }}
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input placeholder="John" />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastName"
                style={{ flex: 1 }}
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input placeholder="Doe" />
              </Form.Item>
            </div>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Enter a valid email!" },
              ]}
            >
              <Input placeholder="john.doe@example.com" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).{6,}$/,
                  message:
                    "Password must include uppercase, lowercase, number/special character and be at least 6 characters",
                },
              ]}
            >
              <Input.Password placeholder="Create Strong password" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm your password!" },
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).{6,}$/,
                  message:
                    "Password must include uppercase, lowercase, number/special character and be at least 6 characters",
                },
              ]}
            >
              <Input.Password placeholder="Confirm your password" />
            </Form.Item>

            <Form.Item
              label="I am a..."
              name="role"
              rules={[{ required: true, message: "Please select your role!" }]}
            >
              <Select>
                <Select.Option value="">Select your role</Select.Option>
                <Select.Option value="jobseeker">Job Seeker</Select.Option>
                <Select.Option value="recruiter">Recruiter</Select.Option>
                <Select.Option value="employer">Employer</Select.Option>
              </Select>
            </Form.Item>
            <p style={{ padding: "10px" }}>
              <Checkbox>
                I agree to the <Link href={""}> Terms of Service</Link> and
                <Link href="">Privacy Policy</Link>
              </Checkbox>
            </p>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={isPending}
                block
                style={{ fontSize: "15px" }}
              >
                {isPending ? "Creating..." : "Create Account"}
              </Button>
            </Form.Item>
            <p>
              Already have an account?<Link href="">Sign In</Link>
            </p>
          </Form>
        </div>
      </Card>
    </Layout>
  );
};

export default RegisterForm;
