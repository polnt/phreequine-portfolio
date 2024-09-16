import { CgMenuGridO } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import '../iconButton.css';

export interface ToggleMenuProps {
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
  size = 'large',
  backgroundColor,
  ...props
}: ToggleMenuProps) => {

  return (
    <button
      type="button"
      className={`icon-button icon-button--${size}`}
      style={{ backgroundColor, display: "flex", justifyContent: 'space-between', alignItems: 'center' }}
      {...props}
    >
      {isOpen ? <MdClose /> : <CgMenuGridO />}

    </button>
  );
};
