import React, { useEffect } from 'react';
import { Button, Modal } from 'antd';
// import { useNavigate } from 'react-router-dom';

type PlaceProps = {
    place:any;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
}
const ShowPlace: React.FC<PlaceProps> = ({place,loading,setLoading,open,setOpen}) => {
  

  // const showLoading = () => {
  //   setOpen(true);
  //   setLoading(true);

  // };

  useEffect(() => {
    setLoading(false);
  }, [place]);

  // const navigate = useNavigate();

  return (
    <>
      {place && 
      <Modal
        title={<p>Loading Modal</p>}
        footer={
          <Button type="primary" >
            visit
          </Button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <p>{place.name}</p>
        <p>{place.best_time}</p>
        <p>{place.adventure[0]}</p>
        <p>{place.attractions[0]}</p>
      </Modal>}
    </>
  );
};

export default ShowPlace;