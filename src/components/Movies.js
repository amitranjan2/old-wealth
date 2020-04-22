
import React from 'react';



import {Card,CardGroup,ListGroupItem} from 'react-bootstrap'
import CardDeck from 'react-bootstrap/CardDeck'
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';

import ListGroup from 'react-bootstrap/ListGroup'
import Invest from '../assests/Invest.jpg';
import margincall from '../assests/margincall.jpg';
import bigshort from '../assests/bigshort.jpg';
import wolfofwall from '../assests/wolfofwall.jpg';
import wallstreet from '../assests/wallstreet.jpg';
import equity from '../assests/equity.jpg';
import tobigtofall from '../assests/tobigtofall.jpg';
import boiler from '../assests/boiler.jpg';
import insidejobs from '../assests/insidejobs.jpeg';

import rogue from '../assests/rogue.jpg';
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
    background-color: #223343;

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
    background-color: red;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
    color: white;
    font-weight: 600;
}


.btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    border: none;

    color: #ffffff !important;
    font-weight: 100;
    padding: 15x;
    text-transform: uppercase;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.3s ease 0s;


}
.card-footer {
    padding: .75rem 1.25rem;
    background-color: rgba(0,0,0,.03);
    border-top: 1px solid rgba(0,0,0,.125);
    background-color:#313146;
}

.btn-liquid {
	display: inline-block;
	position: relative;
	width: 240px;
	height: 60px;

	border-radius: 27px;

	color: #fff;
	font: 700 14px/60px "Droid Sans", sans-serif;
	letter-spacing: 0.05em;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
}

.btn-liquid .inner {
	position: relative;

	z-index: 2;
}

.btn-liquid canvas {
	position: absolute;
	top: -50px;
	right: -50px;
	bottom: -50px;
	left: -50px;

	z-index: 1;
}

@media (min-width: 978px) {

  .insidie{

    transition: transform .2s; /* Animation */


    display: flex;
    flex-direction: column;

    width:85%;position: relative;

margin:150px auto;


  }

}
.card {

  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  margin-left: 30px;

  margin-right: 38px;
  margin-bottom: 38px;
  background-color: aliceblue;
}

.btn-success {
    /* color: #fff; */
    background-color:
    border-color: #28a745;
    align-items: center;
}



`;



// const Styles = styled.div`
// .card-title {
//   margin-bottom: .75rem;
//   font-weight: 600;
// }

// .post-card {
//     -webkit-box-flex: 1;
//     -ms-flex: 1 1 300px;
//     flex: 1 1 300px;
//     -webkit-box-orient: vertical;
//     -webkit-box-direction: normal;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     overflow: hidden;
//     margin: 0 20px 40px;
//     min-height: 300px;
//     background: #fff 50%;
//     background-size: cover;
//     border-radius: 5px;
//     -webkit-box-shadow: rgba(39,44,49,.06) 8px 14px 38px, rgba(39,44,49,.03) 1px 3px 8px;
//     box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
//     -webkit-transition: all .5s ease;
//     transition: all .5s ease;
// }



// @media (min-width: 978px) {

//   .insidie{

//     transition: transform .2s; /* Animation */


//     display: flex;
//     flex-direction: column;

//     width:85%;
// margin:150px auto;

//   }

// }

// .inner{
// width: 50%;
// height: 50%;
// top: 25%;
// margin: 0 auto;
// position: relative;
// background:orange;
// }

// .card {
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   min-width: 0;
//   word-wrap: break-word;
//   background-color: #fff;
//   background-clip: border-box;
//   border: 1px solid rgba(0,0,0,.125);
//   border-radius: .25rem;
//   margin-left: 30px;
//   margin-bottom: auto;
//   margin-right: 38px;
// }

// .h1, h1 {
//   font-size: 1.25rem;
//   color: black;
// }


//   .card:hover {

//         cursor:pointer;
//     }
// .inside{
//  height:100%;
//   margin:0 auto;
//   overflow:hidden;
//   float:left;
//   background-color:#F8F9FB;

// }
// a {
//   color: black;
//   text-decoration: none;
//   background-color: transparent;
// }
// .h3, h3 {
//   font-size: 1.75rem;
//   text-align: -webkit-center;
//   color: black;
//   font-weight: bold;
// }
// .card-footer {
//   padding: .75rem 1.25rem;
//    background-color: white;
//   /* border-top: 1px solid rgba(0,0,0,.125); */
// }
// `;

/*.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  margin-left: 30px;
  margin-bottom: auto;
  margin-right: 38px;
}
*/






const Movies = () => (
    <Styles>


<div className="inside">
    <div className="insidie">
<CardGroup>
<Card >
    <Card.Img variant="top" src={bigshort} />
    <Card.Body>
      <Card.Title>The Big Short</Card.Title>
      <Card.Text>.

      Three separate but parallel stories of the U.S mortgage housing crisis of 2005 are told. Michael Burry, an eccentric ex-physician turned one-eyed Scion Capital hedge fund manager, has traded traditional office attire for shorts, bare feet and a Supercuts haircut. He believes that the US housing market is built on a bubble that will burst within the next few years. Autonomy within the company allows Burry to do largely as he pleases, so Burry proceeds to bet against the housing market with the bank
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      {/* <small className="text-muted">  <Button href="https://world4ufree.yt/film/the-big-short-6897/" variant="success">Watch online for free</Button></small> */}

      <small className="text-muted">    <a href="https://world4ufree.yt/film/the-big-short-6897/" target="_blank">
    <Button   variant="success">Watch online for free</Button>
                  </a></small>

    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={margincall} />
    <Card.Body>
      <Card.Title>Margin Call</Card.Title>
      <Card.Text>
      A respected financial company is downsizing and one of the victims is the risk management division head, who was working on a major analysis just when he was let go. His protégé completes the study late into the night and then frantically calls his colleagues in about the company's financial disaster he has discovered.{' '}

      </Card.Text>

    </Card.Body>
    <Card.Footer>
      {/* <small className="text-muted">   <Button href=" https://world4ufree.yt/watch/margin-call-702/?ep=30867"variant="success">Watch online for free</Button></small> */}

      <small className="text-muted">    <a href=" https://world4ufree.yt/watch/margin-call-702/?ep=30867" target="_blank">
    <Button   variant="success">Watch online for free</Button>
                  </a></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={wolfofwall} />
    <Card.Body>
      <Card.Title>The Wolf of Wall Street</Card.Title>
      <Card.Text>
      Jordan Belfort is a Long Island penny stockbroker who served 22 months in prison for defrauding investors in a massive 1990s securities scam that involved widespread corruption on Wall Street and in the corporate banking world, including shoe designer Steve Madden.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">    <a href="https://world4ufree.yt/film/the-wolf-of-wall-street-68/" target="_blank">
    <Button   variant="success">Watch online for free</Button>
                  </a></small>
    </Card.Footer>
  </Card>




</CardGroup>




<CardGroup>
<Card>
    <Card.Img variant="top" src={equity} />
    <Card.Body>
      <Card.Title>Equity</Card.Title>
      <Card.Text>
      Naomi Bishop is an investment banker determined to overcome a previous stain to her professional reputation, which is a challenge in the male dominated financial sector she works in. As Naomi in that spirit makes her move managing a burgeoning new tech IPO, she has to endure not only the condescension of her colleagues, but also her imperious client even as troubling new developments cloud the venture's future.
      </Card.Text>

    </Card.Body>
    <Card.Footer>
      {/* <small className="text-muted">   <Button href=" https://world4ufree.yt/film/equity-8102/"variant="success">Watch online for free</Button></small> */}

      <small className="text-muted">    <a  href=" https://world4ufree.yt/film/equity-8102/" target="_blank">
    <Button   variant="success">Watch online for free</Button>
                  </a></small>
    </Card.Footer>
  </Card>

<Card>
    <Card.Img variant="top" src={wallstreet} />
    <Card.Body>
      <Card.Title>Wall Street: Money Never Sleeps</Card.Title>
      <Card.Text>
      As the global economy teeters on the brink of disaster, a young Wall Street trader partners with disgraced former Wall Street corporate raider Gordon Gekko on a two-tiered mission: To alert the financial community to the coming doom, and to find out who was responsible for the death of the young trader's mentor.      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">    <a  href="https://world4ufree.yt/film/wall-street-money-never-sleeps-1097/"  target="_blank">
    <Button   variant="success">Watch online for free</Button>
                  </a></small>
    {/* <small className="text-muted">   <Button  href="https://world4ufree.yt/film/wall-street-money-never-sleeps-1097/" variant="success">Watch online for free</Button></small> */}
    </Card.Footer>
  </Card>



  <Card >
    <Card.Img variant="top" src={insidejobs} />
    <Card.Body>
      <Card.Title>Too Big to Fail</Card.Title>
      <Card.Text>
      Inside Job' provides a comprehensive analysis of the global financial crisis of 2008, which at a cost over $20 trillion, caused millions of people to lose their jobs and homes in the worst recession since the Great Depression, and nearly resulted in a global financial collapse.
       Through exhaustive research and extensive interviews with key financial insiders, politicians, journalists, and academics, the film traces the rise of a rogue industry which has corrupted politics, regulation, and academia.


        </Card.Text>
    </Card.Body>
    <Card.Footer>
      {/* <small className="text-muted">  <Button href="https://world4ufree.yt/film/inside-job-487/" variant="success">Watch online for free</Button></small> */}
      <small className="text-muted">    <a  href="https://world4ufree.yt/film/inside-job-487/"  target="_blank">
    <Button   variant="success">Watch online for free</Button>
                  </a></small>
    </Card.Footer>
  </Card>

</CardGroup>




<CardGroup>



  <Card >
    <Card.Img variant="top" src={tobigtofall} />
    <Card.Body>
      <Card.Title>Too Big to Fail</Card.Title>
      <Card.Text>.

      A close look behind the scenes, between late March and mid-October, 2008: we follow Richard Fuld's benighted attempt to save Lehman Brothers; conversations among Hank Paulson (the Secretary of the Treasury), Ben Bernanke (chair of the Federal Reserve), and Tim Geithner (president of the New York Fed) as they seek a private solution for Lehman's; and, back-channel negotiations among Paulson, Warren Buffet, investment bankers, a British regulator, and members of Congress as almost all work to save the U.S. economy.      </Card.Text>
    </Card.Body>
    <Card.Footer>
      {/* <small className="text-muted">  <Button href="https://world4ufree.yt/film/too-big-to-fail-17395/" variant="success">Watch online for free</Button></small> */}
      <small className="text-muted">    <a  href="https://world4ufree.yt/film/too-big-to-fail-17395/" target="_blank">
    <Button   variant="success">Watch online for free</Button>
                  </a></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={boiler} />
    <Card.Body>
      <Card.Title>Boiler Room</Card.Title>
      <Card.Text>
      Seth Davis is a college dropout running an illegal casino from his rented apartment. Driven by his domineering fathers disapproval at his illegitimate existence and his desire for serious wealth, Seth suddenly finds himself seduced by the opportunity to interview as a trainee stock broker from recent acquaintance Greg (Nicky Katt). Walking into the offices of JT Marlin, a small time brokerage firm on the outskirts of New York - Seth gets an aggressive cameo performance from Jay (Ben Affleck) that sets the tone for a firm clearly placing money above all else.      </Card.Text>
    </Card.Body>
    <Card.Footer>
    {/* <small className="text-muted">   <Button  href="https://world4ufree.yt/film/boiler-room-2323/" variant="success">Watch online for free</Button></small> */}

    <small className="text-muted">    <a  href="https://world4ufree.yt/film/boiler-room-2323/" target="_blank">
    <Button   variant="success">Watch online for free</Button>
                  </a></small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={rogue} />
    <Card.Body>
      <Card.Title>Rogue Trader (1999) -- Stock Trading True Story</Card.Title>
      <Card.Text>
      Based on the infamous Nick Leeson Book Rogue Trader, the film depicts how Leeson brought down Barings bank by taking huge risks in his role as a star trader for the firm.

This film shows you how little governance and risk management there was (and still is) at the top banks or in fact most banks.
</Card.Text>
 </Card.Body>
    <Card.Footer>
    {/* <small className="text-muted">   <Button  href="https://www.youtube.com/watch?v=SclDzvDWrds" variant="success">Watch online for free</Button></small> */}
    <small className="text-muted">    <a  href="https://www.youtube.com/watch?v=SclDzvDWrds"  target="_blank">
    <Button   variant="success">Watch online for free</Button>
                  </a></small>
    </Card.Footer>
  </Card>


</CardGroup>
</div>
  </div>
    </Styles>



  )
  export default Movies;
