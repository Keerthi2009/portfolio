import { useContext, useRef } from "react";
import { HexColorPicker } from "react-colorful";
import { ThemeContext } from "../ThemeContext";

export default function SettingsPanel({ open, onClose }) {
  const { primaryColor, setPrimaryColor } = useContext(ThemeContext);
  const panelRef = useRef();

  if (!open) return null;

  const handleBackdropClick = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div className="settings-backdrop" onClick={handleBackdropClick}>
      <div className="settings-panel" ref={panelRef}>
        <div className="settings-header">
          <h3>Settings</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="settings-section">
          <p><b>Theme Color</b></p>
          <HexColorPicker
            color={primaryColor}
            onChange={setPrimaryColor}
          />

          <div className="color-preview">
            <span style={{ background: primaryColor }} />
            {primaryColor}
          </div>
        </div>
      </div>
    </div>
  );
}
