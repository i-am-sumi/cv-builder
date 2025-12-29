"use client";
import { LinkedinOutlined } from "@ant-design/icons";
import {
  faBriefcase,
  faChartSimple,
  faEnvelope,
  faPhone,
  faSquarePollHorizontal,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import Error from "../components/Error";
import LoadingCard from "../components/LoadingCard";
import { useJobs } from "../jobs/jobs.query";
import { DashboardCard } from "./Dashboard.stc";

const { Title, Text, Paragraph } = Typography;

export default function Dashboard() {
  const { data, isLoading, error } = useJobs();
  if (error) return <Error />;
  return (
    <Layout>
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
          <Col xs={24} sm={16} md={8} lg={6} style={{ marginBottom: "5px" }}>
            <DashboardCard variant="borderless">
              <Title level={5} style={{ color: "grey" }}>
                Applications Sent
              </Title>
              <div>
                <Text style={{ fontSize: "20px" }}>24</Text>
                <Paragraph style={{ color: " #4bf109ff" }}>
                  +12% this month
                </Paragraph>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mailOutlined-icon"
                />
              </div>
            </DashboardCard>
          </Col>
          <Col xs={24} sm={16} md={8} lg={6} style={{ marginBottom: "5px" }}>
            <DashboardCard>
              <Title level={5} style={{ color: "grey" }}>
                Interview Calls
              </Title>
              <div>
                <Text style={{ fontSize: "20px" }}>5</Text>
                <Paragraph style={{ color: " #4bf109ff" }}>
                  +67% this month
                </Paragraph>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="phoneOutlined-icon"
                />
              </div>
            </DashboardCard>
          </Col>
          <Col xs={24} sm={16} md={8} lg={6} style={{ marginBottom: "5px" }}>
            <DashboardCard variant="borderless">
              <Title level={5} style={{ color: "grey" }}>
                CVs Created
              </Title>
              <div>
                <Text style={{ fontSize: "20px" }}>12</Text>
                <Paragraph style={{ color: " #4bf109ff" }}>
                  +3 this month
                </Paragraph>
                <FontAwesomeIcon
                  icon={faSquarePollHorizontal}
                  className="CV-icon"
                />
              </div>
            </DashboardCard>
          </Col>
          <Col xs={24} sm={16} md={8} lg={6} style={{ marginBottom: "5px" }}>
            <DashboardCard variant="borderless">
              <Title level={5} style={{ color: "grey" }}>
                Profile Score
              </Title>
              <div>
                <Text style={{ fontSize: "20px" }}>89</Text>
                <Paragraph style={{ color: " #f1c609ff" }}>
                  +5% improvement{" "}
                </Paragraph>
                <FontAwesomeIcon icon={faStar} className="star-icon" />
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
                  {isLoading ? (
                    <LoadingCard />
                  ) : (
                    data?.map((skill) => (
                      <Card type="inner" style={{ position: "relative" }}>
                        <Title level={4}>{skill.title}</Title>
                        <Text style={{ fontSize: "14px", color: "blue" }}>
                          {skill.company}
                        </Text>
                        <Paragraph>
                          {" "}
                          {`${skill.location} (${skill.workLocation})`}
                        </Paragraph>
                        <Flex gap="4px 0" wrap>
                          {skill?.skills?.map((item) => (
                            <Tag color="processing">{item}</Tag>
                          ))}
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
                    ))
                  )}
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
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      style={{ fontSize: "18px", color: "orange" }}
                    />
                    Browse Jobs
                  </Button>
                  <Button block>
                    {" "}
                    <LinkedinOutlined
                      style={{
                        color: "#1e06fa",
                        marginRight: "6px",
                        fontSize: "16px",
                      }}
                    />
                    Import Linkedln
                  </Button>
                  <Button block>
                    {" "}
                    <FontAwesomeIcon
                      icon={faChartSimple}
                      style={{ color: "blue" }}
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
