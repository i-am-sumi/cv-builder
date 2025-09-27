"use client";
import FrameworkLibraries from "@/modules/components/FrameWork&Lebraries";
import LoadingCard from "@/modules/components/LoadingCard";
import {
  useAddSkill,
  useDeleteSkill,
  useSkills,
  useUpdateSkill,
} from "@/modules/skill/skill.query";
import { LaptopOutlined, PlusOutlined } from "@ant-design/icons";
import {
  faChalkboard,
  faCloud,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  message,
} from "antd";
import Image from "next/image";
import { useState } from "react";
import SkillModal from "../components/modal/SkillModal";
import { SkillComponents, ToolsCard } from "./Skill.stc";

const { Title, Text, Paragraph } = Typography;

export default function Skill() {
  const { data, isLoading } = useSkills();
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
    if (confirm("Are you sure you want to delete this skill?")) {
      deleteSkill(id, {
        onSuccess: () => message.success("Skill deleted successfully"),
        onError: () => message.error("Failed to delete"),
      });
    }
  };

  const handleSubmit = (formValues) => {
    const payload = { ...formValues };

    if (selectedSkill) {
      updateSkill(
        { id: selectedSkill.id, ...payload },
        {
          onSuccess: () => {
            setModalOpen(false);
            setSelectedSkill(null);
            message.success("Skill updated successfully");
          },
          onError: () => message.error("Update failed"),
        }
      );
    } else {
      addSkill(payload, {
        onSuccess: () => {
          setModalOpen(false);
          message.success("Skill added successfully");
        },
        onError: () => message.error("Creation failed"),
      });
    }
  };

  const programmingSkills = data?.filter(
    (s) => s.category === "language" || s.category === "technical"
  );
  const tools = data?.filter((s) => s.category === "tool");
  const softSkills = data?.filter((s) => s.category === "soft_skill");

  return (
    <Layout>
      <SkillComponents>
        <div style={{ position: "relative", marginBottom: "10px" }}>
          {" "}
          <Breadcrumb
            items={[{ title: "Skills & Competencies" }]}
            className="breadcrumb"
          />{" "}
          <Text style={{ fontSize: "13px", marginBottom: "5px" }}>
            {" "}
            Manage your technical and soft skills{" "}
          </Text>{" "}
          <Flex gap="small" wrap className="flex-buttons">
            {" "}
            <Button>Skills Assessment</Button>{" "}
            <Button type="primary" className="w-fit" onClick={handleAdd}>
              {" "}
              <PlusOutlined /> Add skill{" "}
            </Button>{" "}
          </Flex>{" "}
        </div>

        <Layout style={{ padding: "24px 0" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={16}>
              <Card
                title={
                  <Flex gap="small" align="center">
                    <FontAwesomeIcon icon={faChalkboard} />
                    <Title level={4} style={{ margin: 0 }}>
                      Programming Languages
                    </Title>
                  </Flex>
                }
                extra={
                  <Button size="small" onClick={handleAdd}>
                    <PlusOutlined /> Add
                  </Button>
                }
                style={{ marginBottom: "10px" }}
              >
                {isLoading ? (
                  <LoadingCard />
                ) : (
                  programmingSkills?.map((skill) => (
                    <Flex
                      key={skill.id}
                      justify="space-between"
                      align="center"
                      style={{ marginBottom: "12px" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div style={{ display: "flex", gap: "5px" }}>
                          {" "}
                          <Text style={{ font: "icon" }}>
                            {" "}
                            {skill.name}{" "}
                            <Tag
                              color="green"
                              style={{ marginLeft: "6px", fontSize: "12px" }}
                            >
                              {" "}
                              {skill.level}{" "}
                            </Tag>{" "}
                          </Text>{" "}
                          <Paragraph style={{ color: "grey" }}>
                            {" "}
                            {skill.yearsOfExperience}+ years{" "}
                          </Paragraph>{" "}
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
                        />
                      </div>
                      <Flex
                        gap="small"
                        style={{ marginTop: "15px", marginLeft: "5px" }}
                      >
                        <Button
                          type="primary"
                          size="small"
                          onClick={() => handleEdit(skill)}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </Button>
                        <Button
                          type="primary"
                          size="small"
                          danger
                          onClick={() => handleDelete(skill.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </Flex>
                    </Flex>
                  ))
                )}
              </Card>

              <FrameworkLibraries skills={data || []} loading={isLoading} />

              <Card
                title={
                  <Flex gap="small" align="center">
                    <LaptopOutlined />
                    <Title level={4} style={{ margin: 0 }}>
                      Tools & Technologies
                    </Title>
                  </Flex>
                }
                extra={
                  <Button size="small" onClick={handleAdd}>
                    <PlusOutlined /> Add
                  </Button>
                }
              >
                {isLoading ? (
                  <LoadingCard />
                ) : (
                  <Row gutter={16}>
                    {tools?.map((ts) => (
                      <Col xs={24} sm={12} md={8} lg={6} key={ts.id}>
                        <ToolsCard>
                          <Paragraph style={{ textAlign: "center" }}>
                            <FontAwesomeIcon
                              icon={faCloud}
                              style={{ fontSize: "27px", color: "cyan" }}
                            />
                          </Paragraph>
                          <Paragraph
                            className="paragraph"
                            style={{ textAlign: "center" }}
                          >
                            {ts.name}
                          </Paragraph>
                          <Tag color="blue">{ts.level}</Tag>
                        </ToolsCard>
                      </Col>
                    ))}
                  </Row>
                )}
              </Card>

              <Card
                title={
                  <Flex gap="small" align="center">
                    <LaptopOutlined />
                    <Title level={4} style={{ margin: 0 }}>
                      Soft Skills
                    </Title>
                  </Flex>
                }
                extra={
                  <Button size="small" onClick={handleAdd}>
                    <PlusOutlined /> Add
                  </Button>
                }
              >
                {isLoading ? (
                  <LoadingCard />
                ) : softSkills?.length ? (
                  softSkills.map((s) => (
                    <Tag
                      key={s.id}
                      style={{
                        padding: "6px 15px",
                        fontSize: "16px",
                        margin: "5px",
                      }}
                      color="cyan"
                    >
                      {s.name}
                    </Tag>
                  ))
                ) : (
                  <Text type="secondary">No soft skills added yet.</Text>
                )}
              </Card>
            </Col>
            <Col xs={24} sm={4} md={8} lg={8}>
              <Card
                title={<Title level={4}>Skills Overview</Title>}
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
                    {" "}
                    89%{" "}
                  </Title>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: "22px",
                      color: "grey",
                    }}
                  >
                    {" "}
                    Market Relevance Score{" "}
                  </Text>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text>Technical Skills</Text>{" "}
                    <Text style={{ color: "grey" }}>18 skills</Text>
                  </div>{" "}
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text>Expert Level</Text>{" "}
                    <Text style={{ color: "green" }}>5 skills</Text>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text>Learning</Text>{" "}
                    <Paragraph style={{ color: "orange" }}>3 skills</Paragraph>
                  </div>
                </Flex>{" "}
              </Card>
              <Card
                title={<Title level={4}>Trending Skills</Title>}
                variant="borderless"
                style={{ marginTop: "20px" }}
              >
                <Card>
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                    }}
                  >
                    <Text style={{ font: "icon", fontSize: "14px" }}>
                      {" "}
                      GraphQL{" "}
                    </Text>
                    <Paragraph style={{ color: "green" }}>
                      {" "}
                      ↗ 35% demand{" "}
                    </Paragraph>{" "}
                  </div>
                  <Text style={{ color: "grey" }}>
                    {" "}
                    API technology trending in React jobs{" "}
                  </Text>
                  <br />
                  <Button type="primary" size="small">
                    {" "}
                    Get Certified{" "}
                  </Button>{" "}
                </Card>
                <Card>
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                    }}
                  >
                    <Text style={{ font: "icon", fontSize: "14px" }}>
                      {" "}
                      Kubernetes{" "}
                    </Text>{" "}
                    <Paragraph style={{ color: "green" }}>
                      {" "}
                      ↗ 28% demand{" "}
                    </Paragraph>{" "}
                  </div>{" "}
                  <Text style={{ color: "grey" }}>
                    {" "}
                    Container orchestration in high demand{" "}
                  </Text>{" "}
                  <br />
                  <Button type="primary" size="small">
                    {" "}
                    Get Certified{" "}
                  </Button>{" "}
                </Card>{" "}
              </Card>{" "}
              <Card
                title={<Title level={4}>Skill Actions</Title>}
                variant="borderless"
                style={{ width: "100%", marginTop: "20px" }}
              >
                {" "}
                <Flex
                  vertical
                  gap="small"
                  style={{ width: "100%", fontSize: "12px" }}
                >
                  {" "}
                  <Button type="primary" block>
                    {" "}
                    <Image
                      src="/assect/AiIcon.png"
                      alt="AI Icon"
                      width={20}
                      height={20}
                    />{" "}
                    Generate Education Report{" "}
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
      />
    </Layout>
  );
}
