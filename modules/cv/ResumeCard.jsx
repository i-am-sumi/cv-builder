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
import { Button, Card, Form, Layout, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { ButtonDiv, CVbuilderCard } from "./CVBuilder.stc";

const { Title, Text, Paragraph } = Typography;

export default function ResumeCard({
  resumeExperiences = [],
  resumeEducation = [],
  resumeSkills = [],
  handleDeleteResumeItem,
}) {
  const [form] = Form.useForm();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(
    "Experienced software engineer with 5+ years developing scalable web applications."
  );
  const paragraphRef = useRef(null);
  const [sections, setSections] = useState([
    { id: "resumeExperiences", title: "Work Experiences", type: "experience" },
    { id: "resumeEducation", title: "Education", type: "education" },
    { id: "resumeSkills", title: "Skills", type: "skill" },
  ]);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      form.setFieldsValue({
        user: {
          name: `${parsedUser.firstName} ${parsedUser.lastName}`,
          email: parsedUser.email,
        },
      });
    }
  }, [form]);

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

  useEffect(() => {
    const storedSummary = localStorage.getItem("professionalSummary");
    if (storedSummary) setText(storedSummary);
  }, []);

  const renderSection = (title, droppableId, items, type) => (
    <CVbuilderCard style={{ border: "none" }}>
      <Title level={3}>{title}</Title>

      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              minHeight: "150px",
              padding: "10px",
              border: snapshot.isDraggingOver
                ? "1px dashed #1677ff"
                : "1px solid #ddd",
              borderRadius: "6px",
              background: snapshot.isDraggingOver ? "#f5f9ff" : "#fff",
            }}
          >
            {items.length === 0 && (
              <Paragraph style={{ color: "gray" }}>
                Drag your {title} here...
              </Paragraph>
            )}
            {items.map((item, index) => (
              <Draggable
                key={`${type}-${item.id}`}
                draggableId={`${type}-${item.id}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <Card
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      marginBottom: "8px",
                      background: snapshot.isDragging ? "#eef3ff" : "#fff",
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
                        <Title level={5}>
                          {item.jobTitle || item.degree || item.name}
                        </Title>
                        <Text>
                          {item.company || item.institution || item.category}
                        </Text>
                        {item.description && (
                          <Paragraph
                            style={{ fontSize: "12px", color: "gray" }}
                          >
                            {item.description}
                          </Paragraph>
                        )}
                      </div>
                      <div className="editDeleteBtns">
                        <Button
                          icon={<FontAwesomeIcon icon={faPen} />}
                          type="primary"
                          size="small"
                        />
                        <Button
                          icon={<FontAwesomeIcon icon={faTrash} />}
                          danger
                          type="primary"
                          size="small"
                          onClick={() => handleDeleteResumeItem(type, item.id)}
                        />
                      </div>
                    </div>
                  </Card>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </CVbuilderCard>
  );

  return (
    <Layout>
      <Card style={{ position: "relative" }}>
        <Title level={2}>
          {user ? `${user.firstName} ${user.lastName}` : "User Name"}
        </Title>
        <Text>Senior Software Engineer</Text>
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
        <CVbuilderCard style={{ position: "relative", border: "none" }}>
          <Title level={3}>Professional Summary</Title>
          <Button
            style={{ position: "absolute", right: "5px", top: "10px" }}
            onClick={() => setIsEditing(true)}
          >
            <FontAwesomeIcon icon={faPen} style={{ fontSize: "10px" }} />
          </Button>

          <Card
            style={{
              marginBottom: "20px",
              background: isEditing ? "white" : "#eef1ff",
              border: "1px solid #c9ccd1",
            }}
          >
            <Paragraph
              ref={paragraphRef}
              contentEditable={isEditing}
              suppressContentEditableWarning={true}
              style={{
                color: "#6f6f70",
                outline: "none",
                padding: "2px",
              }}
              onBlur={(e) => {
                const newText = e.currentTarget.textContent;
                setText(newText);
                setIsEditing(false);
                localStorage.setItem("professionalSummary", newText);
              }}
            >
              {text}
            </Paragraph>
          </Card>
        </CVbuilderCard>

        <Droppable droppableId="resumeSections" type="SECTION">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {sections.map((section, index) => (
                <Draggable
                  key={section.id}
                  draggableId={section.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        marginBottom: "15px",
                        background: snapshot.isDragging
                          ? "#f0f7ff"
                          : "transparent",
                        border: snapshot.isDragging
                          ? "1px dashed #1677ff"
                          : "none",
                        ...provided.draggableProps.style,
                      }}
                    >
                      {renderSection(
                        section.title,
                        section.id,
                        section.id === "resumeExperiences"
                          ? resumeExperiences
                          : section.id === "resumeEducation"
                          ? resumeEducation
                          : resumeSkills,
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
      </Card>
    </Layout>
  );
}
