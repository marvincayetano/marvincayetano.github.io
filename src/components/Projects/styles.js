import styled from 'styled-components';

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
`;

const ProjectList = styled.div`
  display: grid;
  gap: 20px 20px;
  width: 100%;
  max-width: 1175px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const ProjectItemContainer = styled.a`
  height: 1000px;
  text-decoration: none;
  box-shadow: 0 23px 39px -20px rgba(0, 0, 0, 0.43);
  border-radius: 10px;
`;

export { ProjectContainer, ProjectList, ProjectItemContainer };
