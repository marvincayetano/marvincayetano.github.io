import styled from 'styled-components';
import { animated } from 'react-spring';
import { media } from '../../styles/MediaQueryTemplate';

const WorkContainer = styled.div`
  height: 1150px;
  display: grid;
  grid-template-columns: minmax(741px, 1fr) minmax(0, 285px);
  align-items: start;
  justify-content: end;
  padding-top: 260px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--white-40);
  overflow: hidden;
  ${media.giant`
    grid-template-columns: minmax(0, auto) 0;
  `}
  ${media.tablet`
    height: 1265px;
  `}
  ${media.phone`
    /* height: 1290px; */
    /* padding-top: 130px; */
  `}
`;

const WorkContent = styled.div`
  width: 682px;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 0 0 auto;
  border-radius: 7px;
  ${media.tablet`
    width: 100%;
  `}
`;

const BottomPaperContainer = styled.div`
  width: 100%;
  transform: rotate(-2deg);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--white);
  ${media.tablet`
    transform: rotate(-1deg);
  `}
`;

const TopPaperContainer = styled.div`
  width: 98%;
  transform: rotate(2deg);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--white);
  ${media.tablet`
    transform: rotate(1deg);
  `}
  ${media.phone`
    transform: rotate(0deg);
  `}
`;

const PaperContent = styled(animated.div)`
  display: flex;
  flex-direction: column;
  bottom: -20px;
  /* transform: rotate(-4deg); */
  background-color: var(--white);
  width: 95%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--black-20);
  padding: 10px;
  letter-spacing: 1px;
  ${media.tablet`
    padding: 5px;
    /* transform: rotate(-3deg); */
  `}
  ${media.phone`
    padding: 2px;
    /* transform: rotate(-2deg); */
  `}
  .job__container {
    padding: 10px 0;
  }
  .job__company {
    color: var(--black-20);
    font-size: 42px;
    font-weight: 500;
    margin-bottom: 0;
    margin-top: 0;
    line-height: 62px;
  }
  .job__title {
    color: var(--black-20);
    font-weight: 600;
    line-height: 1.4;
    margin-top: 0;
    font-size: 16px;
  }
  .job__description {
    margin: 14px 0 12px 5px;
    color: var(--black-20);
    line-height: 2;
    font-size: 14px;
    font-weight: 400;
  }
`;

export { WorkContainer, WorkContent, TopPaperContainer, BottomPaperContainer, PaperContent };
