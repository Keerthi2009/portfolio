import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Typography,
  Button
} from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function SettingsPanel({ open, onClose }) {
  const { primaryColor, setPrimaryColor } = useContext(ThemeContext);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Settings</DialogTitle>

      <DialogContent>
        <Stack spacing={3}>
          <div>
            <Typography variant="subtitle2" gutterBottom>
              Theme Color
            </Typography>

            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              style={{
                width: "100%",
                height: 44,
                border: "none",
                background: "none",
                cursor: "pointer"
              }}
            />

            <Typography variant="caption">
              Selected: {primaryColor}
            </Typography>
          </div>

          <Button
            variant="outlined"
            onClick={onClose}
            sx={{ alignSelf: "flex-end" }}
          >
            Close
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
