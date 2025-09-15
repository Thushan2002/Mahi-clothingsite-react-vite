import React, { useContext, useState } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../context/ShopContext";
import Item from "../../components/item/Item";
import { FiFilter, FiChevronDown, FiGrid, FiArrowRight } from "react-icons/fi";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState("default");
  const [showFilters, setShowFilters] = useState(false);
  const [visibleItems, setVisibleItems] = useState(12);

  // Filter products by category
  const categoryProducts = all_product.filter(
    (item) => props.category === item.category
  );
  const totalProducts = categoryProducts.length;

  // Sort products
  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low-high":
        return a.new_price - b.new_price;
      case "price-high-low":
        return b.new_price - a.new_price;
      default:
        return 0;
    }
  });

  const displayedProducts = sortedProducts.slice(0, visibleItems);
  const hasMore = visibleItems < totalProducts;

  const loadMore = () => {
    setVisibleItems((prev) => prev + 12);
  };

  return (
    <div className="shopCategory">
      <div className="category-header">
        <img className="banner" src={props.banner} alt={props.category} />
      </div>

      <div className="shopCategory-controls">
        <div className="controls-left">
          <button
            className="filter-btn"
            onClick={() => setShowFilters(!showFilters)}>
            <FiFilter />
            Filters
          </button>

          <div className="product-count">
            Showing {displayedProducts.length} of {totalProducts} products
          </div>
        </div>

        <div className="sort-container">
          <label>Sort by:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="sort-select">
            <option value="default">Recommended</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
          <FiChevronDown className="select-arrow" />
        </div>
      </div>

      {showFilters && (
        <div className="filters-panel">
          <div className="filter-group">
            <h4>Price Range</h4>
            <div className="price-filter">
              <input type="range" className="price-slider" />
              <div className="price-labels">
                <span>Rs. 0</span>
                <span>Rs. 1000+</span>
              </div>
            </div>
          </div>

          <div className="filter-group">
            <h4>Size</h4>
            <div className="size-options">
              {["S", "M", "L", "XL"].map((size) => (
                <button key={size} className="size-option">
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="products-grid">
        {displayedProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {hasMore && (
        <div className="load-more-container">
          <button onClick={loadMore} className="load-more-btn">
            Load More <FiArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
