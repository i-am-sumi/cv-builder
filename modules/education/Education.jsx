"use client";

import LoadingCard from "@/modules/components/LoadingCard";
import EducationModal from "@/modules/components/modal/EducationModal";
import { ProfessionalCertified } from "@/modules/components/ProffisionalCertificate";
import {
  useAddEducation,
  useDeleteEducation,
  useEducations,
  useUpdateEducation,
} from "@/modules/education/education.query";
import { BellOutlined, MobileOutlined } from "@ant-design/icons";
import {
  faGraduationCap,
  faPen,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Flex, Row, Tag, Typography } from "antd";
import Layout from "antd/es/layout/layout";
import Image from "next/image";
import { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import { EditDeleteBtns, EducationListItem, EduHeader } from "./Education.stc";

const { Title, Text, Paragraph } = Typography;

export default function Education() {
  const { data, isLoading, error } = useEducations();
  const { mutate: addEducation, isLoading: creating } = useAddEducation();
  const { mutate: updateEducation, isLoading: updating } = useUpdateEducation();
  const { mutate: deleteEducation } = useDeleteEducation();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEdu, setSelectedEdu] = useState(null);

  const handleAdd = () => {
    setSelectedEdu(null);
    setModalOpen(true);
  };

  const handleEdit = (edu) => {
    setSelectedEdu(edu);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    deleteEducation(id, {
      onSuccess: () => {
        toast.success("Education deleted successfully!");
      },
      onError: () => {
        toast.error("Failed to delete education!");
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

    if (selectedEdu) {
      updateEducation(
        { id: selectedEdu.id, ...payload },
        {
          onSuccess: () => {
            setModalOpen(false);
            message.success("Education updated");

            setSelectedEdu(null);
          },
          onError: () => message.error("Update failed"),
        }
      );
    } else {
      addEducation(payload, {
        onSuccess: () => {
          setModalOpen(false);
          message.success("Education added");
        },
        onError: () => message.error("Creation failed"),
      });
    }
  };

  return (
    <Layout>
      <div
        style={{ padding: "0 48px", position: "relative", marginBottom: "5px" }}
      >
        <div style={{ position: "relative", marginBottom: "5px" }}>
          <div style={{ marginTop: "10px" }}>
            <Title level={2} style={{ fontFamily: "monospace" }}>
              Education & Certification
            </Title>
            <Text style={{ fontSize: "15px", marginBottom: "4px" }}>
              Manage your educational background and achievements
            </Text>
          </div>

          <Flex gap="small" wrap className="flex-buttons">
            <Button className="w-fit">Add Certification</Button>
            <Button type="primary" className="w-fit" onClick={handleAdd}>
              <FontAwesomeIcon
                icon={faPlus}
                style={{
                  alignItems: "center",
                  fontSize: "15px",
                  color: "white",
                }}
              />{" "}
              Add Education
            </Button>
          </Flex>
        </div>

        <Layout style={{ padding: "24px 0", marginBottom: "5px" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={16} sm={8} md={16}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {isLoading ? (
                  <LoadingCard />
                ) : (
                  data?.map((edu) => (
                    <Card
                      key={edu.id}
                      title={
                        <EduHeader>
                          <Title level={3} className="edu-header">
                            {edu.degree}
                          </Title>
                          <div className="edu-div">
                            <Tag
                              color="blue"
                              style={{ padding: "5px", fontSize: "13px" }}
                            >
                              <FontAwesomeIcon
                                icon={faGraduationCap}
                                style={{ color: "gray" }}
                              />
                              {edu.degreeType}
                            </Tag>
                          </div>
                        </EduHeader>
                      }
                      style={{
                        width: "100%",
                        position: "relative",
                        marginBottom: "10px",
                      }}
                    >
                      <EditDeleteBtns>
                        <Button
                          icon={
                            <FontAwesomeIcon
                              icon={faPen}
                              style={{
                                alignItems: "center",
                                fontSize: "10px",
                                color: "white",
                              }}
                            />
                          }
                          type="primary"
                          size="small"
                          onClick={() => handleEdit(edu)}
                        ></Button>
                        <Button
                          icon={
                            <FontAwesomeIcon
                              icon={faTrash}
                              style={{
                                alignItems: "center",
                                fontSize: "10px",
                                color: "white",
                              }}
                            />
                          }
                          danger
                          type="primary"
                          size="small"
                          onClick={() => handleDelete(edu.id)}
                        ></Button>
                      </EditDeleteBtns>
                      <Title level={4} style={{ color: "blue" }}>
                        <strong>{edu.institution}</strong>
                      </Title>
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          color: "grey",
                        }}
                      >
                        <Text>{edu.location}</Text>|<Text>{edu.startDate}</Text>
                        -<Text>{edu.endDate}</Text>|
                        <Paragraph>{edu.gpa}</Paragraph>
                      </div>
                      <Paragraph
                        style={{ color: "grey", fontSize: "var(--text-sm)" }}
                      >
                        {edu.description}
                      </Paragraph>
                      <Text style={{ fontSize: "14px" }}>
                        <strong>Key Achievements:</strong>
                      </Text>
                      <EducationListItem>
                        {edu.achievements?.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </EducationListItem>
                    </Card>
                  ))
                )}
              </div>
              <ProfessionalCertified />
            </Col>

            <Col xs={24} sm={6} md={8} lg={8}>
              <Card
                title={<Title level={3}>Experience Analytics</Title>}
                variant="borderless"
                style={{ width: "100%" }}
              >
                <Flex gap="small" vertical>
                  <Title
                    style={{
                      fontSize: "30px",
                      textAlign: "center",
                      color: "blue",
                    }}
                  >
                    4.8{" "}
                  </Title>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "grey",
                      fontSize: "15px",
                    }}
                  >
                    Years of Education
                  </Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      textAlign: "center",
                    }}
                  >
                    <div>
                      <Title
                        level={3}
                        style={{
                          color: "green",
                          textAlign: "center",
                        }}
                      >
                        3
                      </Title>
                      <Text style={{ color: "grey" }}>
                        Active Certifications
                      </Text>
                    </div>
                    <div>
                      <Title
                        level={3}
                        style={{ color: "green", textAlign: "center" }}
                      >
                        1
                      </Title>
                      <Text style={{ color: "gray" }}>Expiring Soon</Text>
                    </div>
                  </div>
                </Flex>
              </Card>
              <Card
                title={<Title level={3}>frontend developer</Title>}
                variant="borderless"
                style={{
                  marginTop: "20px",
                }}
              >
                <Card>
                  <Text style={{ fontWeight: "bold", fontSize: "13px" }}>
                    {" "}
                    MongoDB Developer Certification
                  </Text>
                  <Paragraph style={{ color: "grey" }}>
                    High demand in current job market
                  </Paragraph>
                  <br />
                  <Button type="primary" size="small">
                    Get Certified
                  </Button>
                </Card>
                <Card>
                  <Text style={{ fontWeight: "bold", fontSize: "14px" }}>
                    {" "}
                    Docker Certified Associate
                  </Text>
                  <Paragraph style={{ color: "grey" }}>
                    Matches your experience profile
                  </Paragraph>
                  <br />
                  <Button type="primary" size="small">
                    Get Certified
                  </Button>
                </Card>
              </Card>
              <Card
                title={<Title level={3}>Quick Actions</Title>}
                variant="borderless"
                style={{ width: "100%", marginTop: "20px" }}
              >
                <Flex
                  vertical
                  gap="small"
                  style={{ width: "100%", fontSize: "12px" }}
                >
                  <Button type="primary" block>
                    <Image
                      src="/assect/AiIcon.png"
                      alt="AI Icon"
                      width={20}
                      height={20}
                    />
                    Generate Education Report
                  </Button>
                  <Button block>
                    <BellOutlined
                      style={{
                        color: "#faa506ff",
                        marginRight: "6px",
                        fontSize: "16px",
                      }}
                    />
                    Set Renewal Reminders
                  </Button>
                  <Button block>
                    {" "}
                    <MobileOutlined
                      style={{
                        color: "#6306faff",
                        marginRight: "6px",
                        fontSize: "16px",
                      }}
                    />
                    Share Credentials
                  </Button>
                </Flex>
              </Card>
            </Col>
          </Row>
        </Layout>
      </div>
      <EducationModal
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          setSelectedEdu(null);
        }}
        onSubmit={handleSubmit}
        initialData={selectedEdu}
        loading={creating || updating}
        type="education"
      />
      <ToastContainer />
    </Layout>
  );
}
