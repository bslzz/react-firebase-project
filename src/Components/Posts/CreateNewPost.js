// import React, { useState } from 'react';
// import Firebase from 'firebase';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import postActions from '../../store/actions/postActions';
// import inputActions from '../../store/actions/inputActions';

// const CreateNewPost = (dispatch, posts, { uid }) => {
//   const [input, setInput] = useState({
//     title: '',
//     content: '',
//   });
//   console.log(posts);

//   const [posted, setPosted] = useState(false);

//   const { title, content } = input;

//   const postChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const postSubmit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <div className="row">
//       <div className="col s12 m6 offset-m3">
//         {posted ? <Redirect to="/" /> : ''}
//         {!uid ? (
//           <Redirect to="/login" />
//         ) : (
//           <form onSubmit={postSubmit} className="card z-depth-5 hoverable">
//             <div className="card-action teal lighten-1 white-text center-align">
//               <h3>Create New Post</h3>
//             </div>
//             <div className="card-content">
//               <div className="input-field">
//                 <i className="material-icons prefix">title</i>
//                 <label htmlFor="title">Title</label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={title}
//                   onChange={postChange}
//                 />
//               </div>
//               <div className="input-field">
//                 <i className="material-icons prefix">insert_comment</i>
//                 <textarea
//                   id="textarea1"
//                   className="materialize-textarea"
//                   name="content"
//                   value={content}
//                   onChange={postChange}
//                 ></textarea>
//                 <label htmlFor="textarea1">Content</label>
//               </div>

//               <div className="input-field">
//                 <button
//                   className="btn-large waves-effect waves-dark"
//                   style={{ width: '100%' }}
//                 >
//                   Create New Post
//                 </button>
//               </div>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// // when to dispatch the action?
// // what is the name of the props to be called so that the action is dispatched
// // is there a payload to be dispatched together with the action?

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createPost: (post) => {
//       console.log(post);
//       return dispatch({
//         type: 'CREATE_NEW_POST',
//         post: post,
//       });
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(CreateNewPost);

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import postActions from '../../store/actions/postActions';
import inputActions from '../../store/actions/inputActions';
import Firebase from 'firebase';

const CreateNewPost = ({ uid }) => {
  const [posted, setPosted] = useState(false);
  const title = useSelector((state) => state.inputs.title);
  const content = useSelector((state) => state.inputs.content);
  const dispatch = useDispatch();

  const addPost = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        postActions.addPost({
          title,
          content,
          time: new Date(),
          user: Firebase.auth().currentUser.uid,
        })
      );
    }
    setPosted(true);
    dispatch(inputActions.resetInputs());
  };

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        {posted ? <Redirect to="/" /> : ''}
        {!uid ? (
          <Redirect to="/login" />
        ) : (
          <form onSubmit={addPost} className="card z-depth-5 hoverable">
            <div className="card-action teal lighten-1 white-text center-align">
              <h3>Create New Post</h3>
            </div>
            <div className="card-content">
              <div className="input-field">
                <i className="material-icons prefix">title</i>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) =>
                    dispatch(inputActions.setInputTitle(e.target.value))
                  }
                />
              </div>
              <div className="input-field">
                <i className="material-icons prefix">insert_comment</i>
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  name="content"
                  value={content}
                  onChange={(e) =>
                    dispatch(inputActions.setInputContent(e.target.value))
                  }
                ></textarea>
                <label htmlFor="textarea1">Content</label>
              </div>

              <div className="input-field">
                <button
                  className="btn-large waves-effect waves-dark"
                  style={{ width: '100%' }}
                  type="submit"
                >
                  Create New Post
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateNewPost;
