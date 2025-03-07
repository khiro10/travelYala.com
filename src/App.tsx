
import './App.css'
import Navbar from './navbar';
import { Content } from 'antd/es/layout/layout';
import { useState } from 'react';
import Destination from './pages/destination';

import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Hotel from './pages/hotel';


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
 return (<div>
       <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
       <Content style={{ padding: "20px", textAlign: "center" }}>
            {renderContent()}
        </Content>
 </div>)
};

export default App
