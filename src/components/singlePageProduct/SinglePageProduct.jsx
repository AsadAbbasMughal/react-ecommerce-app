import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SinglePageProduct = ({addtocart}) => {
  const { id } = useParams();
  const [singlePro, setSinglePro] = useState({});
//   console.log(singlePro);
  

  useEffect(() => {
    const singleProduct = async () => {
      try {
        const res = await axios(`https://dummyjson.com/products/${id}`);
        setSinglePro(res.data);
      } catch (error) {
        console.log("Product Error", error.message);
       
      }
    };
    singleProduct();
  }, [id]);

  const addToSignlePro = ()=>{
    
    addtocart(singlePro)
    
  }
  return (
    <div className="container mt-5 mb-5" >
      <div className="row align-items-center shadow-lg p-4 bg-white rounded">
        {/* Left Side: Product Image */}
        <div className="col-md-6 text-center">
          <img
            src={singlePro.images}
            alt="Product"
            className="img-fluid w-75"
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="col-md-6">
          <h2 className="fw-bold text-dark">{singlePro.title}</h2>
          <p className="text-muted">{singlePro.description}</p>

          {/* Product Info */}
          <div className="mt-2">
            <p><strong>Brand:</strong> {singlePro.brand || "N/A"}</p>
            <p><strong>Category:</strong> {singlePro.category || "N/A"}</p>
            <p><strong>Warranty:</strong> {singlePro.warrantyInformation}</p>
          </div>

          {/* Price & Stock */}
          <div className="mt-2">
            <span className="h5 text-primary fw-bold">${singlePro.price}</span>
            <span className="badge bg-success ms-2">Stock: {singlePro.stock}</span>
          </div>

          {/* Buttons */}
          <div className="mt-4">
            <button className="btn btn-primary me-2" addtocart={addtocart} onClick={()=> addToSignlePro()}>Add to Cart</button>
            <button className="btn btn-outline-dark">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageProduct;
