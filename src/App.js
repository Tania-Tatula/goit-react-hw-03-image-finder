import { Component } from "react";
import "./App.css";

import Modal from "./components/Modal";
import ImagesGalery from "./components/ImageGallery/ImageGallery";
// import Searchbar from "./components/Searchbar";
class App extends Component {
  state = {
    images: [],
    filter: "",
    showModal: false,
    query: ''
  };



  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // onChangeQuery = query => {
  //   console.log(query);
  // }

  render() {
    const { showModal } = this.state;

    return (
      <>
      {/* <Searchbar onSubnit={this.onChangeQuery()}/> */}
        <button type='button' onClick={this.toggleModal}>
          OpenModal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type='button' onClick={this.toggleModal}>
              close
            </button>
          </Modal>
        )}
        <ImagesGalery/>
      </>
    );
  }
}

export default App;
