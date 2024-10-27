import React from 'react';
import { connect } from 'react-redux';
import { setLanguageInfo } from '../../redux/Language';
import { LanguageContext } from './LanguageContext';
import en from './en.json';
import fi from './fi.json';

const translations = {
  en,
  fi,
};

const LanguageProvider = ({ children, language, setLanguageInfo: updateLanguageInfo }) => {
  const translate = (key) => translations[language]?.[key] || key;

  const switchLanguage = (lang) => {
    updateLanguageInfo(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, translate, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  language: state.language.language,
});

const mapDispatchToProps = (dispatch) => ({
  setLanguageInfo: (language) => dispatch(setLanguageInfo(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
