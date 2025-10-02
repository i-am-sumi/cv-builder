"use client";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { Button, Card, Col, Flex, Layout, Row, Tag, Typography } from "antd";
import Search from "antd/es/input/Search";
import { Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { useEducations } from "../education/education.query";
import { useExperiences } from "../experience/experience.query";
import { AchievementLists } from "../experience/Experience.stc";
import { useSkills } from "../skill/skill.query";
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
  const { data: experiencesData } = useExperiences();
  const { data: educationData } = useEducations();
  const { data: skillData } = useSkills();

  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);

  const buttons = ["All", "Work", "Education", "Skills"];
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (experiencesData) {
      setExperiences(experiencesData);
    }
  }, [experiencesData]);

  useEffect(() => {
    if (educationData) {
      setEducation(educationData);
    }
  }, [educationData]);

  useEffect(() => {
    if (skillData) {
      setSkills(skillData);
    }
  }, [skillData]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // যদি একই লিস্টে ড্র্যাগ হয় (শুধু order change হবে)
    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === "experiences") {
        const reordered = reorder(experiences, source.index, destination.index);
        setExperiences(reordered);
      }

      if (source.droppableId === "education") {
        const reordered = reorder(education, source.index, destination.index);
        setEducation(reordered);
      }

      if (source.droppableId === "skills") {
        const reordered = reorder(skills, source.index, destination.index);
        setSkills(reordered);
      }

      if (source.droppableId === "resumeExperiences") {
        const reordered = reorder(
          resumeExperiences,
          source.index,
          destination.index
        );
        setResumeExperiences(reordered);
      }
    } else {
      // Move from Library → Resume
      if (
        source.droppableId === "experiences" &&
        destination.droppableId === "resumeExperiences"
      ) {
        const movedItem = experiences[source.index];
        setResumeExperiences([...resumeExperiences, movedItem]);
      }
    }
  };

  const isVisible = (category) =>
    activeFilter === "All" || activeFilter === category;

  return (
    <Layout>
      <Header style={{ padding: 0, background: "#eff2f3" }}>
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
            <Button color="gold" variant="solid">
              AI Help
            </Button>
            <Button color="default" variant="outlined">
              <FontAwesomeIcon icon={faEye} /> Preview
            </Button>
            <Button color="default" variant="outlined">
              Save
            </Button>
            <Button type="primary">Export</Button>
          </Flex>
        </div>
      </Header>

      <div style={{ margin: "10px 40px", display: "flex", gap: "15px" }}>
        <Row gutter={[16, 16]} style={{ width: "100%" }}>
          <Col xs={24} sm={16} md={8} lg={8}>
            <Card style={{ background: "#eff2f3" }}>
              <Title level={3}>Content Library</Title>
              <Text>Drag items to your resume</Text>
              <Search placeholder="Search" allowClear size="large" />
              <Flex gap="small" wrap style={{ marginTop: "5px" }}>
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
                <Card
                  title="Work Experiences"
                  style={{ marginTop: "15px", marginBottom: "5px" }}
                >
                  <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="experiences">
                      {(provided) => (
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
                              {(provided) => (
                                <Card
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    marginTop: "5px",
                                    border: "1px solid green",
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  <Title level={5}>{exp.jobTitle}</Title>
                                  <Text>{exp.company}</Text>
                                  <Paragraph
                                    style={{ fontSize: "12px", color: "grey" }}
                                  >
                                    {exp.description}
                                  </Paragraph>
                                  <Text>Key Achievements:</Text>
                                  <AchievementLists>
                                    {exp.achievements?.map((a, i) => (
                                      <li key={i}>{a}</li>
                                    ))}
                                  </AchievementLists>
                                  <Text>Technologies:</Text>
                                  <div className="education-item">
                                    {exp.technologies?.map((t, i) => (
                                      <Tag color="blue" key={i}>
                                        {t}
                                      </Tag>
                                    ))}
                                  </div>
                                </Card>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </Card>
              )}

              {isVisible("Education") && (
                <Card title="Education" style={{ marginTop: "5px" }}>
                  <DragDropContext onDragEnd={handleDragEnd}>
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
                              {(provided) => (
                                <Card
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    marginTop: "5px",
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  <Title level={5}>{edu.degree}</Title>
                                  <Text>{edu.institution}</Text>
                                  <Paragraph
                                    style={{ fontSize: "12px", color: "grey" }}
                                  >
                                    {edu.description}
                                  </Paragraph>
                                  <Text>Key Achievements:</Text>
                                  <AchievementLists>
                                    {edu.achievements?.map((a, i) => (
                                      <li key={i}>{a}</li>
                                    ))}
                                  </AchievementLists>
                                </Card>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </Card>
              )}

              {isVisible("Skills") && (
                <Card title="Skills" style={{ marginTop: "5px" }}>
                  <DragDropContext onDragEnd={handleDragEnd}>
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
                                {(provided) => (
                                  <Card
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      marginTop: "5px",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <Title level={4}>{category}</Title>
                                    <ul style={{ marginLeft: "15px" }}>
                                      {skills
                                        .filter((s) => s.category === category)
                                        .map((s) => (
                                          <Tag color="blue" key={s.id}>
                                            <Text>{s.name}</Text>
                                          </Tag>
                                        ))}
                                    </ul>
                                  </Card>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </DragDropContext>
                </Card>
              )}
            </Card>
          </Col>

          <Col xs={24} sm={16} md={8} lg={16}>
            <ResumeCard
              resumeExperiences={resumeExperiences}
              handleDragEnd={handleDragEnd}
            />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
