import { Image, Text, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { THEME } from '../../theme';
import { GameController } from 'phosphor-react-native';
import * as AuthSession from 'expo-auth-session';

export function SignIn() {
  async function handleDiscordSignIn(){
    AuthSession.startAsync({
      authUrl: "urlFake"
    })
  }

  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <Heading 
        title='Entrar!'
        subtitle='Encontre o seu Duo e bora jogar...'
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleDiscordSignIn}
      >
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Entrar com Discord</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </Background>
  )
}