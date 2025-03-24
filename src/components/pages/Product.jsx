import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import './Product.css';
import FullScreenLoader from '../spinner/FullScreenLoader';
import { Link } from 'react-router-dom';
 // ✅ Loader Component

const Product = ({addtocart}) => {

  const [allCategory, setAllCategory] = useState([]);
  // const [allProduct, setAllProduct] = useState([]);
  const [allProductData, setAllProductData] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true); // ✅ Loader default ON rakha

  useEffect(() => {
    const allData = async () => {
      setLoading(true);  // ✅ Loader ON
      try {
        const res = await axios('https://dummyjson.com/products');
        setAllProductData(res.data.products);
        setOriginalProducts(res.data.products)
        // console.log(res.data.products);
        
      } catch (error) {
        console.log("Data Fetch Error:", error.message);
      }
      setLoading(false); // ✅ Loader OFF
    };
    allData();
  }, []);

  useEffect(() => {
    const allCat = async () => {
      setLoading(true); // ✅ Loader ON
      try {
        const res = await axios('https://dummyjson.com/products/category-list');
        setAllCategory(res.data);
      } catch (error) {
        console.log("category Error", error.message);
      }
      setLoading(false); // ✅ Loader OFF
    };
    allCat();
  }, []);

 

  const filterProduct = (selectCategory) => {
    setData(selectCategory);
    const data =selectCategory? originalProducts.filter((filterItem)=> filterItem.category === selectCategory): originalProducts
    setAllProductData(data)
    
    console.log(data);
    
    // setShowProduct(true);
    // console.log(allProductData); 
    
  };

  return (
    <>
      {/* ✅ Loader component */}
      <FullScreenLoader loading={loading} />

      <div className="dropdown-container">
        <select onChange={(e) => filterProduct(e.target.value)}>
          <option value="">Filter By Category!</option>
          {allCategory.map((allProducts, index) => (
            <option key={index} value={allProducts}>{allProducts}</option>
          ))}
        </select>
      </div>

      {
        allProductData.length === 0? (
          <div className="d-flex justify-content-center align-items-center text-center mt-4 h-100 no-products">
          <h4>No products found in this category.</h4>
        </div>
        
        ):
        
          <div className="d-flex flex-wrap gap-4 justify-content-center m-4">
            {allProductData.map((data, index) => (
              <Card key={index} className="product-card">
             <Link to={`/single-product/${data.id}`}>
             <Card.Img  variant="top" src={data.images?.[0]} alt="Product" className="product-img" />
             </Link>
                <Card.Body className="text-center">
                  <Card.Title className="product-title">{data.title}</Card.Title>
                  <Card.Text className="category">
                     <i>{data.category}</i>
                  </Card.Text>
                  <Card.Text className="price">${data.price}</Card.Text>
                  <div className="rating">
                    {[...Array(5)].map((_, i) =>
                      i < Math.floor(data.rating) ? (
                        <FaStar key={i} color="gold" />
                      ) : (
                        <FaRegStar key={i} color="gray" />
                      )
                    )}
                  </div>
                  <Button className="buy-btn" onClick={()=> addtocart(data)}>Add To Cart</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        
      }
    </>
  );
};

export default Product;
