"use client";

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
  Input,
  Layout,
  Menu,
  Row,
  Select,
  Tag,
  Typography,
} from "antd";
import { useState } from "react";
import { CVbuilderCard, Iconwrapper } from "./CVBuilder.stc";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const items = [
  {
    key: "sub1",
    label: <Title level={4}>CV Components</Title>,
  },
  { type: "divider" },
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
            style={{ background: "green", padding: "5px", color: "white" }}
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
            style={{ background: "#4f08f5", padding: "5px", color: "white" }}
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
            style={{ background: "#f508ae", padding: "5px", color: "yellow" }}
          >
            <FontAwesomeIcon icon={faBolt} />
          </Iconwrapper>
        ),
      },
    ],
  },
  {
    key: "grp",
    label: "ADDITIONAL SECTIONS",
    type: "group",
    children: [
      { key: "14", label: "Projects" },
      { key: "15", label: "Languages" },
    ],
  },
];

export default function CVBuilder() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    linkedin: "",
  });

  const [summary, setSummary] = useState("");
  const [experiences, setExperiences] = useState([
    {
      role: "",
      company: "",
      location: "",
      start: null,
      end: null,
      responsibilities: "",
    },
  ]);
  const [education, setEducation] = useState([
    {
      degree: "",
      institution: "",
      gpa: "",
      start: null,
      end: null,
      coursework: "",
    },
  ]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([
    { title: "", techStack: "", description: "", year: "" },
  ]);
  const [languages, setLanguages] = useState([{ name: "", proficiency: "" }]);

  const handleExperienceChange = (index, field, value) => {
    const newExp = [...experiences];
    newExp[index][field] = value;
    setExperiences(newExp);
  };

  const handleEducationChange = (index, field, value) => {
    const newEdu = [...education];
    newEdu[index][field] = value;
    setEducation(newEdu);
  };

  const handleProjectChange = (index, field, value) => {
    const newProj = [...projects];
    newProj[index][field] = value;
    setProjects(newProj);
  };

  const handleLanguageChange = (index, field, value) => {
    const newLang = [...languages];
    newLang[index][field] = value;
    setLanguages(newLang);
  };

  return (
    <Layout>
      <div style={{ margin: "10px 40px", display: "flex", gap: "15px" }}>
        <Row gutter={[16, 16]} style={{ width: "100%" }}>
          <Col xs={24} sm={16} md={6} lg={6}>
            <Menu
              style={{ color: "gray", borderInlineEnd: 0 }}
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
                    { href: "", title: "My CVs" },
                    { title: <Text>Frontend Developer CV</Text> },
                    { title: "Application" },
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
                  style={{ marginBottom: "10px" }}
                  title={<Title level={3}>Personal Information</Title>}
                >
                  <Input
                    placeholder="Full Name"
                    value={personalInfo.name}
                    onChange={(e) =>
                      setPersonalInfo({ ...personalInfo, name: e.target.value })
                    }
                    style={{ marginBottom: "5px" }}
                  />
                  <Input
                    placeholder="Title / Role"
                    value={personalInfo.title}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        title: e.target.value,
                      })
                    }
                    style={{ marginBottom: "5px" }}
                  />
                  <Input
                    placeholder="Email"
                    value={personalInfo.email}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        email: e.target.value,
                      })
                    }
                    style={{ marginBottom: "5px" }}
                  />
                  <Input
                    placeholder="Phone"
                    value={personalInfo.phone}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        phone: e.target.value,
                      })
                    }
                    style={{ marginBottom: "5px" }}
                  />
                  <Input
                    placeholder="LinkedIn"
                    value={personalInfo.linkedin}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        linkedin: e.target.value,
                      })
                    }
                  />
                </CVbuilderCard>

                <Card
                  style={{ marginBottom: "10px" }}
                  size="small"
                  title={<Title level={3}>Professional Summary</Title>}
                >
                  <TextArea
                    rows={4}
                    placeholder="Write your professional summary..."
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </Card>

                <Card
                  style={{ marginBottom: "10px" }}
                  title={<Title level={3}>Work Experience</Title>}
                >
                  {experiences.map((exp, idx) => (
                    <div
                      key={idx}
                      style={{
                        marginBottom: "10px",
                        borderBottom: "1px solid #ddd",
                        paddingBottom: "10px",
                      }}
                    >
                      <Input
                        placeholder="Role"
                        value={exp.role}
                        onChange={(e) =>
                          handleExperienceChange(idx, "role", e.target.value)
                        }
                        style={{ marginBottom: "5px" }}
                      />
                      <Input
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) =>
                          handleExperienceChange(idx, "company", e.target.value)
                        }
                        style={{ marginBottom: "5px" }}
                      />
                      <Input
                        placeholder="Location"
                        value={exp.location}
                        onChange={(e) =>
                          handleExperienceChange(
                            idx,
                            "location",
                            e.target.value
                          )
                        }
                        style={{ marginBottom: "5px" }}
                      />
                      <TextArea
                        placeholder="Responsibilities"
                        rows={3}
                        value={exp.responsibilities}
                        onChange={(e) =>
                          handleExperienceChange(
                            idx,
                            "responsibilities",
                            e.target.value
                          )
                        }
                        style={{ marginBottom: "5px" }}
                      />
                    </div>
                  ))}
                  <Button
                    type="dashed"
                    onClick={() =>
                      setExperiences([
                        ...experiences,
                        {
                          role: "",
                          company: "",
                          location: "",
                          start: null,
                          end: null,
                          responsibilities: "",
                        },
                      ])
                    }
                  >
                    Add Experience
                  </Button>
                </Card>

                <Card
                  style={{ marginBottom: "10px" }}
                  title={<Title level={3}>Education</Title>}
                >
                  {education.map((edu, idx) => (
                    <div
                      key={idx}
                      style={{
                        marginBottom: "10px",
                        borderBottom: "1px solid #ddd",
                        paddingBottom: "10px",
                      }}
                    >
                      <Input
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) =>
                          handleEducationChange(idx, "degree", e.target.value)
                        }
                        style={{ marginBottom: "5px" }}
                      />
                      <Input
                        placeholder="Institution"
                        value={edu.institution}
                        onChange={(e) =>
                          handleEducationChange(
                            idx,
                            "institution",
                            e.target.value
                          )
                        }
                        style={{ marginBottom: "5px" }}
                      />
                      <Input
                        placeholder="GPA"
                        value={edu.gpa}
                        onChange={(e) =>
                          handleEducationChange(idx, "gpa", e.target.value)
                        }
                        style={{ marginBottom: "5px" }}
                      />
                      <TextArea
                        placeholder="Relevant Coursework / Projects"
                        rows={2}
                        value={edu.coursework}
                        onChange={(e) =>
                          handleEducationChange(
                            idx,
                            "coursework",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                  <Button
                    type="dashed"
                    onClick={() =>
                      setEducation([
                        ...education,
                        {
                          degree: "",
                          institution: "",
                          gpa: "",
                          start: null,
                          end: null,
                          coursework: "",
                        },
                      ])
                    }
                  >
                    Add Education
                  </Button>
                </Card>

                <Card
                  style={{ marginBottom: "10px" }}
                  title={<Title level={3}>Skills</Title>}
                >
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    placeholder="Add skills"
                    value={skills}
                    onChange={(value) => setSkills(value)}
                  />
                </Card>

                <Card
                  style={{ marginBottom: "10px" }}
                  title={<Title level={3}>Projects</Title>}
                >
                  {projects.map((proj, idx) => (
                    <div
                      key={idx}
                      style={{
                        marginBottom: "10px",
                        borderBottom: "1px solid #ddd",
                        paddingBottom: "10px",
                      }}
                    >
                      <Input
                        placeholder="Project Title"
                        value={proj.title}
                        onChange={(e) =>
                          handleProjectChange(idx, "title", e.target.value)
                        }
                        style={{ marginBottom: "5px" }}
                      />
                      <Input
                        placeholder="Tech Stack"
                        value={proj.techStack}
                        onChange={(e) =>
                          handleProjectChange(idx, "techStack", e.target.value)
                        }
                        style={{ marginBottom: "5px" }}
                      />
                      <TextArea
                        placeholder="Project Description"
                        rows={3}
                        value={proj.description}
                        onChange={(e) =>
                          handleProjectChange(
                            idx,
                            "description",
                            e.target.value
                          )
                        }
                        style={{ marginBottom: "5px" }}
                      />
                      <Input
                        placeholder="Year"
                        value={proj.year}
                        onChange={(e) =>
                          handleProjectChange(idx, "year", e.target.value)
                        }
                      />
                    </div>
                  ))}
                  <Button
                    type="dashed"
                    onClick={() =>
                      setProjects([
                        ...projects,
                        { title: "", techStack: "", description: "", year: "" },
                      ])
                    }
                  >
                    Add Project
                  </Button>
                </Card>

                <Card
                  style={{ marginBottom: "10px" }}
                  title={<Title level={3}>Languages</Title>}
                >
                  {languages.map((lang, idx) => (
                    <div
                      key={idx}
                      style={{
                        marginBottom: "10px",
                        display: "flex",
                        gap: "5px",
                      }}
                    >
                      <Input
                        placeholder="Language"
                        value={lang.name}
                        onChange={(e) =>
                          handleLanguageChange(idx, "name", e.target.value)
                        }
                      />
                      <Select
                        placeholder="Proficiency"
                        value={lang.proficiency}
                        onChange={(value) =>
                          handleLanguageChange(idx, "proficiency", value)
                        }
                        style={{ width: "150px" }}
                      >
                        <Option value="Beginner">Beginner</Option>
                        <Option value="Intermediate">Intermediate</Option>
                        <Option value="Advanced">Advanced</Option>
                      </Select>
                    </div>
                  ))}
                  <Button
                    type="dashed"
                    onClick={() =>
                      setLanguages([
                        ...languages,
                        { name: "", proficiency: "" },
                      ])
                    }
                  >
                    Add Language
                  </Button>
                </Card>
              </div>
            </Card>
          </Col>

          <Col xs={24} sm={16} md={8} lg={8}>
            <Card title={<Title level={4}>Live Preview</Title>}>
              <Card style={{ textAlign: "center" }}>
                <Title level={3}>{personalInfo.name || "Your Name"}</Title>
                <Paragraph type="success" style={{ fontSize: "16px" }}>
                  {personalInfo.title || "Your Title"}
                </Paragraph>
                <Text>
                  📧 {personalInfo.email || "email@example.com"} | 📱{" "}
                  {personalInfo.phone || "+0000000000"}
                </Text>
                <br />
                <Text>
                  💼 {personalInfo.linkedin || "linkedin.com/in/yourprofile"}
                </Text>
              </Card>
              <br />
              <Title level={4}>Professional Summary</Title>
              <Card>
                <Paragraph style={{ fontSize: "15px" }}>
                  {summary || "Write your professional summary..."}
                </Paragraph>
              </Card>
              <br />
              <Title level={4}>Work Experience</Title>
              {experiences.map((exp, idx) => (
                <Card key={idx} style={{ marginBottom: "5px" }}>
                  <Text strong>{exp.role || "Role"}</Text> |{" "}
                  <Text type="secondary">{exp.company || "Company"}</Text>
                  <Paragraph>
                    {exp.responsibilities || "Responsibilities..."}
                  </Paragraph>
                </Card>
              ))}
              <br />
              <Title level={4}>Education</Title>
              {education.map((edu, idx) => (
                <Card key={idx} style={{ marginBottom: "5px" }}>
                  <Text strong>{edu.degree || "Degree"}</Text> |{" "}
                  <Text type="secondary">
                    {edu.institution || "Institution"}
                  </Text>
                  <Paragraph>
                    {edu.coursework || "Relevant coursework..."}
                  </Paragraph>
                </Card>
              ))}
              <br />
              <Title level={4}>Skills</Title>
              <Flex gap="4px 4px" wrap>
                {skills.map((skill, idx) => (
                  <Tag key={idx} color="blue">
                    {skill}
                  </Tag>
                ))}
              </Flex>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
