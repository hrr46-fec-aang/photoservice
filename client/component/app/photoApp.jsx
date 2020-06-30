import React from 'react';
import axios from 'axios';
import { PhotoBanner, Navbar, ImageinBanner, Main } from './styled.app.js';

import Carousel from '../Carousel/Carousel.jsx';

class PhotoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      campsite: {},
      isLoaded: false,
      currentPhoto: '',
      isOpen: false,
    };
  }

  componentDidMount() {
    const url = window.location.pathname;
    console.log(url);
    if (url === '/') {
      this.getPhotos(30);
    } else {
      const id = url.slice(1, url.length - 1);
      this.getPhotos(id);
    }
  }

  getPhotos(id) {
    axios
      .get(`http://localhost:2333/site/${id}`)
      .then((camp) => {
        this.setState({
          isLoaded: true,
          campsite: camp.data[0],
          photos: camp.data[0].photos,
        });
      })
      .catch((err) => {
        this.setState({ isLoaded: true });
        console.log(err);
      });
  }

  photoClickHandler(e) {
    this.setState({
      currentPhoto: e.target.id,
      isOpen: true,
    });
  }

  handleClose() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      const carouselComponent = this.state.isOpen ? (
        <Carousel
          photos={this.state.photos}
          currentIndex={this.state.currentPhoto}
          handleClose={this.handleClose.bind(this)}
          location={this.state.campsite.location}
        />
      ) : null;
      if (this.state.isOpen) {
      }
      return (
        <Main>
          <Navbar></Navbar>
          <PhotoBanner>
            {this.state.photos.map((photo, index) => {
              return (
                <ImageinBanner
                  src={photo.url}
                  key={photo._id}
                  id={index}
                  onClick={this.photoClickHandler.bind(this)}
                ></ImageinBanner>
              );
            })}
          </PhotoBanner>
          {carouselComponent}
        </Main>
      );
    }
  }
}

export default PhotoApp;
