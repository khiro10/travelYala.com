import { Layout, Typography, Card, Row, Col } from "antd";
import Contact from "./contact";
import "./aboutUs.css";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const AboutUs = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "50px 10px", background: "#f5f5f5" ,borderRadius:"15px" }}>
        <div style={{ textAlign: "center", paddingBottom: "30px" }}>
          <Title level={1}>About Us</Title>
          <Paragraph style={{ fontSize: "18px", maxWidth: "800px", margin: "auto" }}>
            We are a passionate team committed to delivering high-quality solutions for our clients. With years of experience in web development, we aim to create intuitive, scalable, and efficient applications.
          </Paragraph>
        </div>

        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card title="Our Mission" bordered={false} style={{ textAlign: "center" }}>
              <Paragraph>
                Our mission is to build products that empower businesses to reach their full potential through innovative technology and user-centric designs.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Our Vision" bordered={false} style={{ textAlign: "center" }}>
              <Paragraph>
                Our vision is to become a global leader in providing web solutions that make a real difference for businesses and users alike.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Our Values" bordered={false} style={{ textAlign: "center" }}>
              <Paragraph>
                We value integrity, collaboration, creativity, and continuous learning. These principles guide our decisions and shape our company culture.
              </Paragraph>
            </Card>
          </Col>
        </Row>
        <Contact />
      </Content>
      
    </Layout>
  );
};

export default AboutUs;
