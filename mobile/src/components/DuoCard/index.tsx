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

interface Props {
  data: DuoCardProps;
}

export function DuoCard({data}: Props) {
  return (
    <View style={styles.container}>

    </View>
  );
}