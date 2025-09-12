import React, { useState, useRef, useEffect } from "react";
import "./Popular.css";
import product_data from "../../assets/Frontend_Assets/data";
import Item from "../item/Item";
import Title from "../title/Title";

const Popular = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Determine how many items to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(4);
      } else {
        setItemsPerView(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product_data.length - itemsPerView : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= product_data.length - itemsPerView ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right
      handlePrev();
    }
  };

  // Calculate which items to display
  const visibleItems = [];
  for (let i = 0; i < itemsPerView; i++) {
    const itemIndex = (currentIndex + i) % product_data.length;
    visibleItems.push(product_data[itemIndex]);
  }

  return (
    <div className="popular">
      <Title title={"POPULAR"} size={"lg"} />

      <div className="popular-container">
        <button
          className="swipe-button prev"
          onClick={handlePrev}
          aria-label="Previous items">
          &#8249;
        </button>

        <div
          className="popular-items"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {visibleItems.map((item, index) => {
            return (
              <Item
                key={`${item.id}-${index}`}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>

        <button
          className="swipe-button next"
          onClick={handleNext}
          aria-label="Next items">
          &#8250;
        </button>
      </div>

      <div className="popular-indicators">
        {Array.from({
          length: Math.ceil(product_data.length / itemsPerView),
        }).map((_, index) => (
          <button
            key={index}
            className={`indicator ${
              Math.floor(currentIndex / itemsPerView) === index ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index * itemsPerView)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
