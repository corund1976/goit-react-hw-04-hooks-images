import { useState, useEffect, useCallback } from 'react';
import { getDataServer } from './service/api';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState({});
  const [modalIsHidden, setModalIsHidden] = useState(true);
  // Получение данных с сервера
  const fetchImages = () => {
    setIsLoading(true);
    // Запрос данных с сервера
    getDataServer(search, pagination)
      .then(newImages => {
        if (newImages.length===0) {
          return Promise.reject(
           new Error(`There is no pictures by ${search} name, please try another request`));
        } else {
          setImages(prevImages => [...(prevImages || []), ...newImages]);
        }
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };
  // Поиск Searchbar
  const handleFormSubmit = searchString => {
    setSearch(searchString);
    setImages([]);
    setPagination(1);
    setError(null);
  };
  // Модалка мемоизирована
  const handleToggleModalStatus = useCallback(() => {
    setModalIsHidden(prevModalIsHidden => !prevModalIsHidden);
  },[])

  const handleShowModalClick = ({ modalImage }) => {
    setModalImage({ ...modalImage });
    handleToggleModalStatus();
  };
  // Кнопка LoadMore...
  const handleLoadMoreClick = () => {
    setPagination(prevPagination => prevPagination + 1);
  };

  useEffect(() => {
    if (search === '') return; //при пустой строке поиска = не показывать никакие картинки

    fetchImages();
  }, [pagination, search]);

  useEffect(() =>{
    if (pagination > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [images]);

  return (
    <Container>

      <Searchbar
        onSubmit={handleFormSubmit} />
      
        {error &&
      <h1>{error.message}</h1>}

      <ImageGallery
        images={images}
        onShowModal={handleShowModalClick} />

        {isLoading &&
      <Loader />}
      
        {!!images.length && !isLoading &&
      <Button
        onLoadMore={handleLoadMoreClick} />}

        {!modalIsHidden && 
      <Modal
        onToggleModalStatus={handleToggleModalStatus}
        modalImage={modalImage} />}
      
    </Container>
  );
};

export default App;