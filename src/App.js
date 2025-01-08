// import AllLands from "./Components/AllLands";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./Components/MainContent";
import MainListing from "./AllLands/Components/MainListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/AllLands" element={<MainListing />}></Route>
        {/* <MainContent /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
