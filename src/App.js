import { Component } from "react";
import "./App.css";

import ImagesGalery from "./components/ImageGallery/ImageGallery";
class App extends Component {
  state = {
    images: [],
    filter: "",
    showModal: false,
    query: '',
    bigImg: '',

  };


  render() {

    return (
      <>
         <ImagesGalery/>
      </>
    );
  }
}

export default App;
