import React from 'react';
import { FooterContainer, FooterText } from './styles';
import ContactButtons from './ContactButtons';

export default function Contact() {
  return (
    <FooterContainer id="contact">
      <FooterText>
        Let&apos;s build cool things together.
        <br />
        <a href="mailto:cayetanomarvin@gmail.com?Subject=Hey%Marvin">CAYETANOMARVIN@GMAIL.COM</a>
      </FooterText>
      <ContactButtons />
    </FooterContainer>
  );
}
