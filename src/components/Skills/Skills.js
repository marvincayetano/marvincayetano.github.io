import React from 'react';
import { SkillsContainer, SkillsContent } from './styles';
import SkillsList from './SkillsList';

export default function Skills() {
  return (
    <SkillsContainer id="skills">
      <SkillsContent>
        <h1>Skills</h1>
        <SkillsList
          skills={[
            'JAVASCRIPT',
            'NODE.JS',
            'GRAPHQL',
            'CSS',
            'STYLED-COMPONENTS',
            'HTML',
            'RESPONSIVE DESIGN',
            'PYTHON',
            'MACHINE LEARNING',
            'DOCKER',
            'JAVA',
            'ANDROID',
            'REACT-NATIVE',
            'MONGODB',
            'MYSQL',
            'POSTGRESQL',
            'SQL SERVER',
            'AGILE',
            'DATA STRUCTURES',
            'DESIGN PATTERNS',
          ]}
        />
        <h1>Libraries</h1>
        <SkillsList skills={['REACT.JS', 'EXPRESS.JS', 'JQUERY', 'FOUNDATION', 'BOOTSTRAP', 'TENSORFLOW', 'KERAS']} />
      </SkillsContent>
    </SkillsContainer>
  );
}
