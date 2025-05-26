import "modern-normalize";
import css from "./App.module.css";

import { config } from "../../js/config";
import { APIProvider } from "@vis.gl/react-google-maps";
import { v4 as uuidv4 } from "uuid";

import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../Header/Header";
import MapSection from "../MapSection/MapSection";
import SideBar from "../SideBar/SideBar";
import Markers from "../Markers/Markers";
import CustomAccordion from "../CustomAccordion/CustomAccordion";
import LocationList from "../LocationList/LocationList";
import Routes from "../Routes/Routes";
import AddLocationForm from "../AddLocationForm/AddLocationForm";

function App() {
  const [marker, setMarker] = React.useState({});
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
    const { lat, lng } = e.detail.latLng;
    setFormData({
      ...formData,
      lat,
      lng,
    });

    setMarker({ lat, lng });
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

  const [expandedAccordion, setExpandedAccordion] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  return (
    <>
      <Header />

      <Box component="section" className={css.section}>
        <APIProvider
          apiKey={config.GM_API_KEY}
          onLoad={() => console.log("Maps API has loaded.")}
        >
          <MapSection onClickOnMap={handleClickOnMap}>
            <Markers
              marker={marker}
              onMarkerClick={handleClickOnMarker}
              savedMarkers={savedMarkers}
            />
          </MapSection>

          <SideBar>
            {marker?.lat ? (
              <Box>
                <AddLocationForm
                  formData={formData}
                  onUpdate={handleChangeInForm}
                  onLocationFormSubmit={addPlace}
                />
              </Box>
            ) : (
              <p style={{ textAlign: "center" }}>Find a place on the map</p>
            )}

            {/* <CustomAccordion
              expanded={expandedAccordion === "accordion1"}
              onChange={handleChange("accordion1")}
              title="Favorite locations"
              content={
                <>
                  {savedMarkers.length > 0 ? (
                    <LocationList
                      items={savedMarkers}
                      onRename={handleRename}
                      itemName={itemName}
                    />
                  ) : (
                    <p>Saved locations not found</p>
                  )}
                </>
              }
            />

            <CustomAccordion
              expanded={expandedAccordion === "accordion2"}
              onChange={handleChange("accordion2")}
              title="Routes"
              content={
                <Routes
                  savedRoutes={routeList}
                  onRename={handleRename}
                  addRoute={addRoute}
                  deleteRoute={deleteRoute}
                />
              }
            /> */}
          </SideBar>
        </APIProvider>
      </Box>
    </>
  );
}

export default App;
