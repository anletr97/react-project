import { Routes } from 'common';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      {Routes.map((r) => (
        <Route path={r.path} key={r.path} component={r.page} />
      ))}
    </Router>
  );
}

export default App;
