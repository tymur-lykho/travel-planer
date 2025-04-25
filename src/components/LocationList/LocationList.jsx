import css from "./LocationList.module.css";
import { useMap } from "@vis.gl/react-google-maps";

export default function LocationList({ items }) {
  const map = useMap();

  const handleFocusOnPoint = (lat, lng) => {
    if (map) {
      map.setCenter({ lat, lng });
      map.setZoom(15);
    }
  };
  return (
    <ul>
      {items.map((location) => (
        <li
          key={location.id}
          className={css.card}
          onClick={() => handleFocusOnPoint(location.lat, location.lng)}
        >
          <h5>
            <span className={css.title}>Point name:</span> {location.name}
          </h5>
          <p className={css.coordinates}>
            Coordinates: {location.lat} / {location.lng}
          </p>
        </li>
      ))}
    </ul>
  );
}
