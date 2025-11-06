"use client";

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
  Tag,
  Typography,
} from "antd";
import Layout from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { useEducations } from "../education/education.query";
import { useExperiences } from "../experience/experience.query";
import { useSkills } from "../skill/skill.query";
import { ProfileSection } from "./Profile.stc";

const { Title, Text, Paragraph } = Typography;

export default function Profile() {
  const [form] = Form.useForm();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("1");

  const { data: educationData } = useEducations();
  const { data: skillData } = useSkills();
  const { data: experiencesData } = useExperiences();

  // LocalStorage থেকে user data লোড করা
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

  const tabItems = [
    { key: "1", label: "Personal Info" },
    { key: "2", label: "Experience" },
    { key: "3", label: "Education" },
    { key: "4", label: "Skills" },
  ];

  return (
    <Layout>
      <ProfileSection>
        {/* Header Section */}
        <div className="div">
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <Avatar
              size={64}
              style={{ backgroundColor: "blue", verticalAlign: "middle" }}
            >
              {user?.firstName ? user.firstName.charAt(0).toUpperCase() : "U"}
            </Avatar>

            <div>
              <Title level={2}>
                {user ? `${user.firstName} ${user.lastName}` : "User Name"}
              </Title>
              <Text style={{ fontSize: "16px", color: "#10f0f8" }}>
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
                  <Paragraph style={{ color: "gray" }}>Profile Score</Paragraph>
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

        {/* Main Section */}
        <Layout style={{ padding: "24px 0" }}>
          <Row gutter={[16, 16]}>
            {/* Left Side Tabs */}
            <Col xs={24} sm={16} md={12} lg={16}>
              <Card>
                <Tabs
                  activeKey={activeTab}
                  onChange={setActiveTab}
                  items={tabItems}
                />

                {/* ✅ Always render Form to prevent warning */}
                <Form form={form} layout="vertical" style={{ width: "100%" }}>
                  {activeTab === "1" && (
                    <>
                      <Form.Item
                        label="Full Name"
                        name={["user", "name"]}
                        style={{
                          display: "inline-block",
                          width: "calc(50% - 8px)",
                          margin: "3px",
                        }}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Email"
                        name={["user", "email"]}
                        style={{
                          display: "inline-block",
                          width: "calc(50% - 8px)",
                          margin: "3px",
                        }}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Phone"
                        name={["user", "phone"]}
                        style={{
                          display: "inline-block",
                          width: "calc(50% - 8px)",
                          margin: "3px",
                        }}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Location"
                        name={["user", "location"]}
                        style={{
                          display: "inline-block",
                          width: "calc(50% - 8px)",
                          margin: "3px",
                        }}
                      >
                        <Input />
                      </Form.Item>
                    </>
                  )}
                </Form>

                {/* Experience Tab */}
                {activeTab === "2" && (
                  <Col>
                    <Title level={3}>Work Experience</Title>
                    {experiencesData?.map((exp, idx) => (
                      <Card key={idx} style={{ marginBottom: "10px" }}>
                        <Title level={3}>{exp.jobTitle}</Title>
                        <Paragraph style={{ color: "blue", fontSize: "18px" }}>
                          {exp.company}
                        </Paragraph>
                        <Paragraph style={{ fontSize: "14px" }}>
                          {exp.startDate} - {exp.endDate} | {exp.location}
                        </Paragraph>
                        <Paragraph style={{ color: "grey", fontSize: "14px" }}>
                          {exp.description}
                        </Paragraph>
                      </Card>
                    ))}
                    <Button type="primary" style={{ marginTop: "10px" }}>
                      + Add Experience
                    </Button>
                  </Col>
                )}

                {/* Education Tab */}
                {activeTab === "3" && (
                  <Col>
                    <Title level={3}>Education</Title>
                    {educationData?.map((edu, idx) => (
                      <Card key={idx} style={{ marginBottom: "10px" }}>
                        <Title level={3}>{edu.degree}</Title>
                        <Paragraph style={{ color: "blue", fontSize: "16px" }}>
                          {edu.institution}
                        </Paragraph>
                        <Paragraph style={{ fontSize: "14px" }}>
                          {edu.startDate} - {edu.endDate} | {edu.location}
                        </Paragraph>
                      </Card>
                    ))}
                    <Button type="primary" style={{ marginTop: "10px" }}>
                      + Add Education
                    </Button>
                  </Col>
                )}

                {/* Skills Tab */}
                {activeTab === "4" && (
                  <Col>
                    <Title level={3}>Skills</Title>
                    <Card>
                      {skillData?.map((skill, idx) => (
                        <Tag key={idx} color="blue">
                          {skill.name}
                        </Tag>
                      ))}
                    </Card>
                    <Button type="primary" style={{ marginTop: "10px" }}>
                      + Add Skill
                    </Button>
                  </Col>
                )}
              </Card>
            </Col>

            {/* Right Side Widgets */}
            <Col xs={24} sm={8} md={12} lg={8}>
              {/* Profile Completion */}
              <Card
                title={<Title level={4}>Profile Completion</Title>}
                style={{ width: "100%" }}
              >
                <Flex vertical gap="small">
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

              {/* Quick Actions */}
              <Card
                title={<Title level={4}>Quick Actions</Title>}
                style={{ marginTop: "20px", width: "100%" }}
              >
                <Flex vertical gap="small" style={{ width: "100%" }}>
                  <Button block>
                    <FileTextOutlined /> Generate/Create New CV
                  </Button>
                  <Button block>
                    <AimOutlined style={{ color: "red" }} /> Job Matching
                  </Button>
                  <Button block>View Analytics</Button>
                </Flex>
              </Card>
            </Col>
          </Row>
        </Layout>
      </ProfileSection>
    </Layout>
  );
}
