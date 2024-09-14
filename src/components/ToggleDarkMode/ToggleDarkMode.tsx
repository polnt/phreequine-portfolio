import { useState } from "react";
import { MdOutlineLightMode as LightMode, MdOutlineDarkMode as DarkMode } from "react-icons/md";
import '../iconButton.css';

export interface DarkModeProps {
  /** Is this the principal call to action on the page? */
  darkMode?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const ToggleDarkMode = ({
  darkMode = false,
  size = 'medium',
  backgroundColor,
  ...props
}: DarkModeProps) => {
  const [isDark, setIsDark] = useState(darkMode);
  return (
    <button
      type="button"
      className={`icon-button icon-button--${size}`}
      style={{ backgroundColor, display: "flex", justifyContent: 'space-between', alignItems: 'center' }}
      onClick={() => setIsDark(!isDark)}
      {...props}
    >
      {isDark ? <LightMode /> : <DarkMode />}
      
    </button>
  );
};
