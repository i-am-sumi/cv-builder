"use client";

import LoadingCard from "@/modules/components/LoadingCard";
import ExperienceModal from "@/modules/components/modal/ExperiencesModal";
import {
  useAddExperience,
  useDeleteExperience,
  useExperiences,
  useUpdateExperience,
} from "@/modules/experience/experience.query";
import {
  BulbOutlined,
  FileTextOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Flex,
  message,
  Progress,
  Row,
  Tag,
  Typography,
} from "antd";

import {
  faCalendarWeek,
  faLocationDot,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "antd/es/layout/layout";
import Image from "next/image";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Error from "../components/Error";
import { EducationSection } from "../education/Education.stc";
import { AchievementLists, Analytics } from "./Experience.stc";

const { Title, Text, Paragraph } = Typography;

export default function Experience() {
  const { data, isLoading, error } = useExperiences();

  const { mutate: addExperience, isLoading: creating } = useAddExperience();
  const { mutate: updateExperience, isLoading: updating } =
    useUpdateExperience();
  const { mutate: deleteExperience } = useDeleteExperience();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState(null);

  const handleAdd = () => {
    setSelectedExp(null);
    setModalOpen(true);
  };

  const handleEdit = (exp) => {
    setSelectedExp(exp);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    deleteExperience(id, {
      onSuccess: () => {
        toast.success("Experience deleted successfully!");
      },
      onError: () => {
        toast.error("Failed to delete Experience!");
      },
    });
  };

  const handleSubmit = (formValues) => {
    const payload = {
      ...formValues,
      achievements: formValues.achievements
        ? formValues.achievements.split(",").map((item) => item.trim())
        : [],
      technologies: formValues.technologies
        ? formValues.technologies.split(",").map((item) => item.trim())
        : [],
    };

    if (selectedExp) {
      updateExperience(
        { id: selectedExp.id, ...payload },
        {
          onSuccess: () => {
            message.success("Experience updated");
            setModalOpen(false);
            setSelectedExp(null);
          },
          onError: () => message.error("Update failed"),
        }
      );
    } else {
      addExperience(payload, {
        onSuccess: () => {
          message.success("Experience added");
          setModalOpen(false);
        },
        onError: () => message.error("Creation failed"),
      });
    }
  };

  if (error) return <Error />;
  return (
    <Layout>
      <ToastContainer />
      <EducationSection>
        <div style={{ position: "relative", marginBottom: "5px" }}>
          <div style={{ marginTop: "10px" }}>
            <Title level={2} style={{ fontFamily: "monospace" }}>
              Work Experience
            </Title>
            <Text style={{ fontSize: "14px", marginBottom: "5px" }}>
              Manage your professional experience
            </Text>
          </div>
          <Flex gap="small" wrap className="flex-buttons">
            <Button>Import LinkedIn</Button>
            <Button type="primary" onClick={handleAdd}>
              Add Experience
            </Button>
          </Flex>
        </div>

        <Layout style={{ padding: "24px 0" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={16} md={16} lg={16}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                {isLoading ? (
                  <LoadingCard />
                ) : (
                  data?.map((exp) => (
                    <Card key={exp.id} className="education-card">
                      <div className="education-card-item">
                        <Title level={3}>{exp.jobTitle}</Title>

                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            flexShrink: 0,
                          }}
                        >
                          <Button
                            icon={
                              <FontAwesomeIcon
                                icon={faPen}
                                style={{
                                  alignItems: "center",
                                  fontSize: "15px",
                                  color: "white",
                                }}
                              />
                            }
                            type="primary"
                            size="small"
                            onClick={() => handleEdit(exp)}
                          ></Button>
                          <Button
                            icon={
                              <FontAwesomeIcon
                                icon={faTrash}
                                style={{
                                  alignItems: "center",
                                  fontSize: "15px",
                                  color: "white",
                                }}
                              />
                            }
                            danger
                            type="primary"
                            size="small"
                            onClick={() => handleDelete(exp.id)}
                          ></Button>
                        </div>
                      </div>

                      <Title level={4} style={{ color: "blue" }}>
                        {exp.company}
                      </Title>

                      <div className="education-div">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          style={{
                            alignItems: "center",
                            fontSize: "15px",
                            color: "blue",
                          }}
                        />
                        <Text style={{ color: "gray" }}>{exp.location}</Text>
                        <span>|</span>
                        <FontAwesomeIcon
                          icon={faCalendarWeek}
                          style={{
                            alignItems: "center",
                            fontSize: "15px",
                            color: "orange",
                          }}
                        />
                        <Text style={{ color: "gray" }}>{exp.startDate}</Text> -{" "}
                        <Text style={{ color: "gray" }}>{exp.endDate}</Text>
                      </div>

                      <Paragraph style={{ color: "grey", fontSize: "14px" }}>
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
                  ))
                )}
              </div>
            </Col>

            <Col xs={24} sm={6} md={8} lg={8}>
              <Card
                title="Experience Analytics"
                variant="borderless"
                style={{ width: "100%" }}
              >
                <Analytics gap="small" vertical>
                  <Text className="analytics-title">5.6</Text>
                  <Text className="analytics-text">Year Total Experince</Text>
                  <div>
                    <div className="analytics-div">
                      <Paragraph>Frontend Development</Paragraph>
                      <Paragraph> 4.5 years</Paragraph>
                    </div>
                    <Progress percent={80} status="active" showInfo={false} />
                  </div>
                  <div>
                    <div className="analytics-div">
                      <Paragraph>Team Leadership</Paragraph>
                      <Paragraph> 2 years</Paragraph>
                    </div>
                    <Progress
                      percent={70}
                      status="exception"
                      showInfo={false}
                    />
                  </div>
                </Analytics>
              </Card>
              <Card
                title="AI Suggestions"
                variant="borderless"
                style={{
                  width: "100%",
                  marginTop: "20px",
                  textEmphasisColor: "blue-400",
                }}
              >
                <Card
                  style={{
                    marginBottom: "20px",
                    backgroundColor: "#f7f8fcff",
                    border: "1px solid #c3dafe",
                  }}
                >
                  <Text
                    style={{
                      color: "#839df3ff",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    {" "}
                    <BulbOutlined
                      style={{ color: "#faea06ff", marginRight: "6px" }}
                    />
                    Improvement Tip
                  </Text>
                  <Paragraph
                    style={{
                      color: "#5178f7ff",
                      marginBottom: "8px",
                    }}
                  >
                    Add quantifiable metrics to your achievements. For example:
                    Improved performance by X% or Managed team of X people.
                  </Paragraph>
                </Card>
                <Card
                  style={{
                    marginBottom: "20px",
                    backgroundColor: "#fcf7f8ff",
                    border: "1px solid #fcaeaeff",
                  }}
                >
                  <Text
                    style={{
                      color: "#ff9b19ff",
                      marginBottom: "8px",
                    }}
                  >
                    {" "}
                    <WarningOutlined
                      style={{ color: "#faea06ff", marginRight: "6px" }}
                    />
                    Missing Skills
                  </Text>
                  <Paragraph
                    style={{
                      color: "#ff9b19ff",
                      marginBottom: "8px",
                    }}
                  >
                    Consider adding cloud platforms (AWS, Azure) to match
                    current job market demands.
                  </Paragraph>
                </Card>
              </Card>
              <Card
                title="Quick Actions"
                variant="borderless"
                style={{ marginTop: "20px", width: "100%" }}
              >
                <Flex vertical gap="small" style={{ width: "100%" }}>
                  <Button type="primary" block>
                    <Image
                      src="/assect/AiIcon.png"
                      alt="AI Icon"
                      width={20}
                      height={20}
                    />
                    Ai Optimize Description
                  </Button>
                  <Button block>
                    <FileTextOutlined style={{ fontSize: "16px" }} /> Generate
                    CV Section
                  </Button>
                  <Button block>View Career Timeline</Button>
                </Flex>
              </Card>
            </Col>
          </Row>
        </Layout>
      </EducationSection>

      <ExperienceModal
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          setSelectedExp(null);
        }}
        onSubmit={handleSubmit}
        initialData={selectedExp}
        loading={creating || updating}
      />
    </Layout>
  );
}
