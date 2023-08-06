
import './App.css';
import './responsive.css';

import React, { Fragment, useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

function App() {

  const pageSize = 100;
  const apiKey = '239ea0fb8fff43d6869c41cbeec1d6db'
  // const apiKey =  process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  // localStorage.getItem('theme') || 
  // const [theme, setTheme] = useState('light');
  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // };
  // useEffect(() => {
  //   localStorage.setItem('theme', theme);
  //   document.body.className = theme;
  // }, [theme]);

  const [mode, setMode] = useState({
    color: '#2E5478',
    backgroungColor: 'white'
  });
  const [btntext, setBtntext] = useState("🌞")
  const toggleMode = () => {
    if (mode.color == '#2E5478'){
      setMode({
        color: '#D0D1EA ',
        backgroundColor: '#252525',
        boxShadow : ' 0px 0px 36px -6px black'
      })
      setBtntext("🌚")
    }
    else {
      setMode({
        color: '#2E5478',
        backgroundColor: 'white'
      })
      setBtntext("🌞")
    }
  }

  return (
    <>
      <div className="program">
        <Router>
          <Fragment>
            <NavBar mode={mode} toggleMode={toggleMode} btntext={btntext} />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress} />
            <main style={mode}>
              <Routes>
                <Route exact path="/" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
                <Route path="/business" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
                <Route path="/entertainment" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
                <Route path="/general" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
                <Route path="/health" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
                <Route path="/science" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
                <Route path="/sports" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
                <Route path="/technology" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
              </Routes>
            </main>
          </Fragment>
        </Router>
      </div>
    </>
  );
}

export default App;
