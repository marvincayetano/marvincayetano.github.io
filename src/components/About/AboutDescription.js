import React from 'react';
import propTypes from 'prop-types';

export default function AboutDescription({ text }) {
  return (
    <>
      <p className="about__text">
        <b>
          <span className="about__description">~ </span>$
        </b>{' '}
        &nbsp;{text}
      </p>
    </>
  );
}

AboutDescription.propTypes = {
  text: propTypes.oneOfType([propTypes.string, propTypes.object]),
};

AboutDescription.defaultProps = {
  text: '',
};
