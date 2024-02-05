import { ImageCard } from './imageCard/ImageCard';

export const ImageGallery = ({ photos }) => {
  return (
    <div>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <a href={photo.urls.small}>
              <ImageCard photo={photo} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
