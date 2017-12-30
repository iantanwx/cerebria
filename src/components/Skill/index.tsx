import * as React from 'react';
import { Header3 } from '../Headers';
import styled from 'styled-components';
import Link from '../Link';

interface SkillProps {
  kind: 'language' | 'technology' | 'project';
  name: string;
  link?: string;
  description?: string;
}

const SkillHeader = styled(Header3)`
  text-align: left;
  display: inline-block;
`;

const Skill: React.SFC<SkillProps> = ({ kind, name, description, link }) => {
  switch (kind) {
    case 'language':
      return <SkillHeader>{name}</SkillHeader>;
    case 'technology':
      return <SkillHeader>{name}</SkillHeader>;
    case 'project':
      return (
        <div>
          <SkillHeader>
            <Link to={link} data-hover={name}>{name}</Link> — {description}
          </SkillHeader>
        </div>
      );
    default:
      return null;
  }
};

export default Skill;
