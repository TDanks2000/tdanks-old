import { FunctionComponent } from 'react';
import { Container, Links, Right, Text } from './styles';

import { IoIosMail, IoLogoGithub } from 'react-icons/io';
import { SiAnilist } from 'react-icons/si';
interface TopComponentProps {}

const TopComponent: FunctionComponent<TopComponentProps> = () => {
  return (
    <Container>
      <Text>Hi, i'm Tommy 👋</Text>
      <Links>
        <a
          href="https://github.com/tdanks2000"
          target="_blank"
        >
          <IoLogoGithub />
        </a>
        <a href="mailto:tommydanks2000@outlook.com">
          <IoIosMail />
        </a>
        <Right>
          <a
            href="https://anilist.co/user/TDanks2000/"
            target="_blank"
          >
            <SiAnilist />
          </a>
        </Right>
      </Links>
    </Container>
  );
};

export default TopComponent;
