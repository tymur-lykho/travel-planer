import "modern-normalize";
import { v4 as uuidv4 } from "uuid";
import css from "./App.module.css";
import Header from "../Header/Header";
import { config } from "../../js/config";
import * as React from "react";
import Box from "@mui/material/Box";
import MapSection from "../MapSection/MapSection";
import SideBar from "../SideBar/SideBar";
import { APIProvider } from "@vis.gl/react-google-maps";

function App() {
  const [markers, setMarkers] = React.useState([]);
  const [formData, setFormData] = React.useState({
    name: "",
    lat: "",
    lng: "",
  });
  const [savedMarkers, setSavedMarkers] = React.useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem("savedLocations"));
      return Array.isArray(data) ? data : [];
    } catch (err) {
      console.warn("localStorage contains invalid JSON", err);
      return [];
    }
  });

  const handleClickOnMap = (e) => {
    const { latLng } = e.detail;
    const lat = latLng.lat;
    const lng = latLng.lng;
    setFormData({
      ...formData,
      lat,
      lng,
    });

    setMarkers((prev) => [...prev, { lat, lng }]);
  };

  const handleChangeInForm = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name, e.target.value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addPlace = ({ values }) => {
    const newPlaceData = { ...values, id: uuidv4() };
    setSavedMarkers((savedMarkers) => {
      return [...savedMarkers, newPlaceData];
    });
  };

  const handleClickOnMarker = (e) => {
    if (!e.latLng) return;
    console.log("marker clicked:", e.latLng.toString());
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();
    console.log(lat, lng);
    setFormData({
      ...formData,
      lat,
      lng,
    });
  };

  React.useEffect(() => {
    localStorage.setItem("savedLocations", JSON.stringify(savedMarkers));
  }, [savedMarkers]);

  return (
    <>
      <Header />

      <Box
        component="section"
        className={css.section}
        sx={{ border: "1px dashed grey" }}
      >
        <APIProvider
          apiKey={config.GM_API_KEY}
          onLoad={() => console.log("Maps API has loaded.")}
        >
          <MapSection
            markers={markers}
            savedMarkers={savedMarkers}
            onClickOnMap={handleClickOnMap}
            onClickOnMarker={handleClickOnMarker}
          />
          <SideBar
            markers={markers}
            formData={formData}
            onUpdate={handleChangeInForm}
            onLocationFormSubmit={addPlace}
            savedLocations={savedMarkers}
          />
        </APIProvider>
      </Box>
    </>
  );
}

export default App;
