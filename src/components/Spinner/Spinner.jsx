import React, {Component} from 'react';
import './Spinner.css';

class Spinner extends Component {
    render() {
        return ( 
            <div className="gallery-image_spinner" style={{display: this.props.spinnerParam}}>
                    <i className="fas fa-spinner"></i>
            </div>
        );
    }
}

export default Spinner;