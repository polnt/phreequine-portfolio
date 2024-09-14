import { useState } from "react";
import '../iconButton.css';

export interface LanguageProps {
  /** Is this the principal call to action on the page? */
  label: string;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const ToggleLanguage = ({
  label = 'fr',
  size = 'medium',
  backgroundColor,
  ...props
}: LanguageProps) => {
  const [language, setLanguage] = useState(label);
  return (
    <button
      type="button"
      className={`icon-button icon-button--${size}`}
      style={{ backgroundColor }}
      onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
      {...props}
    >
      {language.toUpperCase()}
    </button>
  );
};
