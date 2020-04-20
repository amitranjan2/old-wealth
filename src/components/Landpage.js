import React, { useEffect, useState } from 'react'
import moment from 'moment';
import axios from 'axios';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image'
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table,Dropdown,Card,CardDeck} from 'react-bootstrap';
const Styles = styled.div`
.card-title {
    margin-bottom: .75rem;
    font-weight: 600;
    color:black;
  }

  .post-card {
      -webkit-box-flex: 1;
      -ms-flex: 1 1 300px;
      flex: 1 1 300px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow: hidden;
      margin: 0 20px 40px;
      min-height: 300px;
      background: #fff 50%;
      background-size: cover;
      border-radius: 5px;
      -webkit-box-shadow: rgba(39,44,49,.06) 8px 14px 38px, rgba(39,44,49,.03) 1px 3px 8px;
      box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
      -webkit-transition: all .5s ease;
      transition: all .5s ease;
      margin-top: 2rem;
  }



  @media (min-width: 978px) {

    .insidie{

      transition: transform .2s; /* Animation */


      display: flex;
      flex-direction: column;

      width:85%;
  margin:150px auto;

    }

  }

  .inner{
  width: 50%;
  height: 50%;
  top: 25%;
  margin: 0 auto;
  position: relative;
  background:orange;
  }


.card{

    margin-top: 2rem;
}
  .card-deck {
      display: flex;
      flex-flow: row wrap;
      margin-right: -15px;
      margin-left: -17px;
      margin-bottom: 36px;
      margin-top: 2rem;
  }
  .h1, h1 {
    font-size: 1.25rem;
    color: black;
  }


    .card:hover {
      -webkit-transform: scale(1.02);
        -ms-transform: scale(1.02);
        transform: scale(1.02);
          transition: .3s all ease-in-out;
          cursor:pointer;
      }
  .inside{
   height:100%;
    margin:0 auto;
    overflow:hidden;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    float:left;
    background-color:#F8F9FB;
    padding-left: 2rem;
    padding-right: 2rem;




  }
  .card-footer {
    padding: .75rem 1.25rem;
    text-align: end;
    background-color: rgba(0,0,0,.03);
    border-top: 1px solid rgba(0,0,0,.125);
}
  a {
    color: black;
    text-decoration: none;
    background-color: transparent;
  }
  .h3, h3 {
    font-size: 1.75rem;
    text-align: -webkit-center;
    color: black;
    font-weight: bold;
  }
  @media (min-width: 576px){
    .blue {
      margin-bottom: .5rem;
      font-weight: 500;
      line-height: 1.2;
      color: #335eea!important;

    }
    }
  .card-footer {
    padding: .75rem 1.25rem;
     background-color: white;
    /* border-top: 1px solid rgba(0,0,0,.125); */
  }
  .contain{
    height:100%;
    margin:0 auto;
    display: flex;
    overflow:hidden;
    float:left;
    background-color:#F8F9FB;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .in{
    height:100vh;
    margin:0 auto;
    display: flex;
    overflow:hidden;
    float:left;
    background-color:#F8F9FB;
    padding-left: 2rem;
    padding-right: 2rem;
    z-index: -1;

  }
  .foot{
    color:red;
    font-weight: bolder;

  }
  `;
function LandingPage() {

    const [Blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('https://wealthfirst-api.herokuapp.com/users')
            .then(response => {
                if (response.data) {
                    console.log(response.data)
                    setBlogs(response.data)
                } else {
                    alert('Failed to get Blogs')
                }
            })
    }, [])



        return (
            <Styles>
<div className="inside">
    <div className="insidie">
          <div className="posts-container">

            <div className="card-container">
            <center>
              <h1 className="blue">Trading Blogs</h1>
              <hr />
            </center>
              {Blogs.length !== 0 ? (
                Blogs.map(item => (
                  <React.Fragment >
                                 <Card>
    <Card.Img variant="top" src={item.photo}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
       {item.postname}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <large className="text-muted"> <span className="foot"> {moment(item.createdAt).format("MMM Do YY")} </span></large>
      </Card.Footer>
   <br></br>
    </Card>
                  </React.Fragment>
                ))
              ) : (

                  <div className="in">
                <h3>Please wait Loading...</h3>





                <div class="contain">
  <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">
    <circle cx="30" cy="50" fill="#e40001">
      <animate attributeName="r" values="0;5;0" dur="1.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="50" cy="50" fill="#e40001">
      <animate attributeName="r" values="0;5;0" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="70" cy="50" fill="#e40001">
      <animate attributeName="r" values="0;5;0" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
    </circle>
  </svg>

  {/* <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">
    <path d="M 50,50 L 33,60.5 a 20 20 -210 1 1 34,0 z" fill="#e40001">
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.2s" repeatCount="indefinite"/>
    </path>
      <circle cx="50" cy="50" r="16" fill="#424242"></circle>
    </svg> */}

  <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">
    <rect y="25" width="10" height="50" rx="4" ry="4" fill="#e40001">
      <animate attributeName="x" values="10;100" dur="1.2s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="rotate" from="0 10 70" to="-60 100 70" dur="1.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite"/>
    </rect>
    <rect y="25" width="10" height="50" rx="4" ry="4" fill="#e40001">
      <animate attributeName="x" values="10;100" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="rotate" from="0 10 70" to="-60 100 70" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
     <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
    </rect>
    <rect y="25" width="10" height="50" rx="4" ry="4" fill="#e40001">
      <animate attributeName="x" values="10;100" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="rotate" from="0 10 70" to="-60 100 70" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
    </rect>
  </svg>
</div>

{/*
<Image src="https://pickmywork.com/static/media/wave.a03b7bb1.svg" fluid /> */}
{/* <img src="https://pickmywork.com/static/media/wave.a03b7bb1.svg" alt="wave" class="wave"></img> */}


                </div>


              )}
           </div>
          </div>
          </div>
          </div>
          </Styles>
        );




              }
export default LandingPage
