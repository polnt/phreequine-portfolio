import { useLanguage } from '../../hooks';
import '../iconButton.css';

export interface LanguageProps {
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const ToggleLanguage = ({
  size = 'medium',
  backgroundColor,
  ...props
}: LanguageProps) => {
  const { language, changeLanguage } = useLanguage();

  return (
    <button
      type="button"
      className={`icon-button icon-button--${size}`}
      style={{ backgroundColor }}
      onClick={() => { changeLanguage(language === 'fr' ? 'en' : 'fr'); }}
      {...props}
    >
      {language?.toUpperCase()}
    </button>
  );
};
