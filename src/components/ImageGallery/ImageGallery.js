import { Component } from "react";
import fetchImagesApi from "../../services/images-api";
import axios from "axios";
import Searchbar from "../Searchbar";
import Modal from "../Modal/Modal";
import ImageGalleryItem from './ImageGalleryItem';

import '../styles.css';

axios.defaults.baseURL = "https://pixabay.com";

class ImageGallery extends Component {
  state = {
    images: [],
    imagesPage: 1,
    searchQuery: "",
    isLoading: false,
    showModal: false,
    error: null,
    bigImg: '',
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



 onOpenBigImages(largeImageURL){
    this.setState({ bigImg: largeImageURL, showModal: true, });


  }



  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
    this.setState({bigImg: ''});
  };


  render() {
    const { images, isLoading, error, showModal } = this.state;
    const loadingButtonAndPreloader = images.length > 0 && !isLoading;

    return (
        <>
      <div className="">
      {error && <h2>Sorry, error</h2>}

        <Searchbar onSubmit={this.onChangeQuery} />

        {showModal && (
                <Modal onClose={this.toggleModal} img={this.state.bigImg}/>

        
        )}
        <ul className="ImageGallery">
            
            {!images.length? <h2>Please, enter a valid image title</h2>: images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <li key={id} className="ImageGalleryItem">
              <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} onClick={() => this.onOpenBigImages(largeImageURL)}></img>

            </li>
          ))
        }
    
        </ul>
       

      </div>
      <div className="ButtonBlock">

      {isLoading && <div class="preloader">
  <div class="preloader__row">
    <div class="preloader__item"></div>
    <div class="preloader__item"></div>
  </div>
</div>}

{loadingButtonAndPreloader && (
  <button className="Button" type='button' onClick={this.fetchImages}>
    Load more
  </button>
)}
</div>

      </>
    );
  }
}

export default ImageGallery;
