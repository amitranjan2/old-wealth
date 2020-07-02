import React from 'react';
import styled from 'styled-components';
// import './Login.css';
// or
import Favicon from 'react-favicon';
// import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button'
import amit from '../assests/favicon.ico';

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table,Dropdown} from 'react-bootstrap';
const Styles = styled.div`

  .nav-container{
    position:relative;
    z-index:99999;
  }


  .navbar {
    background-color:white;
  }
.nav-link{

  padding-right: 2rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
}
  background: linear-gradient(130deg, $hoverBgColor 0%, $hoverBgColor2 100%);
      box-shadow: none;

}

.navbar-toggler {
  padding: .25rem .75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color:aliceblue;
  border: 1px solid #460e0e00;
  border-radius: .25rem;
}
  a, .navbar-nav .nav-link {
    // color: black;
    color: #0093fd;
    font-weight: bold;



    &:hover {
      color: pink;

      -webkit-transform: scale(1.15);
      -ms-transform: scale(1.15);
      transform: scale(1.15);
        transition: .3s all ease-in-out;
    }
  }

  a, .navbar-brand, .navbar-nav .nav-link . NavDropdown{
    color: #fff;
    padding-right: 0.8rem;
    font-weight: bold;

    &:hover {
      color: pink;
    }
  }
  .navbar-brand {
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    color: #0093fd;
    font-weight: bold;
    &:hover {
      color: pink;
    }
}

  .dropdown-menu {
    background-color: ;
  }
  .dropdown-item {
    position: relative;

    display: block;
    width: 100%;
    padding: .25rem 1.5rem;

    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: white;
  }
`;



function Navigation() {




// import { GoogleLogin } from 'react-google-login';


  return (


  <Styles>
    <div>
      <Favicon url={amit} />
    </div>


        <Navbar expand="lg"  >
          <Navbar.Brand to="/">Wealth First</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/">Home</Nav.Link>


                  {/* <Nav.Link href="/Chart">  Chart Analysis</Nav.Link> */}

                  <NavDropdown bsClass="drop" title="Resources" id="basic-nav-dropdown" >
              <NavDropdown.Item>


              <NavLink to="/video" exact activeStyle={
              { color:'green' }
            }>
                Video   </NavLink> </NavDropdown.Item>

                    <NavDropdown.Item>

                        <NavLink to="/Books" exact activeStyle={ { color:'green' }}> Books  </NavLink></NavDropdown.Item>
                        <NavDropdown.Item>

                        <NavLink to="/Chart" exact activeStyle={ { color:'green' }}> Charts  </NavLink></NavDropdown.Item>


                </NavDropdown>

                <Nav.Link href="/tradingblog">Trading Blog</Nav.Link>


                {/* <NavDropdown title="Important Link" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://www.npmjs.com/package/reactstrap">Money control</NavDropdown.Item>
        <NavDropdown.Item href="https://www1.nseindia.com/index_nse.htm">NSE India</NavDropdown.Item>
        <NavDropdown.Item href="https://www.cashoverflow.in/best-demat-trading-account-india">Demat Account</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://www.screener.in">Screener.in</NavDropdown.Item>
      </NavDropdown> */}
              </Nav>


                <Button variant="outline-success" href="/about">About me</Button>


          </Navbar.Collapse>
        </Navbar>


                 {/* <iframe src="https://www.youtube.com/embed/2MpUj-Aua48?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=0"  width="560" height="315"  frameborder="0" allowfullscreen></iframe> */}

                 {/* <iframe  src="https://www.youtube.com/embed/2MpUj-Aua48?rel=0&cc_load_policy=1"> */}
                 </Styles>


  );
}
export default Navigation;
