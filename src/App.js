import { Component } from "react";
import "./App.css";

// import Modal from "./components/Modal";
import ImagesGalery from "./components/ImageGallery/ImageGallery";
// import Searchbar from "./components/Searchbar";
class App extends Component {
  state = {
    images: [],
    filter: "",
    showModal: false,
    query: '',
    bigImg: '',

  };



  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }))
  //   this.setState({bigImg: ''});
  // };


  render() {
    // const { showModal } = this.state;

    return (
      <>
        {/* <button type='button' onClick={this.toggleModal}>
          OpenModal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type='button' onClick={this.toggleModal}>
              close
            </button>
          </Modal>
        )} */}
        <ImagesGalery/>
      </>
    );
  }
}

export default App;
