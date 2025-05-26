import NewMarker from "../NewMarker/NewMarker";
import SavedMarker from "../SavedMarker/SavedMarker";

export default function Markers({ marker, savedMarkers, onMarkerClick }) {
  return (
    <>
      {marker?.lat && <NewMarker marker={marker} />}
      {savedMarkers.map((marker) => (
        <SavedMarker key={marker.id} marker={marker} />
      ))}
    </>
  );
}
