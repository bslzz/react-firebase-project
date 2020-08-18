import React, { useState } from 'react';
import Firebase from 'firebase';
import { Redirect } from 'react-router-dom';

const CreateNewPost = ({ uid }) => {
  const [input, setInput] = useState({
    title: '',
    content: '',
  });

  const [posted, setPosted] = useState(false);

  const { title, content } = input;

  const postChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const postSubmit = (e) => {
    e.preventDefault();
    Firebase.firestore()
      .collection('posts')
      .add({
        title,
        content,
        time: new Date(),
        user: Firebase.auth().currentUser.uid,
      })
      .then(() => {
        setPosted(true);
      });
  };
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        {posted ? <Redirect to="/" /> : ''}
        {!uid ? (
          <Redirect to="/login" />
        ) : (
          <form onSubmit={postSubmit} className="card z-depth-5 hoverable">
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
                  onChange={postChange}
                />
              </div>
              <div className="input-field">
                <i className="material-icons prefix">insert_comment</i>
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  name="content"
                  value={content}
                  onChange={postChange}
                ></textarea>
                <label htmlFor="textarea1">Content</label>
              </div>

              <div className="input-field">
                <button
                  className="btn-large waves-effect waves-dark"
                  style={{ width: '100%' }}
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
