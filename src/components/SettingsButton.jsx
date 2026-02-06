import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";

export default function SettingsButton({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "fixed",
        top: 24,
        right: 24,
        backgroundColor: "var(--surface)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        border: "1px solid var(--border)",
        "&:hover": {
          backgroundColor: "var(--hover)"
        }
      }}
    >
      <SettingsIcon />
    </IconButton>
  );
}
