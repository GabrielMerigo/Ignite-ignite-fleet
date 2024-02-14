import { useNavigation } from '@react-navigation/native';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { CarStatus } from '../../components/CarStatus';
import { Historic } from '../../libs/realm/schemas/Historic';
import { useEffect } from 'react';
import { useQuery } from '../../libs/realm';

export function Home() {
  const historic = useQuery(Historic);
  const { navigate } = useNavigation();

  function handleRegisterMovement() {
    navigate('departure')
  }

  function fetchVehicle() {
    console.log(historic)
  }

  useEffect(() => {
    fetchVehicle();
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <CarStatus licensePlate="XXX-1234" onPress={handleRegisterMovement} />
      </Content>
    </Container>
  );
}