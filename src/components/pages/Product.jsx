import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import './Product.css';
import FullScreenLoader from '../spinner/FullScreenLoader';
import { Link } from 'react-router-dom';

const Product = ({ addtocart }) => {
  const [allCategory, setAllCategory] = useState([]);
  const [allProductData, setAllProductData] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allData = async () => {
      setLoading(true);
      try {
        const res = await axios('https://dummyjson.com/products');
        setAllProductData(res.data.products);
        setOriginalProducts(res.data.products);
      } catch (error) {
        console.log("Data Fetch Error:", error.message);
      }
      setLoading(false);
    };
    allData();
  }, []);

  useEffect(() => {
    const allCat = async () => {
      setLoading(true);
      try {
        const res = await axios('https://dummyjson.com/products/category-list');
        setAllCategory(res.data);
      } catch (error) {
        console.log("Category Error:", error.message);
      }
      setLoading(false);
    };
    allCat();
  }, []);

  const filterProduct = (selectCategory) => {
    const data = selectCategory
      ? originalProducts.filter((item) => item.category === selectCategory)
      : originalProducts;
    setAllProductData(data);
  };

  // const handleSearch = (e) => {
  //   const query = e.target.value.toLowerCase();
  //   setSearchQuery(query);
  //   const filteredProducts = originalProducts.filter((product) =>
  //     product.title.toLowerCase().includes(query)
  //   );
  //   setAllProductData(filteredProducts);
  // };


  const handleSearch = (e)=>{
    const query = e.target.value.toLowerCase()
    // console.log(query);
    setSearchQuery(query)
    const filterProduct = originalProducts.filter((product)=> product.title.toLowerCase().includes(query))
    setAllProductData(filterProduct)
    
    
  }
  return (
    <>
      <FullScreenLoader loading={loading} />

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className="dropdown-container">
        <select onChange={(e) => filterProduct(e.target.value)}>
          <option value="">Filter By Category!</option>
          {allCategory.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {allProductData.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center text-center mt-4 h-100 no-products">
          <h4>No products found.</h4>
        </div>
      ) : (
        <div className="d-flex flex-wrap gap-4 justify-content-center m-4">
          {allProductData.map((data, index) => (
            <Card key={index} className="product-card">
              <Link to={`/single-product/${data.id}`}>
              <Card.Img  
  variant="top" 
  srcSet={`${data.images[0].replace(/\.\w+$/, '.webp')} 1x, ${data.images[0]} 2x`}  
  src={data.images[0]}  
  alt="Product" 
  className="product-img lazyload"
  loading="lazy" 
/>

              </Link>
              <Card.Body className="text-center">
                <Card.Title className="product-title">{data.title}</Card.Title>
                <Card.Text className="category"><i>{data.category}</i></Card.Text>
                <Card.Text className="price">${data.price}</Card.Text>
                <div className="rating">
                  {[...Array(5)].map((_, i) =>
                    i < Math.floor(data.rating) ? <FaStar key={i} color="gold" /> : <FaRegStar key={i} color="gray" />
                  )}
                </div>
                <Button className="buy-btn" onClick={() => addtocart(data)}>Add To Cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default Product;
