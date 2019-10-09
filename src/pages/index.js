import React from 'react';

import Title from '../components/indexPage/title';
import Intro from '../components/indexPage/intro';
import Contact from '../components/indexPage/contact';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Skills from '../components/indexPage/skills';
import Projects from '../components/indexPage/projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title />
    <Intro />
    <Contact />
    <Skills />
    <Projects />
  </Layout>
);

export default IndexPage;
