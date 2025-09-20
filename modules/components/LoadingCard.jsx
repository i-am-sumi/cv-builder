import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Skeleton } from "antd";
const actions = [
  <EditOutlined key="edit" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];
const LoadingCard = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card>
          <Skeleton active />
        </Card>
      </Col>
      <Col span={24}>
        <Card>
          <Skeleton active />
        </Card>
      </Col>
    </Row>
  );
};
export default LoadingCard;
