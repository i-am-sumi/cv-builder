import {
  faArrowsSpin,
  faPen,
  faRotateLeft,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { Button, Card, Layout, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { ButtonDiv } from "./CVBuilder.stc";
const cardItems = ["Work Experience", "Education", "skills"];
const { Title, Text, Paragraph } = Typography;

const cardTitle = ["Work Experiences", "Educations", "Skills"];

const handleDragEnd = (result) => {
  if (!result.destination) return;

  if (result.source.droppableId === "experiences") {
    const reordered = reorder(
      experiences,
      result.source.index,
      result.destination.index
    );
    setExperiences(reordered);
  }

  if (result.source.droppableId === "education") {
    const reordered = reorder(
      education,
      result.source.index,
      result.destination.index
    );
    setEducation(reordered);
  }

  if (result.source.droppableId === "skills") {
    const reordered = reorder(
      skills,
      result.source.index,
      result.destination.index
    );
    setSkills(reordered);
  }
};

export default function ResumeCard({ resumeExperiences }) {
  const paragraphRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(
    "Experienced software engineer with 5+ years developing scalable web applications. Proven track record of leading cross-functional teams and delivering high-impact projects."
  );
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
  return (
    <Layout>
      <Card style={{ position: "relative" }}>
        <Title>John Doe</Title>
        <Text>Senior Software Engineer</Text>
        <ButtonDiv>
          <Button>
            {" "}
            <FontAwesomeIcon
              icon={faRotateLeft}
              style={{
                alignItems: "center",
                fontSize: "10px",
              }}
            />
          </Button>
          <Button>
            {" "}
            <FontAwesomeIcon
              icon={faRotateRight}
              style={{
                alignItems: "center",
                fontSize: "10px",
              }}
            />
          </Button>
          <Button>
            {" "}
            <FontAwesomeIcon
              icon={faArrowsSpin}
              style={{
                alignItems: "center",
                fontSize: "10px",
              }}
            />
          </Button>
        </ButtonDiv>
      </Card>

      <Card style={{ position: "relative", marginTop: "5px" }}>
        <Title level={3}>Professional Summary</Title>
        <Button
          style={{ position: "absolute", right: "5px", top: "10px" }}
          onClick={() => setIsEditing(true)}
        >
          <FontAwesomeIcon
            icon={faPen}
            style={{
              alignItems: "center",
              fontSize: "10px",
            }}
          />
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
              marginBottom: "8px",
              outline: "none",
              padding: "2px",
            }}
            onBlur={(e) => {
              setText(e.currentTarget.textContent);
              setIsEditing(false);
            }}
          >
            {text}
          </Paragraph>
        </Card>
      </Card>

      {cardItems.map((cardItem, index) => (
        <Card key={index} style={{ marginTop: "5px" }}>
          <Title level={3}>{cardItem}</Title>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="resumeExperiences">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {resumeExperiences.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={`resume-${item.id}`}
                      index={index}
                    >
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{ marginBottom: "10px" }}
                        >
                          <Title level={5}>{item.jobTitle}</Title>
                          <Text>{item.company}</Text>
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
      ))}
    </Layout>
  );
}
