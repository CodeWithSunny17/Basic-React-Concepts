import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ImageSlider() {
  const url = "https://picsum.photos/v2/list?page=2&limit=6";
  //   const url = data;
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = (getUrl) => {
    setLoading(true);
    axios
      .get(getUrl)
      .then((response) => {
        setImages(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  return (
    <div className="flex-row justify-center items-center gap-5">
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <div>Error fetching the images {error}</div>
      ) : (
        images?.map((image) => {
          return (
            <img
              src={image.download_url}
              alt="Random"
              key={image.id}
              width="300"
            />
          );
        })
      )}
    </div>
  );
}
