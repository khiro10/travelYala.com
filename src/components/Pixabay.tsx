import { useEffect, useState } from "react";

type ImgProps = {
  query: any;
}
const PixabayImage: React.FC<ImgProps>  = ({ query }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=49069380-914c7ee2dee1834cdbdb8e52e&q=${query}&image_type=photo&category=places&min_width=1000&safesearch=true&per_page=3`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.hits[0]) {
          setImageUrl(data.hits[0].webformatURL);
        }
      })
      .catch((err) => console.error("Error fetching image:", err));
  }, [query]);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt={query} style={{width: 240,height: 240}} onError={(e:any) => e.target.src = "imgs/0.jpg"}  />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default PixabayImage;