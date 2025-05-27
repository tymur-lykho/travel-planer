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

export default function MapViewPage() {
  const [marker, setMarker] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    lat: "",
    lng: "",
  });

  const handleClickOnMap = (e) => {
    const { lat, lng } = e.detail.latLng;
    setFormData({
      ...formData,
      lat,
      lng,
    });

    setMarker({ lat, lng });
  };

  return (
    <APIProvider
      apiKey={config.GM_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Section>
        <MapSection onClickOnMap={handleClickOnMap}>
          {marker?.lat ? (
            <AddLocationForm formData={formData} />
          ) : (
            <p style={{ textAlign: "center" }}>Find a place on the map</p>
          )}
          <Markers marker={marker} />
        </MapSection>

        <SideBar>
          <SearchBox type="location" />
          <CategoryList categories={["All", "Hotel", "Cafe", "Sight"]} />
          <LocationList />
        </SideBar>
      </Section>
    </APIProvider>
  );
}
