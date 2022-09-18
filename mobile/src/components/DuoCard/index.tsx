import { View } from 'react-native';

import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlayng: number;
}

export function DuoCard() {
  return (
    <View style={styles.container}>

    </View>
  );
}