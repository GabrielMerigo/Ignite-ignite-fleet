import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { CarStatus } from '../../components/CarStatus';

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <CarStatus licensePlate="XXX-1234" />
      </Content>
    </Container>
  );
}