import { Component } from 'react';

import fetchPhotosWithQuery from 'api/api';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    modalPicture: null,
    page: 0,
    hitsNumber: null,
    pictures: null,
    error: null,
    searchQuery: null,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ isLoading: true });
      try {
        const pictures = await fetchPhotosWithQuery(
          this.state.searchQuery,
          this.state.page
        );

        if (pictures.hits.length === 0) {
          return alert('There is no images for your value 😢');
        }
        this.setState({ pictures: pictures.hits });
        this.setState({ hitsNumber: pictures.totalHits });
        return;
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (prevState.page !== this.state.page) {
      try {
        const pictures = await fetchPhotosWithQuery(
          this.state.searchQuery,
          this.state.page
        );

        this.setState(prevState => {
          return {
            ...prevState,
            pictures: prevState.pictures.concat(pictures.hits),
          };
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  pageChange = evt => {
    evt.preventDefault();
    this.setState(prevState => {
      return {
        ...prevState,
        page: prevState.page + 1,
      };
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const inputValue = form[1].value.toLowerCase();
    form.reset();
    if (!inputValue) {
      return alert('Please, type any search request!');
    } else {
      this.setState({ searchQuery: inputValue });
      this.setState({ page: 1 });
    }
  };

  openModal = evt => {
    const { pictures } = this.state;
    const ImgForModal = pictures.filter(
      picture => picture.id === Number(evt.target.id)
    );
    this.setState({ modalPicture: ImgForModal[0] });
  };

  escFunction = event => {
    if (event.key === 'Escape') {
      this.setState({ modalPicture: null });
    }
  };

  closeModal = evt => {
    if (evt.target === evt.currentTarget) {
      this.setState({ modalPicture: null });
    }
  };

  render() {
    const { page, pictures, hitsNumber, isLoading, error, modalPicture } =
      this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        {error && <p>Whoops, something went wrong 😢: {error.message}</p>}
        {hitsNumber > 0 && (
          <>
            {isLoading && <Loader />}
            <ImageGallery apiData={pictures} onClick={this.openModal} />
            {hitsNumber > 12 && page < 41 && pictures.length !== hitsNumber && (
              <Button handleClick={this.pageChange} />
            )}
            {modalPicture && (
              <Modal
                img={modalPicture}
                escFunction={this.escFunction}
                closeModal={this.closeModal}
              />
            )}
          </>
        )}
      </div>
    );
  }
}
