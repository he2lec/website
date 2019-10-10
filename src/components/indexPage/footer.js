import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const Container = styled.div`
  ${tw`text-white text-center text-lg`}
  font-family: Lato;
`;

// eslint-disable-next-line jsx-a11y/anchor-has-content
const Link = styled(props => <a {...props} />)`
  ${tw`border-dotted border-white border-b text-white hover:text-black`}
`;

const Intro = () => (
  <Container>
    Created using{' '}
    <Link
      href="https://www.gatsbyjs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gatbsy
    </Link>
    ,{' '}
    <Link href="https://emotion.sh" target="_blank" rel="noopener noreferrer">
      Emotion
    </Link>
    ,{' '}
    <Link
      href="https://tailwindcss.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Tailwind
    </Link>{' '}
    with continuous deployment on{' '}
    <Link
      href="https://www.netlify.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Netlify
    </Link>{' '}
    (
    <Link
      href="https://github.com/he2lec/website"
      target="_blank"
      rel="noopener noreferrer"
    >
      Github
    </Link>
    )
  </Container>
);

export default Intro;
