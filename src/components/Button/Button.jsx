import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export const Button = ({ loadMore }) => {
  const { btn } = styles;
  return (
    <>
      <button className={btn} type="button" onClick={loadMore}>
        Load more
      </button>
    </>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
