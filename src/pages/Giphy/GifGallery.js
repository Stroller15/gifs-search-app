import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "components/Spinner/Spinner";
import "./GifGallery.css";

const GifGallery = ({ giphyData, loadMoreData }) => {
  return (
    <InfiniteScroll
      dataLength={giphyData.length}
      next={loadMoreData}
      hasMore={true}
      loader={<Spinner />}
    >
      <div className="gif">
        {giphyData.map((gif, index) => (
          <div
            className="gif__image-container"
            key={index}
            onClick={() => window.open(gif.images.preview_gif.url)}
          >
            <img
              className="gif__image"
              src={gif.images.fixed_height.url}
              alt="gif"
            />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};


export default GifGallery;
