import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useQuery, useRealm } from '../../libs/realm';
import { Historic } from '../../libs/realm/schemas/Historic';

import { Header } from '../../components/Header';
import { CarStatus } from '../../components/CarStatus';

import { Container, Content } from './styles';

export function Home() {
  const realm = useRealm();
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null);

  const { navigate } = useNavigation();

  const historic = useQuery(Historic)

  function handleRegisterMovement() {
    if(vehicleInUse?._id) {
      navigate('arrival', { id: vehicleInUse._id.toString() });
    } else {
      navigate('departure')
    }
  }

  function fetchVehicleInUse() {
    try {
      const vehicle = historic.filtered("status='departure'")[0];
      setVehicleInUse(vehicle);
    } catch (error) {
      Alert.alert('Veículo em uso', 'Não foi possível carregar o veículo em uso.');
      console.log(error);
    }
  }

  // Ver como usar apenas uma vez essa função
  useEffect(() => {
    fetchVehicleInUse();
  }, [])

  // Observar mudanças no banco do realm
  useEffect(() => {
    realm.addListener('change', () => {
      fetchVehicleInUse();
    })

    return () => { realm.removeListener('change', fetchVehicleInUse) }
  },[])

  return (
    <Container>
      <Header />

      <Content>
        <CarStatus 
          licensePlate={vehicleInUse?.license_plate}
          onPress={handleRegisterMovement} 
        />
      </Content>
    </Container>
  );
}