import {
  CalendarOutlined,
  CheckSquareOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Button, Card } from "antd";
import { Wrapper } from "./ProfessionalCertificate.stc";
export default function ProfessionalCertified() {
  return (
    <>
      <Card title="Professional Certifications">
        <Wrapper>
          <h1 className="text-lg">AWS Certified Solutions Architect</h1>
          <span className="text-blue-600">Amazon Web Services</span>
          <p className="">
            <span className="text-gray-400 mr-2">
              <CalendarOutlined className="custom-icon" />
              Issued : Mar 2023
            </span>
            |
            <span className="ml-2 text-gray-500">
              <SyncOutlined
                style={{
                  color: "#2a06f7ff",
                  marginBottom: "8px",
                  fontSize: "18x",
                  marginRight: "4px",
                }}
              />
              Expires : Mar 2026
            </span>
          </p>
          <div className="absolute top-10 right-4 flex gap-2">
            <Button size="small" color="green" variant="outlined">
              Active
            </Button>
            <Button size="small">Verify</Button>
          </div>
        </Wrapper>
        <Card className="w-full relative" style={{ marginTop: 16 }}>
          <h1 className="text-lg">React Developer Certification</h1>
          <span className="text-blue-600">Meta (Facebook)</span>
          <p className="">
            <span className="text-gray-400 mr-2">
              <CalendarOutlined
                style={{
                  color: "#f08e0eff",
                  marginBottom: "8px",
                  fontSize: "16x",
                  marginRight: "4px",
                }}
              />
              Issued : Mar 2023
            </span>
            |
            <span className="ml-2 text-gray-500">
              <SyncOutlined
                style={{
                  color: "#2a06f7ff",
                  marginBottom: "8px",
                  fontSize: "18x",
                  marginRight: "4px",
                }}
              />
              Expires : Mar 2026
            </span>
          </p>
          <div className="absolute top-10 right-4 flex gap-2">
            <Button size="small" color="green" variant="outlined">
              Active
            </Button>
            <Button size="small">Verify</Button>
          </div>
        </Card>
        <Card className="w-full relative" style={{ marginTop: 16 }}>
          <h1 className="text-lg">React Developer Certification</h1>
          <span className="text-blue-600">Meta (Facebook)</span>
          <p className="">
            <span className="text-gray-400 mr-2">
              <CalendarOutlined
                style={{
                  color: "#f08e0eff",
                  marginBottom: "8px",
                  fontSize: "16x",
                  marginRight: "4px",
                }}
              />
              Issued : Mar 2023
            </span>
            |
            <span className="ml-2 text-gray-500">
              <SyncOutlined
                style={{
                  color: "#2a06f7ff",
                  marginBottom: "8px",
                  fontSize: "18x",
                  marginRight: "4px",
                }}
              />
              Expires : Mar 2026
            </span>
          </p>
          <div className="absolute top-10 right-4 flex gap-2">
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
      <Card title="Online Courses & Training" style={{ marginTop: "10px" }}>
        <Card className="w-full relative" style={{ background: "#f0eff8ff" }}>
          <h1 className="text-base">Advanced React Patterns</h1>
          <span className="text-gray-600">
            Udemy • 40 hours • Completed 2023
          </span>

          <div className="absolute top-10 right-4 flex gap-2">
            <Button size="small" color="green" variant="outlined">
              <CheckSquareOutlined style={{ backgroundColor: "green" }} />
              Completed
            </Button>
          </div>
        </Card>
        <Card
          className="w-full relative"
          style={{ marginTop: 16, background: "#f0eff8ff" }}
        >
          <h1 className="text-base">Node.js Microservices</h1>
          <span className="text-gray-600">
            Coursera • 60 hours • Completed 2022
          </span>
          <p className=""></p>
          <div className="absolute top-10 right-4 flex gap-2">
            <Button size="small" color="green" variant="outlined">
              <CheckSquareOutlined style={{ backgroundColor: "green" }} />
              Completed
            </Button>
          </div>
        </Card>
        <Card
          className="w-full relative"
          style={{ marginTop: 16, background: "#f0eff8ff" }}
        >
          <h1 className="text-base">Machine Learning Fundamentals</h1>
          <span className="text-gray-600">
            edX • 80 hours • In Progress (75%)
          </span>
          <div className="absolute top-10 right-4 flex gap-2">
            <Button size="small" color="danger" variant="outlined">
              In Progress
            </Button>
          </div>
        </Card>
      </Card>
    </>
  );
}
