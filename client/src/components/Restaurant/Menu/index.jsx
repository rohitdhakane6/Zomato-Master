import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
import { fetchImageURL } from "../../../app/store";

function Menu() {
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => state.restaurant.restaurantdata);
  const [menuImages, setMenuImages] = useState({
    images: [],
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchMenuImages = async () => {
      try {
        if (restaurant.menuImages) {
          const data = await dispatch(fetchImageURL(restaurant.menuImages));
          const images = data.payload.image.images.map(
            ({ location }) => location
          );
          setMenuImages((prev) => ({
            ...prev,
            images: images,
          }));
        }
      } catch (error) {
        console.error("Error fetching menu images:", error);
      }
    };

    fetchMenuImages();
  }, [restaurant.menuImages]);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={menuImages.images}
          currentIndex={currentImage}
          displayScroll={false}
          onClose={closeViewer}
        />
      )}
      <div
        className="w-full md:w-48 flex flex-col"
        onClick={openViewer}
        style={{ maxWidth: "12rem" }}
      >
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={menuImages.images[0]}
            alt="menu"
            className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110"
          />
        </div>
        <div>
          <strong className="font-medium">Menu</strong>
          <p>{menuImages.images.length} Pages</p>
        </div>
      </div>
    </>
  );
}

export default Menu;
