import React from 'react';

const Posts = ({posts}) => (

  <div>
      {posts.map(function(p,i) {
        return (
          <span key={i}>
            <div><p>Message: {p.title}</p>
              <p>Created at: {p.createdAt} </p>

            </div>


          {
            p.image ?
            <div><img className="imagePosts" src={p.image} alt="Post Images" /><hr /></div>
            :
            null
          }
        </span>


        )
      })}
  </div>
);

export default Posts;
