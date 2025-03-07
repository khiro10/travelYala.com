import { Card, Col, Empty, Rate, Row } from 'antd';
import  { useEffect, useState } from 'react';
import PixabayImage from '../components/Pixabay';

import { useNavigate } from 'react-router-dom';

const Hotel = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [hotels, setHotels] = useState([])
     useEffect(() => {
            const fetchHotels = async () => {
              try {
                const response = await fetch("http://localhost:5000/api/hotels", {
                  mode: "cors",
                  headers: { "Access-Control-Allow-Origin": "*" },
                });
                const data = await response.json();
                setLoading(false);
                setHotels(data); // ✅ Store fetched data in state
                console.log(data[0]);
                
              } catch (error) {
                console.error("Error fetching countries:", error);setLoading(false);
              }
            };
        
            fetchHotels();
          }, []);

    if (!hotels && loading) return (<Card><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></Card>);
    if (!hotels && !loading) return (<Card>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla, quasi odio veniam vel impedit nisi ratione blanditiis numquam eaque debitis nostrum voluptatibus sint dolore laudantium exercitationem? Velit, id voluptatem.</Card>)  
        return (
          <div>
          <Row gutter={[16, 16]} className="list" justify={"center"}>
            
            {hotels && hotels.map((place:any, index) => (
              <div key={index}>
              <Col xs={24} sm={12} md={8} onClick={()=> navigate(``)} >
                <Card 
                    hoverable
                    style={{ width: 240,height: 360 , cursor: 'pointer',alignItems: 'center', justifyContent: 'center' }}
                    cover={<PixabayImage query={place.name}/>}
                >
                    <Card.Meta title={place.name} />
                    <br />
                    <Rate disabled defaultValue={2} />
                </Card>
              </Col>
            
              </div>
            ))}
        </Row>
            
        </div>
    );
}

export default Hotel;
