import React from 'react';
import { connect } from 'react-redux';
import { LanguageContext } from './LanguageContext';
import { setLanguageInfo } from '../../redux/Language';

export const LanguageProvider = ({ children, language }) => (
  <LanguageContext.Provider value={{ language }}>
    {children}
  </LanguageContext.Provider>
);

const mapStateToProps = (state) => ({
  language: state.language.language,
});

const mapDispatchToProps = (dispatch) => ({
  setLanguageInfo: (language) => dispatch(setLanguageInfo(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
