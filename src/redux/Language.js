const initialState = {
  language: 'fi',
};

const SET_LANGUAGE = '/SET_LANGUAGE';

export const setLanguageInfo = ({ language }) => ({
  type: SET_LANGUAGE,
  language,
});

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
};
