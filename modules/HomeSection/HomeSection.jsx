"use client";
import "aos/dist/aos.css";

import {
  faArrowRight,
  faBriefcase,
  faPalette,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Col, Layout, Row, Typography } from "antd";
import Aos from "aos";
import { motion } from "motion/react";

import { useEffect } from "react";
import {
  Buttons,
  Content,
  HomeSectionCard,
  Section,
  Span,
} from "./HomeSection.stc";

const { Title, Paragraph } = Typography;

const cardItem = [
  {
    icon: <FontAwesomeIcon icon={faRobot} style={{ fontSize: "35px" }} />,
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
      <Section>
        <Content style={{ position: "relative", borderRadius: "8px" }}>
          <motion.h1
            className="homeTitle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            style={{ color: "white", fontSize: "45px" }}
          >
            Build Your Perfect CV with AI
          </motion.h1>
          <div style={{ marginTop: "8px", textAlign: "center" }}>
            <Span>
              Create professional CVs tailored to any job posting using our
              intelligent CV builder. Get hired faster with AI-optimized resumes
              following modern design principles.
            </Span>
          </div>

          <Buttons
            gap="small"
            style={{ marginTop: "24px", justifyContent: "center" }}
          >
            <Button size="large" className="button1">
              Start Building{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{
                  alignItems: "center",
                  fontSize: "15px",
                }}
              />
            </Button>
            <Button
              size="large"
              ghost
              className="button2"
              whileHover={{ scale: 1.2 }}
            >
              Watch Demo
            </Button>
          </Buttons>
        </Content>

        <div style={{ justifyContent: "center", marginTop: "40px" }}>
          <Row gutter={[16, 16]}>
            {cardItem.map((item, index) => (
              <Col key={index} xs={24} sm={24} md={12} lg={8}>
                <HomeSectionCard data-aos="fade-right">
                  <div className="Icon">{item.icon}</div>
                  <Title level={3} className="title">
                    {item.title}
                  </Title>
                  <Paragraph className="paragraph">{item.span}</Paragraph>
                </HomeSectionCard>
              </Col>
            ))}
          </Row>
        </div>
      </Section>
    </Layout>
  );
}
