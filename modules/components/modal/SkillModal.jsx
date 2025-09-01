"use client";

import { Form, Input, Modal } from "antd";
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
    if (initialData) {
      form.setFieldsValue(initialData);
    } else {
      form.resetFields();
    }
  }, [initialData, form]);

  return (
    <Modal
      title={initialData ? "Update Skill" : "Add Skill"}
      open={open}
      onCancel={onCancel}
      onOk={() => form.submit()}
      okText={initialData ? "Update" : "Create"}
      confirmLoading={loading}
    >
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item name="name" label="Skill Name">
          <Input />
        </Form.Item>
        <Form.Item name="level" label="Proficiency Level">
          <Input />
        </Form.Item>
        <Form.Item name="category" label="Category">
          <Input placeholder="technical / soft_skill / language / tool / framework / other" />
        </Form.Item>
        <Form.Item name="yearsOfExperience" label="Years Of Experience">
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
