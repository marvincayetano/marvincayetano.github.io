import React from 'react';
import { ButtonsContainer } from './styles';

export default function ContactButtons() {
  return (
    <ButtonsContainer>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:cayetanomarvin@gmail.com?Subject=Quick%20Email%20Portfolio"
      >
        <img src="https://res.cloudinary.com/de5fzxeki/image/upload/v1559879754/icon_email_j3wpk9.svg" alt="Email" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/marvincayetano">
        <img
          src="https://res.cloudinary.com/de5fzxeki/image/upload/v1559879754/icon_github_bka4lt.svg"
          alt="Github Profile"
        />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/marvincayetano">
        <img
          src="https://res.cloudinary.com/de5fzxeki/image/upload/v1559879754/icon_linkedin_llro7q.svg"
          alt="Linkedin Profile"
        />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/marvincayetano/">
        <img
          src="https://res.cloudinary.com/de5fzxeki/image/upload/v1559879754/icon_instagram_nivxg0.svg"
          alt="Instagram Profile"
        />
      </a>
    </ButtonsContainer>
  );
}
