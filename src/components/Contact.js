import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import chart from '../assests/chart.jpg';
import amit from '../assests/amit.jpg';
import Button from 'react-bootstrap/Button'
import { Navbar, Nav, NavDropdown, Form,  FormControl, Table} from 'react-bootstrap';

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';

const Styles = styled.div`
  .jumbo {
    background: url(${amit}) no-repeat fixed bottom;
    background-size: 100% 100%;
    min-height: -webkit-fill-available;


    color: #efefef;




    position: abosulet;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;


    position: relative;
  }
  @media only screen and (max-width: 767px) {

    h1 {
      font-size: 2em;
    }

    h2 {
       font-size: 2em;
    }

 }
 .tv-blue-background-block__text {
  font-size: 14px;
  margin-bottom: 12px;


  line-height: 1.8;
  color: #131722;
  font-size: 22px;
  text-align: center!important;

  color: #f8f9fa!important;
  font-weight: bold;
}


.butt{



  margin: 0;
  margin-top: 10px;

  position: absolute;

  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
  color: cyan;
  text-align-last: center;
  text-align: center;
}



`;


 const Contact= () => (

// </Styles>
<Styles>




<Jumbo fluid className="jumbo">



    <div className="float-box-footer">
      <h1>HEY! GLAD YOU'RE HERE.<br></br> A LITTLE ABOUT ME...</h1>
      {/* <h1>
  <a href="#">
    Ten Ways to Have Yourself a Merry Little Christmas
  </a>      <p className="tv-blue-background-block__text i-align_center">I started my journey of Engineering in 2016 and developed deep interest in software development. Due to my interest in stock market I built this platform to help beginners ,student and many more to start their journey in stock market </p>

</h1> */}
      <p className="tv-blue-background-block__text"> My name is Amit Ranjan. I am a final year Computer Science and Engineering Student at the Indian Institute of Technology Patna (IIT P). </p>
      <p className="tv-blue-background-block__text i-align_center">I started my journey of Engineering in 2016 and developed deep interest in software development. Due to my interest in stock market I built this platform to help beginners ,student and many more to start their journey in stock market </p>

<p className="tv-blue-background-block__text i-align_center"><h2>PROGRAMMING SKILLS</h2> <br></br>

C • C++ • Javascript• CSS • PHP

• Ruby on Rails,•React Js • API<br></br>Data Structure and Algorithms <br></br>Assembly
Database • MySQL</p>    


</div>

<p className="tv-blue-background-block__text i-align_center"><h2>EXPERIENCE</h2> <br></br>
BIZONGO | SOFTWARE ENGINEERING INTERN<br></br>
 May 2019 – July 2019 | Mumbai, India  <br></br>
• Integrated Google Login(Domain: bizongo.com only) ,Sign Up and Single Sign

On into their four different apps using React Js, Ruby on Rails, OAUTH<br></br>
• Written API to fetch details from darwinapi to assign roles to employees.

</p>

{/* <div className="gallery">


  <div className="desc">Add a description of the image here</div>
</div> */}

  <p className="butt">
    <Button  href="https://www.linkedin.com/in/amit-ranjan-b98b67161/" variant="primary"  >Linkedin</Button>

    {/* <a href="https://www.w3schools.com/jsref/met_win_open.asp" onclick="window.open(this.href); return false;">This link will open in new window/tab</a> */}

  </p>

</Jumbo>


</Styles>



)
export default Contact;
