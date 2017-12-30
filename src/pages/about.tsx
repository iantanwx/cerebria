import * as React from 'react';
import { Header1, Header2, Header3 } from '../components/Headers';
import Skill from '../components/Skill';
import { Grid, Row, Col as Column } from 'react-styled-flexboxgrid';

export default class AboutPage extends React.Component<any> {
  render() {
    return (
      <Row>
        <Column md={12}>
          <Header1>Me</Header1>
        </Column>
        <Column xs={12} sm={12} mdOffset={2} lgOffset={2} md={8} lg={8}>
          <Header3>
            Hello, I'm Ian. I'm a fullstack web developer. My bread and butter
            are TypeScript and Go, although I can occassionally be found
            fiddling with Clojure(script) and Scala.
          </Header3>
        </Column>
        <Column xs={12} sm={12} mdOffset={2} lgOffset={2} md={8} lg={8}>
          <Header2>Languages</Header2>
          <Skill kind="language" name="JavaScript" />
          <Skill kind="language" name="TypeScript" />
          <Skill kind="language" name="Go" />
          <Skill kind="language" name="PHP" />
          <Skill kind="language" name="Clojure" />
          <Skill kind="language" name="Scala" />
        </Column>
        <Column xs={12} sm={12} mdOffset={2} lgOffset={2} md={8} lg={8}>
          <Header2>Technologies & Frameworks </Header2>
          <Skill kind="technology" name="React" />
          <Skill kind="technology" name="Redux" />
          <Skill kind="technology" name="MySQL" />
          <Skill kind="technology" name="PostgresSQL" />
          <Skill kind="technology" name="Docker" />
        </Column>
        <Column xs={12} sm={12} mdOffset={2} lgOffset={2} md={8} lg={8}>
          <Header2>Open Source</Header2>
          <Skill
            kind="project"
            name="Errorer"
            description="Sane error generation for Go"
            link="https://github.com/iantanwx/errorer"
          />
          <Skill
            kind="project"
            name="gorm-expect"
            description="Painless unit testing for Gorm-based DALs"
            link="https://github.com/iantanwx/gorm-expect"
          />
        </Column>
      </Row>
    );
  }
}
