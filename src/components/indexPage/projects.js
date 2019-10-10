import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import yakosaImage from '../../images/yakosa.png';
import exercisesImage from '../../images/exercises.png';
import spiderImage from '../../images/spider.jpg';

const Title = styled.div`
  ${tw`text-white font-bold text-5xl mb-8`}
`;

const Grid = styled.div`
  ${tw`flex flex-wrap -mx-3 overflow-hidden`}
`;

const Column = styled.div`
  ${tw`my-3 px-3 w-full md:w-1/3`}
`;

const Card = styled.div`
  ${tw`rounded bg-gray-900 text-white overflow-hidden shadow-lg transition-all transition-250 transition-ease`}
  &:hover {
    transform: scale(1.05);
  }
`;

// eslint-disable-next-line jsx-a11y/alt-text
const CardImage = styled.div`
  ${tw`w-full h-48`}
  background-image: url(${props => props.src});
  background-size: cover;
`;

const CardContent = styled.div`
  ${tw`p-4`}
`;

const CardTitle = styled.div`
  ${tw`font-bold text-xl mb-2`}
`;

const CardSubtitle = styled.span`
  ${tw`text-gray-600 font-medium ml-2`}
`;

const Techs = styled.div`
  ${tw`mt-4`}
`;

const Techno = styled.span`
  ${tw`inline-block bg-gray-200 rounded-full px-3 py-0 text-sm font-semibold
    text-gray-700 mr-1 mb-1`}
`;

const ProjectDescription = styled.div`
  ${tw`text-white`}
`;

const Projects = () => (
  <>
    <Title>Projects</Title>
    <Grid>
      <Column>
        <Card>
          <CardImage src={yakosaImage} />
          <CardContent>
            <CardTitle>
              YAKOSA <CardSubtitle>Full-Stack Mobile App</CardSubtitle>
            </CardTitle>
            <ProjectDescription>
              Smart shopping lists, generating a best prices route of nearby
              supermakets.
            </ProjectDescription>
            <Techs>
              <Techno>Flutter</Techno>
              <Techno>NodeJS</Techno>
              <Techno>Python</Techno>
              <Techno>Docker</Techno>
              <Techno>GraphQL</Techno>
            </Techs>
          </CardContent>
        </Card>
      </Column>

      <Column>
        <Card>
          <CardImage src={exercisesImage} />
          <CardContent>
            <CardTitle>
              Exercises <CardSubtitle>Full-Stack Web App</CardSubtitle>
            </CardTitle>
            <ProjectDescription>
              Online exercises with automatic correction and evaluation.
            </ProjectDescription>
            <Techs>
              <Techno>ReactJS</Techno>
              <Techno>Django</Techno>
              <Techno>Docker</Techno>
              <Techno>GraphQL</Techno>
            </Techs>
          </CardContent>
        </Card>
      </Column>

      <Column>
        <Card>
          <CardImage src={spiderImage} />
          <CardContent>
            <CardTitle>
              Spider <CardSubtitle>HTTP(S) Server</CardSubtitle>
            </CardTitle>
            <ProjectDescription>
              C++ server inspired by Nginx, developed for students as an
              educationnal project.
            </ProjectDescription>
            <Techs>
              <Techno>C++</Techno>
              <Techno>OpenSSL</Techno>
              <Techno>LibEV</Techno>
              <Techno>HTTP</Techno>
            </Techs>
          </CardContent>
        </Card>
      </Column>
    </Grid>
  </>
);

export default Projects;
