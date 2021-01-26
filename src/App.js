import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home"
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" render={()=> <Home />} />
        <Route exact path="/about" render={<About/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
