import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import PostForm from './PostForm';
import PostView from './PostView';

function Routes({ add, posts, remove, update }) {

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
          <PostView posts={posts} remove={remove} update={update}/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}
export default Routes;