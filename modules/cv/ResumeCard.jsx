"use client";

import {
  faArrowsSpin,
  faPen,
  faRotateLeft,
  faRotateRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { Button, Col, Divider, Row, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import {
  ButtonDiv,
  CVbuilderCard,
  ResumeSection,
  SummarySection,
} from "./CVBuilder.stc";

const { Title, Text, Paragraph } = Typography;

export default function ResumeCard({
  resumeExperiences = [],
  resumeEducation = [],
  resumeSkills = [],
  handleDeleteResumeItem,
  updateResumeData,
}) {
  const [user, setUser] = useState(null);
  const [localExperiences, setLocalExperiences] = useState(resumeExperiences);
  const [localEducation, setLocalEducation] = useState(resumeEducation);
  const [localSkills, setLocalSkills] = useState(resumeSkills);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(
    "Experienced software engineer with 5+ years developing scalable web applications."
  );

  const paragraphRef = useRef(null);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);
  const initialSnapshotRef = useRef(null);

  const sections = [
    { id: "resumeExperiences", title: "Work Experience", type: "experience" },
    { id: "resumeEducation", title: "Education", type: "education" },
    { id: "resumeSkills", title: "Skills", type: "skill" },
  ];

  function makeSnapshot() {
    return {
      experiences: JSON.parse(JSON.stringify(localExperiences || [])),
      education: JSON.parse(JSON.stringify(localEducation || [])),
      skills: JSON.parse(JSON.stringify(localSkills || [])),
      text: text,
    };
  }

  const applySnapshot = (snap) => {
    setLocalExperiences(snap.experiences);
    setLocalEducation(snap.education);
    setLocalSkills(snap.skills);
    setText(snap.text);

    updateResumeData({
      experiences: snap.experiences,
      education: snap.education,
      skills: snap.skills,
      text: snap.text,
    });
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
    const storedSummary = localStorage.getItem("professionalSummary");
    if (storedSummary) setText(storedSummary);

    initialSnapshotRef.current = makeSnapshot();
    setLocalExperiences(resumeExperiences || []);
    setLocalEducation(resumeEducation || []);
    setLocalSkills(resumeSkills || []);
  }, []);

  useEffect(() => {
    const propsSnapshot = {
      experiences: resumeExperiences || [],
      education: resumeEducation || [],
      skills: resumeSkills || [],
    };
    const localSnapshot = {
      experiences: localExperiences || [],
      education: localEducation || [],
      skills: localSkills || [],
    };

    if (JSON.stringify(propsSnapshot) !== JSON.stringify(localSnapshot)) {
      setHistory((preHistory) => [...preHistory, makeSnapshot()]);
      setLocalExperiences(resumeExperiences || []);
      setLocalEducation(resumeEducation || []);
      setLocalSkills(resumeSkills || []);
      setFuture([]);
    }
  }, [resumeExperiences, resumeEducation, resumeSkills]);

  useEffect(() => {
    if (isEditing && paragraphRef.current) {
      const el = paragraphRef.current;
      el.focus();
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }, [isEditing]);

  function handleUndo() {
    setHistory((h) => {
      if (h.length === 0) return h;
      const newHistory = [...h];
      const last = newHistory.pop();
      setFuture((f) => [makeSnapshot(), ...f]);
      applySnapshot(last);
      return newHistory;
    });
  }

  function handleRedo() {
    setFuture((f) => {
      if (f.length === 0) return f;
      const newFuture = [...f];
      const next = newFuture.shift();
      setHistory((h) => [...h, makeSnapshot()]);
      applySnapshot(next);
      return newFuture;
    });
  }

  function handleReset() {
    const initial = initialSnapshotRef.current || makeSnapshot();
    setHistory((h) => [...h, makeSnapshot()]);
    setFuture([]);
    applySnapshot(initial);
  }

  const onSummaryBlur = (e) => {
    const newText = e.currentTarget.textContent;

    setHistory((h) => [...h, makeSnapshot()]);
    setText(newText);

    updateResumeData({
      experiences: localExperiences,
      education: localEducation,
      skills: localSkills,
      text: newText,
    });

    localStorage.setItem("professionalSummary", newText);
    setIsEditing(false);
  };

  function onDelete(type, id) {
    setHistory((h) => [...h, makeSnapshot()]);
    if (typeof handleDeleteResumeItem === "function") {
      handleDeleteResumeItem(type, id);
    } else {
      if (type === "experience") {
        setLocalExperiences((prev) => prev.filter((p) => p.id !== id));
      } else if (type === "education") {
        setLocalEducation((prev) => prev.filter((p) => p.id !== id));
      } else if (type === "skill") {
        setLocalSkills((prev) => prev.filter((p) => p.id !== id));
      }
    }
  }

  const renderSection = (title, droppableId, items, type) => (
    <CVbuilderCard style={{ marginBottom: "25px" }}>
      <Divider style={{ marginTop: "15px", marginBottom: "15px" }} />
      <Row gutter={[24, 16]} align="top">
        <Col xs={24} md={6}>
          <Title level={4} style={{ color: "#1437fc", fontWeight: 600 }}>
            {title}
          </Title>
        </Col>
        <Col xs={24} md={18}>
          <Droppable droppableId={droppableId}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {items.length === 0 && (
                  <Paragraph style={{ color: "gray" }}>
                    No {title.toLowerCase()} added yet.
                  </Paragraph>
                )}
                {items.map((item, index) => (
                  <Draggable
                    key={`${type}-${item.id}`}
                    draggableId={`${type}-${item.id}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="resume-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          marginBottom: "12px",
                          ...provided.draggableProps.style,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <Title level={5} style={{ marginBottom: "0px" }}>
                              {item.jobTitle || item.degree || item.name}
                            </Title>
                            <Text type="secondary">
                              {item.company ||
                                item.institution ||
                                item.category}
                            </Text>
                            {item.description && (
                              <Paragraph
                                style={{
                                  fontSize: "13px",
                                  color: "#5f5f5f",
                                  marginTop: "4px",
                                }}
                              >
                                {item.description}
                              </Paragraph>
                            )}
                          </div>
                          <div className="editDeleteBtns">
                            <Button
                              icon={<FontAwesomeIcon icon={faPen} />}
                              size="small"
                              type="primary"
                            />
                            <Button
                              icon={<FontAwesomeIcon icon={faTrash} />}
                              size="small"
                              danger
                              type="primary"
                              onClick={() => onDelete(type, item.id)}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Col>
      </Row>
    </CVbuilderCard>
  );

  return (
    <ResumeSection>
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <Title>
          {user ? `${user.firstName} ${user.lastName}` : "Your Name"}
        </Title>
        <ButtonDiv>
          <Button onClick={handleUndo} title="Undo">
            <FontAwesomeIcon icon={faRotateLeft} style={{ fontSize: "10px" }} />
          </Button>
          <Button onClick={handleRedo} title="Redo">
            <FontAwesomeIcon
              icon={faRotateRight}
              style={{ fontSize: "10px" }}
            />
          </Button>
          <Button onClick={handleReset} title="Reset">
            <FontAwesomeIcon icon={faArrowsSpin} style={{ fontSize: "10px" }} />
          </Button>
        </ButtonDiv>
      </div>

      <SummarySection>
        <Divider style={{ marginTop: "15px", marginBottom: "45px" }} />
        <Row gutter={[24, 16]} align="top">
          <Col xs={24} md={6}>
            <Title level={4} style={{ color: "#1437fc" }}>
              Professional Summary
            </Title>
          </Col>
          <Button
            className="editButton"
            onClick={() => setIsEditing(true)}
            type="text"
          >
            <FontAwesomeIcon icon={faPen} />
          </Button>
          <Col xs={24} md={18}>
            <Paragraph
              ref={paragraphRef}
              contentEditable={isEditing}
              suppressContentEditableWarning={true}
              style={{
                padding: "10px",
                border: isEditing ? "1px dashed #f5eeee" : "none",
                borderRadius: "6px",
              }}
              onBlur={onSummaryBlur}
            >
              {text}
            </Paragraph>
          </Col>
        </Row>
      </SummarySection>

      <Droppable droppableId="resumeSections" type="SECTION">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {sections.map((section, index) => (
              <Draggable
                key={section.id}
                draggableId={section.id}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      marginBottom: "30px",
                      ...provided.draggableProps.style,
                    }}
                  >
                    {renderSection(
                      section.title,
                      section.id,
                      section.id === "resumeExperiences"
                        ? localExperiences
                        : section.id === "resumeEducation"
                        ? localEducation
                        : localSkills,
                      section.type
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </ResumeSection>
  );
}
