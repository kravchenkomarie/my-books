import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { LangContext } from './App';

export default function Language() {
  const [name, setName] = useState('Max');
  const [name2, setName2] = useState('Mari');

  const setLang = () => {
    if (lang.lang === 'RU') {
      lang.setLang('EN');
    } else {
      lang.setLang('RU');
    }
  };

  const myCallBack = useCallback(() => {
    console.log(name);
  }, [name]);

  const myMemo = useMemo(() => {
    return name2;
  }, []);

  useEffect(() => {
    // myCallBack();
    console.log(myMemo);
  }, []);

  const lang = useContext(LangContext);

  return (
    <div>
      <div>
        {lang.lang} <button onClick={setLang}>Поменять язык</button>
      </div>
      <div>
        {lang.lang} <button>Поменять язык</button>
      </div>
      <div>
        {lang.lang} <button>Поменять язык</button>
      </div>
    </div>
  );
}
