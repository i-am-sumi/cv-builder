"use client";
import AppHeader from "@/modules/components/AppHeader/AppHeader";
import FrameworkLibraries from "@/modules/components/FrameWork&Lebraries";
import LoadingCard from "@/modules/components/LoadingCard";
import {
  useAddSkill,
  useDeleteSkill,
  useSkills,
  useUpdateSkill,
} from "@/modules/skill/skill.query";
import {
  CloudOutlined,
  DeleteOutlined,
  DockerOutlined,
  EditOutlined,
  GithubOutlined,
  LaptopOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Flex,
  Layout,
  Progress,
  Row,
  Tag,
  Typography,
} from "antd";
import Image from "next/image";
import { useState } from "react";
import SkillModal from "../components/modal/SkillModal";
import { SkillComponents, ToolsCard } from "./Skill.stc";
const { Title, Text, Paragraph } = Typography;

export default function Skill() {
  const { data, isLoading, error } = useSkills();
  const { mutate: addSkill, isLoading: creating } = useAddSkill();
  const { mutate: updateSkill, isLoading: updating } = useUpdateSkill();
  const { mutate: deleteSkill } = useDeleteSkill();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleAdd = () => {
    setSelectedSkill(null);
    setModalOpen(true);
  };

  const handleEdit = (skill) => {
    setSelectedSkill(skill);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this experience?")) {
      deleteSkill(id, {
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

    if (selectedSkill) {
      updateSkill(
        { id: selectedSkill.id, ...payload },
        {
          onSuccess: () => {
            setModalOpen(false);
            message.success("Education updated");

            setSelectedSkill(null);
          },
          onError: () => message.error("Update failed"),
        }
      );
    } else {
      addSkill(payload, {
        onSuccess: () => {
          setModalOpen(false);
          message.success("Education added");
        },
        onError: () => message.error("Creation failed"),
      });
    }
  };

  console.log("skill", data);
  return (
    <Layout>
      <AppHeader />
      <SkillComponents>
        <div style={{ position: "relative", marginBottom: "10px" }}>
          <Breadcrumb
            items={[{ title: "Skills & Competencies" }]}
            className="breadcrumb"
          />
          <Text style={{ fontSize: "13px", marginBottom: "5px" }}>
            Manage your technical and soft skills
          </Text>
          <Flex gap="small" wrap className="flex-buttons">
            <Button className="w-fit">Skills Assessment</Button>
            <Button type="primary" className="w-fit" onClick={handleAdd}>
              <PlusOutlined /> Add skill
            </Button>
          </Flex>
        </div>
        <Layout style={{ padding: "24px 0" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={16} md={16} lg={16}>
              <Card
                title={
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <LaptopOutlined />

                    <Title level={4} style={{ marginTop: "5px" }}>
                      {" "}
                      Programming Languages
                    </Title>
                  </div>
                }
                style={{ marginBottom: "10px" }}
              >
                <Flex className="absolute top-4 right-4">
                  <Button size="small">
                    <PlusOutlined />
                    Add Skills
                  </Button>
                </Flex>

                <Flex gap="small" vertical style={{ width: "95%" }}>
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
                      data?.skills?.map((skill) => (
                        <div key={skill.id}>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <div style={{ width: "100%" }}>
                              <div style={{ display: "flex", gap: "5px" }}>
                                <Text style={{ font: "icon" }}>
                                  {skill.name}
                                  <Tag
                                    color="green"
                                    style={{
                                      marginLeft: "6px",
                                      fontSize: "12px",
                                    }}
                                  >
                                    {skill.level}
                                  </Tag>
                                </Text>

                                <Paragraph style={{ color: "grey" }}>
                                  {skill.yearsOfExperience}+ years
                                </Paragraph>
                              </div>
                              <Progress
                                percent={Math.min(
                                  (skill.yearsOfExperience / 10) * 100,
                                  100
                                )}
                                showInfo={false}
                                strokeColor={
                                  skill.yearsOfExperience >= 5
                                    ? "#0cfc34ff"
                                    : skill.yearsOfExperience >= 3
                                    ? "#3f4bf3ff"
                                    : "#fcec0aff"
                                }
                                size={"defult"}
                              />
                            </div>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <Button
                                style={{}}
                                type="primary"
                                size="small"
                                onClick={() => handleEdit(skill)}
                              >
                                <EditOutlined />
                              </Button>
                              <Button
                                type="primary"
                                size="small"
                                danger
                                onClick={() => {
                                  handleDelete(skill.id);
                                }}
                              >
                                <DeleteOutlined />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </Flex>
              </Card>
              <FrameworkLibraries />
              <Card
                title={
                  <div style={{ display: "flex", gap: "10px" }}>
                    <LaptopOutlined />
                    <Title level={4} style={{ marginTop: "5px" }}>
                      Tools & Technologies
                    </Title>
                  </div>
                }
                style={{ position: "relative", marginBottom: "10px" }}
              >
                <Text
                  style={{ position: "absolute", top: "15px", right: "4px" }}
                >
                  <Button size="small">
                    <PlusOutlined />
                    Add Tool
                  </Button>
                </Text>
                <Row gutter={16}>
                  <Col span={6} xs={32} sm={16} md={12} lg={6}>
                    <ToolsCard variant="borderless">
                      <Paragraph style={{ textAlign: "center" }}>
                        {" "}
                        <CloudOutlined style={{ fontSize: "30px" }} />
                      </Paragraph>
                      <Paragraph className="paragraph">AWS</Paragraph>
                      <Tag color="blue">Advanced</Tag>
                    </ToolsCard>
                  </Col>
                  <Col span={6} xs={32} sm={16} md={12} lg={6}>
                    <Card
                      variant="borderless"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      {" "}
                      <Paragraph style={{ textAlign: "center" }}>
                        {" "}
                        <DockerOutlined
                          style={{ fontSize: "30px", color: "#2fb0ebff" }}
                        />
                      </Paragraph>
                      <Paragraph className="paragraph">Docker</Paragraph>
                      <Tag color="orange">Intermediate</Tag>
                    </Card>
                  </Col>
                  <Col span={6} xs={32} sm={16} md={12} lg={6}>
                    <Card
                      variant="borderless"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      {" "}
                      <Paragraph style={{ textAlign: "center" }}>
                        {" "}
                        <GithubOutlined
                          style={{ fontSize: "30px", color: "#2fb0ebff" }}
                        />
                      </Paragraph>
                      <Paragraph className="paragraph">Github</Paragraph>
                      <Tag color="green">Expert</Tag>
                    </Card>
                  </Col>
                  <Col span={6} xs={32} sm={16} md={12} lg={6}>
                    <Card
                      variant="borderless"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      {" "}
                      <Paragraph
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {" "}
                        <Image
                          src="/assect/mongoDB.png"
                          width={30}
                          height={30}
                          alt=""
                        />
                      </Paragraph>
                      <Paragraph className="paragraph">MongoDB</Paragraph>
                      <Tag color="blue">Advanced</Tag>
                    </Card>
                  </Col>
                </Row>
              </Card>
              <Card
                title={
                  <div style={{ display: "flex", gap: "10px" }}>
                    <LaptopOutlined />
                    <Title level={4} style={{ marginTop: "5px" }}>
                      {" "}
                      Soft Skills
                    </Title>
                  </div>
                }
                style={{ position: "relative" }}
              >
                <Text
                  style={{ position: "absolute", top: "14px", right: "4px" }}
                >
                  <Button size="small">
                    <PlusOutlined />
                    Add Tool
                  </Button>
                </Text>
                <div className="">
                  <Tag style={{ padding: "10px", fontSize: "13px" }}>
                    Team Leadership
                  </Tag>
                  <Tag style={{ padding: "10px", fontSize: "13px" }}>
                    Problem Solving
                  </Tag>
                  <Tag style={{ padding: "10px", fontSize: "13px" }}>
                    Communication
                  </Tag>
                  <Tag style={{ padding: "10px", fontSize: "13px" }}>
                    Mentoring
                  </Tag>
                  <Tag style={{ padding: "10px", fontSize: "13px" }}>
                    Agile Methodologies
                  </Tag>
                  <Tag
                    style={{
                      padding: "10px",
                      fontSize: "13px",
                      marginTop: "5px",
                    }}
                  >
                    Project Management
                  </Tag>
                  <Tag style={{ padding: "10px", fontSize: "13px" }}>
                    Code Review
                  </Tag>
                  <Tag style={{ padding: "10px", fontSize: "13px" }}>
                    Technical Writing
                  </Tag>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={4} md={8} lg={8}>
              <Card
                title="Skills Overview"
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
                    89%
                  </Title>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: "10px",
                      color: "grey",
                    }}
                  >
                    Market Relevance Score
                  </Text>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text>Technical Skills</Text>

                    <Text style={{ color: "grey" }}>18 skills</Text>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text>Expert Level</Text>

                    <Text style={{ color: "green" }}>5 skills</Text>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text>Learning</Text>
                    <Paragraph style={{ color: "orange" }}>3 skills</Paragraph>
                  </div>
                </Flex>
              </Card>
              <Card
                title="Trending Skills"
                variant="borderless"
                style={{
                  marginTop: "20px",
                }}
              >
                <Card>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                    }}
                  >
                    <Text style={{ font: "icon", fontSize: "14px" }}>
                      {" "}
                      GraphQL
                    </Text>
                    <Paragraph style={{ color: "green" }}>
                      ↗ 35% demand
                    </Paragraph>
                  </div>
                  <Text style={{ color: "grey" }}>
                    API technology trending in React jobs
                  </Text>
                  <br />
                  <Button type="primary" size="small">
                    Get Certified
                  </Button>
                </Card>
                <Card>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                    }}
                  >
                    <Text style={{ font: "icon", fontSize: "14px" }}>
                      {" "}
                      Kubernetes
                    </Text>
                    <Paragraph style={{ color: "green" }}>
                      ↗ 28% demand
                    </Paragraph>
                  </div>
                  <Text style={{ color: "grey" }}>
                    Container orchestration in high demand
                  </Text>
                  <br />
                  <Button type="primary" size="small">
                    Get Certified
                  </Button>
                </Card>
              </Card>
              <Card
                title="Skill Actions"
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
                  <Button block>Set Renewal Reminders</Button>
                </Flex>
              </Card>
            </Col>
          </Row>
        </Layout>
      </SkillComponents>
      <SkillModal
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          setSelectedSkill(null);
        }}
        onSubmit={handleSubmit}
        initialData={selectedSkill}
        loading={creating || updating}
        type="skill"
      />
    </Layout>
  );
}
