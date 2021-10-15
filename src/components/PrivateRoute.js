import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({
  component: Component,
  authenticated,
  ...rest
}) {
  const { currentUser } = useAuth();

  return authenticated ? (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  ) : (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Redirect to="/" /> : <Component {...props} />;
      }}
    ></Route>
  );
}
