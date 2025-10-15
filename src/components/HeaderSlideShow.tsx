import { useEffect, useState } from "react";
import "../style/layout.css";
import { AnimatePresence, motion } from "framer-motion";

export const HeaderSlideShow = () => {
  const sliderImages = [
    "/slideshow-image1.png",
    "/slideshow-image2.jpg",
    "/slideshow-image3.jpg",
  ];
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const slideShowTimeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearTimeout(slideShowTimeout);
  }, [current]);

  console.log(current);
  return (
    <>
      <header className="slider-header">
        <AnimatePresence>
          <motion.img
            key={sliderImages[current]}
            src={sliderImages[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></motion.img>
        </AnimatePresence>
      </header>
    </>
  );
};
