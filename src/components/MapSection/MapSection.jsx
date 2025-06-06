import { Map } from "@vis.gl/react-google-maps";
import css from "./MapSection.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function MapSection({ onClickOnMap, children }) {
  const [currentLocation, setCurrentLocation] = useState({
    lat: -33.860664,
    lng: 151.208138,
  });

  useEffect(() => {
    async function getCurrentLocation() {
      return new Promise((res, rej) => {
        if (!navigator.geolocation) {
          reject(new Error("Geolocation is not supported by this browser."));
          return;
        }
        navigator.geolocation.getCurrentPosition(
          (position) =>
            res({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }),
          (e) => rej(e),
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      });
    }

    async function getPosition() {
      const res = await getCurrentLocation();
      setCurrentLocation(res);
    }

    getPosition();
  }, []);

  return (
    <Map
      mapId="MAP_ID"
      className={css.map}
      defaultZoom={13}
      defaultCenter={currentLocation}
      onClick={onClickOnMap}
    >
      <div className={css.contentOnMap}>{children}</div>
    </Map>
  );
}
