import React from 'react';
import axios from 'axios';

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
        console.log(err);
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="NavBar"></div>
          <div>
            {this.state.photos.map((photo) => {
              return <img src={photo.url} />;
            })}
          </div>
        </div>
      );
    }
  }
}

export default App;
