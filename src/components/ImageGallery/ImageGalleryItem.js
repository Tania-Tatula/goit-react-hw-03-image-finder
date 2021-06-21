import { Component } from "react";

export default class ImageGalleryItem extends Component {
  onOpenImages(largeImageURL) {
    this.props.onClick(largeImageURL);
  }

  render() {
    return this.props.images.map(
      ({ id, webformatURL, largeImageURL, tags }) => (
        <li key={id} className='ImageGalleryItem'>
          <img
            className='ImageGalleryItem-image'
            src={webformatURL}
            alt={tags}
            onClick={() => this.onOpenImages(largeImageURL)}
          />
        </li>
      )
    );
  }
}
