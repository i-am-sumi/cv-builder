import { PlusOutlined } from "@ant-design/icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Flex, Progress, Row, Tag, Typography } from "antd";
import LoadingCard from "./LoadingCard";

const { Title, Text } = Typography;

export default function FrameworkLibraries({ skills = [], loading }) {
  const frameworks = skills.filter(
    (skill) => skill.category === "framework" || skill.category === "frameworks"
  );

  return (
    <Card
      title={
        <div style={{ display: "flex", gap: "10px" }}>
          <FontAwesomeIcon icon={faAtom} style={{ marginTop: "10px" }} />
          <Title level={4} style={{ marginTop: "5px" }}>
            Frameworks & Libraries
          </Title>
        </div>
      }
      style={{ marginBottom: "10px" }}
    >
      <Flex style={{ position: "absolute", top: "15px", right: "10px" }}>
        <Button size="small">
          <PlusOutlined /> Add Framework
        </Button>
      </Flex>

      {loading ? (
        <LoadingCard />
      ) : (
        <Row gutter={16}>
          {frameworks.map((fw) => (
            <Col key={fw.id} xs={24} sm={16} md={16} lg={8}>
              <Card
                variant="borderless"
                style={{
                  marginTop: "5px ",
                  boxShadow: "0px 0px 2px 2px lightgrey",
                }}
              >
                <Text style={{ fontSize: "14px", fontWeight: "bold" }}>
                  {fw.name}
                </Text>
                <Tag color="green">{fw.level}</Tag>
                <Progress
                  percent={Math.min((fw.yearsOfExperience / 10) * 100, 100)}
                  showInfo={false}
                  strokeColor={
                    fw.yearsOfExperience >= 5
                      ? "#0cfc34ff"
                      : fw.yearsOfExperience >= 3
                      ? "#3f4bf3ff"
                      : "#fcec0aff"
                  }
                  size="default"
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Card>
  );
}
