import React from 'react';
import './Login.css';
/**
 * App
 *
 * Simple react js fetch example
 */
class Api extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=AIzaSyDz3kYBmhu46LzSuIxrgU4NGa-wExqEq2U&type=channel&q=Stock%20Market%20%E0%A4%95%E0%A4%BE%20Commando&maxResults=17')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    items: json,

                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {



        return (
            <div>
        
            </div>
        );

    }

}

export default  Api;
