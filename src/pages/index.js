import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/indexPage/title';
import Intro from '../components/indexPage/intro';
import Contact from '../components/indexPage/contact';
import Skills from '../components/indexPage/skills';
import Projects from '../components/indexPage/projects';
import Footer from '../components/indexPage/footer';

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

const Space = styled.div`
  ${tw`m-16`}
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `engineer`,
        `student`,
        `computer`,
        `development`,
        `devops`,
        `javascript`,
        `intern`,
        `internship`,
        `france`,
        `paris`,
        `reactjs`,
        `vuejs`,
        `flutter`,
        `fullstack`,
        `frontend`,
        `backend`,
        `epita`,
        `school`,
        `2020`,
        `resume`,
        `cv`,
        `linkedin`,
        `job`,
        `project`,
        `projects`,
        `mobile`,
        `app`,
        `application`,
        `docker`,
        `deployment`,
        `design`,
        `computer`,
        `django`,
        `python`,
        `agile`,
        `management`,
        `c++`,
        `team`,
        `master`,
        `ingenieur`,
        `etudiant`,
        `software`,
        `stage`,
        `developpement`,
        `logiciel`,
        `equipe`,
        `informatique`,
        `ecole`,
        `projet`,
        `curriculum vitae`,
        `profile`,
        `portofolio`,
        `etudes`,
        `studies`,
      ]}
    />
    <Title />
    <SmallWidth>
      <Intro />
      <Contact />
    </SmallWidth>
    <RegWidth>
      <Skills />
    </RegWidth>
    <RegWidth>
      <Projects />
    </RegWidth>
    <Space />
    <Footer />
    <Space />
  </Layout>
);

export default IndexPage;
