// src/App.js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import UrlShortenerForm from "./components/UrlShortenerForm";
import UrlList from "./components/UrlList";
import StatsTable from "./components/StatsTable";
import { Button } from "@mui/material";

function App() {
  const [urls, setUrls] = useState([]);

  const handleShorten = (data) => {
    setUrls((prev) => [...prev, data]); // Add locally for live UI updates
  };

  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Button component={Link} to="/">Shortener</Button>
        <Button component={Link} to="/stats">Statistics</Button>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <UrlShortenerForm onShorten={handleShorten} />
            <UrlList urls={urls} />
          </>
        } />
        <Route path="/stats" element={<StatsTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
