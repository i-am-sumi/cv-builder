"use client";
import Icon from "@ant-design/icons";
import {
  faAlarmClock,
  faBell,
  faBriefcase,
  faHeart,
  faLocationDot,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Layout,
  Row,
  Select,
  Tag,
  Typography,
} from "antd";
import Search from "antd/es/input/Search";
import Image from "next/image";
import LoadingCard from "../components/LoadingCard";
import { JobForm, Wapper } from "./Jobs.stc";
import { useJobs } from "./jobs.query";

const { Title, Text, Paragraph } = Typography;

const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;

export default function Jobs() {
  const { data, isLoading } = useJobs();
  console.log("jobs", data);

  return (
    <Layout>
      <Wapper>
        <Title level={2} style={{ fontFamily: "monospace" }}>
          Browse Jobs
        </Title>
        <Text style={{ fontSize: "14px", color: "grey" }}>
          Find your perfect job match
        </Text>
        <Button type="primary" className="btn">
          <FontAwesomeIcon
            icon={faBell}
            style={{ color: " #fcf954ff", fontSize: "15px" }}
          />{" "}
          Create Job Alert
        </Button>
      </Wapper>
      <div style={{ margin: "0px 20px 30px", background: "white" }}>
        <JobForm layout="vertical" style={{ width: "100%" }}>
          <Row gutter={[16, 16]} wrap>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Search
                placeholder="input search text"
                enterButton
                style={{ width: "100%" }}
                size="large"
              />
            </Col>

            <Col xs={24} sm={12} md={6} lg={4}>
              <Form.Item>
                <Select
                  defaultValue="ALL Locations"
                  style={{ width: "100%" }}
                  size="large"
                  options={[
                    { label: "Remote", value: "remote" },
                    { label: "San Francisco", value: "san francisco" },
                    { label: "New York", value: "new york" },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={4} lg={4}>
              <Form.Item>
                <Select
                  defaultValue="ALL Experience"
                  style={{ width: "100%" }}
                  size="large"
                  options={[
                    { label: "Entry Level", value: "entry level" },
                    { label: "Mid Level", value: "mid level" },
                    { label: "Senior Level", value: "senior level" },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={4} lg={4}>
              <Form.Item>
                <Select
                  defaultValue="ALL type"
                  style={{ width: "100%" }}
                  size="large"
                  options={[
                    { label: "Full-time", value: "full-time" },
                    { label: "Part-time", value: "part-time" },
                    { label: "Contract", value: "contract" },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
        </JobForm>
      </div>
      <div style={{ margin: "5px" }}>
        {isLoading ? (
          <LoadingCard />
        ) : (
          data?.map((job) => (
            <Card
              key={job.id}
              hoverable
              style={{ margin: "10px 20px", position: "relative" }}
            >
              <Title
                level={2}
                style={{ fontSize: "20px", fontFamily: "monospace" }}
              >
                {job?.title}
              </Title>
              <Text style={{ fontSize: "18px", color: "blue" }}>
                {job.company}
              </Text>
              <div style={{ display: "flex" }}>
                <Text style={{ fontSize: "14px", color: " #a3a3a1ff" }}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{
                      alignItems: "center",
                      fontSize: "15px",
                      color: "blue",
                    }}
                  />
                  {`${job.location} (${job.workLocation})`}
                </Text>
                {"  "}

                <Text style={{ fontSize: "14px", color: " #a3a3a1ff" }}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faSackDollar}
                    style={{
                      alignItems: "center",
                      fontSize: "15px",
                      color: "orange",
                    }}
                  />
                  {`${job.salaryMin}k - ${job.salaryMax}k`}
                </Text>
                {"  "}
                <Text style={{ fontSize: "14px", color: " #a3a3a1ff" }}>
                  <FontAwesomeIcon
                    icon={faAlarmClock}
                    style={{
                      alignItems: "center",
                      fontSize: "15px",
                      color: "orange",
                    }}
                  />
                  {job.applicationDeadline}
                </Text>
              </div>
              <Text
                style={{ padding: "20px 0", fontSize: "14px", color: "grey" }}
              >
                {job.description}
              </Text>
              <Flex gap="4px 0" wrap>
                {job?.skills?.map((skill, index) => (
                  <Tag key={index} color="processing">
                    {skill}
                  </Tag>
                ))}
              </Flex>

              <Flex gap="small" wrap style={{ marginTop: "10px" }}>
                <Button type="primary">
                  <Image
                    src="/assect/AiIcon.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Generate CV
                </Button>
                <Button>View Details</Button>
                <Button type="text">
                  {" "}
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "red", fontSize: "18px" }}
                  />
                  Save
                </Button>
              </Flex>
              <div style={{ position: "absolute", top: "15px", right: "20px" }}>
                <Tag color="green">95% Match</Tag>
                <Text
                  style={{ display: "flex", gap: "5px", marginTop: "10px" }}
                >
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    style={{
                      fontSize: "15px",
                      color: "orange",
                      marginTop: "3px",
                    }}
                  />
                  <Text style={{ color: " #a8a8a5ff", fontSize: "14px" }}>
                    {job.jobType}
                  </Text>
                </Text>
              </div>
            </Card>
          ))
        )}
      </div>
    </Layout>
  );
}
