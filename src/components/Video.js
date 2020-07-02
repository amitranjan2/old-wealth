import React, { useState } from 'react'


import Search from './Searchn'
import Results from './Results'


function Apper({result}) {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: ""
  });





  const searc = (e) => {

    // console.log(.s);
    fetch(` https://www.googleapis.com/youtube/v3/search?key=AIzaSyDz3kYBmhu46LzSuIxrgU4NGa-wExqEq2U&channelId=${e}&part=snippet,id&maxResults=5&order=date`)
    .then(res => res.json())
    .then(json => {

        console.log(json.items.map(n=>n.id.videoId));
        const result=json.items.map(n=>'https://www.youtube.com/embed/'+n.id.videoId);
        alert('Thanks . We will review and add your channel within next 24 hours. Please wait for a moment and make sure the  video on this  page appears is right match ');

        setState(prevState => {
          return { ...prevState, results: result }
        })

      //  console.log(state.results);
    }).catch((err) => {
        console.log(err);
        alert('No Channel By That Name');

    });






  }







  const search = (e) => {
    if (e.key === "Enter") {





      fetch(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=AIzaSyDz3kYBmhu46LzSuIxrgU4NGa-wExqEq2U&type=channel&q=${state.s}&maxResults=3`)
      .then(res =>  res.json())
      .then(json => {
          //console.log(json);
      //  console.log(json.id.channelIdjson.items[0]);

       let se = json.items[0].id.channelId;
       searc(json.items[0].id.channelId)
       setState(prevState => {
        return { ...prevState, selected: se }
      });
      }).catch((err) => {
          console.log(err);
          alert('No Channel By That Name');

      });



      // axios(apiurl + "&s=" + state.s).then(({ data }) => {
      //   let results = data.Search;


      // });

    }
  }

  const handleInput = (e) => {










    let s = e.target.value;
  console.log(s);

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }





  return (
    <div className="App">
      <header>
{result}
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results}  />


      </main>
    </div>
  );
}

export default Apper;
