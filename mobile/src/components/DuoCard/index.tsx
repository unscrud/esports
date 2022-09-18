import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

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
      <DuoInfo
        label='Nome'
        value={data.name}
      />

      <DuoInfo
        label='Tempo de jogo'
        value={`${data.yearsPlayng} ano(s)`}
      />

      <DuoInfo
        label='Disponibilidade'
        value='CAAAALLLLMMAAAA!!!!'
      />
      <DuoInfo
        label='Chamada de áudio?'
        value={data.useVoiceChannel?'Sim':'Não'}
      />
    </View>
  );
}