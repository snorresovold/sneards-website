import React, {useEffect, useState} from 'react'
import { LangContext } from './LangContext';
// Currently not used
function Popup() {
  const { lang, SetLang } = React.useContext(LangContext);
  const [show, setShow] = useState(0)


  useEffect(() => {
    setShow(0)
    setTimeout(() => {
      setShow(0)
    }, 1000);
  }, [lang])


  return (
    <div>
      {lang === "no" ?(
        <div className="inline-block px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring text-center" style={{opacity: show }}>
            <span className="popuptext">Gå tilbake til prosjektsiden</span>
            <br/>
            <span> for å endre språket på prosjektene</span>
        </div>
      ) : (
      <div className="inline-block px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring text-center" style={{opacity: show}}>
        <span className="popuptext">Go back to the project page</span>
        <br/>
        <span>to change the language on the projects</span>
      </div>
      )}
    </div>
  )
}

export default Popup