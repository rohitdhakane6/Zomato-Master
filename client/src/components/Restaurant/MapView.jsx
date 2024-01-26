import React ,{useState} from "react";
import { MdContentCopy } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapView(props) {
  const [isCopied, setIsCopied] = useState(false);
  const handleDirectionsClick = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${props.mapLocation[0]},${props.mapLocation[1]}`;
    window.open(googleMapsUrl, "_blank");
  };
  const handleCopyClick = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${props.mapLocation[0]},${props.mapLocation[1]}`;

    // Copy the Google Maps link to the clipboard
    navigator.clipboard
      .writeText(googleMapsUrl)
      .then(() => {
        console.log("Google Maps link copied to the clipboard");
        // Set state to indicate that the link has been copied
        setIsCopied(true);
        // Reset the badge after a certain duration (e.g., 3 seconds)
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch((error) => {
        console.error(
          "Error copying Google Maps link to the clipboard:",
          error
        );
      });
  };
  return (
    <>
      <div>
        <h4 className="text-xl font-medium">Call</h4>
        <h5 className="text-zomato-400 font-medium">{props.phno}</h5>
      </div>
      <div>
        <h4 className="text-xl font-medium">Direction</h4>
        <div className="w-full h-48">
          <MapContainer
            center={props.mapLocation}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.mapLocation}>
              <Popup>{props.title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg"
          onClick={handleCopyClick}
        >
          <MdContentCopy /> Copy
          {isCopied && (
            <span className="absolute top-0  px-2 py-1 bg-green-500 text-white rounded">
              Restaurant Address Copied to Clipboard
            </span>
          )}
        </button>
        <button
          className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg"
          onClick={handleDirectionsClick}
        >
          <span className="text-zomato-400">
            <FaDirections />
          </span>
          Direction
        </button>
      </div>
    </>
  );
}

export default MapView;
