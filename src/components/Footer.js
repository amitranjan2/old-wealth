import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Footer extends Component {




  render() {
    return (
      <Styles>
      <footer>
      <div class="container-fluid text-center">

          <p>
              <a href="/About">About us</a> | <a href="https://www.investello.com/Companies">Stocks</a>

           | <a href="/About">Contact us</a>
          </p>
          <p>© 2020 - Invest First Spend Later</p>
      </div>
  </footer>
  </Styles>
    );
  }
}

export default Footer;

// Media


// Main Footer Container

const Styles = styled.div`


.container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
  width: 100%;
  height: 100px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background: #20242d;
  background: -webkit-linear-gradient(59deg, #3A6073, #16222A);
  background: linear-gradient(59deg, #3A6073, #16222A);
  color: white;
  background-color:#20242d
  margin-top:100px;
  webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}




`;






