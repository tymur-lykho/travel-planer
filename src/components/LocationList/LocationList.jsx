import MenuCard from "../MenuCard/MenuCard";
import css from "./LocationList.module.css";
import { useMap } from "@vis.gl/react-google-maps";
import { useSelector } from "react-redux";

export default function LocationList({ onRename, itemName }) {
  const savedMarkers = useSelector((state) => state.markers.items);
  const map = useMap();

  const handleFocusOnPoint = (lat, lng) => {
    if (map) {
      map.setCenter({ lat, lng });
      map.setZoom(13);
    }
  };
  return (
    <ul className={css.list}>
      {savedMarkers.map((location) => (
        <li
          className={css.item}
          key={location.id}
          onClick={() => handleFocusOnPoint(location.lat, location.lng)}
        >
          <MenuCard
            type="location"
            title={location.name}
            onRename={onRename}
            itemName={itemName}
          >
            <p className={css.coordinates}>
              Coordinates: {location.lat} / {location.lng}
            </p>
          </MenuCard>
        </li>
      ))}
    </ul>
  );
}
