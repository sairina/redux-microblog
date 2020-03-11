import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import PostForm from './PostForm';
import PostView from './PostView';

function Routes({ add, posts }) {

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home posts={posts}/>
        </Route>
        <Route exact path="/new">
          <PostForm add={add} />
        </Route>
        <Route exact path="/:postId">
          <PostView />
        </Route>
      </Switch>
    </div>
  );
}
export default Routes;