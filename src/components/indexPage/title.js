import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div`
  ${tw`text-center transition-all transition-ease`}
  transition-duration: 10s;
  &:hover {
    transform: scale(1.2);
  }
`;

const OuterContainer = styled.div`
  ${tw`text-white mt-64`}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Description = styled.h1`
  ${tw`p-0 mb-8 text-xl font-normal`}
`;

const NameHeader = styled.h1`
  ${tw`mb-0 text-5xl sm:text-6xl`}
`;

const Title = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>Software Engineer</Description>
        </Container>
      </OuterContainer>
    )}
  />
);

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
};

NameHeader.defaultProps = {
  siteTitle: ``,
};

export default Title;
