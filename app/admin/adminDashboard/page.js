"use client";
import AppHeader from "@/modules/components/AppHeader/AppHeader";
import {
  AlertOutlined,
  CheckSquareOutlined,
  DollarOutlined,
  EditOutlined,
  FileTextOutlined,
  FundOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  PlusOutlined,
  ProjectOutlined,
  RedditOutlined,
  RocketOutlined,
  SettingOutlined,
  StopOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  UsergroupAddOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Flex,
  Input,
  Layout,
  Row,
  Table,
  Tag,
  Tooltip,
} from "antd";
import { Content } from "antd/es/layout/layout";
import Image from "next/image";
const { Search } = Input;

const columns = [
  {
    title: "User",
    dataIndex: "user",
    key: "user",
    render: (text) => text,

    width: "30%",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    width: "20%",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: "20%",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: "Joined",
    dataIndex: "joined",
    key: "joined",
    width: "15%",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    width: "15%",

    ellipsis: {
      showTitle: false,
    },
    render: (actions) => (
      <Tooltip placement="topLeft" title={actions}>
        {actions}
      </Tooltip>
    ),
  },
];
const data = [
  {
    key: "1",
    user: (
      <div style={{ display: "flex", gap: "8px" }}>
        <Avatar
          size="40%"
          style={{
            backgroundColor: "blue",
            verticalAlign: "middle",
          }}
        >
          JD
        </Avatar>
        <div>
          <h1 style={{ fontSize: "16px", fontWeight: "bold" }}>John Doe</h1>
          <p style={{ color: "grey" }}>john@gmail.com</p>
        </div>
      </div>
    ),
    role: <Tag color="blue">Candidate</Tag>,
    status: <Tag color="green">Active</Tag>,
    joined: "Mar 15,2024",
    actions: <EditOutlined style={{ color: "yellow", fontSize: "16px" }} />,
    width: "10%",
  },
  {
    key: "2",
    user: (
      <div style={{ display: "flex", gap: "8px" }}>
        <Avatar
          size="30%"
          style={{
            backgroundColor: "green",
            verticalAlign: "middle",
          }}
        >
          SM
        </Avatar>
        <div>
          <h1 style={{ fontSize: "16px", fontWeight: "bold" }}>Sarah Miller</h1>
          <p style={{ color: "grey" }}>sarah@gmail.com</p>
        </div>
      </div>
    ),
    role: <Tag color="purple">Recruiter</Tag>,
    status: <Tag color="green">Active</Tag>,
    joined: "Mar 15,2024",
    actions: <StopOutlined style={{ color: "red", fontSize: "16px" }} />,
    width: "15%",
  },
  {
    key: "3",
    user: (
      <div style={{ display: "flex", gap: "8px" }}>
        <Avatar
          size="40%"
          style={{
            backgroundColor: "orange",
            verticalAlign: "middle",
          }}
        >
          MJ
        </Avatar>
        <div>
          <h1 style={{ fontSize: "16px", fontWeight: "bold" }}>Mike Johnson</h1>
          <p style={{ color: "grey" }}>mike.j@startup.com</p>
        </div>
      </div>
    ),
    role: <Tag color="purple">Recruiter</Tag>,
    status: <Tag color="orange">Suspended</Tag>,
    joined: "Mar 15,2024",
    actions: (
      <CheckSquareOutlined style={{ color: "green", fontSize: "15px" }} />
    ),
  },
];

export default function AdminDashboard() {
  return (
    <Layout>
      <AppHeader />
      <Content style={{ padding: "15px 48px" }}>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6}>
            <Card
              variant="borderless"
              style={{ position: "relative", marginBottom: "10px" }}
            >
              <h1 style={{ color: "grey", fontSize: "14px" }}>Total Users</h1>

              <div>
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>24,567</p>
                <span style={{ color: " #4bf109ff" }}>+1,234 this month</span>
                <UsergroupAddOutlined
                  style={{
                    background: " #edf6f8ff",
                    color: "gray",
                    position: "absolute",
                    top: "10%",
                    right: "10px",
                    fontSize: "20px",
                    padding: "5px",
                    borderRadius: "10%",
                  }}
                />
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card variant="borderless" style={{ marginBottom: "10px" }}>
              <h1 style={{ color: "grey", fontSize: "14px" }}>
                Active Recruiters
              </h1>
              <div>
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>1,847</p>
                <span style={{ color: " #4bf109ff" }}>+67% this month</span>
                <PhoneOutlined
                  style={{
                    background: "#edf6f8ff",
                    color: " #f03030ff",
                    position: "absolute",
                    top: "10%",
                    right: "10px",
                    fontSize: "20px",
                    padding: "5px",
                    borderRadius: "10%",
                  }}
                />
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card variant="borderless" style={{ marginBottom: "10px" }}>
              <h1 style={{ color: "grey", fontSize: "14px" }}>CVs Generated</h1>
              <div>
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>156,423</p>
                <span style={{ color: " #4bf109ff" }}>+5,234 this month</span>
                <Image
                  src="/assect/cv.png"
                  width={30}
                  height={30}
                  alt=""
                  style={{
                    background: "#edf6f8ff",
                    position: "absolute",
                    top: "10%",
                    right: "10px",
                    fontSize: "20px",
                    padding: "5px",
                    borderRadius: "10%",
                  }}
                />
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card variant="borderless">
              <h1 style={{ color: "grey", fontSize: "14px" }}>Revenue (MRR)</h1>
              <div>
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>$89,456</p>
                <span style={{ color: " #09f115ff" }}>+12% improvement </span>
                <DollarOutlined
                  style={{
                    background: "#edf6f8ff",
                    color: "#faea0cff",
                    position: "absolute",
                    top: "10%",
                    right: "10px",
                    fontSize: "20px",
                    padding: "5px",
                    borderRadius: "10%",
                  }}
                />
              </div>
            </Card>
          </Col>
        </Row>
        <Layout style={{ marginTop: "20px" }}>
          <Row gutter={(16, 16)}>
            <Col xs={24} sm={12} md={16}>
              <Card title="User Management" style={{ position: "relative" }}>
                <Table columns={columns} dataSource={data} />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Search
                    placeholder="input search text"
                    allowClear
                    style={{ width: 200 }}
                  />
                  <Button type="primary">
                    <PlusOutlined /> Add User
                  </Button>
                </div>
              </Card>
              <Card title="System Performance" style={{ marginTop: "10px" }}>
                <Row gutter={16}>
                  <Col
                    xs={24}
                    sm={12}
                    md={8}
                    style={{ textAlign: "center", marginBottom: "10px" }}
                  >
                    <Card variant="borderless">
                      <ThunderboltOutlined
                        style={{
                          color: "yellow",
                          fontSize: "25px",
                        }}
                      />
                      <p style={{ fontSize: "20px" }}>99.9%</p>
                      <span>Uptime</span>
                    </Card>
                  </Col>
                  <Col
                    xs={24}
                    sm={12}
                    md={8}
                    style={{ textAlign: "center", marginBottom: "10px" }}
                  >
                    <Card variant="borderless">
                      <RocketOutlined
                        style={{ color: "#3c4ff7ff", fontSize: "25px" }}
                      />
                      <p style={{ fontSize: "20px" }}>1.2s</p>
                      <span>Avg Response</span>
                    </Card>
                  </Col>
                  <Col
                    xs={24}
                    sm={12}
                    md={8}
                    style={{ textAlign: "center", marginBottom: "10px" }}
                  >
                    <Card variant="borderless">
                      <RedditOutlined
                        style={{ color: "#2af8eeff", fontSize: "25px" }}
                      />
                      <p style={{ fontSize: "20px" }}>98.5%</p>
                      <span>AI Accuracy</span>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} md={8} style={{ textAlign: "center" }}>
                    <Card variant="borderless">
                      <FileTextOutlined
                        style={{ color: "#9b9e9eff", fontSize: "25px" }}
                      />
                      <p style={{ fontSize: "20px" }}>2.1TB</p>
                      <span>Data Stored</span>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                title={
                  <>
                    <AlertOutlined style={{ color: "red", padding: "10px" }} />
                    System Alerts
                  </>
                }
              >
                <Card style={{ borderColor: "gold", background: "#fdfacfff" }}>
                  <p style={{ color: "orange" }}>
                    <WarningOutlined
                      style={{
                        color: "gold",
                        padding: "6px",
                        fontSize: "15px",
                      }}
                    />
                    High API Usage
                  </p>
                  <span style={{ color: "orange" }}>
                    LinkedIn API approaching rate limit (89% used)
                  </span>
                </Card>
                <Card
                  style={{
                    borderColor: "green",
                    background: "#f0fff1ff",
                    marginTop: "10px",
                  }}
                >
                  <p style={{ color: "green" }}>
                    <CheckSquareOutlined
                      style={{
                        color: "green",
                        padding: "6px",
                        fontSize: "15px",
                      }}
                    />
                    Backup Complete
                  </p>
                  <span style={{ color: "green" }}>
                    Daily backup completed successfully at 3:00 AM
                  </span>
                </Card>
                <Card
                  style={{
                    borderColor: "blue",
                    background: "#f2f0ffff",
                    marginTop: "10px",
                  }}
                >
                  <p style={{ color: "blue" }}>
                    <InfoCircleOutlined
                      style={{
                        color: "blue",
                        fontSize: "15px",
                        padding: "6px",
                      }}
                    />
                    Maintenance Scheduled
                  </p>
                  <span style={{ color: "blue" }}>
                    System maintenance planned for Sunday 2:00 AM
                  </span>
                </Card>
              </Card>
              <Card
                title={
                  <>
                    <ThunderboltOutlined
                      style={{ color: "yellow", fontSize: "20px" }}
                    />
                    Quick Actions
                  </>
                }
                style={{ marginTop: "10px" }}
              >
                <Flex vertical gap="small" style={{ width: "100%" }}>
                  <Button type="primary" block>
                    <UsergroupAddOutlined
                      style={{ fontSize: "18px", color: "#383838ff" }}
                    />
                    View All User
                  </Button>
                  <Button block>
                    <ProjectOutlined style={{ color: "" }} />
                    Generate Reports
                  </Button>
                  <Button block>
                    <ToolOutlined /> System Setting
                  </Button>
                  <Button block>
                    {" "}
                    <FileTextOutlined /> Template Management
                  </Button>
                  <Button block>
                    {" "}
                    <DollarOutlined
                      style={{ color: "yellow", fontSize: "15px" }}
                    />{" "}
                    Billing Overview
                  </Button>
                  <Button block>
                    {" "}
                    <SettingOutlined /> API Management
                  </Button>
                </Flex>
              </Card>
              <Card
                title={
                  <>
                    <FundOutlined
                      style={{ fontSize: "15px", padding: "10px" }}
                    />
                    Recent Activity
                  </>
                }
                style={{ marginTop: "10px" }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <UsergroupAddOutlined
                    style={{
                      fontSize: "18px",
                      background: "#f0fdf1ff",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <p style={{ fontSize: "14px" }}>New recruiter registered</p>
                    <span style={{ color: "grey" }}>2 minutes</span>
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "15px", marginBottom: "10px" }}
                >
                  <DollarOutlined
                    style={{
                      fontSize: "18px",
                      background: "#eefdefff",
                      padding: "10px",
                      borderRadius: "50%",
                      color: "yellow",
                    }}
                  />
                  <div>
                    <p style={{ fontSize: "14px" }}>Payment received</p>
                    <span style={{ color: "grey" }}>15 minutes</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "15px" }}>
                  <AlertOutlined
                    style={{
                      fontSize: "18px",
                      background: "#f3fcf4ff",
                      padding: "10px",
                      borderRadius: "50%",
                      color: "red",
                    }}
                  />
                  <div>
                    <p style={{ fontSize: "14px" }}>API rate limit warning</p>
                    <span style={{ color: "grey" }}>1 hours ago</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Layout>
      </Content>
    </Layout>
  );
}
