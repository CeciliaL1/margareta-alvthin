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
      <div className="header-center">
        <h1 className="header-heading">Margareta Alvthin</h1>

        <motion.svg
          initial={{ y: 0 }}
          whileHover={{ y: 6 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="header-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
        </motion.svg>
      </div>
    </>
  );
};
