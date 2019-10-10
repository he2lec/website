import React from 'react';

import Title from '../components/indexPage/title';
import Intro from '../components/indexPage/intro';
import Contact from '../components/indexPage/contact';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Skills from '../components/indexPage/skills';
import Projects from '../components/indexPage/projects';

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Center = styled.div`
  margin: 0 auto;
`;

const SmallWidth = styled(Center)`
  max-width: 860px;
`;

const RegWidth = styled(Center)`
  ${tw`mt-16 px-8`}
  max-width: 1200px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title />
    <SmallWidth>
      <Intro />
      <Contact />
    </SmallWidth>
    <RegWidth>
      <Skills />
    </RegWidth>
    <Projects />
  </Layout>
);

export default IndexPage;
