import React from 'react';
import styled from 'styled-components';
// import './Login.css';

import investor from '../assests/investor.jpg';
import littlebook from '../assests/littlebook.jpg';
import essaybuffett from '../assests/essaybuffett.jpg';
import Random_Walk from '../assests/Random_Walk.jpg';
import Fastslow from '../assests/Fastslow.jpg';
import Oneuponwall from '../assests/Oneuponwall.jpg';
import investmentguide from '../assests/investmentguide.jpg';








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



.card-deck {
    display: flex;
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -17px;
    margin-bottom: 36px;
}
.h1, h1 {
  font-size: 1.25rem;
  color: black;
}


  .card:hover {
    -webkit-transform: scale(1.10);
      -ms-transform: scale(1.10);
      transform: scale(1.10);
        transition: .3s all ease-in-out;
        cursor:pointer;
    }
.inside{
 height:100%;
  margin:0 auto;
  overflow:hidden;
  float:left;
  background-color:#F8F9FB;

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
.card-footer {
  padding: .75rem 1.25rem;
   background-color: white;
  /* border-top: 1px solid rgba(0,0,0,.125); */
}
`;


function CardforBook() {




    // import { GoogleLogin } from 'react-google-login';


      return (


      <Styles>


<div className="inside">
    <div className="insidie">


    <h3>The  Best Stock Market Books for 2020</h3>

<CardDeck>

<Card>
<a href="http://e-reading-lib.com/bookreader.php/133361/The_Intelligent_Investor.pdf">

  <Card.Img variant="top" src={investor}/>
  <Card.Body>
    <Card.Title>"The Intelligent Investor"</Card.Title>
    <Card.Text>
    Before his death, "The Intelligent Investor" author Benjamin Graham was a renowned professor known as the godfather of investing, and Jason Zweig,
     The Wall Street Journal columnist, adds in some commentary in this revised edition. This book takes a different approach from other investing books,
      although it’s not without positive encouragement. It won’t tell you how to make millions, but rather how not to lose your shirt.
      The authors impart must-read basics to get you started in investing and keep you going for a long time, from recommended strategies and how to analyze stocks to a comprehensive history lesson on the stock market.
      Graham published the first edition of this book in 1949, and Buffett himself has called that version “the best book on investing ever written.”
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted"></small>
  </Card.Footer>
  </a>
</Card>
<Card >
<a href="https://mo.8freebooks.net/2019/10/er-2.html">

  <Card.Img variant="top" src={littlebook} />
  <Card.Body>
    <Card.Title>The Little Book of Common Sense Investing</Card.Title>
    <Card.Text>
    John C. Bogle is credited with creating the first-ever index fund, so he surely knew a good bit about investing.
    He was also the founder of Vanguard Group, and it was rumored that he and Buffett were the best of friends. Buffet even gave his endorsement to Bogle’s book, saying that “investors large and small” should read it.
    "The Little Book of Common Sense Investing: The Only Way to Guarantee Your Fair Share of Stock Market Returns" takes the surprising approach that for many investors,
    the stock market is a lose-lose proposition. Bogle then explains what he learned to turn the odds in his favor.
    This isn't his only book, but it’s the one that manages to cover his own personal innovative techniques and truths in a relatively short and easy read.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted"></small>
  </Card.Footer>
  </a>
</Card>


<Card>
<a href="https://www.8freebooks.net/download-one-up-on-wall-street-peter-lynch-pdf/">

  <Card.Img variant="top" src={investmentguide}/>
  <Card.Body>
    <Card.Title>The Only Investment Guide You’ll Ever Need</Card.Title>
    <Card.Text>
    This book has been around for over 40 years and for good reason. The Los Angeles Times says it “actually lives up to its name.” Don’t worry — it’s not antiquated with advice from the 70s.
    It was recently updated in 2016 to keep pace with the current economy and trends. Andrew Tobias doesn’t just address the wealthy investor. He offers tips and guidance for those with more limited capital, and he does it in a frank, easy-to-understand, and often humorous language.
     He dedicates the book to his broker, who, he says, “from time to time made me just that.” This book has helped educate over 1 million readers to date.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted"></small>
  </Card.Footer>
  </a>
</Card>





</CardDeck>



<CardDeck>

<Card >
<a href="http://sysengr.engr.arizona.edu/OLLI/lousyDecisionMaking/KahnemanThinkingFast&Slow.pdf">

  <Card.Img variant="top" src={Fastslow} />
  <Card.Body>
    <Card.Title>Thinking, Fast and Slow</Card.Title>
    <Card.Text>
    Daniel Kahneman knows a thing or two about thinking — he’s a psychology professor at Princeton University and knows a lot about finances, having won the 2002 Nobel Prize in Economic Sciences.
    His New York Times bestseller, "Thinking, Fast and Slow," delves into how your thought processes can affect your success in investing. Everyone harbors their own little biases, sometimes subconsciously.
     Kahneman explains how to identify your own and lock them away so you can make investment decisions without their input, thinking clearly, rationally, and analytically. Note that this book isn’t just about investing, although that’s its focus.
    Kahneman also explains how biases can affect our everyday lives and other financial decisions
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted"></small>
  </Card.Footer>
  </a>
</Card>

<Card>
<a href="https://mo.8freebooks.net/2019/11/jkpl.html">

  <Card.Img variant="top" src={Oneuponwall} />
  <Card.Body>
    <Card.Title>One Up On Wall Street</Card.Title>
    <Card.Text>
    "One Up On Wall Street: How to Use What You Already Know to Make Money in the Market" throws down a challenge flag to beat the beast.
     Author Peter Lynch says it’s not only possible for newbie investors to do as well as — if not better than — the pros, but he maintains they already have everything it takes right at their fingertips.
      Lynch believes that solid investment opportunities are everywhere. They litter the ground at our feet and we just have to stop walking so fast, pause in our everyday lives, and bend down to inspect the clutter so we can pluck out the most viable options.
       In doing so, we can beat the pros to the punchline and get in on an investment before the rest of the world realizes its potential.
    The New York Times says Lynch, a renowned investor in his own right, is “in a league by himself.”
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted"></small>
  </Card.Footer>
  </a>
</Card>
<Card>
<a href="https://epdf.pub/queue/the-essays-of-warren-buffett-lessons-for-corporate-america.html#">

  <Card.Img variant="top" src={essaybuffett} />
  <Card.Body>
    <Card.Title>The Essays of Warren Buffett</Card.Title>
    <Card.Text>
    The fourth edition of "The Essays of Warren Buffett: Lessons for Corporate America" was released in 2015, and it’s a worthy read for learning from the very best.
    You’d be hard-pressed to name a more successful investor than Buffett, and he’s taken the time to share what he knows and has learned on the subject over the years.
     The title addresses “corporate America,” but you can take that to include shareholders. The book offers an excellent explanation of the relationship between corporations and their shareholders, which makes it ideal for those new to investing.
    Plus, this collection of essays spans more than 50 years.
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
    export default CardforBook;
