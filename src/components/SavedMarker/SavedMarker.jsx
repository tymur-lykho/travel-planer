import {
  AdvancedMarker,
  Pin,
  useAdvancedMarkerRef,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState, useCallback } from "react";

export default function SavedMarker({ marker, index }) {
  const [markerRef, markerPoint] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const handleMarkerClick = useCallback(
    () =>
      setInfoWindowShown((isShown) => {
        console.log(isShown);
        return !isShown;
      }),
    []
  );

  const handleClose = useCallback(() => setInfoWindowShown(false), []);
  return (
    <>
      <AdvancedMarker
        position={{
          lat: marker.lat,
          lng: marker.lng,
        }}
        clickable={true}
        onClick={handleMarkerClick}
        title={marker.name}
        ref={markerRef}
      >
        <Pin glyphColor={"#000"} borderColor={"#000"} />
      </AdvancedMarker>
      {infoWindowShown && (
        <InfoWindow anchor={markerPoint} onClose={handleClose}>
          <h2>Point: {marker.name}</h2>
          <p>
            Coordinates: {marker.lat} / {marker.lng}
          </p>
        </InfoWindow>
      )}
    </>
  );
}
