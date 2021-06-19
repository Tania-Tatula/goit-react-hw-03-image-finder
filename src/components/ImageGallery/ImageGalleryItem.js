import { Component } from "react";
import fetchImagesApi from "../../services/images-api";
import axios from "axios";
import Searchbar from "../Searchbar";
import Modal from "../Modal/Modal";

export default class ImageGalleryItem extends Component {
    render(){
        return(
<li key={id} className="ImageGalleryItem">
              <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} onClick={() => this.onOpenBigImages(largeImageURL)}></img>

            </li>
        )
    }
}