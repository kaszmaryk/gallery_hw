import React, { Component } from 'react';
import Images from './images';
import Gallery from './components/Gallery/Gallery';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: this.props.images
        }
    }

    render() {
        return ( 
            <div className = "" >
                <Gallery images={Images}/>
            </div>
        );
    }
}

export default App;
