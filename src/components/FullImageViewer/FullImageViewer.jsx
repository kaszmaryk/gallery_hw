import React, {Component} from 'react';
import './FullImageViewer.css';
import Spinner from '../Spinner/Spinner';

class FullImageViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            currentImage: this.props.images.filter((e) => {return e._id === this.props.id})[0],
            currentImageIndex: 0
        }
    }

    isLoad() {
        this.setState({
            isLoaded: true
        });
    }    

    nextImage() {
        let curIndex = this.props.images.indexOf(this.state.currentImage);
        curIndex++;
        if(curIndex < this.props.images.length) {
            console.log(curIndex, this.props.images[curIndex]);
            this.setState({
                currentImage: this.props.images[curIndex],
                currentImageIndex: curIndex
            });
        }
    }

    prevImage() {
        let curIndex = this.props.images.indexOf(this.state.currentImage);
        curIndex--;
        if(curIndex >= 0) {
            console.log(curIndex, this.props.images[curIndex]);
            this.setState({
                currentImage: this.props.images[curIndex],
                currentImageIndex: curIndex
            });
        }
    }

    render() {
        console.log(this.currentImage);
        return ( 
            <div className="full-image-overlay">
                <div className="full-image-container">
                    <div className="image-wrapper">
                        <img 
                            id={"full-image_" + this.state.currentImage._id} 
                            src={this.state.currentImage.src} 
                            onLoad={this.isLoad.bind(this)}
                            /*onError={this.props.onError}*/
                            alt={this.state.currentImage.alt} 
                            className="full-image"
                            style={{display: this.state.isLoaded ? "block" : "none"}} />
                        
                    </div>
                    <div className="description-wrapper">
                        <div className="close-button"
                            onClick={this.props.closeViewer}>
                            <i className="fas fa-times"></i>
                        </div>
                        <div className="description-text">
                            <p>{this.state.currentImage.alt}</p>
                        </div>
                        <div className="navigation-buttons">
                            <div className="prev-image" style={{display: this.state.currentImageIndex === 0 ? "none" : "block"}} onClick={this.prevImage.bind(this)}><i className="fas fa-chevron-left"></i></div>
                            <div className="next-image" style={{display: this.state.currentImageIndex >= this.props.images.length ? "none" : "block"}}  onClick={this.nextImage.bind(this)}><i className="fas fa-chevron-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FullImageViewer;