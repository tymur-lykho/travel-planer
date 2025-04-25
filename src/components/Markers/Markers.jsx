import NewMarker from "../NewMarker/NewMarker";
import SavedMarker from "../SavedMarker/SavedMarker";

export default function Markers({ markers, savedMarkers, onMarkerClick }) {
  return (
    <>
      {markers.map((marker, index) => (
        <NewMarker key={index} marker={marker} onMarkerClick={onMarkerClick} />
      ))}
      {savedMarkers.map((marker) => (
        <SavedMarker key={marker.id} marker={marker} />
      ))}
    </>
  );
}
