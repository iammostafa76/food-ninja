import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import MealDetail from './components/MealDeatil/MealDetail';

function App() {
  return (
    <div>

      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/recipe/:mealId">
            <MealDetail/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>


        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
