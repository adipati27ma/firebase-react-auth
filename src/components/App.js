import { Container } from 'react-bootstrap';
import AuthProvider from '../context/AuthContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signup from './Signup';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route component={Dashboard} exact path="/" />
              <Route component={Signup} exact path="/signup" />
              <Route component={Login} exact path="/login" />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
