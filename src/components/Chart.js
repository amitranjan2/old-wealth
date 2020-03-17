import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import chart from '../assests/chart.jpg';
import Invest from '../assests/Invest.jpg';
import Button from 'react-bootstrap/Button'
import { Navbar, Nav, NavDropdown, Form,  FormControl, Table} from 'react-bootstrap';

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';

const Styles = styled.div`
  .jumbo {
    background: url(${chart}) no-repeat fixed bottom;
    background-size: 100% 100%;

    color: #efefef;




    position: relative;
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
  .am {
    h1 { color: #c9d0d4; font-family: 'Helvetica Neue', sans-serif; font-size: 46px; font-weight: 100; line-height: 50px; letter-spacing: 1px; padding: 0 0 40px; border-bottom: double #555; }


    pre { color: #bbc3c8; font-family: 'Verdana', sans-serif; font-size: 26px; line-height: 26px; text-indent: 30px; margin: 0; }
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
.jYQysX .btn {
  border-radius: -1.5rem;
}
.tv-blue-background-block--semisize .tv-blue-background-block__text, .tv-blue-background-block--small .tv-blue-background-block__text {
  font-size: 17px;
  line-height: 1.8;
  color: #131722;
  text-align: center!important;
  font-size: 22px;

}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
  color: cyan;
  text-align-last: center;
}
.i-align_center {
  text-align: center!important;
}
.body{

  background-color: #17a2b8;
}
.btn{


  border-radius: 1.5rem;
}
.btn-primary {
  color: #f8f9fa;
  background-color: #dc3545;
border-color: #007bff;;

  :hover {
    color: yellow;
    cursor: pointer;
  }
}
.butt{



  margin: 0;
  margin-top: 10px;

  position: absolute;

  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}

.jumboo {
  background-color: cornflowerblue;
  background-size: 100% 100%;

  color: #efefef;




  position: relative;
  .jumbotron-fluid {
    padding-right: 0;
    padding-left: 0;
    border-radius: 0;
    background-color: cornflowerblue;
}

`;


 const Chart= () => (





//   <Styles>
//   <Jumbo fluid className="jumbo">
//     <div className="overlay"></div>
//     <Container>
      //   <div className="float-box-footer">
      // <h1>TradingView</h1>
      // <p className="tv-blue-background-block__text">Easy and intuitive for beginners, and powerful enough for advanced chartists – TradingView has all the charting tools you need to share and view trading ideas. Real-time data and browser-based charts let you do your research from anywhere, since there are no installations or complex setups.</p>

      // <p className="tv-blue-background-block__text i-align_center">TradingView is an advanced financial visualization platform with the ease of use of a modern website. Whether you are looking at basic price charts or plotting complex spread symbols with overlaid strategy backtesting, we have the tools and data you need.</p>

      // <p className="tv-blue-background-block__text i-align_center">TradingView is the most active social network for traders and investors. Talk to millions of traders from all over the world, discuss trading ideas, and place live orders.</p>


//       <NavLink to="/video" exact activeStyle={
//               { color:'green' }
//             }>
//                   <Button variant="primary">Learn more</Button>   </NavLink>


//     <Button type="submit">Button</Button>

//   <Button variant="primary">Primary</Button>
//   <Button variant="secondary">Secondary</Button>
//   <Button variant="success">Success</Button>
//   <Button variant="warning">Warning</Button>
//   <Button variant="danger">Danger</Button>
//   <Button variant="info">Info</Button>
//   <Button variant="light">Light</Button>
//   <Button variant="dark">Dark</Button>
//   <Button variant="link">Link</Button>
//   <Button href="#">Link</Button>
//       </div>
//     </Container>
//   </Jumbo>

// </Styles>
<Styles>
{/* <Jumbo>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbo> */}



<Jumbo fluid className="jumbo">



    <div className="float-box-footer">
      <h1>TradingView</h1>
      {/* <h1>
  <a href="#">
    Ten Ways to Have Yourself a Merry Little Christmas
  </a>
</h1> */}
      <p className="tv-blue-background-block__text">Easy and intuitive for beginners – TradingView has all the charting tools you need to share and view trading ideas. Real-time data and browser-based charts let you do your research from anywhere, since there are no installations or complex setups.</p>

      <p className="tv-blue-background-block__text i-align_center">TradingView is an advanced financial visualization platform with the ease of use of a modern website. Whether you are looking at basic price charts or plotting complex spread symbols with overlaid strategy backtesting, we have the tools and data you need.</p>

      <p className="tv-blue-background-block__text i-align_center">TradingView is the most active social network for traders and investors. Talk to millions of traders from all over the world, discuss trading ideas, and place live orders.</p>
</div>

  <p className="butt">
    <Button  href="https://in.tradingview.com/" variant="primary"  >Visit TradingView.com</Button>

    {/* <a href="https://www.w3schools.com/jsref/met_win_open.asp" onclick="window.open(this.href); return false;">This link will open in new window/tab</a> */}

  </p>
</Jumbo>





<Jumbo fluid className="jumboo">



    <div className="float-box-footer">
      <h1>Investing.com</h1>
      {/* <h1>
  <a href="#">
    Ten Ways to Have Yourself a Merry Little Christmas
  </a>
</h1> */}
      <p className="tv-blue-background-block__text">

Investing.com is a financial markets platform providing real-time data, quotes, charts, financial tools, breaking news and analysis across 250 exchanges around the world in 44 language editions. With more than 21 million monthly users, and over 180 million sessions, Investing.com is one of the top three global financial websites according to both SimilarWeb and Alexa.</p>

      <p className="tv-blue-background-block__text i-align_center">Real-Time charting tool that includes thousands of instruments: shares, indices, commodities, currencies, ETFs, bonds, and futures..</p>

      <p className="tv-blue-background-block__text i-align_center">It is second most active social network for traders and investors. Talk to millions of traders from all over the world, discuss trading ideas, and place live orders.</p>
</div>

  <p className="butt">
    <Button  href="https://in.investing.com/" variant="primary"  >Visit Investing.com</Button>

    {/* <a href="https://www.w3schools.com/jsref/met_win_open.asp" onclick="window.open(this.href); return false;">This link will open in new window/tab</a> */}

  </p>
</Jumbo>

</Styles>




)
export default Chart;
