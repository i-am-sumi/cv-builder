"use client";

import AppHeader from "@/modules/components/AppHeader/AppHeader";
import CVIcon from "@/modules/components/SvgForder/CV";
import EducationIcon from "@/modules/components/SvgForder/EducationIcon";
import ExperienceIcon from "@/modules/components/SvgForder/Experiences";

import Icon, { UserOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Card,
  Flex,
  Layout,
  Menu,
  Tag,
  Typography,
} from "antd";
import { CVbuilderCard } from "./CVBuilder.stc";

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
      { key: "9", label: "Personal Info", icon: <UserOutlined /> },
      { key: "10", label: "Professional Summary", icon: <CVIcon /> },
      {
        key: "11",
        label: "Work Experience",
        icon: <ExperienceIcon style={{ color: "red" }} />,
      },
      {
        key: "12",
        label: "Education",
        icon: (
          <EducationIcon
            style={{
              color: "#724a1dff",
              background: "#a908e9ff",
              fontSize: "10px",
            }}
          />
        ),
      },
      { key: "13", label: "Skills" },
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
        <Menu
          style={{ width: 256, color: "gray", borderInlineEnd: 0 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />

        <Card
          title={
            <Breadcrumb
              routes={[
                {
                  path: "/",
                  breadcrumbName: "My CVs",
                },
                {
                  path: "/",
                  breadcrumbName: "Frontend Developer Cv",
                  children: [
                    {
                      path: "/user1",
                      breadcrumbName: "Mobile View",
                    },
                    {
                      path: "/user2",
                      breadcrumbName: "Auto-save:on",
                    },
                    {
                      path: "/user2",
                      breadcrumbName: "Ai-Optimize",
                    },
                  ],
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
          <CVbuilderCard
            hoverable
            style={{
              marginBottom: "10px",
            }}
            title={
              <div style={{ display: "flex" }}>
                <UserOutlined className="user-icon" />

                <Title level={3} style={{ alignItems: "center" }}>
                  Personal Information
                </Title>
              </div>
            }
          >
            <Title style={{ textAlign: "center", fontSize: "20px" }}>
              John Doe
            </Title>
            <Paragraph
              style={{ textAlign: "center", color: "blue", fontSize: "15px" }}
            >
              Senior Frontend Developer
            </Paragraph>
            <Paragraph style={{ textAlign: "center" }}>
              📧 john.doe@email.com | 📱 +1 (555) 123-
            </Paragraph>
            <Paragraph style={{ textAlign: "center" }}>
              4567 | 💼 linkedin.com/in/johndoe
            </Paragraph>
          </CVbuilderCard>
          <Card
            style={{ marginBottom: "10px" }}
            size="small"
            title={
              <div style={{ display: "flex", gap: "5px", padding: "5px" }}>
                <CVIcon style={{ marginTop: "10px" }} />
                <Title level={3}>Professional Summary</Title>
              </div>
            }
          >
            <Paragraph>
              Experienced frontend developer with 5+ years building scalable web
              applications using React and modern JavaScript frameworks. Proven
              track record of improving application performance by 40% and
              leading cross-functional teams to deliver high-quality products.
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
            <Title level={6} style={{ fontSize: "18px" }}>
              Senior Frontend Developer
            </Title>
            <Text style={{ fontSize: "13px", color: "blue" }}>
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
                Mentored 3 junior developers and established coding standards
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
                Built responsive web applications using React and TypeScript
              </li>
              <li>
                {" "}
                Collaborated with design team to implement pixel-perfect UIs
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
                Senior Project: E-commerce Platform using React and Node.js
              </li>
            </ul>
          </Card>
          <Card
            style={{ marginBottom: "10px" }}
            size="small"
            title={<Title level={3}>Technical Skills</Title>}
          >
            <Text style={{ fontSize: "13px" }}>Programming Languages</Text>
            <Flex gap="4px 0" wrap>
              <Tag color="processing">JavaScript</Tag>
              <Tag color="processing">TypeScript</Tag>
              <Tag color="processing">Python</Tag>
              <Tag color="processing">Java</Tag>
            </Flex>
            <br />
            <Text style={{ fontSize: "13px" }}>Frameworks & Libraries</Text>
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
                Built full-stack e-commerce platform with real-time analytics
              </li>
              <li>
                {" "}
                Implemented secure payment processing and inventory management
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
                Collaborated with 3 developers to create cross-platform mobile
                app
              </li>
              <li>
                {" "}
                Integrated offline functionality and real-time synchronization
              </li>
            </ul>
          </Card>
          <Button type="dashed">Dashed Button</Button>
        </Card>

        <Card
          title={
            <div>
              <Title level={4}>Live Preview</Title>
            </div>
          }
          style={{ width: 450 }}
        >
          <Card style={{ textAlign: "center" }}>
            <Title level={3}>John Doe</Title>
            <Paragraph type="success">Senior Frontend Developerxx</Paragraph>
            <Text>📧 john.doe@email.com | 📱 +1 (555) 123-</Text>
            <br />
            <Text>4567 | 💼 linkedin.com/in/johndoe</Text>
          </Card>
          <br />
          <Title level={4}>Professional Summary</Title>
          <Card>
            <Paragraph>
              Experienced frontend developer with 5+ years building scalable web
              applications using React and modern JavaScript frameworks.
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
                Mentored 3 junior developers and established coding standards
              </li>
            </ul>
          </Card>
        </Card>
      </div>
    </Layout>
  );
}
