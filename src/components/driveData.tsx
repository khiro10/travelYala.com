import { useState, useEffect } from "react";

const DriveData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://drive.google.com/uc?export=download&id=13iJmLPmsPXL35DMeO-G5T68T9M5BNqLY")
      .then((res) => res.json())
      .then((data) => {setData(data);console.log(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default DriveData;
