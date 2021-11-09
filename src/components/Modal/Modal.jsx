import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

function Modal({ modalImage: {largeImageURL, tags}, onToggleModalStatus }) {
  const handleClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onToggleModalStatus();
    }
  };

  useEffect(() => {
    const handleKeyEsc = e => {
      if (e.code === 'Escape') {           //e.keyCode === 27
        onToggleModalStatus();
      }
    };

    window.addEventListener('keydown', handleKeyEsc);
    
    return () => {
      window.removeEventListener('keydown', handleKeyEsc);
    };
  }, [onToggleModalStatus]);

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