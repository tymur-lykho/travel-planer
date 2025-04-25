import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export default function NewMarker({ index, marker, onMarkerClick }) {
  return (
    <AdvancedMarker
      key={index}
      position={marker}
      clickable={true}
      onClick={onMarkerClick}
    >
      <Pin background={"#FBBC04"} glyphColor={"#000"} borderColor={"#000"} />
    </AdvancedMarker>
  );
}
