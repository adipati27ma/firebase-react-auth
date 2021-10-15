import { Container } from 'react-bootstrap';
import AuthProvider from '../context/AuthContext';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Signup from './Signup';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';

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
              <PrivateRoute
                component={Dashboard}
                exact
                path="/"
                authenticated
              />
              <PrivateRoute component={Signup} exact path="/signup" />
              <PrivateRoute component={Login} exact path="/login" />
              <PrivateRoute
                component={ForgotPassword}
                exact
                path="/forgot-password"
              />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
