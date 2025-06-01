
import './App.css'
import Navbar from './navbar';
import { Content } from 'antd/es/layout/layout';
import { useEffect, useRef, useState } from 'react';
import Destination from './pages/destination';

import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Hotel from './pages/hotel';
import { notification } from 'antd';


const App: React.FC = () => {
 
  const [selectedTab, setSelectedTab] = useState("2");

  const renderContent = () => {
    switch (selectedTab) {
      case "2":
        return <Home />;
      case "3":
        return <Destination />;
      case "4":
        return <Hotel />;
      case "5":
        return <AboutUs />;
      default:
        return <Home />;
    }
  };

  const [api, contextHolder] = notification.useNotification();
  const [notified, setnotified] = useState(false)
  const hasShownRef = useRef(false);

  useEffect(() => {
    const alreadyNotified = notified;

    if (!alreadyNotified && !hasShownRef.current) {
      hasShownRef.current = true;

      api.open({
        message: "🚨 We're Selling This Project!",
        description: "Interested in owning it? Contact us !",
        placement: "topRight",
        duration: 6,
        showProgress: true
      });

      setnotified(true)
    }
  }, [api]);

        
 return (<div>
      {contextHolder}
       <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
       <Content style={{ padding: "20px", textAlign: "center" }}>
            {renderContent()}
        </Content>
   
 </div>)
};

export default App
