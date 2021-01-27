import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home"
import About from './components/About'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" render={()=> <Home />} />
        <Route  path="/About" component={About}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
