import React, { useState } from 'react';
import { createPost } from '../../actions/postAction';
import { useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import Firebase from 'firebase';

const CreateNewPost = ({ uid }) => {
  const [posted, setPosted] = useState(false);

  let history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const new_post = {
      title,
      content,
      time: new Date(),
      user: Firebase.auth().currentUser.uid,
    };

    dispatch(createPost(new_post));
    setPosted(true);
    history.push('/');
  };

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        {posted ? <Redirect to="/" /> : ''}
        {!uid ? (
          <Redirect to="/login" />
        ) : (
          <form onSubmit={submitForm} className="card z-depth-5 hoverable">
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
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="material-icons prefix">insert_comment</i>
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
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
