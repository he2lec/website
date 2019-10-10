import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Title = styled.h3`
  ${tw`text-white font-bold text-5xl mb-8`}
`;

const Grid = styled.div`
  ${tw`flex flex-wrap -mx-3`}
`;

const Column = styled.div`
  ${tw`my-3 px-3 w-full md:w-1/3`}
`;

const Card = styled.div`
  ${tw`rounded text-black bg-white overflow-hidden shadow-lg p-4 transition-all transition-250 transition-ease`}
  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.div`
  ${tw`font-bold text-xl mb-8`}
`;

const Skill = styled.span`
  ${tw`inline-block bg-gray-200 rounded-full px-3 py-0 text-sm font-semibold
    text-gray-700 mr-2 mb-2`}
`;

const SpecialSkill = styled(Skill)`
  ${tw`text-pink-600`}
`;

const Skills = () => (
  <>
    <Title>Skills</Title>
    <Grid>
      <Column>
        <Card>
          <CardTitle>Programming</CardTitle>
          <SpecialSkill>C</SpecialSkill>
          <SpecialSkill>C++</SpecialSkill>
          <Skill>C#</Skill>
          <SpecialSkill>Javascript</SpecialSkill>
          <Skill>Dart</Skill>
          <Skill>Python</Skill>
          <Skill>Java</Skill>
          <Skill>Bash</Skill>
          <Skill>Swift</Skill>
          <Skill>Kotlin</Skill>
          <Skill>SQL</Skill>
        </Card>
      </Column>

      <Column>
        <Card>
          <CardTitle>Technologies</CardTitle>
          <SpecialSkill>Docker</SpecialSkill>
          <Skill>Git</Skill>
          <Skill>GraphQL</Skill>
          <Skill>PostgreSQL</Skill>
          <SpecialSkill>Continuous Integration</SpecialSkill>
          <Skill>Continuous Deployment</Skill>
          <SpecialSkill>ReactJS</SpecialSkill>
          <Skill>VueJS</Skill>
          <Skill>Flutter</Skill>
          <Skill>Django</Skill>
          <SpecialSkill>NodeJS</SpecialSkill>
          <Skill>Netlify</Skill>
          <Skill>Heroku</Skill>
          <Skill>Travis CI</Skill>
        </Card>
      </Column>

      <Column>
        <Card>
          <CardTitle>Misc</CardTitle>
          <SpecialSkill>Project Management</SpecialSkill>
          <Skill>AGILE</Skill>
          <Skill>Accounting</Skill>
          <Skill>Adobe Creative Suite</Skill>
        </Card>
      </Column>
    </Grid>
  </>
);

export default Skills;
