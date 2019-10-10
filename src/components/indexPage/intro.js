import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const OuterContainer = styled.div`
  ${tw`text-white mt-32`}
`;

const Content = styled.div`
  ${tw`text-white text-lg text-justify leading-relaxed px-8 font-light`}
  font-family: Lato;
`;

const Big = styled.div`
  ${tw`text-5xl font-bold mb-2`}
`;

const Strong = styled.span`
  ${tw`font-black`}
  font-family: Roboto;
`;

// eslint-disable-next-line jsx-a11y/anchor-has-content
const StyledLink = styled(props => <a {...props} />)`
  ${tw`border-dotted border-b border-white no-underline text-white`}
`;

const Intro = () => (
  <OuterContainer>
    <Content>
      <Big>Hello,</Big>
      I’m a French <Strong>engineering student</Strong> in computer science at{' '}
      <StyledLink
        href="https://epita.fr"
        target="_blank"
        rel="noopener noreferrer"
      >
        EPITA
      </StyledLink>{' '}
      and teaching C/C++/Unix to 3rd year students. I am very curious about
      learning and trying <Strong>new technologies</Strong>, for which i can
      adapt and develop my skills quickly. I'm skilled in many IT domains, but i
      have a preference for <Strong>web development</Strong> in Javascript and{' '}
      <Strong>DevOps</Strong>. I'm experienced in <Strong>teamwork</Strong>,
      either as a leader or as a team member, particularly through my experience
      as a C/C++/Unix <Strong>teacher</Strong> during which I have improved my
      ability to manage team conflicts and deadlines. Beyond that, I am
      concerned about <Strong>world issues</Strong> such as social and gender
      inequalities, as well as climate change.
    </Content>
  </OuterContainer>
);

export default Intro;
