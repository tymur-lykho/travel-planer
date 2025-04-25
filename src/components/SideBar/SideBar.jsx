import AddLocationForm from "../AddLocationForm/AddLocationForm";
import Box from "@mui/material/Box";
import css from "./SideBar.module.css";
import LocationList from "../LocationList/LocationList";
import { useState, useCallback } from "react";

export default function SideBar({
  formData,
  onUpdate,
  onLocationFormSubmit,
  savedLocations,
  markers,
}) {
  const [itemDataShown, setItemDataShown] = useState(false);

  const handleTitleClick = useCallback(
    () =>
      setItemDataShown((isShown) => {
        return !isShown;
      }),
    []
  );

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

      <Box sx={{ border: "1px dashed grey" }}>
        <h3 onClick={handleTitleClick}>Saved locations</h3>
        {itemDataShown && (
          <>
            {savedLocations ? (
              <LocationList items={savedLocations} />
            ) : (
              <p>Saved point not found!</p>
            )}
          </>
        )}
      </Box>

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
