import styled from 'styled-components';
import { media } from '../../styles/MediaQueryTemplate';

const SkillsContainer = styled.div`
  height: 1220px;
  display: grid;
  grid-template-columns: minmax(0, 285px) minmax(150px, 40%);
  align-items: start;
  justify-content: start;
  padding-top: 260px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--black);
  overflow: hidden;
  ${media.giant`
    height: 1170px;
    grid-template-columns: 0 minmax(0, 80%);
  `}
  ${media.tablet`
    height: 1590px;
  `}
  ${media.phone`
    height: 1435px;
    padding-top: 130px;
    grid-template-columns: 0 minmax(0, auto);
  `}
`;

const SkillsContent = styled.div`
  grid-column: 2;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 auto 0 0;
  ${media.tablet`
    width: 100%;
  `};
  > h1 {
    text-align: left;
    letter-spacing: 1px;
    line-height: 62px;
    margin-top: 30px;
    margin-bottom: 23px;
  }
`;

const SkillsListContainer = styled.div``;

const SkillItem = styled.h3`
  display: inline-block;
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  padding: 6px;
  background-color: var(--white);
  color: var(--black-20);
  border-radius: 4px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 1px;
  font-size: 16px;
`;

export { SkillsContainer, SkillsContent, SkillsListContainer, SkillItem };
