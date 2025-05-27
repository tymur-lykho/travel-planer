import MenuCard from "../MenuCard/MenuCard";
import css from "./LocationList.module.css";
import { useMap } from "@vis.gl/react-google-maps";
import { useSelector } from "react-redux";
import { GrCafeteria } from "react-icons/gr";
import { MdAttractions, MdHotel, MdPlace } from "react-icons/md";

export default function LocationList() {
  const savedMarkers = useSelector((state) => state.markers.items);
  const filterName = useSelector((state) => state.filters.name);
  const filterCategory = useSelector((state) => state.filters.category);
  const visibleMarkers = savedMarkers?.filter((marker) => {
    if (filterCategory) {
      return (
        marker.name.toLowerCase().includes(filterName.toLowerCase()) &&
        marker.category === filterCategory
      );
    } else {
      return marker.name.toLowerCase().includes(filterName.toLowerCase());
    }
  });
  const map = useMap();

  const handleFocusOnPoint = (lat, lng) => {
    if (map) {
      map.setCenter({ lat, lng });
      map.setZoom(13);
    }
  };

  const getIconByCategory = (category) => {
    switch (category) {
      case "cafe":
        return <GrCafeteria />;
      case "sight":
        return <MdAttractions />;
      case "hotel":
        return <MdHotel />;
      default:
        return <MdPlace />;
    }
  };
  return (
    <ul className={css.list}>
      {visibleMarkers.map((location) => (
        <li
          className={css.item}
          key={location.id}
          onClick={() => handleFocusOnPoint(location.lat, location.lng)}
        >
          <MenuCard
            type="location"
            title={location.name}
            id={location.id}
            icon={getIconByCategory(location.category)}
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
