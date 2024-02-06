import Modal from 'react-modal';
import styled from './ImageModal.module.css';

const ImageModal = ({ isOpen, imageUrl, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={styled.image_modal}
      overlayClassName={styled.image_modal_overlay}
    >
      <img src={imageUrl} alt="Full-size Image" />
      <button onClick={onRequestClose} className={styled.closebtn}></button>
    </Modal>
  );
};

export default ImageModal;
