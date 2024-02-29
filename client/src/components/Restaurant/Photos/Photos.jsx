import React, { useState, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";
import { useDispatch, useSelector } from "react-redux";

// component
import PhotoCollection from "./PhotoCollection.jsx";
import { fetchImageURL } from "../../../app/store.js";

function Photos() {
  const restaurant = useSelector((state) => state.restaurant.restaurantdata);
  // console.log(restaurant.photos);
  const dispatch = useDispatch();
  const [photos, setPhotos] = useState({
    images: [
      "https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg",
      "https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg",
      "https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg",
      "https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg",
    ],
  });

  console.log(photos);
  useEffect(() => {
    dispatch(fetchImageURL(restaurant.photos))
      .then((data) => {
        const imageUrls = data.payload.image.images.map(
          (image) => image.location
        );
        setPhotos({
          images: imageUrls,
        });
      })
      .catch((error) => {
        console.error("Error fetching image URLs:", error);
      });
  }, [dispatch, restaurant.photos]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos?.images}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {photos.images.length > 0 &&
          photos?.images?.map((photo, index) => (
            <PhotoCollection
              key={index}
              openViewer={openViewer}
              index={index}
              image={photo}
              setCurrentImage={setCurrentImage}
            />
          ))}
      </div>
    </>
  );
}

export default Photos;
