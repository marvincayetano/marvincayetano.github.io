import styled, { css } from 'styled-components';

const LinkTag = styled.a`
  opacity: 0.2;
  text-decoration: none;
  background-color: #fff;
  letter-spacing: 5px;
  display: block;
  color: #424242;
  box-shadow: 0px -64px 0px 0px #FFF inset;
  text-align: center;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -ms-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
  &:hover {
    transition: none;
    opacity: 1;
  }
`;

export {
  LinkTag,
}