import React, {Component} from 'react';
import Image from '../Image/Image';
import Spinner from '../Spinner/Spinner';
import './ImageContainer.css';

class ImageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadStatus: "loading",
            showFullImage: false
        }
    }

    handleImageLoad() {
        this.setState({
            loadStatus: "loaded"
        });
    }

    handleImageError() {
        this.setState({
            loadStatus: "failed to load image"
        })
    }

    onClick() {
        console.log(this.props.id);
        this.props.getImage(this.props.id);
    }

    componentWillUpdate() {
        console.log(this.state.loadStatus, "will update")
    }

    componentDidUpdate() {
        console.log(this.state.loadStatus, "did update")
    }

    render() {
        let spinnerParam = this.state.loadStatus === "loading" ? "block" : "none";
        return ( 
            <div className = "gallery-image-container"
                onClick={this.onClick.bind(this)}>
                <Image 
                    id={"gallery-image_" + this.props.id} 
                    src={this.props.src} 
                    onLoad={this.handleImageLoad.bind(this)}
                    onError={this.handleImageError.bind(this)}
                    alt={this.props.alt} 
                    className="gallery-image" 
                    style={{display: !spinnerParam, transition: "2s"}} />
                <Spinner spinnerParam={spinnerParam} />
            </div>
        );
    }
}

export default ImageContainer;