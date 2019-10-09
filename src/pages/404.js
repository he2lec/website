import React from 'react';
import { withPrefix } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled('div')`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const Text = styled('span')`
  ${tw`text-white text-center`};
`;

const Button = styled('button')`
  ${tw`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded
    inline-flex items-center text-black cursor-pointer transition-all
    transition-100 transition-linear`};
  & > * {
    ${tw`text-black`}
  }
  &:hover > *,
  &:hover {
    ${tw`text-white transition-100 transition-all transition-linear`}
  }
  &:hover {
    ${tw`bg-black`}
  }
`;

const Center = styled('div')`
  ${tw`text-center`}
`;

const StyledLink = styled(props => <Link {...props} />)`
  ${tw`no-underline`}
`;

const AbsoluteLink = styled('span')`
  ${tw`absolute top-0 w-32 text-center font-normal border transition-all
    transition-100 transition-linear rounded`}
  & > * {
    ${tw`text-white transition-all transition-100 transition-linear`}
  }
  &:hover > * {
    ${tw`text-black transition-all transition-100 transition-linear`}
  }
  &:hover {
    ${tw`bg-white transition-all transition-100 transition-linear`}
  }
  top: 15px;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <AbsoluteLink>
        <StyledLink to="/">Fly to Home</StyledLink>
      </AbsoluteLink>
      <Text>
        <h1>Absolute &lt;void&gt;</h1>
        <p>You&apos;re looking for my resume ? It&apos;s right here :</p>
      </Text>
      <Center>
        <Button>
          <a href={withPrefix('/cv.pdf')}>Hire Me (Resume)</a>
        </Button>
      </Center>
    </Container>
  </Layout>
);

export default NotFoundPage;
