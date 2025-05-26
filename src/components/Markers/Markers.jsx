import { useSelector } from "react-redux";
import NewMarker from "../NewMarker/NewMarker";
import SavedMarker from "../SavedMarker/SavedMarker";

export default function Markers({ marker }) {
  const savedMarkers = useSelector((state) => state.markers.items);
  return (
    <>
      {marker?.lat && <NewMarker marker={marker} />}
      {savedMarkers.map((marker) => (
        <SavedMarker key={marker.id} marker={marker} />
      ))}
    </>
  );
}
