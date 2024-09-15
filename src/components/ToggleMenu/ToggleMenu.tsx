import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import '../iconButton.css';

export interface MenuProps {
  /** Is menu showed ? */
  isOpen?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const ToggleMenu = ({
  isOpen = false,
  size = 'medium',
  backgroundColor,
  ...props
}: MenuProps) => {
  const [isMenuOpen, setMenuOpen] = useState(isOpen);
  return (
    <button
      type="button"
      className={`icon-button icon-button--${size}`}
      style={{ backgroundColor, display: "flex", justifyContent: 'space-between', alignItems: 'center' }}
      onClick={() => setMenuOpen(!isMenuOpen)}
      {...props}
    >
      {isMenuOpen ? <MdClose /> : <CgMenuGridO />}
      
    </button>
  );
};
