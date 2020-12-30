import React from 'react';
import mphoto from './mphoto.jpg';
import './Photo.css';
class Photo extends React.Component {
    render() {
        return (
            <img src={mphoto} className="App-photo" width="100%"
                height="100%" alt="main photo" />
        );
    }
}
export default Photo;