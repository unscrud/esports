import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useRoute } from "@react-navigation/native";
import { GameParams } from '../../@types/navigation';
import { Image, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { THEME } from '../../theme';
import { logoImg } from "../../assets/logo-nlw-esports.png";

export function Game() {
  const route = useRoute()
  const game = route.params as GameParams

  return (
    <Background>
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
    </Background>
  );
}