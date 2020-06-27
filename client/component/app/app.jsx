import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Carousel from '../Carousel/Carousel.jsx';

const PhotoBanner = styled.div`
  height: 480px;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const Navbar = styled.div`
  height: 70px;
  width: 100%;
  background-color: aqua;
`;

const ImageinBanner = styled.img`
  height: 100%;
  padding: 5px;
`;

class App extends React.Component {
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
    const id = url.slice(1, url.length - 1);
    this.getPhotos(id);
  }

  getPhotos(id) {
    axios
      .get(`/site/${id}`)
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
        />
      ) : null;
      if (this.state.isOpen) {
      }
      return (
        <div>
          <Navbar>Place holder for navbar</Navbar>
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
        </div>
      );
    }
  }
}

export default App;
