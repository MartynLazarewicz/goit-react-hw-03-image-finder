import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.scss';

export const ImageGalleryItem = ({ itemData, openModal }) => {
  const { webformatURL, tags, largeImageURL } = itemData;
  const { ImageGalleryItem, ImageGalleryItem_image } = styles;
  return (
    <li className={ImageGalleryItem}>
      <img
        className={ImageGalleryItem_image}
        src={webformatURL}
        alt={tags}
        onClick={() => openModal(largeImageURL, tags)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  itemData: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
