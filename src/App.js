import './App.css';
import Header from "./components/header/Header";
import HomePage from "./components/home-page/HomePage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Characters from "./components/character-page/Characters";
import Ennemies from "./components/ennemy-pages/Ennemies";
import Objects from "./components/object-page/Objects";
import Legend from "./components/legend-page/Legend";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route path="/zeldapedia">
              <HomePage/>
            </Route>
            <Route path="/legend">
              <Legend/>
            </Route>
            <Route path="/characters">
              <Characters/>
            </Route>
            <Route path="/ennemies">
              <Ennemies/>
            </Route>
            <Route path="/objects">
              <Objects/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
