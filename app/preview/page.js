"use client";

import { MailOutlined } from "@ant-design/icons";
import { Col, Divider, Layout, Row, Tag, Typography } from "antd";
import { useEffect, useState } from "react";

const { Title, Text, Paragraph } = Typography;

export default function PreviewPage() {
  const [resumeData, setResumeData] = useState({
    user: null,
    summary: "",
    experiences: [],
    education: [],
    skills: [],
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const storedResume = localStorage.getItem("resumeData");
    const storeSummary = localStorage.getItem("professionalSummary");

    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const parsedResume = storedResume ? JSON.parse(storedResume) : {};

    setResumeData({
      user: parsedUser,
      summary:
        storeSummary ||
        parsedResume.summary ||
        "Experienced software engineer passionate about crafting scalable web applications with modern technologies.",
      experiences: parsedResume.experiences || [],
      education: parsedResume.education || [],
      skills: parsedResume.skills || [],
    });
  }, []);

  const { user, summary, experiences, education, skills } = resumeData;

  return (
    <Layout
      style={{
        padding: "20px",
        margin: "50px auto",
        maxWidth: "800px",
        borderRadius: "10px",
      }}
    >
      <div>
        <div style={{ textAlign: "center" }}>
          <Title>
            {user ? `${user.firstName} ${user.lastName}` : "Your Name"}
          </Title>
          <Title level={3}>{experiences[0]?.jobTitle || "Web Developer"}</Title>

          <div
            style={{ display: "flex", gap: "5px", justifyContent: "center" }}
          >
            <span>
              <MailOutlined style={{ marginRight: "5px" }} />
              {user?.email || "you@example.com"}
            </span>
          </div>
        </div>

        <Divider style={{ marginTop: "15px", marginBottom: "15px" }} />

        <div className="space-y-8">
          <Row gutter={[24, 16]} align="top">
            <Col xs={24} md={6}>
              <Title
                level={4}
                style={{ fontWeight: "bold", color: "#334de4ff" }}
              >
                Professional Summary
              </Title>
            </Col>
            <Col xs={24} md={18}>
              <Paragraph style={{ fontSize: "16px" }}>{summary}</Paragraph>
            </Col>
          </Row>

          <Divider style={{ marginTop: "15px", marginBottom: "15px" }} />

          <Row gutter={[24, 16]} align="top">
            <Col xs={24} md={6}>
              <Title
                level={4}
                style={{ fontWeight: "bold", color: "#324ce0ff" }}
              >
                Skills
              </Title>
            </Col>
            <Col xs={24} md={18}>
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {skills.length > 0 ? (
                  skills.map((skill, i) => (
                    <Tag key={i} color="blue">
                      {skill.name}
                    </Tag>
                  ))
                ) : (
                  <Text type="secondary">No skills added.</Text>
                )}
              </div>
            </Col>
          </Row>

          <Divider style={{ marginTop: "15px", marginBottom: "15px" }} />
          <Row gutter={[24, 16]} align="top">
            <Col xs={24} md={6}>
              <Title
                level={4}
                style={{ fontWeight: "bold", color: "#3a56f5ff" }}
              >
                Work Experience
              </Title>
            </Col>
            <Col xs={24} md={18}>
              {experiences.length > 0 ? (
                experiences.map((exp, i) => (
                  <div key={i} style={{ marginBottom: "5px" }}>
                    <Title level={5}>{exp.jobTitle || "Job Title"}</Title>
                    <Text style={{ fontSize: "13px" }}>
                      {exp.company || "Company Name"} |{" "}
                      {exp.duration || "2020 - Present"}
                    </Text>
                    <Paragraph>
                      {exp.description ||
                        "Responsible for developing, testing, and deploying scalable web applications using modern frameworks."}
                    </Paragraph>
                  </div>
                ))
              ) : (
                <Text type="secondary">No work experience added.</Text>
              )}
            </Col>
          </Row>

          <Divider style={{ marginTop: "15px", marginBottom: "15px" }} />

          <Row gutter={[24, 16]} align="top">
            <Col xs={24} md={6}>
              <Title
                level={4}
                style={{ fontWeight: "bold", color: "#2c45d4ff" }}
              >
                Education
              </Title>
            </Col>
            <Col xs={24} md={18}>
              {education.length > 0 ? (
                education.map((edu, i) => (
                  <div key={i} style={{ marginBottom: "5px" }}>
                    <Title level={5}>{edu.degree || "Degree Title"}</Title>
                    <Text>
                      {edu.institution || "Institution Name"} |{" "}
                      {edu.year || "2020"}
                    </Text>
                  </div>
                ))
              ) : (
                <Text type="secondary">No education added.</Text>
              )}
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
}
