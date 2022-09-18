import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useRoute, useNavigation } from "@react-navigation/native";
import { GameParams } from '../../@types/navigation';
import { Image, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';
import { useState, useEffect } from "react";

export function Game() {
  const route = useRoute()
  const game = route.params as GameParams
  
  const navigation = useNavigation()
  function handleGoBack(){
    navigation.goBack()
  }

  const [duos, setDuos] = useState([]);
  useEffect(() => {
    fetch(`http://192.168.1.22:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => {console.log(data)})
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo 
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
            
          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image
          source={{uri: game.bannerUrl}}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading
          title= {game.title}
          subtitle='Conecte-se e comece a jogar!'
        />

        <DuoCard />
      </SafeAreaView>
    </Background>
  );
}