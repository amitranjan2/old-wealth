import React, { useState } from 'react'
import Result from './Result'
import data from '../data/youtube'
import {Col,Row, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table,Dropdown} from 'react-bootstrap';

const Styles = styled.div`
.videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
}
.videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

}
.m {

    color:red;
}
.tv-blue-background-block__text {
    font-size: 24px;
    margin-bottom: 12px;


    line-height: 1.8;
    color: #131722;
    font-size: 22px;
    text-align: center!important;

    color:black;
    font-weight: bold;
  }
.ccc{


    font-size: 24px;
    margin-bottom: 12px;


    line-height: 1.8;
    color: #131722;
    font-size: 22px;
    text-align: center!important;

    color:blue;
    font-weight: bold;
}

`;



const Results =()=> (
    <Styles>

{/*
{data.map(r => (





    <div>
    <Button variant="outline-success" href={r.body}><h1>{r.id}</h1></Button>

    <div class="videoWrapper">

 <iframe src={r.title} frameborder="0" allowfullscreen> </iframe>
 </div>


</div>


        ))}
*/}

<h1 className="ccc">Here,you will find the list of best youtue recommended channel for investing and trading</h1>


{data.map((item, index) => {
        return ( <div>

            <p className="tv-blue-background-block__text"> Please visit respective channel for more content

           <br></br>
            <Button variant="outline-success" href={item.body}><h1>{item.id}</h1></Button></p>
            { item.title.map((c, i) => <div class="videoWrapper">
                <iframe src={c} frameborder="0" allowfullscreen> </iframe>

            </div>)}
          </div>
        )
      })
    }


  </Styles>

)

export default Results
