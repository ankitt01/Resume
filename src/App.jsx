import './App.scss';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
// import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import {
  Switch,
  Route
} from "react-router-dom";
import React, { Suspense } from "react";
const Portfolio = React.lazy(() => import("./components/Portfolio.js"));
function App() {
  return (
    <div className="App">
      <PersonalInfo />
      <Header />
      <Switch>
        <Route path="/portfolio">
        <Suspense fallback={<div className='Loading'>Loading</div>}>
				  <Portfolio />
			  </Suspense>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Resume />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
