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
  const [routeList, setRouteList] = React.useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem("savedRoutes"));
      return Array.isArray(data) ? data : [];
    } catch (err) {
      console.warn("localStorage contains invalid JSON", err);
      return [];
    }
  });
  const [itemName, setItemName] = React.useState("");

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

  const addRoute = () => {
    setRouteList((routeList) => [
      ...routeList,
      {
        id: uuidv4(),
        name: `New Route ${Date.now()}`,
        points: [],
        createdAt: Date.now(),
      },
    ]);
  };
  const deleteRoute = (id) => {
    setRouteList((routeList) => {
      return routeList.filter((route) => route.id !== id);
    });
  };

  const handleRename = (e, type, oldName) => {
    setItemName(e.target.value);
    switch (type) {
      case "location":
        // const updatingMarker = savedMarkers.find((marker) => marker.name === oldName);

        setSavedMarkers((itemName) => {});
        break;

      default:
        break;
    }
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

  React.useEffect(() => {
    localStorage.setItem("savedRoutes", JSON.stringify(routeList));
  }, [routeList]);

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
            savedRoutes={routeList}
            addRoute={addRoute}
            deleteRoute={deleteRoute}
            onRename={handleRename}
            itemName={itemName}
          />
        </APIProvider>
      </Box>
    </>
  );
}

export default App;
