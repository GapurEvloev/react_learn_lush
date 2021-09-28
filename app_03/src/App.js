import Header from './Header';
import About from './About';
import Users from './Users';
import Main from './Main';
import UserId from './Users/UserId';
import Error from './Common/Error';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:userName" component={UserId} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
