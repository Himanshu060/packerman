// SkeletonComponent.js

import React from "react";
import "../styles/skeleton.css";

const SkeletonComponent = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-row"></div>
      <div className="skeleton-row"></div>
      <div className="skeleton-row"></div>
    </div>
  );
};

export default SkeletonComponent;
