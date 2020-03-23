import React, { Component } from 'react'
import PostData from '../data/youtube.json'



class Check extends Component {
    constructor(props) {
        super(props);

        const people = [];

        for (let i = 0; i < 10; i++) {
            people.push({
                name: chance.first(),
                country: chance.country({ full: true })
            });
        }

        this.state = { people };
    }
  render () {



    return (
      <div >
        <h1>Hello There</h1>
        {PostData.map((item, index) => {
          return <div>
               <h1>{item.title}</h1>
               <iframe src="https://www.youtube.com/embed/2MpUj-Aua48?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=0"  width="560" height="315"  frameborder="0" allowfullscreen></iframe>

             {this.VideoList(item.title)}
             {console.log(this.items)}


            </div>
        })}
      </div>
    )
  }
}

export default Check;
