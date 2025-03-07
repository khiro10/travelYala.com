import { Button, Card, Form, Input,  } from "antd";
import { MailOutlined, UserOutlined, } from "@ant-design/icons";
const Contact = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#f5f5f5" }}>
      <Card style={{ width: 400, padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Us</h2>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          {/* Name Field */}
          <Form.Item name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
            <Input prefix={<UserOutlined />} placeholder="Your Name" />
          </Form.Item>

          {/* Email Field */}
          <Form.Item name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}>
            <Input prefix={<MailOutlined />} placeholder="Your Email" />
          </Form.Item>

          {/* Message Field */}
          <Form.Item name="message" rules={[{ required: true, message: "Please enter your message!" }]}>
            <Input.TextArea placeholder="Your Message" rows={4} />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" block htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Contact;