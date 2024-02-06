import { useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import styled from './ImageGallery.module.css';
import { ImageCard } from './ImageCard/ImageCard';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const ImageGallery = ({ photos }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalIsOpen(false);
  };

  return (
    <div>
      <ul className={styled.ul}>
        {photos.map(photo => (
          <li key={photo.id} className={styled.li}>
            <button onClick={() => openModal(photo.urls.regular)}>
              <ImageCard photo={photo} />
            </button>
          </li>
        ))}
      </ul>

      <ImageModal
        isOpen={modalIsOpen}
        imageUrl={selectedImage}
        onRequestClose={closeModal}
      />
    </div>
  );
};
