import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import chart from '../assests/chart.jpg';
import amit from '../assests/myphoto.jpeg';
import Button from 'react-bootstrap/Button'
import { Navbar, Nav, NavDropdown, Form,  FormControl, Table,Row,Col,Card,CardDeck} from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
// import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table,Dropdown,Card,CardDeck} from 'react-bootstrap';

import Image from 'react-bootstrap/Image'

const Styles = styled.div`
  .jumbo {

    background-size: 100% 100%;
    min-height: -webkit-fill-available;






    position: abosulet;
  }

  .overlay {

    opacity: 0.6;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;


    position: relative;
  }
  @media only screen and (max-width: 767px) {

    h1 {
      font-size: 2em;
    }

    h2 {
       font-size: 2em;
    }

 }
 .tv-blue-background-block__text {
  font-size: 14px;
  margin-bottom: 12px;


  line-height: 1.8;
  color: black;
  font-size: 22px;



}


.butt{



  margin: 0;
  margin-top: 10px;

  position: relative;

}
@media (min-width: 576px){
.blue {
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
  color: black;
  color: #335eea!important;

}
}
.img{



    object-position:50% 50%;
    width:702px;
    height:397px;
    object-fit:cover;
  }
  .container{


    // display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.centered-div{

    margin: 10px;
    padding:5px;
    float:left;

}
.img-fluid {
    max-width: 100%;
    height: auto;
    margin-top: 39px;
}
.fss{
    // display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left: 37px;
}
.sidebar{
    float: left;
}
.right{
     float: right;
     padding:5px;
}
.col {
    height: 300px;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    background-color: black;

    position: relative;

    left: 0;
    right: 0;
    margin: auto;

}




@media (max-width: 576px){
.col{      height: 70vh;

    max-width: 100%;
    background-color: black;
    margin-left: 10px;
    margin-right: 10px


    }
    }



}
.tv-blue {
    font-size: 14px;
    margin-bottom: 12px;


    line-height: 1.8;
    color: white;
    font-size: 22px;
    font-family: lulo-clean-w01-one-bold, sans-serif;


  }

}
.tv {
    font-size: 14px;
    margin-bottom: 12px;
    font-family:lulo-clean-w01-one-bold, sans-serif;

    line-height: 1.8;
    color: yellow;
    font-size: 3rem;
    text-align: center!important;

    font-weight: bold;
  }
  .span{

    color:rgb(213, 216, 224); font-family:lulo-clean-w01-one-bold,sans-serif;
  }
.cen{
    left:0;
    right:0;
}

`;


 const LatContact= () => (

// </Styles>
<Styles>




{/* <img className="comp-k8z10l82imgimage" style="object-position:50% 50%;width:702px;height:397px;object-fit:cover" alt="359667.jpg" data-type="image" itemprop="image" src="https://static.wixstatic.com/media/7da331_83bb8e0d4e0e4ebc853d0c4c8e64578b~mv2.jpg/v1/fill/w_702,h_397,al_c,q_80,usm_0.66_1.00_0.01/359667.webp"> */}
{/* <div className="cont">


<h1>HEY! GLAD YOU'RE HERE.<br></br> A LITTLE ABOUT ME...</h1>
<Image className="img"src="https://static.wixstatic.com/media/7da331_83bb8e0d4e0e4ebc853d0c4c8e64578b~mv2.jpg/v1/fill/w_702,h_397,al_c,q_80,usm_0.66_1.00_0.01/359667.webp" fluid />
</div> */}

<div class="container">

    <div class="centered-div">

    <Image src="https://static.wixstatic.com/media/7da331_83bb8e0d4e0e4ebc853d0c4c8e64578b~mv2.jpg/v1/fill/w_702,h_397,al_c,q_80,usm_0.66_1.00_0.01/359667.webp" fluid />

    <div class="sidebar"><h1 className="blue">HEY! GLAD YOU'RE HERE.<br></br> A LITTLE ABOUT ME...</h1></div>
    </div>
</div>

<div class="fss">

    <div class="centered-div">

    <Image src={amit} fluid />

    <div class="right">      <p className="tv-blue-background-block__text"> My name is Amit Ranjan. I am a final year Computer Science and Engineering Student at the Indian Institute of Technology Patna (IIT P). </p>


    <p className="tv-blue-background-block__text i-align_center">I started my journey of Engineering in 2016 and developed deep interest in software development. Due to my interest in stock market I built this platform to help beginners ,student and many more to start their journey in stock market </p>

</div>
    </div>
</div>
<Container>
  <Row>
    <Col>


    <p className="tv">    EXPERIENCE..</p>
    <p className="tv-blue">
BIZONGO | SOFTWARE ENGINEERING INTERN<br></br>
 May 2019 – July 2019 | Mumbai, India  <br></br>
• Integrated Google Login(Domain: bizongo.com only) ,Sign Up and Single Sign

On into their four different apps using React Js, Ruby on Rails, OAUTH<br></br>
• Written API to fetch details from darwinapi to assign roles to employees.



</p>



</Col>

  </Row>

</Container>
<div className="centered-div">

<p className="tv">    Programming Skills..</p> <br></br>
<h2>

C • C++ • Javascript• CSS • PHP

• Ruby on Rails,•React Js,•NodeJs,•MongoDb • API<br></br>Data Structure and Algorithms <br></br>Assembly
Database • MySQL</h2>
</div>



<div class="container">

    <div class="centered-div">


    <Image src="https://static.wixstatic.com/media/7da331_2559bb8f26cd48b2b3bc7a08a6cbedee~mv2.png/v1/fill/w_541,h_302,al_c,q_85/minions_PNG55.webp" fluid />

    <svg preserveAspectRatio="xMidYMid meet" data-bbox="52.354 33.001 95.291 134" viewBox="52.354 33.001 95.291 134" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">
    <g>
        <path d="M139.587 133.549c-1.225-.123-2.495.057-3.692-.168-4.59-.865-9.086-.469-13.628.461-4.536.929-8.807 2.377-12.686 4.9-.387.252-.864.37-1.299.55-.14-.408-.506-.902-.385-1.209 1.877-4.77 1.824-9.758 1.965-14.756.024-.86.222-1.714.467-2.568-.403.106-.834.09-1.231-.042-.511 2.809-.857 5.66-1.145 8.496-.494 4.865-1.637 9.512-3.887 13.843-3.711 7.143-9.78 11.714-17.133 14.777-1.375.573-2.833.953-4.252 1.422.719-1.087 1.578-2.108 2.137-3.27 3.874-8.062 4.333-16.609 3.509-25.309-.071-.745-.478-1.48-.828-2.171-.4-.791-1.083-1.359-1.642-.23-1.923 3.888-4.063 7.715-5.52 11.775-2.118 5.902-1.592 11.98.208 17.905.417 1.373.82 2.474-.856 2.973-3.915 1.166-7.848 2.283-11.813 3.266-1.399.347-2.117-.243-1.326-1.805 1.613-3.185 3.484-6.292 4.665-9.633 3.444-9.74 2.841-19.257-2.475-28.302-.298-.507-.872-.857-1.318-1.28-.341.489-.865.936-.994 1.475-1.605 6.678-2.915 13.332-1.963 20.322.649 4.763.723 9.659.478 14.466-.208 4.085-1.876 5.222-6.094 5.404-1.715.074-3.454-.08-5.141.158-.522.074-.906 1.097-1.354 1.685.561.107 1.122.302 1.685.306 7.437.049 14.867.066 21.914-2.86 1.15-.478 2.438-.622 3.633-1.009 9.154-2.969 17.714-6.912 23.457-15.003 1.564-2.204 2.979-3.281 5.803-2.11 1.141.473 2.769-.067 4.146-.305 1.861-.321 3.675-.981 5.543-1.173 8.144-.839 14.652-5.582 21.8-8.788.398-.178.677-1.041.639-1.558-.016-.254-.88-.584-1.387-.635z" fill="#D0926E" data-color="1"></path>
        <path d="M130.068 81.541c.945-.08 1.904.005 2.854-.043 5.851-.294 12.658-5.386 14.467-10.508.762-2.156-.262-3.185-1.955-3.287-1.624-.097-3.443.359-4.928 1.074-4.53 2.179-8.932 4.618-13.412 6.903-.495.252-1.169.161-1.76.229.137-.689.043-1.581.45-2.033 2.105-2.335 4.345-4.552 6.526-6.822 3.12-3.247 5.349-6.975 5.367-11.546.005-1.324-.734-3.136-1.757-3.829-.855-.58-2.735-.123-3.945.382-.906.378-1.573 1.496-2.161 2.402-1.359 2.094-2.578 4.276-3.904 6.393-1.822 2.91-3.628 5.835-5.585 8.655-.482.695-1.524 1.013-2.309 1.505.114-.842.114-1.718.361-2.52 1.647-5.353 3.451-10.662 4.956-16.053.379-1.357.138-3.052-.328-4.424-.622-1.832-2.066-1.898-2.875-.073-1.128 2.549-1.963 5.249-2.673 7.949-1.062 4.041-1.844 8.153-2.882 12.201-.296 1.154-1.036 2.206-1.664 3.251-.056.093-1.085-.124-1.148-.342-.166-.577-.141-1.249-.034-1.855 1.698-9.569 1.973-19.232 1.727-28.902-.052-2.066-1.089-4.133-1.818-6.148-.588-1.624-2.02-1.23-2.468-.221-.988 2.225-1.961 4.616-2.136 6.997-.331 4.511-.096 9.062-.096 13.596h.144c0 4.845.048 9.69-.048 14.533-.016.802-.662 1.592-1.016 2.387-.663-.722-1.359-1.419-1.969-2.182-.162-.203-.025-.616-.091-.919-1.568-7.27-3.032-14.564-4.792-21.788-.496-2.037-1.54-4.134-2.9-5.735-2.718-3.198-5.273-2.529-6.383 1.481-.953 3.44-.451 6.707 1.137 9.967 2.449 5.029 4.665 10.172 6.852 15.32.441 1.038.31 2.312.443 3.478-1.042-.766-2.448-1.323-3.048-2.343-1.156-1.966-1.917-4.17-2.733-6.316-1.682-4.424-3.569-8.63-8.238-10.893-2.745-1.33-5.388-.73-6.872 1.832-1.606 2.772-1.078 5.344 2.132 8.263 4.416 4.014 8.776 8.038 12.344 12.856 1.084 1.464 2.506 2.998 1.273 4.467-.661.788-2.862.335-4.371.399-.297.012-.598-.238-.906-.263-5.188-.408-10.373-.92-15.57-1.149-3.094-.136-5.963.829-8.137 3.182-2.211 2.392-1.887 4.669 1.049 5.901 1.52.637 3.344.979 4.984.854 5.495-.418 10.967-1.13 16.453-1.675 1.254-.125 2.532-.081 3.792-.006.288.017.645.442.782.759.069.16-.224.634-.455.731-1.293.544-2.649.946-3.923 1.525-4.567 2.072-9.182 4.06-13.618 6.379-1.399.732-2.438 2.31-3.365 3.682-.585.866-.592 1.913.968 2.314 3.895 1.001 7.777 1.516 11.459-.501 3.585-1.964 7.022-4.191 10.572-6.22.609-.348 1.458-.288 2.195-.416-.165.836-.237 1.706-.528 2.498-.205.558-.651 1.065-1.086 1.502-2.076 2.085-4.452 3.938-6.22 6.248-2.931 3.829-5.776 7.813-6.8 12.644-.233 1.097-.048 3.148.509 3.368 1.32.522 3.354.786 4.425.112 2.203-1.388 4.236-3.251 5.845-5.297 2.601-3.307 4.779-6.936 7.199-10.386.352-.501 1.056-.762 1.598-1.134-.017.595.084 1.222-.071 1.78-1.041 3.729-2.363 7.399-3.123 11.18-.411 2.043-.347 4.419.318 6.375.958 2.818 4.031 3.042 5.302.379 1.25-2.62 1.944-5.567 2.462-8.444.852-4.726 1.34-9.516 2.056-14.268.074-.49.652-.906.996-1.356.355.425.933.806 1.028 1.282.513 2.572.866 5.174 1.352 7.752.277 1.472.357 2.897.263 4.336.241 1.858.424 3.724 1.036 5.507.101.295.13.57.103.82l1.572 3.299c.067.142.14.281.21.421.901 1.818 2.135 3.101 4.427 2.751 2.052-.313 3.927-2.119 4.042-4.577.123-2.617.027-5.311-.483-7.872-.753-3.786-2.012-7.472-2.932-11.23-.248-1.013-.047-2.132-.052-3.202.899.737 1.852 1.421 2.674 2.235.426.422.553 1.122.928 1.613 1.515 1.984 2.88 4.131 4.663 5.851 2.521 2.431 8.06 2.976 9.607 1.27 2.011-2.218.931-6.806-2.331-9.488-1.943-1.598-4.103-2.949-5.968-4.625-1.204-1.082-2.051-2.552-3.058-3.848 1.557.154 3.122.26 4.67.476 1.385.194 2.743.622 4.131.75 3.898.358 7.131-1.082 9.499-4.075.632-.798.881-2.327.561-3.275-.226-.67-1.695-1.267-2.635-1.307-3.8-.162-7.61-.049-11.415-.138-1.497-.035-2.988-.332-4.482-.51.954-1.99 2.852-2.096 4.694-2.252zm-23.571 9.244c-3.537.054-5.675-3.137-5.515-8.486.03-1.011.339-2.595 1.003-2.904 2.672-1.243 5.473-2.364 8.347-2.988 1.994-.433 5.171 4.157 5.179 6.965.014 4.488-3.44 7.329-9.014 7.413z" fill="#DFE5D2" data-color="2"></path>
        <path d="M111.671 83.272c-.041 2.197-1.675 3.882-3.674 3.787-1.846-.088-3.188-2.007-3.166-4.415.018-2.007.99-2.61 2.976-2.526 3.325.14 3.914.495 3.864 3.154z" fill="#D0926E" data-color="1"></path>
    </g>
</svg> <div class="sidebar"><h1>That's All, Thanks ...</h1></div>

<p className="butt">
    <Button  href="https://www.linkedin.com/in/amit-ranjan-b98b67161/" variant="warning" >Visit Linkedin</Button>

    {/* <a href="https://www.w3schools.com/jsref/met_win_open.asp" onclick="window.open(this.href); return false;">This link will open in new window/tab</a> */}

  </p>
  <br></br>

    </div>

</div>


</Styles>



)
export default LatContact;
