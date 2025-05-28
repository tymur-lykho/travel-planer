import { config } from "../js/config";
import { APIProvider } from "@vis.gl/react-google-maps";

import { useState } from "react";

import MapSection from "../components/MapSection/MapSection";
import SideBar from "../components/SideBar/SideBar";
import Markers from "../components/Markers/Markers";
import Section from "../components/Section/Section";

export default function RouteBuildPage() {
  const [routePoint, setRoutePoint] = useState({});
  const [route, setRoute] = useState([]);

  const handleClickOnMap = (e) => {
    const { lat, lng } = e.detail.latLng;
    setRoute((route) => [...route, { lat, lng }]);
    // setFormData({
    //   ...formData,
    //   lat,
    //   lng,
    // });
    // setMarker({ lat, lng });
  };
  return (
    <APIProvider
      apiKey={config.GM_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Section>
        <MapSection onClickOnMap={handleClickOnMap}>
          <Markers marker={routePoint} />
        </MapSection>

        <SideBar header={<>{/* <SearchBox type="route" /> */}</>}>
          {/* <RouteList  /> */}
        </SideBar>
      </Section>
    </APIProvider>
  );
}
