import styled from './ImageCard.module.css';

export const ImageCard = ({ photo }) => {
  return (
    <div>
      <img src={photo.urls.small} alt={photo.alt_description} className={styled.cards} />
    </div>
  );
};
