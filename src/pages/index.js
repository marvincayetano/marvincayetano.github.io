import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

import SEO from '../utils/seo';

export default function IndexPage() {
  return (
    <>
      <SEO title="Marvin Cayetano" />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </>
  );
}
