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
.card-title {
  margin-bottom: .75rem;
  font-weight: 600;
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
}
.insidie{


    transition: transform .2s; /* Animation */

  }

  @media (min-width: 576px)


    .card {
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

    }



  .card:hover {
    -webkit-transform: scale(1.10);
      -ms-transform: scale(1.10);
      transform: scale(1.10);
        transition: .3s all ease-in-out;
        cursor:pointer;
    }
.inside{
    text-shadow: none;
    background: #F8F9FC;
}
a {
  color: black;
  text-decoration: none;
  background-color: transparent;
}
.card-footer {
  padding: .75rem 1.25rem;
   background-color: white;
  /* border-top: 1px solid rgba(0,0,0,.125); */
}
`;


function Cardforchart() {




    // import { GoogleLogin } from 'react-google-login';


      return (


      <Styles>

          <div className="inside">
          <div className="insidie">


<CardDeck>

  <Card >
  <a href="https://in.tradingview.com/">

    <Card.Img variant="top" src={tradeview} />
    <Card.Body>
      <Card.Title>TradingView</Card.Title>
      <Card.Text>
      <p className="tv-blue-background-block__text">Easy and intuitive for beginners – TradingView has all the charting tools you need to share and view trading ideas. Real-time data and browser-based charts let you do your research from anywhere, since there are no installations or complex setups.</p>

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
    </a>
  </Card>

  <Card>
  <a href="https://in.investing.com/">

    <Card.Img variant="top" src={Investing } />
    <Card.Body>
      <Card.Title>Investing.com</Card.Title>
      <Card.Text>
      Investing.com is a financial markets platform providing real-time data, quotes, charts, financial tools, breaking news and analysis across 250 exchanges around the world in 44 language editions. With more than 21 million monthly users, and over 180 million sessions, Investing.com is one of the top three global financial websites according to both SimilarWeb and Alexa
        content.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
    </a>
  </Card>
  <Card>
  <a href="https://chartink.com/">

    <Card.Img variant="top" src={chartlink}/>
    <Card.Body>
      <Card.Title>Chartlink</Card.Title>
      <Card.Text>
      Chartink.com provides tools for technical and fundamental analysis. We provide the following tools free of cost <br></br>
      Candlestick & PnF Charts  <br></br>Custom Stock Screeners<br></br>  Intraday Charting & Scans  <br></br>Stock Watchlists <br></br> Historical Price Data Back to 1980
      <br></br>Accurate data directly from Exchange
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
    </a>
  </Card>
</CardDeck>
</div>
</div>

      </Styles>


      );
    }
    export default Cardforchart;
