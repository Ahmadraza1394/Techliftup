import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Load cached translations for the current language (if any)
  const getCachedTranslations = (lng) => {
    try {
      const cached = localStorage.getItem(`translations_${lng}`);
      return cached ? JSON.parse(cached) : {};
    } catch (e) {
      console.error('Failed to parse cached translations', e);
      return {};
    }
  };

  const [translations, setTranslations] = useState(() => getCachedTranslations('en'));

  const translateText = async (text) => {
    if (language === 'en' || !text || typeof text !== 'string') {
      return text;
    }

    if (translations[text]) {
      return translations[text]; // hit in-memory / local cache
    }

    try {
      const apiKey = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;
      if (!apiKey) {
        console.error('Google Translate API key is missing');
        return text;
      }

      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
        {
          q: text,
          target: language,
          source: 'en',
        }
      );

      const translated = response.data?.data?.translations?.[0]?.translatedText || text;

      setTranslations(prev => {
        const updated = { ...prev, [text]: translated };
        try {
          localStorage.setItem(`translations_${language}`, JSON.stringify(updated));
        } catch (e) {
          // Fallback silently if storage quota exceeded or unavailable
          console.warn('Could not write translation cache', e);
        }
        return updated;
      });

      return translated;
    } catch (error) {
      console.error('Translation error:', error.response?.data || error.message);
      return text;
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'es' : 'en'));
  };

  // When language changes, load its cache into state
  useEffect(() => {
    setTranslations(getCachedTranslations(language));
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translateText, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const T = ({ children }) => {
  const [translatedText, setTranslatedText] = useState(children);
  const { language, translateText, translations } = useLanguage();

  useEffect(() => {
    if (typeof children !== 'string' || !children) {
      setTranslatedText(children);
      return;
    }

    if (language === 'en') {
      setTranslatedText(children);
      return;
    }

    if (translations[children]) {
      setTranslatedText(translations[children]);
      return;
    }

    let isMounted = true;
    const processTranslation = async () => {
      const result = await translateText(children);
      if (isMounted) {
        setTranslatedText(result);
      }
    };

    processTranslation();

    return () => {
      isMounted = false;
    };
  }, [children, language, translateText, translations]);

  return <>{translatedText}</>;
};
