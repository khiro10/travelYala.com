import { Card, Col, Empty, Rate, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import PixabayImage from '../components/Pixabay';

export default function Destination() {

    const navigate = useNavigate();

    // const [destinations, setDestinations] = useState<PlaceProps[]>()
      
      // const [open, setOpen] = React.useState<boolean>(false);
      const [loading, setLoading] = React.useState<boolean>(true);
      // const [selected, setSelected] = React.useState<PlaceProps>()
      const [Countries, setCountries] = useState([])
       
     
      useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await fetch("http://localhost:5000/api/countries", {
              mode: "cors",
              headers: { "Access-Control-Allow-Origin": "*" },
            });
            const data = await response.json();
            setLoading(false);
            setCountries(data); // ✅ Store fetched data in state
            console.log(data[0]);
            
          } catch (error) {
            console.error("Error fetching countries:", error);setLoading(false);
          }
        };
    
        fetchCountries();
      }, []);
      // const showLoading = () => {
      //   setOpen(true);
      //   setLoading(true);
        
      //   // Simple loading mock. You should add cleanup logic in real world.
      //   setTimeout(() => {
      //     setLoading(false);
      //   }, 2000);
      // };
    
    //   <Empty
    //   image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    //   styles={{ image: { height: 60 } }}
    //   description={
    //     <Typography.Text>
    //       Customize <a href="#API">Description</a>
    //     </Typography.Text>
    //   }
    // >
    //   <Button type="primary">Create Now</Button>
    // </Empty>

    
    if (!Countries && loading) return (<Card><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></Card>);
    if (!Countries && !loading) return (<Card>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla, quasi odio veniam vel impedit nisi ratione blanditiis numquam eaque debitis nostrum voluptatibus sint dolore laudantium exercitationem? Velit, id voluptatem.</Card>)  
        return (
          <div>
          <Row gutter={[16, 16]} className="list" justify={"center"}>
            
            {Countries && Countries.map((place:any, index) => (
              <div key={index}>
              <Col xs={24} sm={12} md={8} onClick={()=> navigate(`/link/${place.name}`)} >
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
          
  )
}
