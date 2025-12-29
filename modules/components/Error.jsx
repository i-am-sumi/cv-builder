import { Empty, Typography } from "antd";
const { Title } = Typography;

export default function Error({ error }) {
  return (
    <div style={{ margin: "90px" }}>
      <Empty description={false} />
      <Title level={3} style={{ textAlign: "center", color: "red" }}>
        Data Not Found
      </Title>
    </div>
  );
}
