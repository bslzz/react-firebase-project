// import React from 'react';
// import PostSummary from '../Posts/PostSummary';
// import { useSelector, connect } from 'react-redux';

// const AllPosts = () => {
//   const posts = useSelector((state) => state.posts);
//   return (
//     <>
//       <div>
//         <button className="btn" onClick={removePost}>
//           Remove All Post
//         </button>
//         {posts
//           ? posts.map((post) => <PostSummary post={post} key={post.id} />)
//           : 'Loading ....'}
//       </div>
//     </>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removePost: () => {
//       dispatch({ type: 'REMOVE_ALL_POSTS' });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);

import React from 'react';
import { useSelector } from 'react-redux';
import PostSummary from './PostSummary';

const AllPosts = () => {
  const posts = useSelector((state) => state.posts.posts);

  if (posts.length === 0) {
    return (
      <div>
        <p>There is no note yet. Please add one.</p>
      </div>
    );
  }

  return (
    <>
      {posts.length > 0
        ? posts.map((post) => <PostSummary post={post} key={post.id} />)
        : 'Loading ....'}
    </>

    // <div>
    //   {posts.map((item, index) => {
    //     console.log(item.title);
    //     return (
    //       <PostSummary
    //         title={item.title}
    //         content={item.content}
    //         onItemClicked={() => {
    //           onItemClicked(item, index);
    //         }}
    //       />
    //     );
    //   })}
    // </div>
  );
};

export default AllPosts;
