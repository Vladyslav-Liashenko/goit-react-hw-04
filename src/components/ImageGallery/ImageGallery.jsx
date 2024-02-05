import styled from './ImageGallery.module.css';
import { ImageCard } from './imageCard/ImageCard';

export const ImageGallery = ({ photos }) => {
  return (
    <div>
      <ul className={styled.ul}>
        {photos.map(photo => (
          <li key={photo.id} className={styled.li}>
            <a href={photo.urls.small}>
              <ImageCard photo={photo} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
