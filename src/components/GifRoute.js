import React from "react";
import { Route, Routes } from "react-router-dom";
import GifGallery from "pages/Giphy/GifGallery";
import ErrorPage from "pages/ErrorPage";

const GifRoute = ({
  giphyData,
  loadMoreData,
 
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GifGallery giphyData={giphyData} loadMoreData={loadMoreData} />
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default GifRoute;
