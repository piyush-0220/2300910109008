import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { logEvent } from "../utils/logger";
import { mockApi } from "../utils/api";

export default function UrlShortenerForm({ onShorten }) {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState(30);
  const [customCode, setCustomCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url.startsWith("http")) {
      alert("Invalid URL format");
      logEvent("INVALID_URL", { url });
      return;
    }

    try {
      // Mock API call (replace with real API when available)
      const data = await mockApi.shortenUrl({
        long_url: url,
        expiry_minutes: validity,
        custom_code: customCode,
      });

      onShorten(data);
      logEvent("URL_CREATED", data);

      setUrl("");
      setCustomCode("");
    } catch (err) {
      alert("Error shortening URL");
      logEvent("ERROR", { error: err.message });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2 }}>
      <TextField label="Long URL" fullWidth value={url} onChange={(e) => setUrl(e.target.value)} required />
      <TextField type="number" label="Validity (min)" value={validity} onChange={(e) => setValidity(e.target.value)} />
      <TextField label="Custom Shortcode" value={customCode} onChange={(e) => setCustomCode(e.target.value)} />
      <Button type="submit" variant="contained">Shorten</Button>
    </Box>
  );
}
