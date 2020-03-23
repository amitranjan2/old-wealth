import React from 'react';
import './Search.css';
import Login from './Login';
import Video from './Video'
class Search extends React.Component {

  state = {
    isData: false,
    items: "",
    name: "",
    email: "",
    picture: ""
  };



      VideoList = e => {

        console.log(e +"amit");
        // fetch(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=AIzaSyDz3kYBmhu46LzSuIxrgU4NGa-wExqEq2U&type=channel&q=${e}&maxResults=3`)
        fetch(` https://www.googleapis.com/youtube/v3/search?key=AIzaSyDz3kYBmhu46LzSuIxrgU4NGa-wExqEq2U&channelId=${e}&part=snippet,id&maxResults=10&order=date`)
        .then(res => res.json())
        .then(json => {

            console.log(json.items.map(n=>n.id.videoId));
            const result=json.items.map(n=>'https://www.youtube.com/embed/'+n.id.videoId);
            this.setState({
                items: result

            })
            console.log(this.state.items);
        }).catch((err) => {
            console.log(err);
            alert('No Channel By That Name');

        });

       };
    onChange = e => {


     // this.props.searchMovie(e.target.value);
    };
    onSubmit = e => {

        e.preventDefault();
        const user = e.target.elements.searchText.value;
        if(user===''){
        alert('Channel name can not be blank ');
      return;
        }
        console.log(user);
// https://www.googleapis.com/youtube/v3/search?key={your_key_here}&channelId={channel_id_here}&part=snippet,id&order=date&maxResults=50


        fetch(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=AIzaSyDz3kYBmhu46LzSuIxrgU4NGa-wExqEq2U&type=channel&q=${user}&maxResults=3`)
            .then(res => res.json())
            .then(json => {
                //console.log(json);
             console.log(json.items[0].id.channelId);
             alert('Thanks . We will review and add your channel ');

             this.VideoList(json.items[0].id.channelId)
                this.setState({
                    //items: json,
                    isLoggedIn: true

                })
            }).catch((err) => {
                console.log(err);
                alert('No Channel By That Name');

            });



      };




    render() {


      return (


        <div className="jumbotron jumbotron-fluid mt-5 text-center">

          <div className="container">
            <h1 className="display-4 mb-3">
              <i className="fa fa-search" /> Search for your favorite youtube trading channel ..
            </h1>
            <form id="searchForm" onSubmit={this.onSubmit}>
              <input
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Search Movies, TV Series ..."
                onChange={this.onChange}
              />
              <button type="submit" className="btn btn-primary btn-bg mt-3">
                Add channel
              </button>
            </form>ee

          </div>
          

 {/* <iframe src="https://www.youtube.com/embed/2MpUj-Aua48?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=0"  width="560" height="315"  frameborder="0" allowfullscreen></iframe> */}
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/2qhCjgMKoN4?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in- picture" allowfullscreen style="position: absolute;top:0;left:0;opacity:0;" id="player"></iframe> */}




        </div>

      );
    }
  }

  export default Search;
