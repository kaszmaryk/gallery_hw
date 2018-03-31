import React, {Component} from 'react';
import ImageContainer from '../ImageContainer/ImageContainer';
import FullImageViewer from '../FullImageViewer/FullImageViewer';
import './Gallery.css';

class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: this.props.images,
            showFullImage: false,
            fullImageId: 0
        }
    }

    showFullImage = (fullImageId) => {
        console.log('click-image', fullImageId);
        if(!this.state.showFullImage) {
            this.setState({
                fullImageId: fullImageId,
                showFullImage: true
            });
        }
    }

    hideFullImage = () => {
        this.setState({
            showFullImage: false
        });
    }

    render() {
        return ( 
            <div className = "image-gallery" >
                {this.state.images.map((image) => {
                    return (
                        <ImageContainer key={image._id} id={image._id} src={image.src} alt={image.alt} getImage={this.showFullImage}/>
                    );
                })}
                {this.state.showFullImage ? <FullImageViewer id={this.state.fullImageId} images={this.state.images} closeViewer={this.hideFullImage.bind(this)} /> : ""}
                {/**/}
            </div>
        );
    }
}

export default Gallery;
