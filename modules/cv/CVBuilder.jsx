"use client";
import { faCheck, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { Button, Card, Col, Flex, Row, Tag, Typography } from "antd";
import Search from "antd/es/input/Search";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useEducations } from "../education/education.query";
import { useExperiences } from "../experience/experience.query";
import { useSkills } from "../skill/skill.query";
import {
  CheckBoxIcon,
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
  const [resumeSummary, setResumeSummary] = useState("");

  const { data: experiencesData } = useExperiences();
  const { data: educationData } = useEducations();
  const { data: skillData } = useSkills();

  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [activeItems, setActiveItems] = useState({
    experiences: [],
    education: [],
    skills: [],
  });
  const buttons = ["All", "Work", "Education", "Skills"];

  useEffect(() => {
    if (experiencesData) setExperiences(experiencesData);
    if (educationData) setEducation(educationData);
    if (skillData) setSkills(skillData);
  }, [experiencesData, educationData, skillData]);

  useEffect(() => {
    const savedResumeData = localStorage.getItem("resumeData");
    if (savedResumeData) {
      try {
        const parsed = JSON.parse(savedResumeData);

        setResumeExperiences(parsed.experiences || []);
        setResumeEducation(parsed.education || []);
        setResumeSkills(parsed.skills || []);
        setResumeSummary(parsed.summary || "");

        setActiveItems({
          experiences: (parsed.experiences || []).map((x) => x.id),
          education: (parsed.education || []).map((x) => x.id),
          skills: (parsed.skills || []).map((x) => x.category),
        });
      } catch (e) {
        console.error("Failed to parse saved resumeData:", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeItems", JSON.stringify(activeItems));
  }, [activeItems]);

  const saveResumeData = (
    experiencesArr,
    educationArr,
    skillsArr,
    summaryStr
  ) => {
    const resumeData = {
      experiences: experiencesArr,
      education: educationArr,
      skills: skillsArr,
      summary: summaryStr || "",
    };
    localStorage.setItem("resumeData", JSON.stringify(resumeData));

    setResumeSummary(summaryStr || "");
  };

  const updateResumeData = (updated) => {
    const experiencesArr = updated.experiences || [];
    const educationArr = updated.education || [];
    const skillsArr = updated.skills || [];
    const summaryStr = updated.text ?? "";

    setResumeExperiences(experiencesArr);
    setResumeEducation(educationArr);
    setResumeSkills(skillsArr);
    setResumeSummary(summaryStr);
    setActiveItems({
      experiences: experiencesArr.map((x) => x.id),
      education: educationArr.map((x) => x.id),
      skills: skillsArr.map((x) => x.category),
    });

    saveResumeData(experiencesArr, educationArr, skillsArr, summaryStr);
  };

  const handleSave = () => {
    saveResumeData(
      resumeExperiences,
      resumeEducation,
      resumeSkills,
      resumeSummary
    );
  };

  const handleDeleteResumeItem = (type, id) => {
    if (type === "experience") {
      const newItems = resumeExperiences.filter((item) => item.id !== id);
      setResumeExperiences(newItems);

      const newActive = activeItems.experiences.filter((x) => x !== id);
      const newActiveItems = { ...activeItems, experiences: newActive };
      setActiveItems(newActiveItems);

      saveResumeData(newItems, resumeEducation, resumeSkills, resumeSummary);
      localStorage.setItem("activeItems", JSON.stringify(newActiveItems));
      toast.success("Experiences removed successfully!");
    } else if (type === "education") {
      const newItems = resumeEducation.filter((item) => item.id !== id);
      setResumeEducation(newItems);

      const newActive = activeItems.education.filter((x) => x !== id);
      const newActiveItems = { ...activeItems, education: newActive };
      setActiveItems(newActiveItems);

      saveResumeData(resumeExperiences, newItems, resumeSkills, resumeSummary);
      localStorage.setItem("activeItems", JSON.stringify(newActiveItems));
      toast.success("Education removed successfully!");
    } else if (type === "skill") {
      const deletedItem = resumeSkills.find((item) => item.id === id);

      const newItems = resumeSkills.filter((item) => item.id !== id);
      setResumeSkills(newItems);

      const newActive = activeItems.skills.filter(
        (x) => x !== deletedItem.category
      );

      const newActiveItems = { ...activeItems, skills: newActive };
      setActiveItems(newActiveItems);

      saveResumeData(
        resumeExperiences,
        resumeEducation,
        newItems,
        resumeSummary
      );

      localStorage.setItem("activeItems", JSON.stringify(newActiveItems));
      toast.success("Skill removed successfully!");
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
      return;
    }

    const allowedTargets = {
      experiences: "resumeExperiences",
      education: "resumeEducation",
      skills: "resumeSkills",
    };

    const validTarget = allowedTargets[source.droppableId];

    if (destination.droppableId !== validTarget) {
      toast.error("This card doesn't belong to this section!");
      return;
    }

    if (source.droppableId === "experiences") {
      const item = experiences[source.index];

      if (resumeExperiences.some((x) => x.id === item.id)) {
        toast.error("This experience is already added!");
        return;
      }

      const newItem = { ...item, type: "experience" };
      const newResumeExperiences = [...resumeExperiences, newItem];
      setResumeExperiences(newResumeExperiences);

      const newActive = {
        ...activeItems,
        experiences: [...activeItems.experiences, item.id],
      };
      setActiveItems(newActive);

      saveResumeData(
        newResumeExperiences,
        resumeEducation,
        resumeSkills,
        resumeSummary
      );
      localStorage.setItem("activeItems", JSON.stringify(newActive));
    }

    if (source.droppableId === "education") {
      const item = education[source.index];

      if (resumeEducation.some((x) => x.id === item.id)) {
        toast.error("This education item is already added!");
        return;
      }

      const newItem = { ...item, type: "education" };
      const newResumeEducation = [...resumeEducation, newItem];
      setResumeEducation(newResumeEducation);

      const newActive = {
        ...activeItems,
        education: [...activeItems.education, item.id],
      };
      setActiveItems(newActive);

      saveResumeData(
        resumeExperiences,
        newResumeEducation,
        resumeSkills,
        resumeSummary
      );
      localStorage.setItem("activeItems", JSON.stringify(newActive));
    }

    if (source.droppableId === "skills") {
      const item = skills[source.index];

      if (resumeSkills.some((x) => x.category === item.category)) {
        toast.error("This skill is already added!");
        return;
      }

      const newItem = { ...item, type: "skill" };
      const newResumeSkills = [...resumeSkills, newItem];
      setResumeSkills(newResumeSkills);

      const newActive = {
        ...activeItems,
        skills: [...activeItems.skills, item.category],
      };
      setActiveItems(newActive);

      saveResumeData(
        resumeExperiences,
        resumeEducation,
        newResumeSkills,
        resumeSummary
      );
      localStorage.setItem("activeItems", JSON.stringify(newActive));
    }
  };

  const isVisible = (category) =>
    activeFilter === "All" || activeFilter === category;

  const filteredExperiences = experiences.filter(
    (exp) =>
      exp.jobTitle.toLowerCase().includes(searchText) ||
      exp.company.toLowerCase().includes(searchText) ||
      exp.description.toLowerCase().includes(searchText)
  );

  const filteredEducation = education.filter(
    (edu) =>
      edu.degree.toLowerCase().includes(searchText) ||
      edu.institution.toLowerCase().includes(searchText) ||
      edu.description.toLowerCase().includes(searchText)
  );

  const filteredSkills = skills.filter(
    (s) =>
      s.name.toLowerCase().includes(searchText) ||
      s.category.toLowerCase().includes(searchText)
  );

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value.toLowerCase())}
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
                          {filteredExperiences.map((exp, index) => (
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
                                      border: activeItems.experiences.includes(
                                        exp.id
                                      )
                                        ? "1px solid #0af131"
                                        : "1px solid #a5b3a2",
                                      borderRadius: "8px",
                                      background:
                                        activeItems.experiences.includes(exp.id)
                                          ? "#f1faef"
                                          : "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {activeItems.experiences.includes(
                                      exp.id
                                    ) && (
                                      <CheckBoxIcon>
                                        <FontAwesomeIcon icon={faCheck} />
                                      </CheckBoxIcon>
                                    )}

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
                          {filteredEducation.map((edu, index) => (
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
                                      border: activeItems.education.includes(
                                        edu.id
                                      )
                                        ? "1px solid #09f128"
                                        : "1px solid #b4b8b4",
                                      borderRadius: "8px",
                                      background:
                                        activeItems.education.includes(edu.id)
                                          ? "#f6fdf5"
                                          : "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {activeItems.education.includes(edu.id) && (
                                      <CheckBoxIcon>
                                        <FontAwesomeIcon icon={faCheck} />
                                      </CheckBoxIcon>
                                    )}

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
                          ...new Set(filteredSkills.map((s) => s.category)),
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
                                        border: activeItems.skills.includes(
                                          category
                                        )
                                          ? "1px solid #07fc07"
                                          : "1px solid #a9aaa9",
                                        borderRadius: "8px",
                                        background: activeItems.skills.includes(
                                          category
                                        )
                                          ? "#edf7ed"
                                          : "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {activeItems.skills.includes(
                                        category
                                      ) && (
                                        <CheckBoxIcon>
                                          <FontAwesomeIcon icon={faCheck} />
                                        </CheckBoxIcon>
                                      )}

                                      <Title level={4}>{category}</Title>

                                      <ul style={{ marginLeft: "15px" }}>
                                        {filteredSkills
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
                                          {filteredSkills
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
                resumeSummary={resumeSummary}
                handleDeleteResumeItem={handleDeleteResumeItem}
                updateResumeData={updateResumeData}
              />
            </Col>
          </Row>
        </DragDropContext>
      </div>
    </>
  );
}
