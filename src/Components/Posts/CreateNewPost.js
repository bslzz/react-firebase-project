import React from 'react';

const CreateNewPost = () => {
  return (
    <div className="row loginForm">
      <div className="col s12 m5 offset-m4">
        <div className="card z-depth-5 hoverable">
          <div className="card-action teal lighten-1 white-text center-align">
            <h3>Create New Post</h3>
          </div>
          <div className="card-content">
            <div className="input-field">
              <i className="material-icons prefix">title</i>
              <label htmlFor="title">Title</label>
              <input type="text" />
            </div>
            <div className="input-field">
              <i className="material-icons prefix">insert_comment</i>
              <textarea
                id="textarea1"
                className="materialize-textarea"
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
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
