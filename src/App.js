import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Api from './components/Api';
import Search from './components/Search';
import { BrowserRouter as Router,Switch,Route,Redirect  }from 'react-router-dom';

import Navbody from './components/Navbody';
import Jumboo from './components/Jumbo';
import Footer from './components/Footer';
import Books from './components/Books';
import Movies from './components/Movies';
import Contact from './components/Contact';
import Results from './components/Learn';
import Apper from './components/Video';
import Learn from './components/Learn';

import Cardforchart from './components/Card';
import CardforBook from './components/CardforBook';



import TabComponent from './components/Tab';
import CreateBlog from './components/Create';
import LatContact from './components/Latestcontact';
import BlogPage from './components/Blogpage';
import gridExamplesPage from './components/Main';

import Main from './components/Main';
import FooterPage from './components/Blogpage';
import LandingPage from './components/Landpage';
// or

// import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button'

function App({ match }) {

// import { GoogleLogin } from 'react-google-login';


  return (
     <Router>
       <switch>


  <div className="App">

    <Navigation />


    <Route exact path="/">
    <TabComponent />
    <Main/>


    </Route>

    <Route exact path="/tradingblog">
  <LandingPage/>
    </Route>


    <Route path='/video' render={props =>

  <div>
{/* <Search /> */}

<Login/>
< Results />
    <Footer />

</div>
} />


    <Route path="/about">
      {/* <Login />
      <Search /> */}
      <LatContact />

    </Route>

    <Route exact path="/data">
 <CreateBlog/>
    </Route>

    <Route path="/Books">
    <CardforBook/>
    <Footer />
    </Route>
    <Route path="/learn">
      <Login/>
    {/* < Results />
    <Footer /> */}
    </Route>
    <Route path="/Chart">
    <Cardforchart/>
    <Footer />
    </Route>

    <Route path="/movie">
    <Movies />
    <Footer />
    </Route>
    <Route path="/lat">
  {/* <BlogPage/> */}
  <Main/>
    </Route>





</div>

</switch>
</Router>


  );
}
export default App;
