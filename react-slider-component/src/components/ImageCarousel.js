import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./Images";
import "./carouselStyles.css";

const ImageCarousel = () => {
  return (
    <motion.div className="carousel">
      <motion.div className="inner-carousel">
        {images?.map((img, index) => {
          return (
            <motion.div className="item" key={index} animate={{ y: 10 }}>
              <img src={img.image} alt={img.name} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ImageCarousel;
