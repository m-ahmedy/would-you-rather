import './App.css';
import Home from './routes/home';
import Questions from './routes/questions';

import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute';
import AddQuestion from './routes/addQuestion';
import Question from './routes/question';
import Leaderboard from './routes/leaderboard';

function App() {
  return (
    <div className="App">
      <Switch >
        <Route exact path='/' component={Home} />
        <Route exact path='/leaderboard' component={Leaderboard} />
        <PrivateRoute path='/questions/add' component={AddQuestion} />
        <PrivateRoute path='/questions/:id' component={Question} />
        <PrivateRoute path='/questions' component={Questions} />
      </Switch>
    </div>
  );
}

export default App;
