"use client";

import { ButtonDiv, CVbuilderCard } from "@/modules/cv/CVBuilder.stc";
import {
  faArrowsSpin,
  faRotateLeft,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Layout, Tag, Typography } from "antd";
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

  // localStorage থেকে ডেটা লোড করা
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const storedResume = localStorage.getItem("resumeData");

    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const parsedResume = storedResume ? JSON.parse(storedResume) : {};

    setResumeData({
      user: parsedUser,
      summary:
        parsedResume.summary ||
        "Experienced software engineer with 5+ years developing scalable web applications. Proven track record of leading cross-functional teams and delivering high-impact projects.",
      experiences: parsedResume.experiences || [],
      education: parsedResume.education || [],
      skills: parsedResume.skills || [],
    });
  }, []);

  // Helper: Section Render
  const renderSection = (title, items) => (
    <CVbuilderCard style={{ border: "none" }}>
      <Title level={3}>{title}</Title>
      <div
        style={{
          minHeight: "150px",
          border: "1px solid gray",
          padding: "10px",
          borderRadius: "6px",
        }}
      >
        {items.length === 0 && (
          <Paragraph style={{ color: "gray" }}>No {title} added yet.</Paragraph>
        )}

        {items.map((item, i) => (
          <Card
            key={i}
            style={{
              marginBottom: "10px",
              background: "#fefefe",
              border: "1px solid #d9d9d9",
            }}
          >
            <Title level={5}>{item.jobTitle || item.degree || item.name}</Title>
            <Text>{item.company || item.institution || item.category}</Text>
            {item.description && (
              <Paragraph style={{ fontSize: "12px", color: "gray" }}>
                {item.description}
              </Paragraph>
            )}
            {item.technologies && (
              <div style={{ marginTop: "5px" }}>
                {item.technologies.map((tech, idx) => (
                  <Tag key={idx} color="blue">
                    {tech}
                  </Tag>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </CVbuilderCard>
  );

  const { user, summary, experiences, education, skills } = resumeData;

  return (
    <Layout>
      <Card style={{ position: "relative" }}>
        <Title level={2}>
          {user ? `${user.firstName} ${user.lastName}` : "User Name"}
        </Title>
        <Text>
          {user ? "Senior Software Engineer" : "Your Professional Title"}
        </Text>

        <ButtonDiv>
          <Button>
            <FontAwesomeIcon icon={faRotateLeft} style={{ fontSize: "10px" }} />
          </Button>
          <Button>
            <FontAwesomeIcon
              icon={faRotateRight}
              style={{ fontSize: "10px" }}
            />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faArrowsSpin} style={{ fontSize: "10px" }} />
          </Button>
        </ButtonDiv>
      </Card>

      <Card style={{ marginTop: "10px" }}>
        <CVbuilderCard style={{ border: "none", position: "relative" }}>
          <Title level={3}>Professional Summary</Title>
          <Card
            style={{
              marginBottom: "20px",
              background: "#eef1ff",
              border: "1px solid #c9ccd1",
            }}
          >
            <Paragraph
              style={{
                color: "#6f6f70",
                marginBottom: "8px",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {summary}
            </Paragraph>
          </Card>
        </CVbuilderCard>

        {renderSection("Work Experiences", experiences)}

        {renderSection("Education", education)}

        {renderSection("Skills", skills)}
      </Card>
    </Layout>
  );
}
