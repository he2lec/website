import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const OuterContainer = styled.div`
  ${tw`text-white mt-32`}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Content = styled.span`
  ${tw`text-white text-lg text-justify leading-relaxed px-8`}
  font-family: Lato;
`;

const Big = styled.div`
  ${tw`text-5xl font-bold`}
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`;

const Strong = styled.span`
  ${tw`font-bold`}
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.6);
`;

const LineSpace = styled.div`
  ${tw`p-2`}
`;

const Intro = () => (
  <OuterContainer>
    <Content>
      <Big>Hello,</Big>
      I'm <Strong>Adrien Hellec</Strong>, a 5th year{' '}
      <Strong>engineering student</Strong> in a{' '}
      <Strong>computer science</Strong> school located in{' '}
      <Strong>Paris, France</Strong>. I'm specialized in{' '}
      <Strong>Web/Software development</Strong> and <Strong>DevOps</Strong> and
      i'm currently teaching C/C++/Unix and project management to 3rd year
      students. Always interested in{' '}
      <Strong>discovering new technologies</Strong>, like React JS, Flutter and
      more.
      <LineSpace />
      You will find contact information, my skills and some of the most
      interesting projects i made, just below.
    </Content>
  </OuterContainer>
);

export default Intro;
