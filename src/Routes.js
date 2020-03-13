import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import NewPost from './NewPost';
import SinglePost from './SinglePost';

function Routes({ posts, setPosts }) {

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/new">
          <NewPost />
        </Route>
        <Route exact path="/posts/:postId">
          <SinglePost
            posts={posts}
            setPosts={setPosts} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
export default Routes;