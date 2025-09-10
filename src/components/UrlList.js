import { List, ListItem, ListItemText } from "@mui/material";

export default function UrlList({ urls }) {
  return (
    <List>
      {urls.map((u, idx) => (
        <ListItem key={idx}>
          <ListItemText
            primary={`Short: http://localhost:3000/${u.shortUrl}`}
            secondary={`Original: ${u.url} | Expiry: ${new Date(u.expiry).toLocaleTimeString()}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
