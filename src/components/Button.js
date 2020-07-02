import React from 'react';
import styled from 'styled-components';
// import './Login.css';
import Investing from '../assests/Investing.com.png';
import tradeview from '../assests/tradingview.jpg';
import chartlink from '../assests/chartlink.jpeg';

// or

// import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button'

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table,Dropdown,Card,CardDeck} from 'react-bootstrap';
const Styles = styled.div`



.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.section-image {
  width: auto;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
}

.section {
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
}
.section.reverse {
  flex-wrap: wrap-reverse;
}
.section-content-container {
  display: flex;
  flex-grow: 1;
  flex-basis: 50%;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
}

.section-image-container {
  display: flex;
  flex-grow: 1;
  flex-basis: 50%;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
}
.section-image-right {
  position: absolute;
  right: 0px;
  height: 44.625rem;
}
img, svg {
  vertical-align: middle;
}
* {
  font-family: "Metropolis";
}

.section-description li {
  vertical-align: middle;
  background: url(/static/media/tick.472f80e1.svg) 0px center no-repeat;
  padding: 0.6rem 0px 0.5rem 1.8rem;
  list-style: none;
  margin: 0px;
}
.section-image-container.left {
  align-items: center;
}
.highlightme {
  color: #f5a623;
  font-weight: 600;
}
.section-heading {
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 3.5rem;
  line-height: 4.2rem;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  text-align: left;
  color: rgba(0,0,0,.6);
}
.section-image-container.left {
  align-items: center;
}

`;


function Buton() {




  // import { GoogleLogin } from 'react-google-login';


    return (


    <Styles>






    </Styles>


    );
  }
  export default Buton;
