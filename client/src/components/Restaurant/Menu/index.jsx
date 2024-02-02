import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

function Menu(props) {
  const [menuImages, setMenuImages] = useState({
    images: [
      "https://b.zmtcdn.com/data/menus/016/18350016/ad68cedc32c3b4d592eefa8a3339d04f.jpg",
      "https://b.zmtcdn.com/data/menus/506/19119506/2d28e4999d61f37c8a19e852284abfbf.jpg",
      "https://b.zmtcdn.com/data/menus/506/19119506/57f429b03c18238a20e583aaaf247834.jpg",
      "https://b.zmtcdn.com/data/menus/506/19119506/5deb7f5c08dd9c554fe86d4e2fa0a782.jpg",
    ],
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
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
        className="w-32 h-32 md:w-48 flex flex-col md:h-48"
        onClick={openViewer}
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
