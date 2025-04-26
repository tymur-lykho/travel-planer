import AddLocationForm from "../AddLocationForm/AddLocationForm";
import Box from "@mui/material/Box";
import css from "./SideBar.module.css";
import LocationList from "../LocationList/LocationList";
import { useState, useCallback } from "react";
import CustomAccordion from "../CustomAccordion/CustomAccordion";
import Routes from "../Routes/Routes";

export default function SideBar({
  formData,
  onUpdate,
  onLocationFormSubmit,
  savedLocations,
  savedRoutes,
  addRoute,
  deleteRoute,
  markers,
  onRename,
  itemName,
}) {
  const [expandedAccordion, setExpandedAccordion] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  return (
    <div className={css.sidebar}>
      {markers.length !== 0 && (
        <Box sx={{ border: "1px dashed grey" }}>
          <AddLocationForm
            formData={formData}
            onUpdate={onUpdate}
            onLocationFormSubmit={onLocationFormSubmit}
          />
        </Box>
      )}

      <CustomAccordion
        expanded={expandedAccordion === "accordion1"}
        onChange={handleChange("accordion1")}
        title="Favorite locations"
        content={
          <>
            {savedLocations.length > 0 ? (
              <LocationList
                items={savedLocations}
                onRename={onRename}
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
            savedRoutes={savedRoutes}
            addRoute={addRoute}
            deleteRoute={deleteRoute}
          />
        }
      />

      {/* 
      <form method="get" id="create-route-form">
        <label htmlFor="route-name">Enter route title:</label>
        <input type="text" name="route-name" id="route-name" required />

        <button type="submit">Create new route</button>
      </form>
      <h2>Your routes:</h2>
      <div className="user-routes-wrapper" id="user-routes">
        <ol
          className="user-route draggable-container"
          id="user-route"
          style="border: 1px solid red"
        >
          <li
            className="user-route-item draggable"
            id="user-route-item"
            draggable="true"
          >
            item 1
          </li>
          <li
            className="user-route-item draggable"
            id="user-route-item"
            draggable="true"
          >
            item 2
          </li>
          <li
            classNAme="user-route-item draggable"
            id="user-route-item"
            draggable="true"
          >
            item 3
          </li>
          <li
            className="user-route-item draggable"
            id="user-route-item"
            draggable="true"
          >
            item 4
          </li>
        </ol>
      </div> */}
    </div>
  );
}
