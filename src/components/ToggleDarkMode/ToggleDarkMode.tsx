import { useDarkMode } from '../../hooks';
import { MdOutlineLightMode as LightMode, MdOutlineDarkMode as DarkMode } from "react-icons/md";
import '../iconButton.css';

export interface DarkModeProps {
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const ToggleDarkMode = ({
  size = 'medium',
  backgroundColor,
  ...props
}: DarkModeProps) => {
  const { isDark, changeDarkMode } = useDarkMode();

  return (
    <button
      type="button"
      className={`icon-button icon-button--${size}`}
      style={{ backgroundColor, display: "flex", justifyContent: 'space-between', alignItems: 'center' }}
      onClick={() => changeDarkMode()}
      {...props}
    >
      {isDark ? <LightMode /> : <DarkMode />}

    </button>
  );
};
