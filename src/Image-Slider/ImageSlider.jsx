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
    return <h3 className="text-center text-xl">Loading...</h3>;
  }

  if (error !== null) {
    return (
      <div className="text-center text-red-500">
        Error fetching images: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-4">Image Slider</h1>
      <div className="relative flex items-center w-full max-w-lg">
        <BsArrowLeftCircleFill
          className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer text-gray-700 hover:text-gray-900 absolute left-0 transform -translate-x-10"
          onClick={() => {
            setCurrentSlide(
              currentSlide === 0 ? images.length - 1 : currentSlide - 1
            );
          }}
        />
        <div className="w-full flex justify-center">
          {images.map((image, index) => (
            <img
              src={image.download_url}
              alt="Random"
              key={image.id}
              className={`w-80 h-52 sm:w-96 sm:h-64 object-cover rounded-lg transition-opacity duration-500 ${
                currentSlide === index
                  ? "opacity-100 block"
                  : "opacity-0 hidden"
              }`}
            />
          ))}
        </div>
        <BsArrowRightCircleFill
          className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer text-gray-700 hover:text-gray-900 absolute right-0 transform translate-x-10"
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
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index ? "bg-gray-700 scale-125" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
