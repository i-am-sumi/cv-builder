"use client";

import AppHeader from "@/modules/components/AppHeader/AppHeader";
import { useSkills } from "@/modules/skill/skill.query";
import { AimOutlined, FileTextOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  Progress,
  Row,
  Tabs,
  Typography,
} from "antd";
import Layout from "antd/es/layout/layout";
import { useEffect, useState } from "react";

const { Title, Text, Paragraph } = Typography;

const items = [
  {
    key: "1",
    label: "Personal Info",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Experience",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "education",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "skills",
    children: "Content of Tab Pane 3",
  },
];

export default function Profile() {
  const { data } = useSkills();
  const [form] = Form.useForm();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      form.setFieldsValue({
        user: {
          name: `${parsedUser.firstName} ${parsedUser.lastName}`,
          email: parsedUser.email,
          phone: "",
          location: "",
        },
      });
    }
  }, [form]);
  return (
    <>
      <Layout>
        <AppHeader />
        <div
          style={{
            padding: "0 48px",
            position: "relative",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "4px",
              background: "white",
              padding: "4px",
            }}
          >
            <div className="flex gap-6 items-center">
              <Avatar
                size={64}
                style={{
                  backgroundColor: "blue",
                  verticalAlign: "middle",
                }}
              >
                {user?.firstName ? user.firstName.charAt(0).toUpperCase() : "U"}
              </Avatar>

              <div className="">
                <Title className="font-bold text-xl">
                  {user ? `${user.firstName} ${user.lastName}` : "User Name"}
                </Title>
                <Text className="text-base text-blue-400 p-2 ">
                  Senior Frontend Developer
                </Text>
                <div style={{ display: "flex", gap: "4px" }}>
                  <div style={{ textAlign: "center" }}>
                    <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                      12
                    </Text>
                    <Paragraph style={{ color: "gray" }}>CVs Created</Paragraph>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                      24
                    </Text>
                    <Paragraph style={{ color: "gray" }}>Application</Paragraph>
                  </div>
                  <div className="text-center">
                    <Text
                      style={{
                        color: "green",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      89%
                    </Text>
                    <Paragraph className="text-gray-500 ">
                      Profile Score
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ alignItems: "center", display: "flex" }}
              className=" items-center flex flex-col sm:flex-row gap-2 items-end sm:items-center "
            >
              <Button className="w-fit">Add Certification</Button>
              <Button type="primary" className="w-fit">
                Add Education
              </Button>
            </div>
          </div>
          <Layout style={{ padding: "24px 0" }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={16} md={12} lg={16}>
                <div className="flex flex-col gap-4">
                  <Card title={<Tabs defaultActiveKey="1" items={items} />}>
                    <Form
                      form={form}
                      name="nest-messages"
                      layout="vertical"
                      style={{ width: "100%" }}
                    >
                      <Form.Item>
                        <Form.Item
                          name={["user", "name"]}
                          label="FullName"
                          style={{
                            display: "inline-block",
                            width: "calc(50% - 8px)",
                            margin: "3px",
                          }}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name={["user", "email"]}
                          label="Email"
                          rules={[{ type: "email" }]}
                          style={{
                            display: "inline-block",
                            width: "calc(50% - 8px)",
                            margin: "3px",
                          }}
                        >
                          <Input />
                        </Form.Item>
                      </Form.Item>
                      <Form.Item>
                        <Form.Item
                          name={["user", "phone"]}
                          label="Phone"
                          style={{
                            display: "inline-block",
                            width: "calc(50% - 8px)",
                            margin: "3px",
                          }}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          name={["user", "location"]}
                          label="Location"
                          style={{
                            display: "inline-block",
                            width: "calc(50% - 8px)",
                            margin: "3px",
                          }}
                        >
                          <Input />
                        </Form.Item>
                      </Form.Item>
                    </Form>
                    <Col>
                      <Title level={3} style={{ fontSize: "20px" }}>
                        Work Experience
                      </Title>
                      <Card style={{ width: "100%" }}>
                        <Text style={{ fontSize: "17px" }}>
                          Senior Front Developer
                        </Text>
                        <Paragraph style={{ color: "blue" }}>
                          TechCorp Inc
                        </Paragraph>
                        <Paragraph>2022 -Present|San Francisco,CA</Paragraph>
                        <Paragraph style={{ color: "grey" }}>
                          Led development of React-based dashboard serving 100k+
                          users daily. Improved performance by 40% through code
                          optimization.
                        </Paragraph>
                      </Card>
                      <Button type="primary" style={{ marginTop: "10px" }}>
                        + Add Experience
                      </Button>
                    </Col>
                  </Card>
                </div>
              </Col>

              <Col xs={24} sm={8} md={12} lg={8}>
                <Card
                  title="Profile Completion"
                  variant="borderless"
                  style={{ width: "100%" }}
                >
                  <Flex gap="small" vertical>
                    <div>
                      <p>Personal Info</p>
                      <Progress
                        percent={100}
                        status="active"
                        strokeColor="#57b410ff"
                      />
                    </div>
                    <div>
                      <p>Experience</p>
                      <Progress
                        percent={85}
                        status="active"
                        strokeColor="#ebc20bff"
                      />
                    </div>
                    <div>
                      <p>Skills</p>
                      <Progress
                        percent={60}
                        status="active"
                        strokeColor="#fa0909ff"
                      />
                    </div>
                  </Flex>
                </Card>
                <Card
                  title="Quick Actions"
                  variant="borderless"
                  style={{ marginTop: "20px", width: "100%" }}
                >
                  <Flex vertical gap="small" style={{ width: "100%" }}>
                    <Button block>
                      <FileTextOutlined style={{ fontSize: "16px" }} /> Generate
                      Create New CV
                    </Button>
                    <Button block>
                      <AimOutlined style={{ color: "red", fontSize: "16px" }} />
                      Job Matching
                    </Button>
                    <Button block>View Analytics</Button>
                  </Flex>
                </Card>
              </Col>
            </Row>
          </Layout>
        </div>
      </Layout>
    </>
  );
}
