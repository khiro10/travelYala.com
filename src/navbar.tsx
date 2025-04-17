
import { Header } from 'antd/es/layout/layout';
import './navbar.css'
import SearchBar from './components/searchBar';
import { Menu, MenuProps } from 'antd';

    type NavbarProps = {
        selectedTab: string;
        setSelectedTab: (tab: string) => void;
      };
      const Navbar: React.FC<NavbarProps> = ({  setSelectedTab }) => {

        const items1: MenuProps['items'] = [
          {
            key: "1",
            label: (
              <SearchBar/>
            ),
              disabled: true
          },
          { label: 'Home', key: '2' },
          {label: 'Destinations', key: '3' },
          {label: 'Contact', key: '5' },
          
        ];
  return (
    // <Header style={{ display: "flex", alignItems: "center",justifyContent: "space-between" ,background:"transparent" }}>
    //      <div >
    //      <h1
    //         style={{
    //             fontWeight: "bold",
    //             fontSize: "x-large",
    //             display: "table-caption",
    //             background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    //             WebkitBackgroundClip: "text",
    //             color: "transparent",
    //         }}
    //         >
    //         🌍 Explore The World
    //     </h1>
    //      </div>
    //       <div className='search'>
    //       <SearchBar />
    //       </div>
    //      <Menu mode="horizontal"  onClick={(e) => setSelectedTab(e.key)} defaultSelectedKeys={["home"]} style={{ flex: 1, justifyContent: "flex-end" ,background:"transparent",color:"white" }}>
    //        <Menu.Item className='item' key="home">Home</Menu.Item>
    //        <Menu.Item className='item' key="destinations">Destinations</Menu.Item>
    //        <Menu.Item className='item' key="contact">Contact</Menu.Item>
    //      </Menu>
         
    //    </Header>
    
      <Header style={{ display: "flex", alignItems: "center",justifyContent: "space-between" ,background:"transparent",color:"black",padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",backdropFilter: "blur(10px)"}}>
      <div>  
      <h1
            style={{
                fontWeight: "bold",
                fontSize: "x-large",
                display: "table-caption",
                background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                WebkitBackgroundClip: "text",
                color: "transparent",
            }}
            >
            🌍 Explore The World
        </h1>
         </div>
        <Menu onClick={(e) => setSelectedTab(e.key)}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 ,width: "100%", justifyContent: "space-between", background:"transparent"}}
        />
      </Header>
   
  );
};

export default Navbar;
