import React from 'react';
import axios from 'axios';

class CampDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params;
    this.getPhotos(id);
  }

  getPhotos(id) {
    axios
      .get(`/${id}`)
      .then((camp) => {
        console.log(camp);
        this.setState({ photos: camp.data[0].photos });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.photos.map((photo) => (
          <img src={photo.url} />
        ))}
      </div>
    );
  }
}

export default CampDetail;
