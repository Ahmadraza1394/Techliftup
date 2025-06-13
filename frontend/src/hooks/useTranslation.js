import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const useTranslation = (text) => {
  const [translatedText, setTranslatedText] = useState(text);
  const { language, translateText } = useLanguage();

  useEffect(() => {
    const doTranslate = async () => {
      if (text) {
        const result = await translateText(text);
        setTranslatedText(result);
      }
    };

    if (language === 'en') {
      setTranslatedText(text);
    } else {
      doTranslate();
    }
  }, [text, language, translateText]);

  return translatedText;
};
