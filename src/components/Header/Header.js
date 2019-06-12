import React, { useState, useEffect } from 'react';
import { Spring } from 'react-spring/renderprops';
import { HeaderContainer, LogoWrapper, LeftContainer, RightContainer } from './styles';

export default function Header() {
  const [isInside, setIsInside] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > window.innerHeight) {
        setIsInside(true);
      } else {
        setIsInside(false);
      }
    }

    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <Spring config={{ duration: 1000 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <HeaderContainer isInside={isInside} style={props}>
          <LeftContainer>
            <LogoWrapper>
              <img
                height="30"
                width="30"
                src="https://res.cloudinary.com/de5fzxeki/image/upload/c_scale,w_30,h_30/v1560306900/portfolio_icon_gmee0p.svg"
                alt="icon"
              />
            </LogoWrapper>
          </LeftContainer>
          <RightContainer>
            <a href="#about">ABOUT</a>
            {/* <a href="#projects">PROJECTS</a> */}
            <a href="#work">WORK</a>
            <a href="#skills">SKILLS</a>
            <a href="#contact">CONTACT</a>
          </RightContainer>
        </HeaderContainer>
      )}
    </Spring>
  );
}
