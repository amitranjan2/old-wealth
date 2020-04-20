import React, { useEffect, useState } from 'react'
import moment from 'moment';
import axios from 'axios';
import styled from 'styled-components';
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
    float:left;
    background-color:#F8F9FB;
    padding-left: 2rem;
    padding-right: 2rem;

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
  `;
function LandingPage() {

    const [Blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data) {
                    console.log(response.data)
                    setBlogs(response.data)
                } else {
                    alert('Failed to get Blogs')
                }
            })
    }, [])


    // componentDidMount() {
    //     axios.get('http://localhost:5000/exercises/')
    //       .then(response => {
    //         this.setState({ exercises: response.data })
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    //   }


        return (
            <Styles>
<div className="inside">
    <div className="insidie">
          <div className="posts-container">
            <center>
              <h1 className="blue">All Posts</h1>
              <hr />
            </center>
            <div className="card-container">
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
        <large className="text-muted"> <span> {moment(item.createdAt).format("MMM Do YY")} </span></large>
      </Card.Footer>
   <br></br>
    </Card>
                  </React.Fragment>
                ))
              ) : (
                <center>
                <h1>Loading...</h1>
                <hr />
              </center>
              )}
            </div>
          </div>
          </div>
          </div>
          </Styles>
        );

//         const renderCards = Blogs.map((item, index) => {



//             return (

    //             <Card>
    // <Card.Img variant="top" src={item.photo}/>
    //   <Card.Body>
    //     <Card.Title>"The Intelligent Investor"</Card.Title>
    //     <Card.Text>
    //     Before his death, "The Intelligent Investor" author Benjamin Graham was a renowned professor known as the godfather of investing, and Jason Zweig,
    //      The Wall Street Journal columnist, adds in some commentary in this revised edition. This book takes a different approach from other investing books,
    //       although it’s not without positive encouragement. It won’t tell you how to make millions, but rather how not to lose your shirt.
    //       The authors impart must-read basics to get you started in investing and keep you going for a long time, from recommended strategies and how to analyze stocks to a comprehensive history lesson on the stock market.
    //       Graham published the first edition of this book in 1949, and Buffett himself has called that version “the best book on investing ever written.”
    //     </Card.Text>
    //   </Card.Body>
    //   <Card.Footer>
    //     <small className="text-muted"></small>
    //   </Card.Footer>

    // </Card>

//             )
//         })
//         return (
//             <Styles>

{/* <div className="inside">
    <div className="insidie"> */}
//             <div className="posts-container">
//               <center>
//                 <h1>All Posts</h1>
//                 <hr />
//               </center>
//               <div style={{ width: '100%', margin: '3rem auto' }}>

//                     <React.Fragment >
//                    <CardDeck>


// {renderCards}


// </CardDeck>
//                     </React.Fragment>
//                   ))
//                 ) : (
//                   <div>Loading...</div>
//                 )}
//               </div>
//             </div>
//             </div>
//             </div>
//             </Styles>
//           );







//       };


              }
export default LandingPage
