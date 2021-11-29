import { Detail, Home } from 'pages';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/charity-campaigns/:id" component={Detail} exact />
      </Switch>
    </Router>
  );
}

export default App;
