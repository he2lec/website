import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

const Grid = styled.div`
  ${tw`flex flex-wrap mb-4 mt-8`}
`;

const Column = styled.div`
  ${tw`w-full sm:w-1/3 text-center`}
`;

const Button = styled.button`
  ${tw`text-center bg-white rounded px-6 py-2 hover:bg-black hover:text-white`}
  &:hover > * {
    ${tw`text-white`}
  }
`;

const Block = styled.div`
  ${tw`text-center bg-white rounded px-6 py-2 hover:bg-black hover:text-white inline-block`}
`;

const Small = styled.span`
  ${tw`text-xs`}
`;

const Contact = () => (
  <Grid>
    <Column>
      <a
        href="https://linkedin.com/in/adrienhellec"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Linkedin</Button>
      </a>
    </Column>
    <Column>
      <Link to="/cv.pdf">
        <Button>Resume</Button>
      </Link>
    </Column>
    <Column>
      <Block>
        <Small>adrienhellec.pro@gmail.com</Small>
      </Block>
    </Column>
  </Grid>
);

export default Contact;
