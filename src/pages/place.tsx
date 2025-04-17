import { Button, Card, Col, Empty, Layout, Rate, Row, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, {  useEffect, useState } from 'react'
import { useFetch } from '../components/fecthData';
import { useNavigate, useParams } from 'react-router-dom';
import { CloseOutlined } from "@ant-design/icons";
import PixabayImage from '../components/Pixabay';
// import axios from 'axios'

interface GeonameResponse {
  lat: number;
  lon: number;
  name: string;
  country: string;
}
const Place: React.FC = () => {
const [geo, setGeo] = useState<GeonameResponse>()    
const navigate = useNavigate();
const { id } = useParams<{ id: string }>();    
const {data : geoData}  = useFetch(`https://travelyalla-backend-production.up.railway.app/api/country/${id}`);
useEffect(() => {
  if (geoData) {
    setGeo(geoData as GeonameResponse);
  }
}, [geoData]);

useEffect(() => {

  if (!document.getElementById("flight-script")) {
    const flightScript = document.createElement("script");
    flightScript.src=`https://tp.media/content?currency=usd&trs=390781&shmarker=607907&show_hotels=false&default_destination=${id}&powered_by=false&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%23FF2626ff&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&no_labels=true&plain=false&promo_id=7879&campaign_id=100`

    flightScript.async = true;
    flightScript.charset = "utf-8";
    flightScript.id = "flight-script";
    document.getElementById("flight-widget")?.appendChild(flightScript);
  }
  console.log(id);
  
}, []);

console.log(geo);

const {data}  = useFetch(`https://travelyalla-backend-production.up.railway.app/api/countryplaces/${geo?.lat}/${geo?.lon}`);

if (!id) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
return (
  <Layout style={{ minHeight: "100vh", padding: "20px" }}>
     <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <Button style={{ opacity: 0.8 }} icon={<CloseOutlined  />} onClick={()=> navigate("/")}>
          
        </Button>
      </div>
    <Content style={{ maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <Typography.Title>{id}</Typography.Title>
      <br />
      <p style={{textAlign :"left"}}></p>
      <Typography.Title level={3}>Flights</Typography.Title>
            <Row gutter={[16, 16]} id="flight-widget" style={{width:"100%"}}>
       
              </Row>
      <Typography.Title level={3}>interesting places</Typography.Title>
      <Row gutter={[16, 16]} className="list1">
            
     {data && (data as any).features.slice(0,10)
      .map((place: any, index: number) => (
              <div key={index}>
              {place.properties.name && 
              <Col xs={24} sm={12} md={8}  onClick={()=> navigate(`/city/${place?.properties?.name}`)} >
                <Card 
                    hoverable
                    style={{ width: 240,height: 360 , cursor: 'pointer',alignItems: 'center', justifyContent: 'center' }}
                    cover={<PixabayImage query={place?.properties?.name}/>}
                >
                    <Card.Meta title={place?.properties?.name} />
                    <br />
                    <Rate disabled defaultValue={2} />
                </Card>
              </Col>}
              </div>
            ))}
        </Row>
        <br />    
    </Content>
  </Layout>
  );
};

export default Place;
