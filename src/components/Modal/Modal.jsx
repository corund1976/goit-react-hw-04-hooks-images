import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

function Modal({ modalImage, onToggleModalStatus }) {
    useEffect(() => {
      window.addEventListener('keydown', handleKeyEsc);
      return () => {
        window.removeEventListener('keydown', handleKeyEsc);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
  const handleKeyEsc = e => {
    if (e.code === 'Escape') {           //e.keyCode === 27
      onToggleModalStatus();
    }
  };

  const handleClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onToggleModalStatus();
    }
  };

  const { largeImageURL, tags } = modalImage;

  return (
    <div className={s.Overlay} onClick={handleClickBackdrop}>
      <div className={s.Modal}>
        <img src={largeImageURL} alt={tags}/>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  onToggleModalStatus: PropTypes.func.isRequired,
  modalImage: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
  }).isRequired
};