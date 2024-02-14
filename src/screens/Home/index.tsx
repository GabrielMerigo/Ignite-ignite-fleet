import { useNavigation } from '@react-navigation/native';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { CarStatus } from '../../components/CarStatus';

export function Home() {

  const { navigate } = useNavigation();

  function handleRegisterMoviment() {
    navigate('departure')
  }

  return (
    <Container>
      <Header />

      <Content>
        <CarStatus licensePlate="XXX-1234" onPress={handleRegisterMoviment} />
      </Content>
    </Container>
  );
}