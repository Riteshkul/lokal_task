import './components/style.css'

import Home from './components/Home';
import React from 'react';
import {
  BrowserRouter as Router,
 Routes,
  Route,
  
} from "react-router-dom";
const App=()=> {
 
  return (
    <>
    <Router>
   <Routes>
<Route exact path="/" element={ <Home key="general" category="general" />}/>
<Route exact path="/technology" element={ <Home key="technology" category="technology" />}/>
<Route exact path="/business" element={ <Home  key="business" category="business" />}/>
<Route exact path="/sports" element={ <Home key="sports" category="sports" />}/>
<Route exact path="/entertainment" element={ <Home key="entertainment" category="entertainment" />}/>
   </Routes>
   </Router>
   </>
  );
}

export default App;
