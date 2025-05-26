import "modern-normalize";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import MapViewPage from "../../pages/MapViewPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MapViewPage />} />
      </Routes>
    </>
  );
}

export default App;
