import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider() {
  const url = "https://picsum.photos/v2/list?page=2&limit=4";
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchImages = (getUrl) => {
    setLoading(true);
    axios
      .get(getUrl)
      .then((response) => {
        setImages(response.data);
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

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error !== null) {
    return <div>Error fetching the images {error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Image Slider</h1>
      <div className="relative flex items-center">
        <BsArrowLeftCircleFill
          className="w-8 h-8 cursor-pointer text-gray-700 hover:text-gray-900"
          onClick={() => {
            setCurrentSlide(
              currentSlide === 0 ? images.length - 1 : currentSlide - 1
            );
          }}
        />
        {images.map((image, index) => (
          <img
            src={image.download_url}
            alt="Random"
            key={image.id}
            className={
              currentSlide === index
                ? "w-96 h-64 object-cover rounded-lg mx-4"
                : "hidden"
            }
          />
        ))}
        <BsArrowRightCircleFill
          className="w-8 h-8 cursor-pointer text-gray-700 hover:text-gray-900"
          onClick={() => {
            setCurrentSlide(
              currentSlide === images.length - 1 ? 0 : currentSlide + 1
            );
          }}
        />
      </div>
      <div className="flex mt-4 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={
              currentSlide === index
                ? "w-4 h-4 rounded-full bg-gray-700"
                : "w-4 h-4 rounded-full bg-gray-300"
            }
          ></span>
        ))}
      </div>
    </div>
  );
}
