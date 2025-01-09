// import AllLands from "./Components/AllLands";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropertyDescription from "./Components/PropertyDescription";
import PropertyListing from "./AllLands/Components/PropertyListing";
import Profile from "./Profile/Components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropertyDescription />} />
        <Route path="/AllLands" element={<PropertyListing />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
