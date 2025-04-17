import { Button, Card, Col, Empty, Layout, Rate, Row, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, {  useEffect, useState } from 'react'
import { useFetch } from '../components/fecthData';
import { useNavigate, useParams } from 'react-router-dom';
import { CloseOutlined } from "@ant-design/icons";
import PixabayImage from '../components/Pixabay';

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
// const {data : geoData}  = useFetch(`http://localhost:5000/api/country/${id}`);
useEffect(() => {
  const fetchCountry = async () => {
          try {
          const response = await axios.get(`https://travelyalla-backend-production.up.railway.app/api/country/${id} `, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
  },
});
const data = await response.data;
setGeo(data)            
  } catch (error) {
            console.error("Error fetching countries:", error);setLoading(false);
          }
        };
    
        fetchCountries();     
  if (geoData) {
    setGeo(geoData as GeonameResponse);
  }
}, [geoData]);

useEffect(() => {

  if (!document.getElementById("flight-script")) {
    const flightScript = document.createElement("script");
    flightScript.src=`https://tp.media/content?currency=usd&trs=390781&shmarker=607907&show_hotels=true&default_destination=${id}&powered_by=false&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%23FF2626ff&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&no_labels=true&plain=false&promo_id=7879&campaign_id=100`

    flightScript.async = true;
    flightScript.charset = "utf-8";
    flightScript.id = "flight-script";
    document.getElementById("flight-widget")?.appendChild(flightScript);
  }
  console.log(id);
  
}, []);

// const t1 = "interesting_places";
// const t2 = "architecture";
// const t3 = "museums";
// const t4 = "historical_places";
// const [data, setData] = useState()
// const [interesting_places, setInteresting_places] = useState([])
// const [architecture, setArchitecture] = useState([])
// const [museums, setMuseums] = useState([])
// const [historical_places, sethistorical_places] = useState([])
console.log(geo);

const {data}  = useFetch(`http://localhost:5000/api/countryplaces/${geo?.lat}/${geo?.lon}`);
// useEffect(() => {
//   if(data){
//     setInteresting_places((data as any).features?.filter((place: any) => place.properties?.kinds?.includes(t1)))
//     setArchitecture((data as any).features?.filter((place: any) => place.properties?.kinds?.includes(t2)))
//     setMuseums((data as any).features?.filter((place: any) => place.properties?.kinds?.includes(t3)))
//     sethistorical_places((data as any).features?.filter((place: any) => place.properties?.kinds?.includes(t4)))
// }
// }, [data]);


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
      {/* <div min-width={300} style={{ width:"100%",height:400, objectFit: "cover", borderRadius: 10 }}><PixabayImage query={id}/></div> */}
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
        {/* {architecture && <>
        <Typography.Title level={3}>architecture</Typography.Title>
        <Row gutter={[16, 16]} className="list">     
        {architecture
        .map((place: any, index: number) => (
                <div key={index}>
                {place.properties.name && 
                <Col xs={24} sm={12} md={8} onClick={()=> navigate(`/link/${place.name}`)} >
                  <Card 
                      hoverable
                      style={{ width: 240,height: 360 , cursor: 'pointer',alignItems: 'center', justifyContent: 'center' }}
                      // cover={<PixabayImage query={place?.properties?.name}/>}
                  >
                      <Card.Meta title={place?.properties?.name} />
                      <br />
                      <Rate disabled defaultValue={2} />
                  </Card>
                </Col>}
                </div>
              ))}
        </Row>
        </>}
        {museums && <>
        <Typography.Title level={3}>museums</Typography.Title>
        <Row gutter={[16, 16]} className="list">     
        {museums
        .map((place: any, index: number) => (
                <div key={index}>
                {place.properties.name && 
                <Col xs={24} sm={12} md={8} onClick={()=> navigate(`/link/${place.name}`)} >
                  <Card 
                      hoverable
                      style={{ width: 240,height: 360 , cursor: 'pointer',alignItems: 'center', justifyContent: 'center' }}
                      // cover={<PixabayImage query={place?.properties?.name}/>}
                  >
                      <Card.Meta title={place?.properties?.name} />
                      <br />
                      <Rate disabled defaultValue={2} />
                  </Card>
                </Col>}
                </div>
              ))}
        </Row>
        </>}
        
      
        {historical_places && (<><Typography.Title level={3}>Historical_places</Typography.Title>
      <Row gutter={[16, 16]} className="list">
            
      {historical_places
      .map((place: any, index: number) => (
          
          <div key={index}>
              {place.properties.name && 
              <Col xs={24} sm={12} md={8}  onClick={()=> navigate(`/link/${place.name}`)} >
                <Card 
                    hoverable
                    style={{ width: 240,height: 360 , cursor: 'pointer',alignItems: 'center', justifyContent: 'center' }}
                    // cover={<PixabayImage query={place?.properties?.name}/>}
                >
                    <Card.Meta title={place?.properties?.name} />
                    <br />
                    <Rate disabled defaultValue={2} />
                </Card>
              </Col>}
              </div>
            ))}
        </Row></>)}
 */}
      {/* <Typography.Title level={3}>Top Attractions</Typography.Title>
      <List
        bordered
        dataSource={[] as String[]}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      /> */}

      {/* <div  >
      <Typography.Title>rate the place</Typography.Title><Rate defaultValue={2} />
      </div> */}
    
    </Content>
  </Layout>
  );
};

export default Place;
