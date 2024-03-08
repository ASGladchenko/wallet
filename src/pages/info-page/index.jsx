import { Container, Logo } from '../../components';

import { InfoBlock } from './info-block';
import { applicationSteps, technologiesUsed } from './config';

export const InfoPage = ({}) => {
  return (
    <section className="pt-[20px] pb-[60px]">
      <Container className="flex flex-col gap-5">
        <Logo />

        <InfoBlock list={applicationSteps} title="Instruction" />

        <InfoBlock list={technologiesUsed} title="Technologies in use" />
      </Container>
    </section>
  );
};
