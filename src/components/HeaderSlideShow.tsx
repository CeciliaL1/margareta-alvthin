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
    }, 8000);
    return () => clearTimeout(slideShowTimeout);
  }, [current]);

  return (
    <>
      <header className="slider-header">
        <AnimatePresence>
          <motion.div
            key={sliderImages[current]}
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
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0,0,0, 0.8))`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              src={sliderImages[current]}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                mixBlendMode: "multiply",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </header>
      <h1 className="header-heading">Margareta Alvthin</h1>
    </>
  );
};
