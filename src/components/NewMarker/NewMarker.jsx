import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export default function NewMarker({ marker }) {
  return (
    <AdvancedMarker position={marker}>
      <Pin background={"#FBBC04"} glyphColor={"#000"} borderColor={"#000"} />
    </AdvancedMarker>
  );
}
