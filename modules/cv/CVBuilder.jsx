"use client";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { Button, Card, Col, Flex, Layout, Row, Tag, Typography } from "antd";
import Search from "antd/es/input/Search";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useEducations } from "../education/education.query";
import { useExperiences } from "../experience/experience.query";
import { useSkills } from "../skill/skill.query";
import {
  CloneCard,
  EducationCard,
  ExperienceCard,
  Navber,
  SkillCard,
} from "./CVBuilder.stc";
import ResumeCard from "./ResumeCard";

const { Title, Paragraph, Text } = Typography;

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default function CVBuilder() {
  const [resumeExperiences, setResumeExperiences] = useState([]);
  const [resumeEducation, setResumeEducation] = useState([]);
  const [resumeSkills, setResumeSkills] = useState([]);

  const { data: experiencesData } = useExperiences();
  const { data: educationData } = useEducations();
  const { data: skillData } = useSkills();

  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const buttons = ["All", "Work", "Education", "Skills"];
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (experiencesData) setExperiences(experiencesData);
    if (educationData) setEducation(educationData);
    if (skillData) setSkills(skillData);
  }, [experiencesData, educationData, skillData]);

  useEffect(() => {
    const savedResumeData = localStorage.getItem("resumeData");
    if (savedResumeData) {
      const parsedData = JSON.parse(savedResumeData);
      setResumeExperiences(parsedData.experiences || []);
      setResumeEducation(parsedData.education || []);
      setResumeSkills(parsedData.skills || []);
    }
  }, []);

  const handleSave = () => {
    const resumeData = {
      experiences: resumeExperiences,
      education: resumeEducation,
      skills: resumeSkills,
      summary: resumeSummary,
    };
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  };
  const handleDeleteResumeItem = (type, id) => {
    if (type === "experience") {
      setResumeExperiences(resumeExperiences.filter((item) => item.id !== id));
    } else if (type === "education") {
      setResumeEducation(resumeEducation.filter((item) => item.id !== id));
    } else if (type === "skill") {
      setResumeSkills(resumeSkills.filter((item) => item.id !== id));
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === "experiences") {
        setExperiences(reorder(experiences, source.index, destination.index));
      }
      if (source.droppableId === "education") {
        setEducation(reorder(education, source.index, destination.index));
      }
      if (source.droppableId === "skills") {
        setSkills(reorder(skills, source.index, destination.index));
      }
      if (source.droppableId === "resumeExperiences") {
        setResumeExperiences(
          reorder(resumeExperiences, source.index, destination.index)
        );
      }
      if (source.droppableId === "resumeEducation") {
        setResumeEducation(
          reorder(resumeEducation, source.index, destination.index)
        );
      }
      if (source.droppableId === "resumeSkills") {
        setResumeSkills(reorder(resumeSkills, source.index, destination.index));
      }
    } else {
      if (
        ["experiences", "education", "skills"].includes(source.droppableId) &&
        ["resumeExperiences", "resumeEducation", "resumeSkills"].includes(
          destination.droppableId
        )
      ) {
        let copiedItem;
        if (source.droppableId === "experiences") {
          copiedItem = experiences[source.index];
          setResumeExperiences([
            ...resumeExperiences,
            { ...copiedItem, id: Date.now(), type: "experience" },
          ]);
        }
        if (source.droppableId === "education") {
          copiedItem = education[source.index];
          setResumeEducation([
            ...resumeEducation,
            { ...copiedItem, id: Date.now(), type: "education" },
          ]);
        }
        if (source.droppableId === "skills") {
          copiedItem = skills[source.index];
          setResumeSkills([
            ...resumeSkills,
            { ...copiedItem, id: Date.now(), type: "skills" },
          ]);
        }
      }
    }
  };

  const isVisible = (category) =>
    activeFilter === "All" || activeFilter === category;

  return (
    <Layout>
      <Navber>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Title level={3} style={{ color: "blue" }}>
            Resume Builder
          </Title>
          <Flex gap="small" wrap>
            <Button color="gold" variant="solid" style={{ fontWeight: "bold" }}>
              AI Help
            </Button>
            <Button
              color="default"
              variant="outlined"
              style={{ fontWeight: "bold" }}
              onClick={handleSave}
            >
              <Link href="/preview">
                <FontAwesomeIcon icon={faEye} /> Preview
              </Link>
            </Button>
            <Button
              color="default"
              variant="outlined"
              style={{ fontWeight: "bold" }}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button type="primary" style={{ fontWeight: "bold" }}>
              Export
            </Button>
          </Flex>
        </div>
      </Navber>

      <div style={{ margin: "10px 40px", display: "flex", gap: "15px" }}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Row gutter={[16, 16]} style={{ width: "100%" }}>
            <Col xs={24} sm={16} md={8} lg={8}>
              <Card style={{ background: "#edebf8" }}>
                <Title level={3}>Content Library</Title>
                <Text>Drag items to your resume</Text>
                <Search
                  placeholder="Search"
                  allowClear
                  size="large"
                  style={{ margin: "10px 0" }}
                />
                <Flex
                  gap="small"
                  wrap
                  style={{ marginTop: "7px", marginBottom: "7px" }}
                >
                  {buttons.map((filter) => (
                    <Button
                      key={filter}
                      shape="round"
                      onClick={() => setActiveFilter(filter)}
                      style={{
                        background:
                          activeFilter === filter ? "#1677ff" : "#eff2f3",
                        color: activeFilter === filter ? "#fff" : "#000",
                      }}
                    >
                      {filter}
                    </Button>
                  ))}
                </Flex>

                {isVisible("Work") && (
                  <Card title={<Title level={3}>Work Experience</Title>}>
                    <Droppable droppableId="experiences">
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {experiences?.map((exp, index) => (
                            <Draggable
                              key={exp.id}
                              draggableId={exp.id.toString()}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <>
                                  <ExperienceCard
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      border: snapshot.isDragging
                                        ? "1px dashed #1677ff"
                                        : "1px solid green",
                                      borderRadius: "8px",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <Title level={5}>{exp.jobTitle}</Title>
                                    <Text>{exp.company}</Text>
                                    <Paragraph
                                      style={{
                                        fontSize: "12px",
                                        color: "grey",
                                      }}
                                    >
                                      {exp.description}
                                    </Paragraph>
                                  </ExperienceCard>
                                  {snapshot.isDragging && (
                                    <CloneCard>
                                      <Title level={5}>{exp.jobTitle}</Title>
                                      <Text>{exp.company}</Text>
                                      <Paragraph
                                        style={{
                                          fontSize: "12px",
                                          color: "grey",
                                        }}
                                      >
                                        {exp.description}
                                      </Paragraph>
                                    </CloneCard>
                                  )}
                                </>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </Card>
                )}

                {isVisible("Education") && (
                  <Card
                    title={<Title level={3}>Education</Title>}
                    style={{ marginTop: "5px" }}
                  >
                    <Droppable droppableId="education">
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {education?.map((edu, index) => (
                            <Draggable
                              key={edu.id}
                              draggableId={edu.id.toString()}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <>
                                  <EducationCard
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      marginTop: "5px",
                                      border: snapshot.isDragging
                                        ? "1px dashed #1677ff"
                                        : "1px solid green",
                                      borderRadius: "8px",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <Title level={5}>{edu.degree}</Title>
                                    <Text>{edu.institution}</Text>
                                    <Paragraph
                                      style={{
                                        fontSize: "12px",
                                        color: "grey",
                                      }}
                                    >
                                      {edu.description}
                                    </Paragraph>
                                  </EducationCard>
                                  {snapshot.isDragging && (
                                    <CloneCard>
                                      <Title level={5}>{edu.degree}</Title>
                                      <Text>{edu.institution}</Text>
                                      <Paragraph
                                        style={{
                                          fontSize: "12px",
                                          color: "grey",
                                        }}
                                      >
                                        {edu.description}
                                      </Paragraph>
                                    </CloneCard>
                                  )}
                                </>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </Card>
                )}

                {isVisible("Skills") && (
                  <Card
                    title={<Title level={3}>Skills</Title>}
                    style={{ marginTop: "5px" }}
                  >
                    <Droppable droppableId="skills">
                      {(provided) => {
                        const uniqueCategories = [
                          ...new Set(skills.map((s) => s.category)),
                        ];
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {uniqueCategories.map((category, index) => (
                              <Draggable
                                key={category}
                                draggableId={category}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <>
                                    <SkillCard
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        marginTop: "5px",
                                        border: snapshot.isDragging
                                          ? "1px dashed #1677ff"
                                          : "1px solid green",
                                        borderRadius: "8px",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <Title level={4}>{category}</Title>
                                      <ul style={{ marginLeft: "15px" }}>
                                        {skills
                                          .filter(
                                            (s) => s.category === category
                                          )
                                          .map((s) => (
                                            <Tag color="blue" key={s.id}>
                                              <Text>{s.name}</Text>
                                            </Tag>
                                          ))}
                                      </ul>
                                    </SkillCard>
                                    {snapshot.isDragging && (
                                      <CloneCard>
                                        <Title level={4}>{category}</Title>
                                        <ul style={{ marginLeft: "15px" }}>
                                          {skills
                                            .filter(
                                              (s) => s.category === category
                                            )
                                            .map((s) => (
                                              <Tag color="blue" key={s.id}>
                                                <Text>{s.name}</Text>
                                              </Tag>
                                            ))}
                                        </ul>
                                      </CloneCard>
                                    )}
                                  </>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </Card>
                )}
              </Card>
            </Col>

            <Col xs={24} sm={16} md={16} lg={16}>
              <ResumeCard
                resumeExperiences={resumeExperiences}
                resumeEducation={resumeEducation}
                resumeSkills={resumeSkills}
                handleDeleteResumeItem={handleDeleteResumeItem}
              />
            </Col>
          </Row>
        </DragDropContext>
      </div>
    </Layout>
  );
}
