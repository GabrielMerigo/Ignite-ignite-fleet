import { useState } from 'react';
import { Container, Title, Slogan } from './styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Realm, useApp } from '@realm/react'

import backgroundImg from '../../assets/background.png'
import { Button } from '../../components/Button';

import { WEB_CLIENT_ID, IOS_CLIENT_ID } from "@env"
import { Alert } from 'react-native';

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
})

export function SignIn() {
  const app = useApp();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true);

      const { idToken } = await GoogleSignin.signIn();

      if(idToken) {
        
      }else {
        Alert.alert('Ocorreu um erro...')
      }

    } catch (error) {
      console.log(error);
    }finally {
      setIsAuthenticating(false);
      Alert.alert('Ocorreu um erro...')
    }
  }

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>

      <Slogan>
        Gestão de uso de veículos
      </Slogan>

      <Button title='Entrar com Google' isLoading={isAuthenticating} onPress={handleGoogleSignIn} />
    </Container>
  );
}
