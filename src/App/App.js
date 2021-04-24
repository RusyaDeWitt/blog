import Navigation from '../Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home/Home'


function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
           <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
