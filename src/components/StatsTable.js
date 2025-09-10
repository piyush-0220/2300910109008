// src/components/StatsTable.js
import { useEffect, useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { mockApi } from "../utils/api";

export default function StatsTable() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await mockApi.getStats();
      setUrls(data);
    };
    fetchStats();
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Short URL</TableCell>
          <TableCell>Original URL</TableCell>
          <TableCell>Expiry</TableCell>
          <TableCell>Clicks</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {urls.map((u, idx) => (
          <TableRow key={idx}>
            <TableCell>http://localhost:3000/{u.shortUrl}</TableCell>
            <TableCell>{u.long_url}</TableCell>
            <TableCell>{new Date(u.expiry).toLocaleString()}</TableCell>
            <TableCell>{u.clicks.length}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
