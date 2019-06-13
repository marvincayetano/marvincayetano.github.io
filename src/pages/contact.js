import React from 'react'
import { Title, Wrapper } from '../components/Heading';
import { LinkTag } from '../components/ContactStyles';

const ContactPage = () => (
  <Wrapper>
    <Title>contact me</Title>
    <p>If you would like to work with me, feel free to email me through the email below
      <LinkTag href="mailto:cayetanomarvin@gmail.com">cayetanomarvin+portfolio@gmail.com</LinkTag>
    </p>
  </Wrapper>
)

export default ContactPage