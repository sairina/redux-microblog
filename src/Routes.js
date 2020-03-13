import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import NewPost from './NewPost';
import SinglePost from './SinglePost';

function Routes() {

  return (
    <div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/new"><NewPost /></Route>
        <Route exact path="/posts/:postId"><SinglePost /></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
export default Routes;