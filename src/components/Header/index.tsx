import { TouchableOpacity } from 'react-native'
import { Power } from 'phosphor-react-native'

import { Container, Greeting, Message, Name, Picture } from './styles';
import { useApp, useUser } from '@realm/react';

import theme from '../../theme';


export function Header() {
  const user = useUser();
  const app = useApp();

  function handleLogout() {
    app.currentUser?.logOut();
  }

  return (
    <Container>
      <Picture 
        source={{ uri: user.profile.pictureUrl }}
        placeholder='L184i9ofbHof00ayjsay~qj[ayj@'
      />
      <Greeting>

        <Message>
          Olá,
        </Message>

        <Name>
          {user?.profile.name}
        </Name>
      </Greeting>

      <TouchableOpacity onPress={handleLogout} activeOpacity={0.7}>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </Container>
  );
}