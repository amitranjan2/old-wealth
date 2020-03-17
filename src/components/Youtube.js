import React, { Component } from 'react'
import PostData from '../data/youtube.json'



class PostList extends Component {
    state = {
        isData: false,
        userID: "",
        name: "",
        email: "",
        picture: "",
        items:[]
      };
    VideoList = e => {

        console.log(e +"amit");
        // fetch(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=AIzaSyDz3kYBmhu46LzSuIxrgU4NGa-wExqEq2U&type=channel&q=${e}&maxResults=3`)
        fetch(` https://www.googleapis.com/youtube/v3/search?key=AIzaSyDz3kYBmhu46LzSuIxrgU4NGa-wExqEq2U&channelId=${e}&part=snippet,id&maxResults=10&order=date`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json,

            })
            console.log(json);

        }).catch((err) => {
            console.log(err);
            alert('No Channel By That Name');

        });

       };
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

export default PostList
