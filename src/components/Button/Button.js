import { Component } from "react";

export default class Button extends Component {
  componentDidMount() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <>
        <button
          className='Button'
          type='button'
          onClick={this.props.onOpenCloseButton}
        >
          Load more
        </button>
      </>
    );
  }
}
