import Home from './Components/Home';
import Joke from './Components/Joke';
import Activity from './Components/Activity';
import Motivation from './Components/Motivation';
import Yoga from './Components/Yoga';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (<Router>
            <Switch>
            <Route path="/joke">
                <Joke/>
            </Route>
            <Route path="/activity">
                <Activity/>
            </Route>
            <Route path="/motivation">
                <Motivation/>
            </Route>
            <Route path="/yoga">
                <Yoga/>
            </Route>
            <Route path='*'>
                <Home/>
            </Route>
            </Switch>
          </Router>
  );
}

export default App;
