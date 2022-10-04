import { GoogleMap } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const Map = ({ latitude, longitude }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCpiE2_dlGNKj2Q7IKCwXSOYCPVz2UPcfk",
  });
  const mapContainerStyle = {
    width: "100vw",
    height: "60vh",
  };
  const center = {
    lat: latitude,
    lng: longitude,
  };

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
      <Marker
        key="marker_1"
        position={{
          lat: latitude,
          lng: longitude,
          map: Map
        }}
      />
      </GoogleMap>

    </>
  );
};
export default Map;
