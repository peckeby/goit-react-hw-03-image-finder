import PropTypes from 'prop-types';

import { Component } from 'react';

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  closeModal = evt => {
    const overlay = document.querySelector('.Overlay');
    if (evt.target === overlay) {
      overlay.classList.toggle('visually-hidden');
      this.setState({ img: {} });
    }
  };

  escFunction(event) {
    const overlay = document.querySelector('.Overlay');
    if (event.key === 'Escape') {
      overlay.classList.toggle('visually-hidden');
      this.setState({ img: {} });
    }
  }

  render() {
    const { img } = this.props;
    return (
      <div
        className="Overlay visually-hidden"
        onClick={this.closeModal}
        onKeyDown={this.escFunction}
      >
        <div className="Modal">
          <img src={img.largeImageURL} alt={img.tags} loading="lazy" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  img: PropTypes.object.isRequired,
};
