import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider() {
  const url = "https://picsum.photos/v2/list?page=2&limit=4";
  //   const url = data;
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

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error !== null) {
    return <div>Error fetching the images {error}</div>;
  }

  return (
    <div className="flex gap-2 relative">
      <BsArrowLeftCircleFill
        className="w-8 h-8 cursor-pointer"
        onClick={() => {
          setCurrentSlide(
            currentSlide === 0 ? images.length - 1 : currentSlide - 1
          );
        }}
      />
      {images?.map((image, index) => {
        return (
          <img
            src={image.download_url}
            alt="Random"
            key={image.id}
            width="400"
            className={currentSlide === index ? "" : "hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        className="w-8 h-8 cursor-pointer"
        onClick={() => {
          setCurrentSlide(
            currentSlide === images.length - 1 ? 0 : currentSlide + 1
          );
        }}
      />

      {images?.map((image, index) => {
        return (
          <span
            className={
              currentSlide === index
                ? "w-4 h-4 rounded-full bg-slate-500"
                : "w-4 h-4 rounded-full bg-slate-300 "
            }
          ></span>
        );
      })}
    </div>
  );
}
