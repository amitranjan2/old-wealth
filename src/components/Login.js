
import React ,{useState}from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import './Login.css';
import Navigation from '../components/Navigation';
import Apper from './Video';
import Card from 'react-bootstrap/Card'
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
import { BrowserRouter as Router,Switch,Route  }from 'react-router-dom';
import { Redirect } from 'react-router';
// or
// import { GoogleLogin } from 'react-google-login';

import styled from 'styled-components';

const Styles = styled.div`
.card-header {
  padding: .75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0,0,0,.03);
  border-bottom: 1px solid rgba(0,0,0,.125);
  background-color: cornsilk;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  background-color: #87CEEB;
}
@media only screen and (max-width: 767px) {

  h1 {
    font-size: 1em;
  }

  h2 {
     font-size: 1em;
  }

}


`;


class Login extends React.Component {


  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };



  responseGoog = (response) => {
    console.log(response);
    var name = response + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        this.setState({
          isLoggedIn: true,


        });
      }
    }


  }
  componentWillMount() {

    {this.responseGoog("auth")}
    console.log("response.accessToken");


  }

responseGoogle = (response) => {
  this.setState({
    isLoggedIn: true,


  });


 console.log(response.accessToken);
  var d = new Date();
  d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = "auth" + "=" + response.accessToken+ ";" + expires + ";path=/";
  //   console.log(response);
    // setLogg(logg + 1);
    // console.log(logg);
    // history.push("/search");
    //this.props.history.push("/search");

  }


  responseFailure = (response) => {
    alert(response.error);
      console.log(response);
      // setLogg(logg + 1);
      // console.log(logg);
      // history.push("/search");
      //this.props.history.push("/search");

    }





//   }






  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
 <Apper />
      );
    } else {

      fbContent = (
        <Styles>

        <Card className="text-center">
          <Card border="primary" ></Card>
  {/* <Card.Header>Featured</Card.Header> */}
  <Card.Body>
    <Card.Title><h1>Need Your Contribution!</h1></Card.Title>
    <Card.Text>
     <h2>Please Login to add your favorites channel in this section</h2>
    </Card.Text>
    <GoogleLogin
        clientId="294896410820-ee92to39jphv97ct2aoho378rnq2k18v.apps.googleusercontent.com"

        buttonText="Google Login "
        classNamevariant="primary"
        onSuccess={this.responseGoogle}
        onFailure={this.responseFailure}
        cookiePolicy={'single_host_origin'}
      />
  </Card.Body>


</Card> </Styles>

      );
    }

    return <div >{fbContent}</div>;
  }




}

export default Login;
