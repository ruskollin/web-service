import React from 'react';

export const LanguageContext = React.createContext({
  language: 'fi',
  translate: (key) => key,
  switchLanguage: () => {},
});
