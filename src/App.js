import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Home from './routes/Home'
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Questions from './routes/Questions';
import Leaderboard from './routes/Leaderboard';
import AddQuestion from './routes/AddQuestion';
import QuestionDetails from './routes/QuestionDetails';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/actions/actionCreators';

function App(props) {
  return (
    <div className="App">
      <div>
        <Link to='/'>Home</Link>
        <Link to='/questions'>Questions</Link>
        <Link to='/questions/add'>Add a Question</Link>
        <Link to='/leaderboard'>Leaderboard</Link>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute path='/leaderboard' component={Leaderboard} />
        <PrivateRoute path='/questions/add' component={AddQuestion} />
        <PrivateRoute path='/questions/:id' component={QuestionDetails} />
        <PrivateRoute path='/questions' component={Questions} />
      </Switch>
    </div>
  );
}

export default connect()(App);
