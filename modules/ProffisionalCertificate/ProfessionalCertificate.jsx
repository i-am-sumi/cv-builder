import { CheckSquareOutlined, SyncOutlined } from "@ant-design/icons";
import { Button, Card, Typography } from "antd";
import {
  CalendarIcon,
  ProfessionalCSection,
  Wrapper,
} from "./ProfessionalCertificate.stc";
const { Title, Text, Paragraph } = Typography;
export default function ProfessionalCertified() {
  return (
    <ProfessionalCSection>
      <Card title={<Title level={3}>Professional</Title>}>
        <Wrapper>
          <Title level={5}>AWS Certified Solutions Architect</Title>
          <Text style={{ color: "blue" }}>Amazon Web Services</Text>
          <div className="">
            <Text style={{ color: "grey", marginRight: "5px" }}>
              <CalendarIcon />
              Issued : Mar 2023
            </Text>
            |
            <Text style={{ marginLeft: "5px", color: "gray" }}>
              <SyncOutlined className="icon" />
              Expires : Mar 2026
            </Text>
          </div>
          <div className="btns">
            <Button size="small" color="green" variant="outlined">
              Active
            </Button>
            <Button size="small">Verify</Button>
          </div>
        </Wrapper>
        <Card
          style={{ width: "100%", position: "relative", marginTop: "10px" }}
        >
          <Title level={5}>React Developer Certification</Title>
          <Text style={{ color: "blue" }}>Meta (Facebook)</Text>
          <div>
            <Text style={{ color: "grey", marginRight: "5px" }}>
              <CalendarIcon />
              Issued : Mar 2023
            </Text>
            |
            <Text style={{ color: "grey", marginLeft: "5px" }}>
              <SyncOutlined className="icon" />
              Expires : Mar 2026
            </Text>
          </div>
          <div className="btns">
            <Button size="small" color="green" variant="outlined">
              Active
            </Button>
            <Button size="small">Verify</Button>
          </div>
        </Card>
        <Card
          style={{ marginTop: "16px", width: "100%", position: "relative" }}
        >
          <Title level={5}>React Developer Certification</Title>
          <Text style={{ color: "blue" }}>Meta (Facebook)</Text>
          <div>
            <Text style={{ color: "grey", marginRight: "5px" }}>
              <CalendarIcon />
              Issued : Mar 2023
            </Text>
            |
            <Text style={{ color: "grey", marginLeft: "5px" }}>
              <SyncOutlined className="icon" />
              Expires : Mar 2026
            </Text>
          </div>
          <div className="btns">
            <Button size="small" color="danger" variant="outlined">
              Expiring Soon
            </Button>
            <Button size="small">
              <SyncOutlined
                style={{
                  color: "#2a06f7ff",
                  fontSize: "18x",
                }}
              />
              Renew
            </Button>
          </div>
        </Card>
      </Card>
      <Card
        title={<Title level={3}>Online Courses & Training</Title>}
        style={{ marginTop: "10px" }}
      >
        <Card className="card">
          <Title level={5}>Advanced React Patterns</Title>
          <Text style={{ color: "grey" }}>
            Udemy • 40 hours • Completed 2023
          </Text>

          <div className="btns">
            <Button size="small" color="green" variant="outlined">
              <CheckSquareOutlined style={{ backgroundColor: "green" }} />
              Completed
            </Button>
          </div>
        </Card>
        <Card className="card">
          <Title level={5}>Node.js Microservices</Title>
          <Text style={{ color: "grey" }}>
            Coursera • 60 hours • Completed 2022
          </Text>

          <div className="btns">
            <Button size="small" color="green" variant="outlined">
              <CheckSquareOutlined style={{ backgroundColor: "green" }} />
              Completed
            </Button>
          </div>
        </Card>
        <Card className="card">
          <Title level={5}>Machine Learning Fundamentals</Title>
          <Text style={{ color: "grey" }}>
            edX • 80 hours • In Progress (75%)
          </Text>
          <div className="btns">
            <Button size="small" color="danger" variant="outlined">
              In Progress
            </Button>
          </div>
        </Card>
      </Card>
    </ProfessionalCSection>
  );
}
