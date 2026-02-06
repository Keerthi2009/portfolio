export function hexToHsl(hex) {
  let r = 0, g = 0, b = 0;
  hex = hex.replace("#", "");

  r = parseInt(hex.substring(0, 2), 16) / 255;
  g = parseInt(hex.substring(2, 4), 16) / 255;
  b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function generateTheme(primary) {
  const { h, s } = hexToHsl(primary);

  return {
    "--primary": primary,
    "--background": `hsl(${h}, ${s}%, 97%)`,
    "--surface": `hsl(${h}, ${s}%, 100%)`,
    "--text": `hsl(${h}, ${s}%, 12%)`,
    "--border": `hsl(${h}, ${s}%, 85%)`,
    "--hover": `hsl(${h}, ${s}%, 92%)`
  };
}
