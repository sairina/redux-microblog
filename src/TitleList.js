import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPostsFromAPI } from './actions';
import { useDispatch } from 'react-redux';

function TitleList({ post }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    async function getAllPosts(){
      dispatch(getAllPostsFromAPI()).then(() => setIsLoading(false));
    }
    if(isLoading){
      getAllPosts();
    }
  }, [dispatch, isLoading]);

  if (isLoading) return <b>Loading</b>;

  return (
    <div className="TitleList">
      <Link to={`/posts/${post[0]}`}>
        <h4>Post: {post[1].title}</h4>
      </Link>
      <h5>Description: {post[1].description}</h5>
    </div>
  );
}

export default TitleList;