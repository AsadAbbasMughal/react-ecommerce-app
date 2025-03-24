import React from "react";
import { GridLoader } from "react-spinners";
import './FullScreenLoader.css'

const FullScreenLoader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="loader-container">
     
      <GridLoader color="#007bff" size={20} />
    </div>
  );
};

export default FullScreenLoader;
