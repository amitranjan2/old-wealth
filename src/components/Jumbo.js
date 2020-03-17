import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../assests/boatImage.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: 100% 100%;
    min-height: -webkit-fill-available;


    color: #efefef;


    background-color: #20242d;
    color: #efefef;

    height: 800px;

    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #20242d;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .p4{

    font-size: 14px;


  margin-top:0.5rem;
    line-height: 1.8;
    color: #131722;
    font-size: 22px;
    text-align: center!important;

    color: #f8f9fa!important;
    font-weight: bold;


  }@media only screen and (max-width: 767px) {

    h1 {
      font-size: 2em;
    }

    h2 {
       font-size: 2em;
    }

 }



`;





 const Jumboo = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
          <div className="float-box-footer">
          <div class="wrapper">
        <h1 className="p4">Welcome</h1>
        <p className="p4">Invest First is the perfect platform for beginners, students, and also for intermediate to learn everything about share market, investing, and trading.
 <br></br>Here, you will find Stock market-related books, movies, Various best rank You tube trading Channels, and many more. .....</p>

 <p className="p4">You can also add your favourites books ,youtube channels and movies.</p>



</div>

        </div>
      </Container>
    </Jumbo>
  </Styles>



)
export default Jumboo;



