import React, { Component } from "react";
// import { connect } from "react-redux";

// import { addPost } from "../../actions/postActions";
// import { setCurrentUser } from "../../actions/authActions";
import CheckImageUrl from "./CheckImageUrl";
import styled from 'styled-components';
import axios from 'axios';

const Styles = styled.div`
.card-img-top {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
  .avatar {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50% !important;
    margin-right: 5px;
    margin-left: -3spx;
  }

  .username {
    font-size: 75%;
    text-transform: uppercase;
  }
  .date {
    margin-left: 35px;
    font-size: 65%;
  }
  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #e9ecef;
    padding-top: 30px;
  }




`;

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      title: "",
      photo: "",
      error: ""

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    if (
      this.state.text === "" ||
      this.state.title === "" ||
      this.state.photo === ""
    ) {
      this.setState({ error: "Please enter all fields" });
    } else if (!CheckImageUrl(this.state.photo)) {
      this.setState({ error: "Please enter a valid image URL" });
    } else {
      this.setState({ error: "" });

      const user= {
        text: this.state.text,
        title: this.state.title,
        photo: this.state.photo,

      };

    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data));

    // window.location = '/';
      this.setState({ text: "", title: "", photo: "" });
    }
  }






  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
        <Styles className="container">

      <div className="post-form mb-3">
        {this.state.error && (
          <div className="alert alert-danger" role="alert">
            {this.state.error}
          </div>
        )}
        {this.state.postSuccess && (
          <div className="alert alert-success" role="alert">
            Posted Successfully
          </div>
        )}
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Something...</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  value={this.state.title}
                  onChange={this.onChange}
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Title of your post"
                  style={{ marginBottom: 5 }}
                  name="title"
                />

                <small
                  style={{
                    marginBottom: 5,
                    fontSize: "11px",
                    fontStyle: "italic"
                  }}
                  className="form-text text-muted"
                >
                  Upload your image on{" "}
                  <a href="https://postimages.org/" target="_blank">
                    PostImages
                  </a>
                  &nbsp;and paste link here with http:// or https://
                </small>

                <textarea
                  value={this.state.text}
                  onChange={this.onChange}
                  placeholder="Write something"
                  className="form-control"
                  rows="3"
                  name="text"
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      </Styles>
    );
  }
}



export default PostForm;
