import { Component } from "react";
import fetchImagesApi from "../../services/images-api";
import axios from "axios";
import Searchbar from "../Searchbar";

axios.defaults.baseURL = "https://pixabay.com";

class ImageGallery extends Component {
  state = {
    images: [],
    imagesPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, imagesPage: 1, images: [], error: null, });
  };

  fetchImages = () => {
    const { imagesPage, searchQuery } = this.state;

    const options = {
      searchQuery,
      imagesPage,
    };

    this.setState({isLoading: true});

    fetchImagesApi(options).then((images) => {
      this.setState((prevState) => ({
        images: [...prevState.images, ...images],
        imagesPage: prevState.imagesPage + 1,
      }));
    }).catch(error => this.setState({error}))
    .finally(()=> this.setState({isLoading: false}))
    

  };

  render() {
    const { images, isLoading, error } = this.state;
    const loadingButtonAndPreloader = images.length > 0 && !isLoading;

    return (
      <>
      {error && <h2>Sorry, error</h2>}

        <Searchbar onSubmit={this.onChangeQuery} />


        <ul>
          {images.map(({ id, webformatURL, tags }) => (
            <li key={id}>
              <img src={webformatURL} alt={tags}></img>
            </li>
          ))}
        </ul>

        {isLoading && <h2>загрузка...</h2>}

        {loadingButtonAndPreloader && (
          <button type='button' onClick={this.fetchImages}>
            Load more
          </button>
        )}
      </>
    );
  }
}

export default ImageGallery;