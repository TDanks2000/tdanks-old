import { FunctionComponent } from 'react';
import { BG, Container, Links, Right, Text } from './styles';

import { IoIosMail, IoLogoGithub } from 'react-icons/io';
import { SiAnilist, SiKofi } from 'react-icons/si';
import ParticlesComponent from '../Particles';
import WavingHand from './wavingHand';
interface TopComponentProps {}

const TopComponent: FunctionComponent<TopComponentProps> = () => {
  // this should be run only once per application lifetime

  return (
    <>
      <BG>
        <ParticlesComponent />
      </BG>
      <Container>
        <Text>
          Hi, i'm Tommy <WavingHand />
        </Text>
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

            <a
              href="https://ko-fi.com/tdanks2000"
              target="_blank"
            >
              <SiKofi />
            </a>
          </Right>
        </Links>
      </Container>
    </>
  );
};

export default TopComponent;
