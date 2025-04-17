import { Row, Typography } from "antd";
import { useEffect } from "react";




export default function Home() {
  useEffect(() => {
    // Inject Hotel script
    if (!document.getElementById("hotel-script")) {
      const hotelScript = document.createElement("script");
      hotelScript.src="https://c121.travelpayouts.com/content?trs=390781&shmarker=607907&lang=www&layout=S10391&powered_by=true&promo_id=4038";
      hotelScript.async = true;
      hotelScript.charset = "utf-8";
      hotelScript.id = "hotel-script";
      document.getElementById("hotel-widget")?.appendChild(hotelScript);
    }

    // Flight script
    if (!document.getElementById("flight-script")) {
      const flightScript = document.createElement("script");
      flightScript.src=`https://tp.media/content?currency=usd&trs=390781&shmarker=607907&show_hotels=false&powered_by=false&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%23FF2626ff&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&no_labels=true&plain=false&promo_id=7879&campaign_id=100`
  
      flightScript.async = true;
      flightScript.charset = "utf-8";
      flightScript.id = "flight-script";
      document.getElementById("flight-widget")?.appendChild(flightScript);
    }
    
  }, []);
  return (
    < >
     <Typography.Title style={{textAlign:"left",color:'#e52e71'}} level={2}>Search Hotel</Typography.Title>
      <Row gutter={[16, 16]} id="hotel-widget" style={{display:"block",width:"100%"}}>

        </Row>
      <Typography.Title style={{textAlign:"left",color:'#ff8a00'}}  level={2}>Search Flight</Typography.Title>
      <Row gutter={[16, 16]} id="flight-widget" style={{width:"100%"}}>
 
        </Row>
        
    </>
  )
}
