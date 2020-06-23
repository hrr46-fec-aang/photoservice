import React from 'react';
import axios from 'axios';
import Photo from './photo.jsx';
import styled from 'styled-components';

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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      campsite: {},
      isLoaded: false,
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

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Navbar>Place holder for navbar</Navbar>
          <PhotoBanner>
            {this.state.photos.map((photo) => {
              return <Photo photo={photo} key={photo._id} />;
            })}
          </PhotoBanner>
        </div>
      );
    }
  }
}

export default App;
