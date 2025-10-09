"use client";

import { Form, Input, Modal } from "antd";
import { useEffect } from "react";

export default function ExperienceModal({
  open,
  onCancel,
  onSubmit,
  initialData,
  loading,
}) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialData) {
      form.setFieldsValue({
        ...initialData,
        achievements: Array.isArray(initialData.achievements)
          ? initialData.achievements.join(", ")
          : initialData.achievements || "",
        technologies: Array.isArray(initialData.technologies)
          ? initialData.technologies.join(", ")
          : initialData.technologies || "",
      });
    } else {
      form.resetFields();
    }
  }, [initialData, form]);

  return (
    <Modal
      title={initialData ? "Update Experience" : "Add Experience"}
      open={open}
      onCancel={onCancel}
      onOk={() => form.submit()}
      okText={initialData ? "Update" : "Create"}
      confirmLoading={loading}
      style={{ textAlign: "center" }}
      afterClose={() => form.resetFields()}
    >
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item name="jobTitle" label="Job Title">
          <Input />
        </Form.Item>
        <Form.Item name="company" label="Company">
          <Input />
        </Form.Item>
        <Form.Item name="location" label="Location">
          <Input />
        </Form.Item>
        <Form.Item name="startDate" label="Start Date">
          <Input type="date" />
        </Form.Item>
        <Form.Item name="endDate" label="End Date">
          <Input type="date" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="achievements" label="Achievements (comma separated)">
          <Input />
        </Form.Item>
        <Form.Item name="technologies" label="Technologies (comma separated)">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
