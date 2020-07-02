import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import TabPrices from './tabs_nav/TabPrices';
import  Login from './Login.js';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
// Tabs Content
// import TabContentOne from './TabContentOne';
// import TabContentTwo from './TabContentTwo';
// import TabContentThree from './TabContentThree';

 import '../css/TabsNav.css';

class TabComponent extends Component {
  state = {
    tabIndex: 5
  };
  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >

                  <TabList className="tab-nav-container">
                  <NavLink className="lg" to="/video" exact activeStyle={
              { color:'green' }
            }>  <Tab

            >
              <TabDoor />
              <p  className="lgScreen" style={{ marginBottom: '1.875rem' }}>
                <strong>
                  Youtube Channels
                  <br />
                  Recommended for Trading and Investing
                </strong>
              </p>
              <span className="mdScreen" style={{ marginTop: '0.4rem' }}>
              Youtube Channels
              </span>
            </Tab>
           </NavLink>
           <NavLink className="lg" to="/movie" exact activeStyle={
              { color:'green' }
            }>  <Tab
              className={`${
                this.state.tabIndex === 1 ? 'tab-selected active' : null
              }`}
            >
              <TabDevices />
              <p href="/Books" className="lgScreen" style={{ marginTop: '-5.3125rem' }}>
                <strong>Watch Movies (Stock market) </strong>
              </p>
              <span className="mdScreen" style={{ marginTop: '-5.3125rem' }}>
                Movies<br></br>
                Stock Related

              </span>
            </Tab> </NavLink>

            <NavLink className="lg" to="/Books" exact activeStyle={
              { color:'green' }
            }><Tab
              className={`${
                this.state.tabIndex === 2 ? 'tab-selected active' : null
              }`}
            >
              <TabPrices />
              <p className="lgScreen">
                <strong>Investing Books</strong>
              </p>
              <span className="mdScreen">Books</span>
            </Tab></NavLink>
          </TabList>
          {/* Tabs Content */}
         {/* <TabPanel>
            <TabContentOne />
          </TabPanel> */}
          {/* <TabPanel>
            <Login />
          </TabPanel> */}
          {/* <TabPanel>
            <TabContentThree />
          </TabPanel> */}
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
