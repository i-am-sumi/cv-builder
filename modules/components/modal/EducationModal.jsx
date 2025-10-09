"use client";

import { Form, Input, InputNumber, Modal } from "antd";
import { useEffect } from "react";

export default function EducationModal({
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
    }
  }, [initialData, form]);

  return (
    <Modal
      title={initialData ? "Update Education" : "Add Education"}
      style={{ textAlign: "center" }}
      open={open}
      onCancel={onCancel}
      onOk={() => form.submit()}
      okText={initialData ? "Update" : "Create"}
      confirmLoading={loading}
      afterClose={() => form.resetFields()} // ✅ modal বন্ধ হওয়ার পরে data clear
    >
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item name="degree" label="Degree">
          <Input />
        </Form.Item>

        <Form.Item name="institution" label="Institution">
          <Input />
        </Form.Item>

        <Form.Item name="location" label="Location">
          <Input />
        </Form.Item>

        <Form.Item name="degreeType" label="Degree Type">
          <Input />
        </Form.Item>

        <Form.Item name="startDate" label="Start Date">
          <Input type="date" />
        </Form.Item>

        <Form.Item name="endDate" label="End Date">
          <Input type="date" />
        </Form.Item>

        <Form.Item
          name="gpa"
          label="GPA"
          rules={[
            { required: true, message: "Please enter GPA" },
            {
              type: "number",
              min: 0,
              max: 4,
              message: "GPA must be between 0 and 4",
            },
          ]}
        >
          <InputNumber step={0.01} min={0} max={4} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item name="achievements" label="Achievements (comma separated)">
          <Input />
        </Form.Item>

        <Form.Item name="fieldOfStudy" label="Field of Study">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
