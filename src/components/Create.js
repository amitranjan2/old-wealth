import React, { Component } from 'react';
import styled from 'styled-components';
import CheckImageUrl from "./CheckImageUrl";

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

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangePostname = this.onChangePostname.bind(this);
    this.onChangeTitle= this.onChangeTitle.bind(this);
    this.onChangePhoto= this.onChangePhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      postname: '',
      title:'',
      photo:'',
      error: ''

    }
  }

  onChangePostname(e) {
    this.setState({
      postname: e.target.value
    })
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  onChangePhoto(e) {
    this.setState({
      photo: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    // const users = {
    //   postname: this.state.postname,
    //   title:this.state.title,
    //   photo:this.state.photo,
    // }

    // console.log(users);

    // axios.post('http://localhost:5000/users/add', users)
    //   .then(res => console.log(res.data));

    // this.setState({
    //     title:'',


    //   photo:' ',
    //   postname: ''
    // })




    if (
        this.state.postname === "" ||
        this.state.title === "" ||
        this.state.photo === ""
      ) {
        this.setState({ error: "Please enter all fields" });
      }
      //  else if (!CheckImageUrl(this.state.photo)) {
      //   this.setState({ error: "Please enter a valid image URL" });
      // }
      else {
        this.setState({ error: "" });

    const users = {
        postname: this.state.postname,
        title:this.state.title,
        photo:this.state.photo,
      }

        axios.post('https://wealthfirst-api.herokuapp.com/users/add', users)
        .then(res => console.log(res.data));

      this.setState({
          title:'',


        photo:' ',
        postname: ''
      })


      }


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



<div className="card card-info">
  <div className="card-header bg-info text-white">Write Something...</div>
  <div className="card-body">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">

          <input
                  value={this.state.user}
                  onChange={this.onChangeTitle}
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Title of your post"
                  style={{ marginBottom: 5 }}
                  name="title"
                />



<input
                  value={this.state.photo}
                  onChange={this.onChangePhoto}
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="URL of image"
                  style={{ marginBottom: 5 }}
                  name="photo"
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

            <textarea type="text"
                required
                className="form-control"
                placeholder="Title of your post"
                value={this.state.postname}
                onChange={this.onChangePostname}
                />


          </div>

          <div className="form-group">
            <input type="submit" value="Add Post" className="btn btn-primary" />
          </div>
        </form>
      </div>
      </div>
        </div>

      </Styles>
    )
  }








}
