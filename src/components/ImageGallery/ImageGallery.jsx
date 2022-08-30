import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import styles from './ImageGallery.module.scss';

export const ImageGallery = ({ items, openModal }) => {
  const { ImageGallery } = styles;
  return (
    <ul className={ImageGallery}>
      {items.map(item => (
        <ImageGalleryItem
          key={nanoid()}
          itemData={item}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
