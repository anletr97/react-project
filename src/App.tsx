import { Detail, Home } from 'pages';
import Login from 'pages/Auth/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/charity-campaigns/:id" component={Detail} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    </Router>
  );
}

export default App;
