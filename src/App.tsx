
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
  useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get(`https://travel-yala-jcgpgrbn5-khireddines-projects-980132fd.vercel.app/api/countries`);
            setCountries(response.data)
            console.log(response.data);
            setLoading(false)
              alert("the pb is here")
          } catch (error) {
            console.error('Error:', error);
            setLoading(false)
          }
        };
      
        fetchCountries();
        
 return (<div>
{/*        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
       <Content style={{ padding: "20px", textAlign: "center" }}>
            {renderContent()}
        </Content> */}
   {countries && <p> it here <p/>}
 </div>)
};

export default App
