import PropTypes from 'prop-types';

import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.escFunction, false);
  }

  render() {
    const { img, escFunction, closeModal } = this.props;
    return (
      <div className="Overlay" onClick={closeModal} onKeyDown={escFunction}>
        <div className="Modal">
          <img src={img.largeImageURL} alt={img.tags} loading="lazy" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  img: PropTypes.object.isRequired,
  escFunction: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
