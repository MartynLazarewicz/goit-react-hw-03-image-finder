import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.module.scss';

export const Loader = () => {
  const { loader } = styles;
  return (
    <div className={loader}>
      <RotatingLines
        margin="0 auto"
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </div>
  );
};

export default Loader;
