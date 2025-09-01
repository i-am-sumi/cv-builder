"use client";
import AppHeader from "@/modules/components/AppHeader/AppHeader";
import Icon, {
  BellOutlined,
  DashboardOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Flex,
  Form,
  Layout,
  Select,
  Tag,
  Typography,
} from "antd";
import Search from "antd/es/input/Search";
import Image from "next/image";
import HeartSvg from "../components/SvgForder/Heartsvg";
import { JobForm, Wapper } from "./Job.stc";

const { Title, Text, Paragraph } = Typography;

const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;

export default function Jobs() {
  return (
    <Layout>
      <AppHeader />
      <Wapper>
        <Title level={2} style={{ fontSize: "20px" }}>
          Browse Jobs
        </Title>
        <Text style={{ fontSize: "14px", color: "grey" }}>
          Find your perfect job match
        </Text>
        <Button type="primary" className="btn">
          <BellOutlined style={{ color: " #fcf954ff", fontSize: "15px" }} />
          Create Job Alert
        </Button>
      </Wapper>
      <div style={{ margin: "0px 20px 30px", background: "white" }}>
        <JobForm layout="vertical">
          <Search
            placeholder="input search text"
            enterButton
            style={{ width: "500px" }}
          />
          <Form.Item style={{ width: "200px" }}>
            <Select
              defaultValue="ALL Locations"
              options={[
                { label: "Remote", value: "remote" },
                { label: "San Francisco", value: "" },
                { label: "New York", value: "new york" },
              ]}
            />
          </Form.Item>
          <Form.Item style={{ width: "200px" }}>
            <Select
              defaultValue="ALL Experience"
              options={[
                { label: "Entry Level", value: "entry level" },
                { label: "Mid Level", value: "min level" },
                { label: "Senior Level", value: "senior level" },
              ]}
            />
          </Form.Item>
          <Form.Item style={{ width: "200px" }}>
            <Select
              defaultValue="ALL type"
              options={[
                { label: "Full-time", value: "full-time" },
                { label: "Part-time", value: "part-time" },
                { label: "Contract", value: "contract" },
              ]}
            />
          </Form.Item>
        </JobForm>
      </div>
      <Card hoverable style={{ margin: "10px 20px", position: "relative" }}>
        <Title level={2} style={{ fontSize: "20px" }}>
          Senior Front Developer
        </Title>
        <Text style={{ fontSize: "16px", color: "blue" }}>TechCorp Inc.</Text>
        <div style={{ display: "flex", color: " #a3a3a1ff" }}>
          <Paragraph style={{ fontSize: "13px" }}>
            <Text>Austin,TX(Hybrid)</Text>•{" "}
            <DollarOutlined style={{ color: " #f5ca09ff" }} />
            <Text> $120k-160k</Text> •
          </Paragraph>{" "}
          <Text>
            <DashboardOutlined style={{ color: " #f5900bff" }} /> Posted 2 days
            ageo
          </Text>
        </div>
        <Text style={{ padding: "20px 0", fontSize: "14px", color: "grey" }}>
          We are looking for a skilled Frontend Developer to join our growing
          team. You are all work with React, TypeScript, and modern web
          technologies to build scalable applications that serve millions of
          users.
        </Text>
        <Flex gap="4px 0" wrap>
          <Tag color="processing">React</Tag>
          <Tag color="processing">TypeScript</Tag>
          <Tag color="processing">Node.js</Tag>
          <Tag color="processing">GraphQl</Tag>
          <Tag color="default">AWS</Tag>
          <Tag color="default">Docker</Tag>
        </Flex>
        <Flex gap="small" wrap style={{ marginTop: "10px" }}>
          <Button type="primary">
            <Image src="/assect/AiIcon.png" alt="" width={20} height={20} />
            Generate CV
          </Button>
          <Button>View Details</Button>
          <Button type="text">
            {" "}
            <HeartIcon style={{ color: "red", fontSize: "18px" }} />
            Save
          </Button>
        </Flex>
        <div style={{ position: "absolute", top: "15px", right: "20px" }}>
          <Tag color="green">95% Match</Tag>
          <Text style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
            <Image src="/assect/jobIcon.png" alt="" width={16} height={16} />{" "}
            <Text style={{ color: " #a8a8a5ff", fontSize: "12px" }}>
              Full-Time
            </Text>
          </Text>
        </div>
      </Card>
      <Card hoverable style={{ margin: "10px 20px", position: "relative" }}>
        <Title level={2} style={{ fontSize: "20px" }}>
          Product Designer
        </Title>
        <Text style={{ fontSize: "16px", color: "blue" }}>
          Design Studio Pro
        </Text>
        <div style={{ display: "flex", color: " #a3a3a1ff" }}>
          <Paragraph style={{ fontSize: "13px" }}>
            <Text>Austin,TX(Hybrid)</Text>•{" "}
            <DollarOutlined style={{ color: " #f5ca09ff" }} />
            <Text> $120k-160k</Text> •
          </Paragraph>{" "}
          <Text>
            <DashboardOutlined style={{ color: " #f5900bff" }} /> Posted 2 days
            ageo
          </Text>
        </div>
        <Text style={{ padding: "20px 0", fontSize: "14px", color: "grey" }}>
          Join our design team to create beautiful, user-centered products. You
          all work closely with developers and product managers to bring
          innovative ideas to life.
        </Text>
        <Flex gap="4px 0" wrap>
          <Tag color="processing">Figma</Tag>
          <Tag color="processing">Adobe XD</Tag>
          <Tag color="processing">Prototyping</Tag>

          <Tag color="default">User Research</Tag>
          <Tag color="default">Design Systems</Tag>
        </Flex>
        <Flex gap="small" wrap style={{ marginTop: "10px" }}>
          <Button type="primary">
            <Image src="/assect/AiIcon.png" alt="" width={20} height={20} />
            Generate CV
          </Button>
          <Button>View Details</Button>
          <Button type="text">
            {" "}
            <HeartIcon style={{ color: "red", fontSize: "18px" }} />
            Save
          </Button>
        </Flex>
        <div style={{ position: "absolute", top: "16px", right: "20px" }}>
          <Tag color="gold">75% Match</Tag>
          <Text style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
            <Image src="/assect/jobIcon.png" alt="" width={15} height={15} />{" "}
            <Text
              style={{ color: "grey", fontSize: "12px", alignItems: "center" }}
            >
              Full-Time
            </Text>
          </Text>
        </div>
      </Card>
    </Layout>
  );
}
