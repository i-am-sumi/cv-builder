"use client";
import AppHeader from "@/modules/components/AppHeader/AppHeader";
import "aos/dist/aos.css";

import {
  faBriefcase,
  faPalette,
  faShieldCat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Layout, Row, Typography } from "antd";
import Aos from "aos";
import { useEffect } from "react";
import {
  Buttons,
  HomeSectionCard,
  HomeTitle,
  Section,
  Span,
} from "./HomeSection.stc";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const cardItem = [
  {
    icon: (
      <FontAwesomeIcon
        icon={faShieldCat}
        style={{ fontSize: "35px", color: "orange" }}
      />
    ),
    title: "AI-Powered Generation",
    span: "Smart algorithms analyze job requirements content with drag-and-drop editing.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faPalette}
        style={{ fontSize: "35px", color: "orange" }}
      />
    ),
    title: "Interactive Builder",
    span: "Drag, drop, and customize every section with real-time preview and instant feedback.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faBriefcase}
        style={{ fontSize: "35px", color: "orange" }}
      />
    ),
    title: "Job Matching",
    span: "Get real-time job recommendations with smart matching scores and one-click CV generation.",
  },
];

export default function HomeSection() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Layout>
      <AppHeader />
      <Section>
        <Content style={{ position: "relative", borderRadius: "8px" }}>
          <HomeTitle
            data-aos="fade-right"
            style={{ color: "white", fontSize: "45px" }}
          >
            Build Your Perfect CV with AI
          </HomeTitle>
          <div style={{ marginTop: "8px", textAlign: "center" }}>
            <Span>
              Create professional CVs tailored to any job posting using our
              intelligent CV builder. Get hired faster with AI-optimized resumes
              following modern design principles.
            </Span>
          </div>

          <Buttons gap="small" justify="center" style={{ marginTop: "24px" }}>
            <Button size="large" className="button1">
              Start Building
            </Button>
            <Button
              size="large"
              ghost
              style={{ color: "blue" }}
              className="button2"
            >
              Watch Demo
            </Button>
          </Buttons>
        </Content>

        <div style={{ justifyContent: "center", marginTop: "40px" }}>
          <Row gutter={[16, 16]}>
            {cardItem.map((item, index) => (
              <Col key={index} xs={24} sm={24} md={12} lg={8}>
                <HomeSectionCard
                  data-aos="fade-right"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <div style={{ textAlign: "center", marginBottom: "12px" }}>
                    {item.icon}
                  </div>
                  <Title
                    level={3}
                    style={{ textAlign: "center", color: "white" }}
                  >
                    {item.title}
                  </Title>
                  <Paragraph
                    style={{
                      textAlign: "center",
                      fontSize: "18px",
                      color: "blue",
                    }}
                  >
                    {item.span}
                  </Paragraph>
                </HomeSectionCard>
              </Col>
            ))}
          </Row>
        </div>
      </Section>
    </Layout>
  );
}
