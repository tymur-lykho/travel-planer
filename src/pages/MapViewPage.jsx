import { config } from "../js/config";
import { APIProvider } from "@vis.gl/react-google-maps";

import { useState } from "react";

import MapSection from "../components/MapSection/MapSection";
import SideBar from "../components/SideBar/SideBar";
import Markers from "../components/Markers/Markers";
import AddLocationForm from "../components/AddLocationForm/AddLocationForm";
import Section from "../components/Section/Section";
import LocationList from "../components/LocationList/LocationList";
import SearchBox from "../components/SearchBox/SearchBox";
import CategoryList from "../components/CategoryList/CategoryList";

import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";

export default function MapViewPage() {
  const [marker, setMarker] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    lat: "",
    lng: "",
  });
  const [isOpenModal, setIsOpenModal] = useState(false);

  const savedMarkers = useSelector((state) => state.markers);

  const handleClickOnMap = (e) => {
    const { lat, lng } = e.detail.latLng;
    setFormData({
      ...formData,
      lat,
      lng,
    });

    setMarker({ lat, lng });
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <APIProvider
      apiKey={config.GM_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Section>
        <MapSection onClickOnMap={handleClickOnMap}>
          {marker?.lat && !isOpenModal && (
            <button onClick={openModal} aria-label="Add location to favorites">
              <MdFavorite size={40} color="rgb(237 77 77)" />
            </button>
          )}
          {isOpenModal && (
            <AddLocationForm formData={formData} onClose={closeModal} />
          )}
          <Markers marker={marker} />
        </MapSection>

        <SideBar
          header={
            <>
              <SearchBox type="location" />
              <CategoryList categories={["All", "Hotel", "Cafe", "Sight"]} />
            </>
          }
        >
          {savedMarkers.length !== 0 ? (
            <LocationList />
          ) : (
            <p style={{ textAlign: "center" }}>
              No saved locations. Click on the map to save the location.
            </p>
          )}
        </SideBar>
      </Section>
    </APIProvider>
  );
}
