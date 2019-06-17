import React, { useState, useEffect } from 'react';
import { Spring } from 'react-spring/renderprops';
import { HeaderContainer, LogoWrapper, LeftContainer, RightContainer } from './styles';

export default function Header() {
  const [isInside, setIsInside] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= window.innerHeight) {
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
        <HeaderContainer isinside={isInside ? 1 : 0} style={props}>
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
          <nav>
            <RightContainer>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#work">WORK</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
              {/* <a href="#projects">PROJECTS</a> */}
            </RightContainer>
          </nav>
        </HeaderContainer>
      )}
    </Spring>
  );
}
