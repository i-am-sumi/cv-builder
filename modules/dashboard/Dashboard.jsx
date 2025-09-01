"use client";
import AppHeader from "@/modules/components/AppHeader/AppHeader";
import {
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  StarOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Flex,
  Row,
  Tag,
  Typography,
} from "antd";
import Layout from "antd/es/layout/layout";
import Image from "next/image";
import { DashboardCard } from "./Dashboard.stc";

const { Title, Text, Paragraph } = Typography;

export default function Dashboard() {
  return (
    <Layout>
      <AppHeader />
      <div style={{ padding: "15px 48px" }}>
        <Breadcrumb
          style={{ margin: "16px 0", fontSize: "14px" }}
          items={[
            {
              title: "Home",
            },
            {
              title: "Dashboard",
            },
          ]}
        />
        <Row gutter={16}>
          <Col span={6}>
            <DashboardCard variant="borderless">
              <Title level={5} style={{ color: "grey" }}>
                Applications Sent
              </Title>
              <div>
                <Text style={{ fontSize: "20px" }}>24</Text>
                <Paragraph style={{ color: " #4bf109ff" }}>
                  +12% this month
                </Paragraph>
                <MailOutlined className="mailOutlined-icon" />
              </div>
            </DashboardCard>
          </Col>
          <Col span={6}>
            <DashboardCard variant="borderless">
              <Title level={5} style={{ color: "grey" }}>
                Interview Calls
              </Title>
              <div>
                <Text style={{ fontSize: "20px" }}>5</Text>
                <Paragraph style={{ color: " #4bf109ff" }}>
                  +67% this month
                </Paragraph>
                <PhoneOutlined className="phoneOutlined-icon" />
              </div>
            </DashboardCard>
          </Col>
          <Col span={6}>
            <DashboardCard variant="borderless">
              <Title level={5} style={{ color: "grey" }}>
                CVs Created
              </Title>
              <div>
                <Text style={{ fontSize: "20px" }}>12</Text>
                <Paragraph style={{ color: " #4bf109ff" }}>
                  +3 this month
                </Paragraph>
                <Image
                  src="/assect/cv.png"
                  width={40}
                  height={40}
                  alt=""
                  className="CV-icon"
                />
              </div>
            </DashboardCard>
          </Col>
          <Col span={6}>
            <DashboardCard variant="borderless">
              <Title level={5} style={{ color: "grey" }}>
                Profile Score
              </Title>
              <div>
                <Text style={{ fontSize: "20px" }}>89</Text>
                <Paragraph style={{ color: " #f1c609ff" }}>
                  +5% improvement{" "}
                </Paragraph>
                <StarOutlined className="star-icon" />
              </div>
            </DashboardCard>
          </Col>
        </Row>
        <Layout style={{ padding: "24px 0", marginBottom: "5px" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={16} md={12} lg={16}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                <Card
                  title={<Title level={3}>Recommended Jobs</Title>}
                  variant="borderless"
                  extra={
                    <Button
                      type="primary"
                      size="small"
                      style={{
                        padding: "5px",
                        color: "white",
                        borderRadius: "5px",
                      }}
                    >
                      View All
                    </Button>
                  }
                >
                  <Card type="inner" style={{ position: "relative" }}>
                    <Title style={{ fontSize: "18px" }}>
                      Senior Frontend Developer
                    </Title>
                    <Text style={{ fontSize: "14px", color: "blue" }}>
                      TechCorp Inc.
                    </Text>
                    <Paragraph>San Francisco,CA(Remote)</Paragraph>
                    <Flex gap="4px 0" wrap>
                      <Tag color="processing">React</Tag>
                      <Tag color="processing">TypeScript</Tag>
                      <Tag color="processing">Node.js</Tag>
                    </Flex>
                    <Flex gap="small" wrap style={{ marginTop: "10px" }}>
                      <Button type="primary" size="small">
                        Generate CV
                      </Button>
                      <Button size="small">View Details</Button>
                      <Tag
                        color="green"
                        style={{ position: "absolute", top: 10, right: 10 }}
                      >
                        95% Match
                      </Tag>
                    </Flex>
                  </Card>
                  <Card
                    type="inner"
                    style={{ marginTop: 16, position: "relative" }}
                  >
                    <Title style={{ fontSize: "18px" }}>
                      Full Stack Engineer
                    </Title>
                    <Text style={{ fontSize: "15px", color: "blue" }}>
                      StartupXYZ
                    </Text>
                    <Paragraph>New York,NY</Paragraph>
                    <Flex gap="4px 0" wrap>
                      <Tag color="processing">Python</Tag>
                      <Tag color="processing">Django</Tag>
                      <Tag color="processing">React</Tag>
                    </Flex>
                    <Flex gap="small" wrap style={{ marginTop: "10px" }}>
                      <Button type="primary" size="small">
                        Generate CV
                      </Button>
                      <Button size="small">View Details</Button>
                    </Flex>
                    <Tag
                      color="volcano"
                      style={{ position: "absolute", top: 10, right: 10 }}
                    >
                      87% Match
                    </Tag>
                  </Card>
                </Card>
              </div>
            </Col>
            <Col xs={24} sm={8} md={12} lg={8}>
              <Card
                title={<Title level={3}>Quick Actions</Title>}
                variant="borderless"
                style={{ width: "100%" }}
              >
                <Flex
                  vertical
                  gap="small"
                  style={{ width: "100%", fontSize: "12px" }}
                >
                  <Button type="primary" block>
                    <Image
                      src="/assect/createCV.png"
                      alt="AI Icon"
                      width={20}
                      height={20}
                    />
                    Create New CV
                  </Button>
                  <Button block>
                    <Image
                      src="/assect/jobIcon.png"
                      alt=""
                      width={20}
                      height={20}
                      style={{
                        color: "#faa506ff",
                        marginRight: "6px",
                        fontSize: "16px",
                      }}
                    />
                    Browse Jobs
                  </Button>
                  <Button block>
                    {" "}
                    <LinkedinOutlined
                      style={{
                        color: "#6306faff",
                        marginRight: "6px",
                        fontSize: "16px",
                      }}
                    />
                    Import Linkedln
                  </Button>
                  <Button block>
                    {" "}
                    <Image
                      src="/assect/analytices.png"
                      alt=""
                      width={20}
                      height={20}
                      style={{
                        color: "#5209c9ff",
                        marginRight: "6px",
                        fontSize: "16px",
                      }}
                    />
                    View Analytics
                  </Button>
                </Flex>
              </Card>
            </Col>
          </Row>
        </Layout>
      </div>
    </Layout>
  );
}
