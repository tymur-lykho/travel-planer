import "modern-normalize";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import MapViewPage from "../../pages/MapViewPage";
import RouteBuildPage from "../../pages/RouteBuildPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MapViewPage />} />
        <Route path="routes/" element={<RouteBuildPage />} />
      </Routes>
    </>
  );
}

export default App;
