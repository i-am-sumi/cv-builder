"use client";
import AppHeader from "@/modules/components/AppHeader/AppHeader";
import theme from "@/theme/themeConfig";
import { Button, Col, Flex, Layout, Row, Typography } from "antd";
import { Buttons, HomeSectionCard, Span } from "./HomeSection.stc";
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const cardItem = [
  {
    icon: "/assect/AiIcon.png",
    title: "AI-Powered Generation",
    span: "Smart algorithms analyze job requirements  content with drag-and-drop editing.",
  },
  {
    icon: "/assect/cv-bulder.png",
    title: "Interactive Builder",
    span: "Drag, drop, and customize every section with real-time preview and instant feedback.",
  },
  {
    icon: "/assect/jobIcon.png",
    title: "Job Matching",
    span: "Get real-time job recommendations with smart matching scores and one-click CV generation.",
  },
];

export default function HomeSection() {
  return (
    <Layout>
      <AppHeader />
      <div
        style={{
          marginTop: 0,
          padding: 0,
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: theme.token.bodyBg,
          }}
        >
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
              borderRadius: "8px",
            }}
          >
            <Title style={{ color: "white", textAlign: "center" }}>
              Build Your Perfect CV with AI
            </Title>
            <div
              style={{
                marginTop: "3px",
                marginButtom: "5px",
                textAlign: "center",
              }}
            >
              <Span>
                Create professional CVs tailored to any job posting using our
                intelligent CV builder. Get hired faster with AI-optimized
                resumes following modern design principles.
              </Span>
            </div>
            <Buttons gap="small" justify="center">
              <Button
                size="large"
                style={{
                  color: theme.token.colorPrimary,
                }}
              >
                Start Building
              </Button>

              <Button
                size="large"
                ghost
                style={{
                  color: theme.token.colorPrimary,
                }}
                className="button"
              >
                Watch Demo
              </Button>
            </Buttons>
          </Content>
          <Flex
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <Row gutter={16}>
              {cardItem.map((item, index) => (
                <Col key={index} xs={24} sm={24} md={12} lg={8}>
                  <HomeSectionCard
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.05) " }}
                  >
                    <img
                      src={item.icon}
                      alt="AI Icon"
                      style={{
                        width: "50px",
                        height: "50px",
                        margin: "0 auto 12px",
                      }}
                    />
                    <Title
                      leve={3}
                      style={{
                        textAlign: "center",
                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      {item.title}
                    </Title>
                    <Paragraph
                      style={{
                        textAlign: "center",
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      {item.span}
                    </Paragraph>
                  </HomeSectionCard>
                </Col>
              ))}
            </Row>
          </Flex>
        </Layout>
      </div>
    </Layout>
  );
}
