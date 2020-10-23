import React, { useReducer, ReactNode, createContext, ReactElement} from 'react';

import en from '../../strings/en.json';
import ru from '../../strings/ru.json';
import kz from '../../strings/kz.json';

enum LangActionType {
  SET_LANGUAGE = 'SET_LANGUAGE'
}

interface LangState {
  language: string;
}

interface Props {
  children: ReactNode;
}

interface SetLanguageAction {
  type: typeof LangActionType.SET_LANGUAGE;
  payload: string;
}

interface ContextProps {
  state: LangState;
  dispatch: {
    setLanguage: (lang: string) => void;
    translate: (key: string) => string;
  }
}

const langReducer = (state: LangState, action: SetLanguageAction): LangState => {
  switch(action.type) {
    case LangActionType.SET_LANGUAGE:
      return {
        language: action.payload
      }
    default:
      return state;
  }
}

const localStorageLang = localStorage.getItem('language');
const initialState = {
  language: localStorageLang ? localStorageLang : 'EN'
}

export const LangContext = createContext({} as ContextProps);

function LangState({ children }: Props): ReactElement {
  const [state, dispatch] = useReducer(langReducer, initialState);

  const setLanguage = (lang: string) => {
    localStorage.setItem('language', lang);
    dispatch({
      type: LangActionType.SET_LANGUAGE,
      payload: lang
    });
  }

  const translate = (key: string): string => {
    const { language } = state;
    let langData: { [key: string]: string } = {};

    if(language === 'EN') {
      langData = en;
    }else if(language === 'RU') {
      langData = ru;
    }else if(language === 'KZ') {
      langData = kz;
    }

    return langData[key];
  }

  return(
    <LangContext.Provider value={{ state, dispatch: { setLanguage, translate }}}>
      {children}
    </LangContext.Provider>
  );
}

export default LangState;