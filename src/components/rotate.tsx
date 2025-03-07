import { useState, useEffect } from "react";
import { Modal } from "antd";

const RotateDeviceScreen: React.FC = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Modal
      title="📱 Please Rotate Your Device"
      open={isPortrait}
      footer={null}
      closable={false}
      centered
    >
      <p>This page is best viewed in landscape mode.</p>
      <p>Turn your device sideways to continue.</p>
    </Modal>
  );
};

export default RotateDeviceScreen;