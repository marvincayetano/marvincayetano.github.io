import React from 'react'
import { Title, Wrapper } from '../components/Heading';
import { SvgLinkedIn } from '../components/AboutStyles';

const AboutPage = () => (
  <Wrapper>
    <Title>Hi, I am Marvin Cayetano</Title>
    <a href="https://www.linkedin.com/in/marvincayetano/">
      <SvgLinkedIn>
        <path fill="#fff" d="M147.9.5L11 37.4C3.5 39.4-1.6 46.5.4 53.9l37 137.3c2 7.4 10.3 12.3 17.8 10.2l136.9-36.8c7.5-2 11.3-10.2 9.3-17.6L164.5 9.8c-2-7.4-9.1-11.3-16.6-9.3zM83.4 164.6l-23.5 6.3-19.7-73.1 23.5-6.3zM49.8 83.3h-.2c-7.5 2-13.9-2.3-15.8-9.3s1.6-14 9.3-16 13.9 2.1 16 9.2-1.5 14-9.3 16.1zm119.5 58.1l-23.5 6.4-10.8-40c-2.6-9.6-7.7-15.2-16.2-12.9-6.5 1.8-9.2 7.2-9.8 11.9a16.6 16.6 0 0 0 .8 6l11.2 41.6-23.5 6.4-19.7-73.1 23.5-6.3 2.8 10.1c2.1-5.8 5.5-14.2 18-17.5 15.4-4.2 29.8 2.8 35.7 24.8z" opacity=".2"/>
      </SvgLinkedIn>
    </a>
    <p>Currently a full-time student in the Computer Engineering program (Computing Science) at Algonquin College.
      Specialising in development, covering areas about computer including Software development, Frond-End development, 
      Back-End development, networking, and more.
      <br/><br/>When I am not in school. I usually study web development. 
      My passion for developing something that were ideas always makes me eager to learn more to contribute for the future technology. 
      <br/><br/>I also studied Computer Science major in Software Development at Bataan Peninsula State University which is located in the Philippines.
      <br/><br/>I am always interested in hearing from former colleagues, managers. 
      I am currently freelancing while I pursue new opportunities. Feel free to contact me if you'd like to connect.</p>
  </Wrapper>
)

export default AboutPage
