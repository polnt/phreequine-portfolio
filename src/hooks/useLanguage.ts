import { useState } from "react";
import i18n from '../i18n';
import i18next from 'i18next';

const useLanguage = () => {
  const resolvedLanguage = i18next.resolvedLanguage;
  const [language, setLanguage] = useState(resolvedLanguage);
  const changeLanguage = (lng: string): void => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return {
    language, changeLanguage
  };
};

export default useLanguage;
