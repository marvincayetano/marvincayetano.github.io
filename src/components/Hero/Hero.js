import React, { useState, useEffect } from 'react';
import { Spring } from 'react-spring/renderprops';
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubTitle,
  ShowcaseOverlay,
  ShowcaseVideo,
  ScrollDiv,
  Line,
} from './styles';
import Header from '../Header';

export default function Hero() {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 4400);
  }, []);

  return (
    <HeroContainer>
      {isVisible && <Header />}
      <Spring config={{ duration: 5500 }} from={{ opacity: 1 }} to={{ opacity: 0.8 }}>
        {props => <ShowcaseOverlay style={props} />}
      </Spring>
      <ShowcaseVideo>
        <source
          src="https://res.cloudinary.com/de5fzxeki/video/upload/v1560271425/showcase_tj2xzl.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/de5fzxeki/video/upload/v1560269772/showcase_r6yik5.webm"
          type="video/webm"
        />
      </ShowcaseVideo>
      <HeroContent>
        <Spring from={{ bottom: -40 }} to={{ bottom: 0 }}>
          {props => <HeroTitle style={props}>I&apos;m Marvin Cayetano</HeroTitle>}
        </Spring>
        <Spring config={{ duration: 2500 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <HeroSubTitle style={props}>
              A computer engineering student at Alqonquin College located in Ottawa, Canada.
            </HeroSubTitle>
          )}
        </Spring>
      </HeroContent>
      <ScrollDiv>{isVisible && <Line />}</ScrollDiv>
    </HeroContainer>
  );
}
