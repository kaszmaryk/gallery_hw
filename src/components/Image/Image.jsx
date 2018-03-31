import React, {Component} from 'react';
import './Image.css';

class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false
        }
    }

    isLoad() {
        this.setState({
            isLoaded: true
        });
        
        this.props.onLoad();
    }

    render() {
        return ( 
            <img 
                id={"gallery-image_" + this.props.id} 
                src={this.props.src} 
                onLoad={this.isLoad.bind(this)}
                onError={this.props.onError}
                alt={this.props.alt} 
                className="gallery-image"
                style={{display: this.state.isLoaded ? "block" : "none"}} />
        );
    }
}

export default Image;