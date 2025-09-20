"use client";

import AppHeader from "@/modules/components/AppHeader/AppHeader";
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
import { ProfileSection } from "./Profile.stc";

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
        <ProfileSection>
          <div className="div">
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <Avatar
                size={64}
                style={{
                  backgroundColor: "blue",
                  verticalAlign: "middle",
                }}
              >
                {user?.firstName ? user.firstName.charAt(0).toUpperCase() : "U"}
              </Avatar>

              <div>
                <Title level={2}>
                  {user ? `${user.firstName} ${user.lastName}` : "User Name"}
                </Title>
                <Text
                  style={{
                    fontSize: "16px",
                    color: "#10f0f8",
                  }}
                >
                  Senior Frontend Developer
                </Text>
                <div style={{ display: "flex", gap: "20px" }}>
                  <div style={{ textAlign: "center" }}>
                    <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                      12
                    </Text>
                    <Paragraph style={{ color: "gray" }}>CVs Created</Paragraph>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                      24
                    </Text>
                    <Paragraph style={{ color: "gray" }}>Application</Paragraph>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Text
                      style={{
                        color: "green",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      89%
                    </Text>
                    <Paragraph style={{ color: "gray" }}>
                      Profile Score
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-class">
              <Button className="w-fit">Add Certification</Button>
              <Button type="primary" className="w-fit">
                Add Education
              </Button>
            </div>
          </div>
          <Layout style={{ padding: "24px 0" }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={16} md={12} lg={16}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
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
                        <Paragraph style={{ color: "blue", fontSize: "14px" }}>
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
                  title={
                    <Title level={4} style={{ fontFamily: "monospace" }}>
                      {" "}
                      Profile Completion
                    </Title>
                  }
                  variant="borderless"
                  style={{ width: "100%" }}
                >
                  <Flex gap="small" vertical>
                    <div>
                      <Text>Personal Info</Text>
                      <Progress
                        percent={100}
                        status="active"
                        strokeColor="#57b410ff"
                      />
                    </div>
                    <div>
                      <Text>Experience</Text>
                      <Progress
                        percent={85}
                        status="active"
                        strokeColor="#ebc20bff"
                      />
                    </div>
                    <div>
                      <Text>Skills</Text>
                      <Progress
                        percent={60}
                        status="active"
                        strokeColor="#fa0909ff"
                      />
                    </div>
                  </Flex>
                </Card>
                <Card
                  title={<Title level={4}> Quick Actions</Title>}
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
        </ProfileSection>
      </Layout>
    </>
  );
}
