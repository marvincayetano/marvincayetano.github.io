import React from 'react';
import propTypes from 'prop-types';
import { ProjectItemContainer } from './styles';

export default function ProjectItem({ url }) {
  return (
    <ProjectItemContainer url={url}>
      <article>
        <div className="SeriesCard__CardLayout-sc-64a1t4-3 hvsDXc" />
      </article>
    </ProjectItemContainer>
  );
}

ProjectItem.propTypes = {
  url: propTypes.string.isRequired,
};
