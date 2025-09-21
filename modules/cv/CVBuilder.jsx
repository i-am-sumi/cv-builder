"use client";

import AppHeader from "@/modules/components/AppHeader/AppHeader";

import Icon from "@ant-design/icons";
import {
  faBolt,
  faBriefcase,
  faGraduationCap,
  faSquarePollHorizontal,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Flex,
  Layout,
  Menu,
  Row,
  Tag,
  Typography,
} from "antd";
import { CVbuilderCard, Iconwrapper } from "./CVBuilder.stc";

const { Title, Paragraph, Text } = Typography;

const Education = (props) => <Icon component={<EducationIcon />} {...props} />;
const ExperienceSvg = (props) => (
  <Icon component={<ExperienceIcon />} {...props} />
);
const CVSvg = (props) => <Icon component={<CVIcon />} {...props} />;
const items = [
  {
    key: "sub1",
    label: <Title level={4}>CV Components</Title>,
  },
  {
    type: "divider",
  },
  {
    key: "sub4",
    label: "ESSENTIAL SECTIONS",
    type: "group",
    children: [
      {
        key: "9",
        label: "Personal Info",
        icon: (
          <Iconwrapper
            style={{ background: "blue", padding: "5px", color: "white" }}
          >
            <FontAwesomeIcon icon={faUser} />
          </Iconwrapper>
        ),
      },
      {
        key: "10",
        label: "Professional Summary",
        icon: (
          <Iconwrapper
            style={{
              fontSize: "15px",
              background: "green",
              color: "white",
              padding: "5px",
            }}
          >
            <FontAwesomeIcon icon={faSquarePollHorizontal} />
          </Iconwrapper>
        ),
      },
      {
        key: "11",
        label: "Work Experience",
        icon: (
          <Iconwrapper
            style={{ background: "orange", padding: "5px", color: "white" }}
          >
            <FontAwesomeIcon icon={faBriefcase} />
          </Iconwrapper>
        ),
      },
      {
        key: "12",
        label: "Education",
        icon: (
          <Iconwrapper
            Iconwrapper
            style={{
              background: "#4f08f5",
              color: "white",
              padding: "5px",
            }}
          >
            <FontAwesomeIcon icon={faGraduationCap} />
          </Iconwrapper>
        ),
      },
      {
        key: "13",
        label: "Skills",
        icon: (
          <Iconwrapper
            style={{
              background: "#f508ae",
              color: "yellow",
              padding: "5px",
            }}
          >
            <FontAwesomeIcon icon={faBolt} />
          </Iconwrapper>
        ),
      },
    ],
  },
  {
    key: "grp",
    label: "ADDTIONAL SECTIONS",

    type: "group",
    children: [
      { key: "14", label: "Projects" },
      { key: "15", label: "Languages" },
    ],
  },
];

const handleScroll = (direction, e) => {
  console.log("direction:", direction);
  console.log("target:", e.target);
};

export default function CVBuilder() {
  return (
    <Layout>
      <AppHeader />
      <div style={{ margin: "10px 40px", display: "flex", gap: "15px" }}>
        <Row gutter={[16, 16]} style={{ width: "100%" }}>
          <Col xs={24} sm={16} md={6} lg={6}>
            <Menu
              className=""
              style={{
                color: "gray",
                borderInlineEnd: 0,
              }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </Col>

          <Col xs={24} sm={16} md={10} lg={10}>
            <Card
              title={
                <Breadcrumb
                  items={[
                    {
                      href: "",
                      title: "My CVs",
                    },
                    {
                      title: <Text>Frontend Developer CV</Text>,
                    },
                    {
                      title: "Application",
                    },
                  ]}
                />
              }
              style={{
                overflowY: "auto",
                scrollBehavior: "smooth",
                background: "#faf9f9ff",
              }}
            >
              <div style={{ maxHeight: "600px", overflowY: "auto" }}>
                <CVbuilderCard
                  hoverable
                  style={{
                    marginBottom: "10px",
                  }}
                  title={
                    <div style={{ display: "flex" }}>
                      <FontAwesomeIcon icon={faUser} className="user-icon" />
                      <Title level={3} style={{ alignItems: "center" }}>
                        Personal Information
                      </Title>
                    </div>
                  }
                >
                  <Title level={3} style={{ textAlign: "center" }}>
                    John Doe
                  </Title>
                  <Paragraph
                    style={{
                      textAlign: "center",
                      color: "blue",
                      fontSize: "17px",
                    }}
                  >
                    Senior Frontend Developer
                  </Paragraph>
                  <Paragraph style={{ textAlign: "center", fontSize: "14px" }}>
                    📧 john.doe@email.com | 📱 +1 (555) 123-
                  </Paragraph>
                  <Paragraph style={{ textAlign: "center", fontSize: "14px" }}>
                    4567 | 💼 linkedin.com/in/johndoe
                  </Paragraph>
                </CVbuilderCard>
                <Card
                  style={{ marginBottom: "10px" }}
                  size="small"
                  title={
                    <div
                      style={{ display: "flex", gap: "5px", padding: "5px" }}
                    >
                      <CVIcon style={{ marginTop: "10px" }} />
                      <Title level={3}>Professional Summary</Title>
                    </div>
                  }
                >
                  <Paragraph style={{ fontSize: "15px" }}>
                    Experienced frontend developer with 5+ years building
                    scalable web applications using React and modern JavaScript
                    frameworks. Proven track record of improving application
                    performance by 40% and leading cross-functional teams to
                    deliver high-quality products.
                  </Paragraph>
                </Card>
                <Card
                  style={{ marginBottom: "10px" }}
                  title={
                    <div style={{ display: "flex", gap: "5px" }}>
                      <ExperienceIcon />
                      <Title level={3}>Work Experience</Title>
                    </div>
                  }
                >
                  <Title level={5} style={{ fontSize: "18px" }}>
                    Senior Frontend Developer
                  </Title>
                  <Text style={{ fontSize: "13px", color: "blue" }}>
                    TechCorp Inc
                  </Text>
                  <Paragraph>2022-Present|San Francisco,CA</Paragraph>
                  <ul>
                    <li>
                      Led development of React-based dashboard serving 100k+
                      users daily
                    </li>
                    <li>
                      {" "}
                      Improved application performance by 40% through code
                      optimization
                    </li>
                    <li>
                      Mentored 3 junior developers and established coding
                      standards
                    </li>
                  </ul>
                  <br />
                  <Title level={2} style={{ fontSize: "18px" }}>
                    Frontend Developer
                  </Title>
                  <Text style={{ fontSize: "13px", color: "blue" }}>
                    WebSolutions Ltd.
                  </Text>
                  <Paragraph>2020 - 2022 | Remote</Paragraph>
                  <ul>
                    <li>
                      Built responsive web applications using React and
                      TypeScript
                    </li>
                    <li>
                      {" "}
                      Collaborated with design team to implement pixel-perfect
                      UIs
                    </li>
                  </ul>
                </Card>
                <Card
                  style={{ marginBottom: "10px" }}
                  title={
                    <div style={{ display: "flex", gap: "5px" }}>
                      <EducationIcon />
                      <Title level={3}>Education</Title>
                    </div>
                  }
                >
                  <Title level={5} style={{ fontSize: "18px" }}>
                    Bachelor of Computer Science
                  </Title>
                  <Text style={{ fontSize: "13px", color: "blue" }}>
                    University of Technology
                  </Text>
                  <Paragraph>2016 - 2020 | GPA: 3.8/4.0</Paragraph>
                  <ul>
                    <li>
                      Relevant Coursework: Data Structures, Algorithms, Web
                      Development
                    </li>
                    <li> Deans List for 6 semesters</li>
                    <li>
                      {" "}
                      Senior Project: E-commerce Platform using React and
                      Node.js
                    </li>
                  </ul>
                </Card>
                <Card
                  style={{ marginBottom: "10px" }}
                  size="small"
                  title={<Title level={3}>Technical Skills</Title>}
                >
                  <Text style={{ fontSize: "13px" }}>
                    Programming Languages
                  </Text>
                  <Flex gap="4px 0" wrap>
                    <Tag color="processing">JavaScript</Tag>
                    <Tag color="processing">TypeScript</Tag>
                    <Tag color="processing">Python</Tag>
                    <Tag color="processing">Java</Tag>
                  </Flex>
                  <br />
                  <Text style={{ fontSize: "13px" }}>
                    Frameworks & Libraries
                  </Text>
                  <Flex gap="4px 0" wrap>
                    <Tag color="green">React</Tag>
                    <Tag color="green">Node.js</Tag>
                    <Tag color="green">Express</Tag>
                    <Tag color="green">Next.js</Tag>
                  </Flex>
                  <br />

                  <Text style={{ fontSize: "13px" }}>Tools & Technologies</Text>
                  <Flex gap="4px 0" wrap>
                    <Tag color="warning">AWS</Tag>
                    <Tag color="warning">Docker</Tag>
                    <Tag color="warning">Git</Tag>
                    <Tag color="warning">MongoDB</Tag>
                  </Flex>
                </Card>
                <Card
                  style={{ marginBottom: "10px" }}
                  size="small"
                  title={<Title level={3}>Key Projects</Title>}
                >
                  <Title level={4} style={{ fontSize: "18px" }}>
                    E-commerce Dashboard
                  </Title>
                  <Text style={{ fontSize: "13px", color: "blue" }}>
                    React, Node.js, MongoDB | 🔗 Live Demo
                  </Text>
                  <Paragraph>2023 | Personal Project</Paragraph>
                  <ul>
                    <li>
                      Built full-stack e-commerce platform with real-time
                      analytics
                    </li>
                    <li>
                      {" "}
                      Implemented secure payment processing and inventory
                      management
                    </li>
                    <li> Achieved 98% uptime and 2-second load times</li>
                  </ul>
                  <br />
                  <Title level={4} style={{ fontSize: "18px" }}>
                    Mobile Task Manager
                  </Title>
                  <Text style={{ fontSize: "13px", color: "blue" }}>
                    React Native, Firebase | 📱 App Store
                  </Text>
                  <Paragraph>2022 | Team Project</Paragraph>
                  <ul>
                    <li>
                      Collaborated with 3 developers to create cross-platform
                      mobile app
                    </li>
                    <li>
                      {" "}
                      Integrated offline functionality and real-time
                      synchronization
                    </li>
                  </ul>
                </Card>
                <Button type="dashed">Dashed Button</Button>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={16} md={8} lg={8}>
            <Card
              title={
                <div>
                  <Title level={4}>Live Preview</Title>
                </div>
              }
            >
              <Card style={{ textAlign: "center" }}>
                <Title level={3}>John Doe</Title>
                <Paragraph type="success" style={{ fontSize: "16px" }}>
                  Senior Frontend Developerxx
                </Paragraph>
                <Text>📧 john.doe@email.com | 📱 +1 (555) 123-</Text>
                <br />
                <Text>4567 | 💼 linkedin.com/in/johndoe</Text>
              </Card>
              <br />
              <Title level={4}>Professional Summary</Title>
              <Card>
                <Paragraph style={{ fontSize: "15px" }}>
                  Experienced frontend developer with 5+ years building scalable
                  web applications using React and modern JavaScript frameworks.
                </Paragraph>
              </Card>
              <br />
              <Title level={4}>Work Experience</Title>
              <Card>
                <Paragraph style={{ fontSize: "16px" }}>
                  Senior Frontend Developer
                </Paragraph>
                <Text style={{ fontSize: "15px", color: "blue" }}>
                  TechCorp Inc
                </Text>
                <Paragraph>2022-Present|San Francisco,CA</Paragraph>
                <ul>
                  <li>
                    Led development of React-based dashboard serving 100k+ users
                    daily
                  </li>
                  <li>
                    {" "}
                    Improved application performance by 40% through code
                    optimization
                  </li>
                  <li>
                    Mentored 3 junior developers and established coding
                    standards
                  </li>
                </ul>
              </Card>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
