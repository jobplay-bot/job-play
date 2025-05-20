import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface Props {
  lat: number;
  lng: number;
}

export default function Map({ lat, lng }: Props) {
  const center = { lat, lng };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
