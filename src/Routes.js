import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import NewPost from './NewPost';
import SinglePost from './SinglePost';

function Routes({ posts, remove, addComment, setPosts }) {

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>
        <Route exact path="/new">
          <NewPost />
        </Route>
        <Route exact path="/posts/:postId">
          <SinglePost
            posts={posts}
            remove={remove}
            add={addComment}
            setPosts={setPosts} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
export default Routes;