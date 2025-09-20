import { LaptopOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Flex, Progress, Row, Tag, Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

export default function FrameworkLibraries() {
  return (
    <Card
      title={
        <div style={{ display: "flex", gap: "10px" }}>
          <LaptopOutlined />
          <Title level={4} style={{ marginTop: "5px" }}>
            Frameworks & Libraries
          </Title>
        </div>
      }
      style={{ marginBottom: "10px" }}
    >
      <Flex style={{ position: "absolute", top: "15px", right: "10px" }}>
        <Button size="small">
          <PlusOutlined />
          Add Framework
        </Button>
      </Flex>
      <Row gutter={16}>
        <Col xs={24} sm={16} md={12} lg={8}>
          <Card variant="borderless" style={{ marginTop: "5px " }}>
            <Text style={{ fontSize: "14px", fontWeight: "bold" }}>
              React.js
            </Text>
            <Tag color="green">Expert</Tag>
            <Progress
              percent={90}
              showInfo={false}
              strokeColor="#73f311ff"
              size={"default"}
            />
          </Card>
        </Col>
        <Col span={8} xs={24} sm={16} md={12} lg={8}>
          <Card variant="borderless" style={{ marginTop: "5px " }}>
            <Text style={{ fontSize: "14px", fontWeight: "bold" }}>
              Node.js
            </Text>
            <Tag color="blue">Advanced</Tag>
            <Progress
              percent={90}
              showInfo={false}
              strokeColor="#5c87ffff"
              size={"default"}
            />
          </Card>
        </Col>
        <Col span={8} xs={24} sm={16} md={12} lg={8}>
          <Card variant="borderless" style={{ marginTop: "5px " }}>
            <Text style={{ fontSize: "14px", fontWeight: "bold" }}>
              Express.js
            </Text>
            <Tag color="blue">Advanced</Tag>
            <Progress
              percent={90}
              showInfo={false}
              strokeColor="#5982f1ff"
              size={"default"}
            />
          </Card>
        </Col>
        <Col span={8} xs={24} sm={16} md={12} lg={8}>
          <Card variant="borderless" style={{ marginTop: "5px " }}>
            <Text style={{ fontSize: "14px", fontWeight: "bold" }}>
              Next.js
            </Text>
            <Tag color="orange">Intermediate</Tag>
            <Progress
              percent={90}
              showInfo={false}
              strokeColor="#f39911ff"
              size={"default"}
            />
          </Card>
        </Col>
      </Row>
    </Card>
  );
}
