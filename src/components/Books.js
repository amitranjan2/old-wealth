
import React ,{useState}from 'react';
import ReactDOM from 'react-dom';


import {Card,ListGroup} from 'react-bootstrap'
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
import { BrowserRouter as Router,Switch,Route  }from 'react-router-dom';
// or
// import { GoogleLogin } from 'react-google-login';

import styled from 'styled-components';

const Styles = styled.div`
  .card-header {
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0,0,0,.03);
    border-bottom: 1px solid rgba(0,0,0,.125);
  background-color: cadetblue
}

a:hover {
  color: blue;
  text-decoration: none;

  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);

  box-shadow: inset 0 0 0 25px #53a7ea;
}
a{


  color:white;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;

}
.h3, h3 {
    font-size: 1.75rem;
    text-align: -webkit-center;
    color: black;
    font-weight: bold;
}
.h5, h5 {
    font-size: 1.25rem;
    color: black;
}



`;


const Books = () => (
    <Styles>
     <Card>

  <Card.Header >

    <Nav variant="pills" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="https://www.thebalance.com/top-warren-buffett-books-and-resources-358163">Warren Buffett Books</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://www.thebalance.com/essential-trading-psychology-books-1031445">Trading Psychology Books</Nav.Link>
      </Nav.Item>

      <Nav.Item>

        <Nav.Link href="https://www.thebalance.com/day-trading-tips-for-beginners-on-getting-started-4047240">Day Trading Tips for Beginners</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://www.investopedia.com/articles/personal-finance/090916/top-5-books-learn-technical-analysis.asp">Books to Learn Technical Analysis</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>

  <h3>The 9 Best Stock Market Books of 2020</h3>

  <Card.Body>
    <Card.Title>Best Overall: The Intelligent Investor</Card.Title>
    <Card.Text>
    Before his death, "The Intelligent Investor" author Benjamin Graham was a renowned professor known as the godfather of investing, and Jason Zweig, The Wall Street Journal columnist, adds in some commentary in this revised edition.

This book takes a different approach from other investing books, although it’s not without positive encouragement. It won’t tell you how to make millions, but rather how not to lose your shirt. The authors impart must-read basics to get you started in investing and keep you going for a long time, from recommended strategies and how to analyze stocks to a comprehensive history lesson on the stock market.

Graham published the first edition of this book in 1949, and Buffett himself has called that version “the best book on investing ever written.”
    </Card.Text>


    <Card.Title>Runner-Up, Best Overall: The Little Book of Common Sense Investing</Card.Title>
    <Card.Text>
    John C. Bogle is credited with creating the first-ever index fund, so he surely knew a good bit about investing. He was also the founder of Vanguard Group, and it was rumored that he and Buffett were the best of friends. Buffet even gave his endorsement to Bogle’s book, saying that “investors large and small” should read it.

"The Little Book of Common Sense Investing: The Only Way to Guarantee Your Fair Share of Stock Market Returns" takes the surprising approach that for many investors, the stock market is a lose-lose proposition. Bogle then explains what he learned to turn the odds in his favor. This isn't his only book, but it’s the one that manages to cover his own personal innovative techniques and truths in a relatively short and easy read.
    </Card.Text>

  <Card.Title>Best Essay Collection: The Essays of Warren Buffett</Card.Title>
    <Card.Text>
    The fourth edition of "The Essays of Warren Buffett: Lessons for Corporate America" was released in 2015, and it’s a worthy read for learning from the very best. You’d be hard-pressed to name a more successful investor than Buffett, and he’s taken the time to share what he knows and has learned on the subject over the years.

The title addresses “corporate America,” but you can take that to include shareholders. The book offers an excellent explanation of the relationship between corporations and their shareholders, which makes it ideal for those new to investing. Plus, this collection of essays spans more than 50 years.
    </Card.Text>

    <Card.Title>Best for Beginners: A Random Walk Down Wall Street</Card.Title>
    <Card.Text>
    Investing doesn’t necessarily mean you devote hours on managing a broad-based, extensive portfolio, and Burton Malkiel knows that. "A Random Walk Down Wall Street" is invaluable reading for those who are trying to get a handle on their first 401(k)s. First, you have to learn to talk the talk, or at least understand what’s being said when someone else speaks it.

Malkiel’s book includes some handy definitions of investment terms, and it applies them to various investment strategies geared toward different stages in life. He emphasizes long-term investments rather than get-rich-quick schemes, and how to predict prices and avoid common mistakes. This is a revised edition of a book that’s been around for a while. "A Random Walk" has sold more than 1.5 million copies to date
    </Card.Text>


    <Card.Title>Best Psychological: Thinking, Fast and Slow</Card.Title>
    <Card.Text>
    Daniel Kahneman knows a thing or two about thinking — he’s a psychology professor at Princeton University and knows a lot about finances, having won the 2002 Nobel Prize in Economic Sciences.

His New York Times bestseller, "Thinking, Fast and Slow," delves into how your thought processes can affect your success in investing. Everyone harbors their own little biases, sometimes subconsciously. Kahneman explains how to identify your own and lock them away so you can make investment decisions without their input, thinking clearly, rationally, and analytically. Note that this book isn’t just about investing, although that’s its focus. Kahneman also explains how biases can affect our everyday lives and other financial decisions.
    </Card.Text>


    <Card.Title>Best Skill-Building: One Up on Wall Street</Card.Title>
    <Card.Text>
    "One Up On Wall Street: How to Use What You Already Know to Make Money in the Market" throws down a challenge flag to beat the beast. Author Peter Lynch says it’s not only possible for newbie investors to do as well as — if not better than — the pros, but he maintains they already have everything it takes right at their fingertips.

Lynch believes that solid investment opportunities are everywhere. They litter the ground at our feet and we just have to stop walking so fast, pause in our everyday lives, and bend down to inspect the clutter so we can pluck out the most viable options. In doing so, we can beat the pros to the punchline and get in on an investment before the rest of the world realizes its potential.

"One Up on Wall Street" has sold more than 1 million copies since its release in 2000. The New York Times says Lynch, a renowned investor in his own right, is “in a league by himself.”
    </Card.Text>




    <Card.Title>Best for Inspiration: Principles: Life and Work</Card.Title>
    <Card.Text>
    This No. 1 New York Times bestseller is written by one of Time magazine’s 100 most influential people in the world. An average, middle-class kid who grew up in Long Island, Ray Dalio began his investment firm in his New York apartment. Forty years later, Fortune named his company, Bridgewater Associates, one of the five most important in the U.S.

"Principles: Life and Work" is part autobiography, part instructional. Dalio shares his secrets and insights and explains how businesses, individuals, and organizations can adopt them, including a set of rules for applying them to investing, life, your business, and your finances in general.
    </Card.Text>



    <Card.Title>Best Classic: The Only Investment Guide You’ll Ever Need</Card.Title>
    <Card.Text>
    This book has been around for over 40 years and for good reason. The Los Angeles Times says it “actually lives up to its name.” Don’t worry — it’s not antiquated with advice from the 70s. It was recently updated in 2016 to keep pace with the current economy and trends.

Andrew Tobias doesn’t just address the wealthy investor. He offers tips and guidance for those with more limited capital, and he does it in a frank, easy-to-understand, and often humorous language. He dedicates the book to his broker, who, he says, “from time to time made me just that.” This book has helped educate over 1 million readers to date.
    </Card.Text>
    </Card.Body>





</Card>


    </Styles>



  )
  export default Books;
