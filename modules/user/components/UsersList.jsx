"use client";
import { Card, Menu, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";

const items = [
  {
    key: "get",
    label: <Link href="/users">userList</Link>,
  },
  {
    key: "add",
    label: <Link href="/users/id/skills">Skills</Link>,
  },
  {
    key: "put",
    label: <Link href="/cv/updateCV">Update CV</Link>,
  },
  {
    key: "delete",
    label: <Link href="/cv/deleteCV">Delete CV</Link>,
  },
];
export default function UsersList() {
  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["get"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Space direction="vertical" size={16}>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card
          size="small"
          title="Small size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    </>
  );
}
