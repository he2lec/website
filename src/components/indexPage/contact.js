import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { withPrefix } from 'gatsby';

const Grid = styled.div`
  ${tw`flex flex-wrap -mx-3 overflow-hidden mb-4 mt-8 px-8`}
`;

const Column = styled.div`
  ${tw`my-3 px-3 overflow-hidden w-1/2 md:w-1/3 text-center`}
`;

const ColumnResp = styled(Column)`
  ${tw`w-full`}
`;

const Button = styled.button`
  ${tw`text-center font-bold w-full bg-white rounded px-6 py-4 md:py-2
    hover:bg-black hover:text-white`}
  &:hover > * {
    ${tw`text-white`}
  }
`;

const Block = styled.div`
  ${tw`text-center font-bold text-base w-full bg-white rounded tracking-tighter
    px-1 py-4 md:py-2 hover:bg-black hover:text-white inline-block`}
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
      <a href={withPrefix('/cv.pdf')}>
        <Button>Resume</Button>
      </a>
    </Column>
    <ColumnResp>
      <Block>adrienhellec.pro@gmail.com</Block>
    </ColumnResp>
  </Grid>
);

export default Contact;
