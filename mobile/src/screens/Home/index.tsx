import { View, Image, FlatList } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { GAMES } from '../../utils/games';
import { useEffect } from 'react';

export function Home() {
useEffect(() => {
  fetch('http://192.168.1.22:3333/games')
    .then(response => response.json())
    .then(data => console.log(data))
}, [])

  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <Heading 
        title='Encontre seu Duo!'
        subtitle='Selecione o game que deseja jogar...'
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard data={item} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  )
}