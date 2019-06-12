import React from 'react';
import propTypes from 'prop-types';
import { SkillsListContainer, SkillItem } from './styles';

export default function SkillsList({ skills }) {
  return (
    <SkillsListContainer>
      {skills.map(skill => (
        <SkillItem key={skill}>{skill}</SkillItem>
      ))}
    </SkillsListContainer>
  );
}

SkillsList.propTypes = {
  skills: propTypes.array.isRequired,
};
