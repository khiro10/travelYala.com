import { Button, Empty, Layout, Row, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import { CloseOutlined } from "@ant-design/icons";

import PixabayImage from '../components/Pixabay';

const City: React.FC = () => {
const { id } = useParams<{ id: string }>();    
const navigate = useNavigate();

if (!id) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
return (
  <Layout style={{ minHeight: "100vh", padding: "20px" }}>
    <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <Button style={{ opacity: 0.8 }} icon={<CloseOutlined  />} onClick={()=> navigate(-1)}>
          
        </Button>
      </div>
      <Content style={{ maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <Typography.Title>{id}</Typography.Title>
      <br />
      <Row gutter={[16, 16]} >
      <div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#f9f9f9",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  marginBottom: "32px"
}}>
  <div  style={{
      width: "100%",
      maxWidth: "700px",
      height: "auto",
      borderRadius: "12px",
      objectFit: "cover",
      marginBottom: "16px"
    }} ><PixabayImage query={id} /></div>
  <Typography.Paragraph style={{ maxWidth: 700, textAlign: "left", fontSize: "16px", lineHeight: "1.6" }}>
    {`Welcome to ${id}, a beautiful city known for its rich history, vibrant culture, and scenic views. Whether you're exploring iconic landmarks or discovering hidden gems, ${id} has something for every traveler.`}
  </Typography.Paragraph>
</div>
        </Row>
     </Content>
  </Layout>
  );
};

export default City;
