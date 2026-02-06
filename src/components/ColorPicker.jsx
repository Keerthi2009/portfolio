import { useContext } from "react";
import { HexColorPicker } from "react-colorful";
import { ThemeContext } from "../ThemeContext";

export default function ColorPicker() {
  const { primaryColor, setPrimaryColor } = useContext(ThemeContext);

  return (
    <div className="color-picker">
      <p><b>Customize Theme</b></p>
      <HexColorPicker
        color={primaryColor}
        onChange={setPrimaryColor}
      />
      <div className="color-preview">
        Primary: <span style={{ background: primaryColor }} />
        {primaryColor}
      </div>
    </div>
  );
}
