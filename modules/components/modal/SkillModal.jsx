"use client";

import { Form, Input, Modal, Select } from "antd";
import { useEffect } from "react";

export default function SkillModal({
  open,
  onCancel,
  onSubmit,
  initialData,
  loading,
}) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!open) return;
    if (initialData) {
      form.setFieldsValue(initialData);
    }
  }, [initialData, form, open]);

  return (
    <Modal
      title={initialData ? "Update Skill" : "Add Skill"}
      open={open}
      onCancel={onCancel}
      onOk={() => form.submit()}
      okText={initialData ? "Update" : "Create"}
      confirmLoading={loading}
      afterClose={() => form.resetFields()}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        initialValues={{
          name: "HTML",
          level: "beginner",
          category: "language",
          yearsOfExperience: 3,
        }}
      >
        <Form.Item
          name="name"
          label="Skill Name"
          rules={[{ required: true, message: "Please enter skill name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="level"
          label="Proficiency Level"
          rules={[
            { required: true, message: "Please enter proficiency level" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please select a category" }]}
        >
          <Select placeholder="Select a category">
            <Select.Option value="technical">Technical</Select.Option>
            <Select.Option value="soft_skill">Soft Skill</Select.Option>
            <Select.Option value="language">Language</Select.Option>
            <Select.Option value="tool">Tool</Select.Option>
            <Select.Option value="framework">Framework</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="yearsOfExperience"
          label="Years Of Experience"
          rules={[
            { required: true, message: "Please enter years of experience" },
          ]}
        >
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
