import MenuCard from "../MenuCard/MenuCard";
import css from "./LocationList.module.css";
import { useMap } from "@vis.gl/react-google-maps";

export default function LocationList({ items, onRename, itemName }) {
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
