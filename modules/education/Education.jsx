"use client";

import AppHeader from "@/modules/components/AppHeader/AppHeader";
import LoadingCard from "@/modules/components/LoadingCard";
import EducationModal from "@/modules/components/modal/EducationModal";
import { ProfessionalCertified } from "@/modules/components/ProffisionalCertificate";
import {
  useAddEducation,
  useDeleteEducation,
  useEducations,
  useUpdateEducation,
} from "@/modules/education/education.query";
import {
  BellOutlined,
  DeleteOutlined,
  EditOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Card, Col, Flex, Row, Typography } from "antd";
import Layout from "antd/es/layout/layout";
import Image from "next/image";
import { useState } from "react";

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
    if (confirm("Are you sure you want to delete this experience?")) {
      deleteEducation(id, {
        onSuccess: () => message.success("Experience deleted successfully"),
        onError: () => message.error("Failed to delete"),
      });
    }
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
      <AppHeader />

      <div style={{ padding: "0 48px" }} className="relative mb-3">
        <div className="relative mb-4">
          <Breadcrumb
            style={{ margin: "16px 0", fontSize: "20px" }}
            items={[{ title: "Education & Certifications" }]}
          />
          <Text style={{ fontSize: "12px", marginBottom: "4px" }}>
            Manage your educational background and achievements
          </Text>
          <Flex gap="small" wrap className="flex-buttons">
            <Button className="w-fit">Add Certification</Button>
            <Button type="primary" className="w-fit" onClick={handleAdd}>
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
                  data?.education?.map((edu) => (
                    <Card
                      key={edu.id}
                      title={
                        <div style={{ display: "flex", gap: "15px" }}>
                          <Title style={{ fontSize: "var(--text-xl)" }}>
                            {edu.degree}
                          </Title>
                          <Button type="primary" size="small" ghost>
                            {edu.degreeType}
                          </Button>
                        </div>
                      }
                      style={{
                        width: "100%",
                        position: "relative",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "14px",
                          right: 4,
                          display: "flex",
                          gap: "5px",
                        }}
                      >
                        <Button
                          icon={<EditOutlined />}
                          type="primary"
                          size="small"
                          onClick={() => handleEdit(edu)}
                        ></Button>
                        <Button
                          icon={<DeleteOutlined />}
                          danger
                          type="primary"
                          size="small"
                          onClick={() => handleDelete(edu.id)}
                        ></Button>
                      </div>
                      <Title level={4} style={{ color: "blue" }}>
                        <strong>{edu.institution}</strong>
                      </Title>
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          color: "grey",
                          fontSize: "var(--text-sm)",
                        }}
                      >
                        <Text>{edu.location}</Text>|<p>{edu.startDate}</p>-
                        <Text>{edu.endDate}</Text>|<p>{edu.gpa}</p>
                      </div>
                      <Paragraph
                        style={{ color: "grey", fontSize: "var(--text-sm)" }}
                      >
                        {edu.description}
                      </Paragraph>
                      <Text>
                        <strong>Key Achievements:</strong>
                      </Text>
                      <ul className="list-disc pl-5 text-gray-400">
                        {edu.achievements?.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </Card>
                  ))
                )}
              </div>
              <ProfessionalCertified />
            </Col>

            <Col xs={24} sm={6} md={8} lg={8}>
              <Card
                title="Experience Analytics"
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
                      fontSize: "var(--text-sm)",
                      color: "grey",
                    }}
                  >
                    Years of Education
                  </Text>
                  <div className="flex justify-between">
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
                title="AI Suggestions"
                variant="borderless"
                style={{
                  marginTop: "20px",
                }}
              >
                <Card>
                  <Text className="font-bold text-sm">
                    {" "}
                    MongoDB Developer Certification
                  </Text>
                  <Text style={{ color: "grey" }}>
                    High demand in current job market
                  </Text>
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
                  <Text className="text-gray-400">
                    Matches your experience profile
                  </Text>
                  <br />
                  <Button type="primary" size="small">
                    Get Certified
                  </Button>
                </Card>
              </Card>
              <Card
                title="Quick Actions"
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
    </Layout>
  );
}
