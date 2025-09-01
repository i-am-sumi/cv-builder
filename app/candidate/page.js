"use client";
import theme from "@/theme/themeConfig";
import {
  BarChartOutlined,
  CalendarOutlined,
  CloseOutlined,
  FileDoneOutlined,
  HeartOutlined,
  MessageOutlined,
  SearchOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  Layout,
  Menu,
  Row,
  Select,
  Tag,
  Typography,
} from "antd";
import Image from "next/image";
import Link from "next/link";
const { Header } = Layout;
const { Title, Text, Paragraph } = Typography;

const items1 = [
  { key: "dashboard", label: <Link href="/dashboard">Dashboard</Link> },
  { key: "jobs", label: <Link href="/jobs">Job Posts</Link> },
  { key: "cv", label: <Link href="/cv-builder">Candidate</Link> },
  { key: "education", label: <Link href="/education">Interviews</Link> },
];

export default function Candidate() {
  const [form] = Form.useForm();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          backgroundColor: theme.token.bodyBg1,
          color: theme.token.ColorPicker,
          paddingInline: "16px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
        className="flex-wrap gap-y-2 sm:gap-y-0"
      >
        <div className="flex items-center gap-2 min-w-0 mr-4">
          <Link href="/">
            <Image
              src="/assect/cv.png"
              alt=""
              width={20}
              height={20}
              style={{ fontSize: "24px", color: theme.token.colorPrimary }}
            />
          </Link>
          <span style={{ fontSize: "17px" }}>CV Builder Pro</span>
        </div>

        <Menu
          mode="horizontal"
          items={items1}
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "transparent",
            fontSize: theme.token.fontSize,
            minWidth: 0,
            overflow: "hidden",
            fontSize: "14px",
          }}
        />

        <div className="flex gap-2 flex-shrink-0">
          <Link href={"/auth/login"}>
            <Button type="primary">Login</Button>
          </Link>
          <Link href={"/auth/register"}>
            <Button>Sign Up</Button>
          </Link>
        </div>
      </Header>
      <div style={{ padding: "0 30px" }} className="relative mb-3">
        <div style={{ padding: "20px" }}>
          <div style={{ position: "relative" }}>
            <Title style={{ fontSize: "20px", fontWeight: "bold" }}>
              Candidate Database
            </Title>
            <Text style={{ color: "grey", fontSize: "146x" }}>
              Search and discover top lalent
            </Text>
            <Flex
              gap="small"
              wrap
              style={{ position: "absolute", top: 0, right: 0 }}
            >
              <Button>Import Candidate</Button>
              <Button type="primary">AI Match</Button>
            </Flex>
          </div>
        </div>
        <Layout>
          <Row gutter={[16, 16]}>
            <Col xs={6} lg={6}>
              <Card title="Sarch Filters">
                <Form
                  form={form}
                  name="nest-messages"
                  layout="vertical"
                  style={{ width: "100%" }}
                >
                  <Form.Item
                    name={["user", "name"]}
                    label="Keywords"
                    style={{
                      display: "block",
                      margin: "3px",
                    }}
                  >
                    <Input placeholder="Skills,job title,company..." />
                  </Form.Item>
                  <Form.Item
                    name={["user", "name"]}
                    label="Location"
                    style={{
                      display: "block",
                      margin: "3px",
                    }}
                  >
                    <Select
                      labelInValue
                      defaultValue={{
                        value: "All Locatiion",
                        label: "All Locatiion",
                      }}
                      style={{ flex: 1, color: "blue" }}
                      options={[
                        {
                          value: "san francisco,ca",
                          label: "San Francisco,CA",
                        },
                        { value: "new york,ny", label: "New York,NY" },
                        { value: "remote", label: "Remote" },
                        { value: "Austin,tx", label: "Austin,TX" },
                      ]}
                    />
                  </Form.Item>
                </Form>
                <div>
                  <Text>Experience Level</Text>
                  <Checkbox>Entry Level (0-2 years)</Checkbox>
                  <Checkbox>Mid Level (3-5 years)</Checkbox>
                  <Checkbox>Senior Level (5+ years)</Checkbox>
                </div>
                <Form
                  form={form}
                  name="nest-messages"
                  layout="vertical"
                  style={{ width: "100%" }}
                >
                  <Form.Item
                    name={["user", "name"]}
                    label="Skills"
                    style={{
                      display: "block",
                      margin: "3px",
                    }}
                  >
                    <Input placeholder="Add skill..." />
                  </Form.Item>
                  <Tag color="processing">
                    React <CloseOutlined />
                  </Tag>
                  <Tag color="processing">
                    JavaScript <CloseOutlined />
                  </Tag>
                  <Tag color="processing">
                    Node.js <CloseOutlined />
                  </Tag>
                  <Form.Item
                    name={["user", "name"]}
                    label="Availability"
                    style={{
                      display: "block",
                      margin: "3px",
                    }}
                  >
                    <Select
                      labelInValue
                      defaultValue={{
                        value: "All ",
                        label: "All ",
                      }}
                      style={{ flex: 1 }}
                      options={[
                        {
                          value: "immediately",
                          label: "Immediately",
                        },
                        { value: "Within 2 weeks", label: "Within 2 weeks" },
                        { value: "within 1 month", label: "Within 1 month" },
                      ]}
                    />
                  </Form.Item>
                </Form>
                <Flex
                  vertical
                  gap="small"
                  style={{ width: "100%", marginTop: "20px" }}
                >
                  <Button type="primary" icon={<SearchOutlined />}>
                    Search Candidates
                  </Button>
                  <Button
                    block
                    icon={
                      <SyncOutlined
                        style={{
                          background: "blue",
                          padding: "2px",
                          borderRadius: "20%",
                          color: "white",
                        }}
                      />
                    }
                  >
                    Clear Filters
                  </Button>
                </Flex>
              </Card>
            </Col>
            <Col xs={24} lg={18}>
              <Card
                title={
                  <div style={{ position: "relative", padding: "10px" }}>
                    <div style={{ display: "flex", gap: "4px" }}>
                      <Text>1,247 candidates found </Text>
                      <span style={{ color: "grey" }}>
                        • Showing best matches first
                      </span>
                    </div>
                    <div style={{ position: "absolute", top: 0, right: 0 }}>
                      <Select
                        labelInValue
                        defaultValue={{
                          value: "Best match ",
                          label: "Best Match ",
                        }}
                        options={[
                          { value: "most recent", label: "Most Recent" },
                          { value: "best match", label: "Best Match" },
                          { value: "experience", label: "Experience" },
                          { value: "location", label: "Location" },
                        ]}
                      />
                      <Button
                        style={{ marginLeft: "10px" }}
                        icon={<BarChartOutlined />}
                      >
                        Bulk Actions
                      </Button>
                    </div>
                  </div>
                }
              >
                <Card
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    position: "relative",
                  }}
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <div>
                      <Avatar
                        style={{
                          backgroundColor: "#3311f0ff",
                          verticalAlign: "middle",
                        }}
                        size={64}
                      >
                        JD
                      </Avatar>
                    </div>
                    <div>
                      <Title
                        level={2}
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        John Doe
                      </Title>
                      <Text style={{ fontSize: "14px", color: "#84c9f7ff" }}>
                        Senior Frontend Developer
                      </Text>
                      <Paragraph style={{ color: "#858684ff" }}>
                        San Francisco,CA • 💼 5+ years experience
                      </Paragraph>
                      <Paragraph style={{ color: "#858684ff" }}>
                        <CalendarOutlined />
                        Currently at: TechCorp Inc.
                      </Paragraph>
                      <Paragraph style={{ color: "#858684ff" }}>
                        Experienced frontend developer with expertise in React,
                        TypeScript, and modern web technologies. Led team of 5
                        developers and delivered 20+ projects.
                      </Paragraph>
                      <Flex gap="4px 0" wrap>
                        <Tag color="processing">React</Tag>
                        <Tag color="processing">TypeScript</Tag>
                        <Tag color="processing">Node.js</Tag>
                        <Tag color="success">Team Lead</Tag>
                        <Tag color="gold">Available in 2 weeks</Tag>
                      </Flex>
                      <Flex gap="small" wrap style={{ marginTop: "10px" }}>
                        <Button
                          type="primary"
                          size="small"
                          icon={<FileDoneOutlined />}
                        >
                          View Profile
                        </Button>
                        <Button size="small" icon={<MessageOutlined />}>
                          Message
                        </Button>
                        <Button size="small" icon={<CalendarOutlined />}>
                          Schedule Call
                        </Button>
                        <Button
                          type="text"
                          size="small"
                          icon={<HeartOutlined style={{ color: "red" }} />}
                        >
                          Save
                        </Button>
                      </Flex>
                    </div>
                  </div>
                  <Tag
                    color="success"
                    style={{ position: "absolute", top: "20px", right: "20px" }}
                  >
                    95% Match
                  </Tag>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      right: "20px",
                      color: "grey",
                    }}
                  >
                    Last active: 2 days ago
                  </span>
                </Card>
                <Card
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    position: "relative",
                  }}
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <div>
                      <Avatar
                        style={{
                          backgroundColor: "#23f33fff",
                          verticalAlign: "middle",
                        }}
                        size={64}
                      >
                        ES
                      </Avatar>
                    </div>
                    <div>
                      <Title
                        level={2}
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        Emily Smith
                      </Title>
                      <Text style={{ fontSize: "14px", color: "#84c9f7ff" }}>
                        Product Designer
                      </Text>
                      <Paragraph style={{ color: "#858684ff" }}>
                        📍 Austin, TX • 💼 3+ years experience
                      </Paragraph>
                      <Paragraph style={{ color: "#858684ff" }}>
                        <CalendarOutlined />
                        Currently at: Design Studio Pro
                      </Paragraph>
                      <Paragraph style={{ color: "#858684ff" }}>
                        Creative product designer specializing in user
                        experience and interface design. Portfolio includes 15+
                        mobile apps and web platforms
                      </Paragraph>
                      <Flex gap="4px 0" wrap>
                        <Tag color="processing">Figma</Tag>
                        <Tag color="processing">Ul/UX</Tag>
                        <Tag color="processing">Prototyping</Tag>
                        <Tag color="success">Portfolio</Tag>
                        <Tag color="gold">Available immediately</Tag>
                      </Flex>
                      <Flex gap="small" wrap style={{ marginTop: "10px" }}>
                        <Button
                          type="primary"
                          size="small"
                          icon={<FileDoneOutlined />}
                        >
                          View Profile
                        </Button>
                        <Button size="small" icon={<MessageOutlined />}>
                          Message
                        </Button>
                        <Button size="small" icon={<CalendarOutlined />}>
                          Schedule Call
                        </Button>
                        <Button
                          type="text"
                          size="small"
                          icon={<HeartOutlined style={{ color: "red" }} />}
                        >
                          Save
                        </Button>
                      </Flex>
                    </div>
                  </div>
                  <Tag
                    color="success"
                    style={{ position: "absolute", top: "20px", right: "20px" }}
                  >
                    87% Match
                  </Tag>
                  <Paragraph
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      right: "20px",
                      color: "grey",
                    }}
                  >
                    Last active: 5 hours ago
                  </Paragraph>
                </Card>
                <Card
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    position: "relative",
                  }}
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <div>
                      <Avatar
                        style={{
                          backgroundColor: "#f7bf08ff",
                          verticalAlign: "middle",
                        }}
                        size={64}
                      >
                        AC
                      </Avatar>
                    </div>
                    <div>
                      <Title
                        level={2}
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        Alex Chen
                      </Title>
                      <Text style={{ fontSize: "15px", color: "#84c9f7ff" }}>
                        Full Stack Engineer
                      </Text>
                      <Paragraph
                        style={{ color: "#8b8b89ff", fontSize: "13px" }}
                      >
                        📍 Remote • 💼 4+ years experience
                      </Paragraph>
                      <Paragraph style={{ color: "#858684ff" }}>
                        <CalendarOutlined />
                        Currently at: StartupXYZ
                      </Paragraph>
                      <Paragraph style={{ color: "#9fa39cff" }}>
                        Full-stack developer with strong background in both
                        frontend and backend technologies. Built scalable
                        applications serving 100k+ users.
                      </Paragraph>
                      <Flex gap="4px 0" wrap>
                        <Tag color="processing">React</Tag>
                        <Tag color="processing">TypeScript</Tag>
                        <Tag color="processing">Node.js</Tag>
                        <Tag color="success">Team Lead</Tag>
                        <Tag color="gold">Available in 2 weeks</Tag>
                      </Flex>
                      <Flex gap="small" wrap style={{ marginTop: "10px" }}>
                        <Button
                          type="primary"
                          size="small"
                          icon={<FileDoneOutlined />}
                        >
                          View Profile
                        </Button>
                        <Button size="small" icon={<MessageOutlined />}>
                          Message
                        </Button>
                        <Button size="small" icon={<CalendarOutlined />}>
                          Schedule Call
                        </Button>
                        <Button
                          type="text"
                          size="small"
                          icon={<HeartOutlined style={{ color: "red" }} />}
                        >
                          Save
                        </Button>
                      </Flex>
                    </div>
                  </div>
                  <Tag
                    color="success"
                    style={{ position: "absolute", top: "20px", right: "20px" }}
                  >
                    92% Match
                  </Tag>
                  <Text
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      right: "20px",
                      color: "grey",
                    }}
                  >
                    Last active: 1 day ago
                  </Text>
                </Card>
              </Card>
            </Col>
          </Row>
        </Layout>
      </div>
    </Layout>
  );
}
